import Ember from 'ember';
import layout from '../templates/components/sortable-group';
import computed from 'ember-new-computed';
const { Component, get, set, run } = Ember;

export default Component.extend({
  layout: layout,
  classNames: ['draggable-group'],
  dropTarget :null,
  scrollRegionSize : 60,
  direction : 'y',
  scrollContainer : null,
  scrollIntervalTimer : null,
  scrollAmount : 0,
  scrolling : false,

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
        return -15;
      }
      else if (mouseX > coords.l && mouseX < coords.l + (scrollRegionSize * 2/3))
      {
        return -10;
      }
      else if (mouseX > coords.l && mouseX < coords.l + scrollRegionSize)
      {
        return -5;
      }
      else if (mouseX > coords.r - (scrollRegionSize/3) && mouseX < coords.r)
      {
        return 15;
      }
      else if (mouseX > coords.r - (scrollRegionSize * 2/3) && mouseX < coords.r)
      {
        return 10;
      }
      else if (mouseX > coords.r - scrollRegionSize && mouseX < coords.r)
      {
        return 5;
      }
      else
      {
        return 0;
      }
    }

    if (this.direction === 'y')
    {      
      let mouseY = event.originalEvent.pageY;

      if (mouseY > coords.t && mouseY < coords.t + (scrollRegionSize/3))
      {
        return -15;
      }
      else if (mouseY > coords.t && mouseY < coords.t + (scrollRegionSize * 2/3))
      {
        return -10;
      }
      else if (mouseY > coords.t && mouseY < coords.t + scrollRegionSize)
      {
        return -5;
      }
      else if (mouseY > coords.b - (scrollRegionSize/3) && mouseY < coords.b)
      {
        return 15;
      }
      else if (mouseY > coords.b - (scrollRegionSize * 2/3) && mouseY < coords.b)
      {
        return 10;
      }
      else if (mouseY > coords.b - scrollRegionSize && mouseY < coords.b)
      {
        return 5;
      }
      else
      {
        return 0;
      }
    }
  },

  scrollViewport()
  {
  if (!this.scrolling)
  {
    this.set("scrolling",true);
    
      let distance = this.get("scrollAmount");

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
    
    this.set("scrolling",false);
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
    this.scrollHandler(event);
  },

  scrollHandler(event)
  {
    let newScrollAmount = this.checkifScrollNeeded(event);

    if (event.dataTransfer.effectAllowed === "move")
    {
      if (newScrollAmount)
      {
        if (newScrollAmount !== this.get("scrollAmount"))
        {
          this.set("scrollAmount",newScrollAmount);

          let intervalInstance = this.get("scrollIntervalTimer");
          if (!intervalInstance)
          {
            this.set("scrollIntervalTimer",setInterval(this.scrollViewport.bind(this),10)); 
          }
        }
      }
      else
      {
        // Don't initiate a setInterval for "copy" since we cannot detect drag end...
        this.stopScrollHandler();
      }
    }
    else
    {
      this.set("scrollAmount",newScrollAmount);
      this.scrollViewport();
    }
  },

  stopScrollHandler()
  {
    let intervalInstance = this.get("scrollIntervalTimer");

    if (intervalInstance)
    {
      clearInterval(intervalInstance);
      this.set("scrollIntervalTimer",null);
    }
  },

  // sortingXXXX functions are initiated bu sortable-item
  sortingStart(item,defer)
  {
    this.sendAction('onSortStart', item.model, defer);      
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

    if (this.validDropTargets[item.model.uniqueid][position])
    {
      $(this._droptarget).removeClass("disabled");
    }
    else
    {
      $(this._droptarget).addClass("disabled");
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
    let model       = this.get("model");
    let dropTarget  = this.get("dropTarget");
    let startPos    = model.indexOf(item.model);
    let dropPos     = model.indexOf(dropTarget.model);

    this.stopScrollHandler();

    if (dropPos > startPos)
    {
      dropPos --;
    }

    if (this._dropTargetPlacement === "below")
    {
      dropPos++;
    }

    try
    {
      this.element.removeChild(this._droptarget);   

    if (this.validDropTargets[dropTarget.model.uniqueid][this._dropTargetPlacement])
    {
          model.removeObject(item.model);
          model.insertAt(dropPos,item.model);

      this.sendAction('onChange', model, item.model);
      }
  }
    catch (e)
    {} // Ignore. Occurs if we started a drag, but never moved in a direction which generated our first drop-target

    this.sendAction('onSortEnd', item.model, dropTarget.model);       
  },

  sortingAborted(item)
  {
    this.element.removeChild(this._droptarget);
    this.stopScrollHandler();
    this.sendAction('onSortEnd', item.model);
  },


  // Used for inserting new items into the list
  insertItem(event)
  {
    this.stopScrollHandler();
    
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
