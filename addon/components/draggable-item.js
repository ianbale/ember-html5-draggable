import Ember from 'ember';
import layout from '../templates/components/draggable-item';
import DraggableItemMixin from '../mixins/draggable-item';

export default Ember.Component.extend(DraggableItemMixin, {layout});