import Ember from 'ember';
import computed from 'ember-new-computed';
const { Mixin, $, run } = Ember;
const { Promise } = Ember.RSVP;

export default Mixin.create({
  classNames: ['draggable-item'],
  attributeBindings: ['draggable'],
  draggable : true,
  handle : null,

  // Setup our data transfer object
  // We send a model defining the item we wish to insert
  // And we set effectAllowed to copy to indicate an insert rather than a move

  mouseDown (event)
  {
    // If we are using a drag handle, then ignore drag if not initiated by the handle
    let handle = this.get('handle');

    if (handle && !$(event.target).closest(handle).length)
    {
      event.preventDefault();
    }
  },

  dragStart (event)
  {
    event.dataTransfer.setData('model', JSON.stringify(this.model));
    event.dataTransfer.effectAllowed = "copy";
  },

  // Cleanup if we ended up aborting the insert
  dragEnd (event)
  {
    $(".drop-target").remove();
  },

});