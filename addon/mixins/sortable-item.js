import Ember from 'ember';
import computed from 'ember-new-computed';
const { Mixin, $, run } = Ember;
const { Promise } = Ember.RSVP;
const DROP_TARGET_NONE = "none";

export default Mixin.create({
  classNames: ['sortable-item'],
  attributeBindings: ['draggable'],

  draggable : true,
  group: null,
  model: null,
  handle: null,

  mouseDown(event)
  {
    // If we are using a drag handle, then ignore drag if not initiated by the handle
    let handle = this.get('handle');

    if (handle && !$(event.target).closest(handle).length)
    {
      event.preventDefault();
    }
  },

  dragStart(event)
  {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData("text/html", event.currentTarget); // Required for this to work properly in Firefox

    this._tellGroup("sortingStart",this);

    // Delay here so that clone of drag item is made before we hide the original item
    let _this = this;
    Ember.run.next(function()
    {
      _this.element.style.display = "none";
    });
  },

  dragOver(event)
  {
    event.preventDefault();

    let height          = event.target.offsetHeight / 2;
    let containerOffset = this.$().offset();
    let cursorPosition  = event.originalEvent.pageY - containerOffset.top;
    let position        = cursorPosition < height ? "above" : "below";

    this._tellGroup("sortingOver",this,position);
  },

  dragEnd(event)
  {
    this.element.style.display = ""; // Remove the display:none

    if(event.dataTransfer.effectAllowed === "none") // We aborted the drag by leaving the sort list
    {
      this._tellGroup("sortingAborted",this);
    }
    else
    {
      this._tellGroup("sortingEnd",this);
    }
  },

  drop(event)
  {
    event.preventDefault();

    // We ony want to handle drop for inserting new items. dragEnd will cope with moves
    if(event.dataTransfer.effectAllowed === "copy")
    {
      this._tellGroup("insertItem",event);
    }
  },

  _tellGroup(method, ...args) {
    let group = this.get('group');

    if (group) {
      group[method](...args);
    }
  },

});