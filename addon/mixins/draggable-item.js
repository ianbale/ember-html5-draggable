import Ember from 'ember';
import computed from 'ember-new-computed';
const { Mixin, $, run } = Ember;
const { Promise } = Ember.RSVP;

export default Mixin.create({
  classNames: ['draggable-item'],
  attributeBindings: ['draggable'],
  draggable : true,
  handle : null,
  mouseDownEventTarget: null,
  // Setup our data transfer object
  // We send a model defining the item we wish to insert
  // And we set effectAllowed to copy to indicate an insert rather than a move

  mouseDown(event)
  {
    this.set("mouseDownEventTarget",event.target);
  },

  dragStart(event)
  {
    // If we are using a drag handle, then ignore drag if not initiated by the handle
    let handle = this.get('handle');

    if (handle && !$(this.mouseDownEventTarget).closest(handle).length)
    {
      event.preventDefault();
      return;
    }

    event.dataTransfer.setData('text', JSON.stringify(this.model));
    event.dataTransfer.effectAllowed = "copy";
  },

  // Cleanup if we ended up aborting the insert
  dragEnd (event)
  {
    $(".drop-target").remove();
  },

});