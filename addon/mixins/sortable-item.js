import Ember from 'ember';
import computed from 'ember-new-computed';
const { Mixin, $, run } = Ember;
const { Promise } = Ember.RSVP;
const DROP_TARGET_NONE = "none";

export default Mixin.create({
  classNames: ['sortable-item'],
  group: null,
  model: null,
  handle: null,

  mouseDown(event)
  {
  let handle = this.get('handle');
  
  if(!handle || $(event.target).closest(handle).length)
  {
    $('.sortable-item').attr('draggable', true);
  }
  else
  {
    $('.sortable-item').attr('draggable', false);
  }   
  },

  dragStart(event)
  {
    var defer = Ember.RSVP.defer();

    let _this = this;

    if(navigator.appName === "Netscape")
    {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData("text", ""); // Required for this to work properly in Firefox
    }
    else
    {
      defer.promise.then(function()
      {
        if(navigator.appVersion.indexOf("MSIE ") !== -1)
        {
          _this.element.style.display = "none";
        }

        event.dataTransfer.effectAllowed = 'move';

        // Delay here so that clone of drag item is made before we hide the original item
      }); 
    }

    Ember.run.next(function()
    {
      _this.element.style.display = "none";
    });

    this._tellGroup("sortingStart",this,defer);
  },

  dragOver(event)
  {
    event.preventDefault();

    run.throttle(this, function()
    {
      let height          = $(event.target).closest('.sortable-item').height() / 2;
      let containerOffset = this.$().offset();
      let cursorPosition  = event.originalEvent.pageY - containerOffset.top;
      let position        = cursorPosition < height ? "above" : "below";

      this._tellGroup("sortingOver",this,position);
    }, 125);

  },

  dragEnd(event)
  {
    this.element.style.display = "";  // Remove the display:none

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
    event.stopPropagation();

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