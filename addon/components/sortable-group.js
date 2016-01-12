import Ember from 'ember';
import layout from '../templates/components/sortable-group';
const { Component, get, set, run } = Ember;

export default Component.extend({
  layout: layout,

  dropTarget :null,

  init()
  {
    this._super();
    
    this._droptarget = document.createElement("div");
    this._droptarget.className = "drop-target";
  },

  // dragEnter / dragOver must be overridden in order to get the drop event fired when dropping on the drop target (require for insert item)
  dragEnter(event)
  {
    event.preventDefault();
  },

  dragOver(event)
  {
    event.preventDefault();
  },

  // sortingXXXX are initiated bu sortable-item
  sortingStart(item)
  {
    this.sendAction('onSortStart', item);
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

    this.sendAction('onChange', model, item);
    this.sendAction('onSortEnd', item, dropTarget);
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
      var draggedModel  = JSON.parse(event.dataTransfer.getData("model"));
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
