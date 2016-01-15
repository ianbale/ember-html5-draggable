import Ember from 'ember';
import layout from '../templates/components/sortable-group';
import computed from 'ember-new-computed';
const { Component, get, set, run } = Ember;

export default Component.extend({
  layout: layout,
  classNames: ['draggable-group'],
  dropTarget :null,
  updateInterval : 1,
  scrollRegionSize : 60,
  direction : 'y',
  scrollContainer : null,

  init()
  {
    this._super();
    
    this._droptarget = document.createElement("div");
    this._droptarget.className = "drop-target";

    Ember.run.scheduleOnce('afterRender',this,function()
    {
      this.set("scrollElement",this.scrollContainer ? this.scrollContainer : $(this.element).parent());
    });
  },

  getContainerCoords()
  {
    if (!this._container_coords)
    {
      let top     = $(this.scrollElement).offset().top;
      let bottom  = $(this.scrollElement).height() + top;
      let left    = $(this.scrollElement).offset().left;
      let right   = $(this.scrollElement).width() + left;

      this.set("_container_coords",{t:top,b:bottom,l:left,r:right});
    }

    return this._container_coords;
  },

  // Three speed scrolling!
  checkifScrollNeeded(event)
  {
    let coords = this.getContainerCoords();
    let scrollRegionSize = this.scrollRegionSize;

    if (this.direction === 'x')
    {
      let mouseX = event.originalEvent.pageX;
      
      if (mouseX > coords.t && mouseX < coords.t + (scrollRegionSize/3))
      {
        this.scrollViewport(-15);
      }
      else if (mouseX > coords.l && mouseX < coords.l + (scrollRegionSize * 2/3))
      {
        this.scrollViewport(-10);
      }
      else if (mouseX > coords.l && mouseX < coords.l + scrollRegionSize)
      {
        this.scrollViewport(-5);
      }
      else if (mouseX > coords.r - (scrollRegionSize/3) && mouseX < coords.r)
      {
        this.scrollViewport(15);
      }
      else if (mouseX > coords.r - (scrollRegionSize * 2/3) && mouseX < coords.r)
      {
        this.scrollViewport(10);
      }
      else if (mouseX > coords.r - scrollRegionSize && mouseX < coords.r)
      {
        this.scrollViewport(5);
      }
    }

    if (this.direction === 'y')
    {
      let mouseY = event.originalEvent.pageY;
      
      if (mouseY > coords.t && mouseY < coords.t + (scrollRegionSize/3))
      {
        this.scrollViewport(-15);
      }
      else if (mouseY > coords.t && mouseY < coords.t + (scrollRegionSize * 2/3))
      {
        this.scrollViewport(-10);
      }
      else if (mouseY > coords.t && mouseY < coords.t + scrollRegionSize)
      {
        this.scrollViewport(-5);
      }
      else if (mouseY > coords.b - (scrollRegionSize/3) && mouseY < coords.b)
      {
        this.scrollViewport(15);
      }
      else if (mouseY > coords.b - (scrollRegionSize * 2/3) && mouseY < coords.b)
      {
        this.scrollViewport(10);
      }
      else if (mouseY > coords.b - scrollRegionSize && mouseY < coords.b)
      {
        this.scrollViewport(5);
      }
    }
  },

  scrollViewport(distance)
  {
    if (this.direction === 'x')
    {  
      let newScrollPos = $(this.scrollElement).scrollLeft() + distance;
      $(this.scrollElement).scrollLeft(newScrollPos);    
    }

    if (this.direction === 'y')
    {      
      let newScrollPos = $(this.scrollElement).scrollTop() + distance;      
      $(this.scrollElement).scrollTop(newScrollPos);
    }

  },

  // dragEnter / dragOver must be overridden in order to get the drop event fired when dropping on the drop target (require for insert item)
  dragEnter(event)
  {
    event.preventDefault();
  },

  dragOver(event)
  {
    event.preventDefault();
    run.throttle(this, 'checkifScrollNeeded', event, this.updateInterval);
  },

  // sortingXXXX functions are initiated bu sortable-item
  sortingStart(item)
  {
    this.sendAction('onSortStart', item.model);
  },

  sortingOver(item,position)
  {
    if (this.dropTarget !== item || this._dropTargetPlacement !== position)
    {
      this.set("dropTarget",item);
      this.set("_dropTargetPlacement",position);

      if(position === "below") {
        this.element.insertBefore(this._droptarget, item.element.nextElementSibling);
      }
      
      if(position === "above") {
        this.element.insertBefore(this._droptarget, item.element);
      }

      // Re-add our drop event handler. Not sure why, but it gets removed as a result of processing an insert...
      // Easier / quicker to just remove and add than to check if it already exists...
      let _this = this;
      $(this._droptarget).unbind('drop');
      $(this._droptarget).one('drop',function(event)  
      {
        if (event.dataTransfer.effectAllowed === "copy")
        {
          _this.insertItem(event);
        }
      }); 

    }
  },

  sortingEnd(item)
  {
    this.element.removeChild(this._droptarget);

    let model       = this.get("model");
    let dropTarget  = this.get("dropTarget");

    let startPos    = model.indexOf(item.model);
    let dropPos     = model.indexOf(dropTarget.model);

    if (dropPos > startPos)
    {
      dropPos --;
    }

    if (this._dropTargetPlacement === "below")
    {
      dropPos++;
    }

    model.removeObject(item.model);
    model.insertAt(dropPos,item.model);

    this.sendAction('onChange', model, item.model);
    this.sendAction('onSortEnd', item.model, dropTarget.model);
  },

  sortingAborted(item)
  {
    this.element.removeChild(this._droptarget);
    this.sendAction('onSortEnd', item.model);
  },


  // Used for inserting new items into the list
  insertItem(event)
  {
    this.element.removeChild(this._droptarget);

    try
    {
      var draggedModel  = JSON.parse(event.dataTransfer.getData("text"));
    }
    catch(e)
    {
      return; // Not a valid item to drop on the list...
    }

    let model       = this.get("model");
    let dropTarget  = this.get("dropTarget");
    let dropPos     = model.indexOf(dropTarget.model);

    if (this._dropTargetPlacement === "below")
    {
      dropPos++;
    }

    this.sendAction('onInsert', dropPos, draggedModel);
  },

});
