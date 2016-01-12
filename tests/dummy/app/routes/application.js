import Ember from 'ember';
const a = Ember.A;

export default Ember.Route.extend({
  model() {
    return {
      items: a([
          {label:'A - Alpha',sorting:false}, {label:'B - Beta',sorting:false}, {label:'C - Charlie',sorting:false}, {label:'D - Delta',sorting:false}, {label:'E - Echo',sorting:false},
          {label:'F - Foxtrot',sorting:false}, {label:'G - Golf',sorting:false}, {label:'H - Hotel',sorting:false}, {label:'I - India',sorting:false}, {label:'J - Juliet',sorting:false},
          {label:'K - Kilo',sorting:false}, {label:'L - Lima',sorting:false}, {label:'M - Mike',sorting:false}, {label:'N - November',sorting:false}, {label:'O - Oscar',sorting:false},
          {label:'P - Papa',sorting:false}, {label:'Q - Quebec',sorting:false}, {label:'R - Romeo',sorting:false}, {label:'S - Sierra',sorting:false}, {label:'T - Tango',sorting:false},
          {label:'U - Uniform',sorting:false}, {label:'V - Victor',sorting:false}, {label:'W - Whiskey',sorting:false}, {label:'X - X-Ray',sorting:false}, {label:'Y - Yankee',sorting:false},
          {label:'Z - Zulu',sorting:false}
          ]),

      picklist : a([{id:1,counter:1,label:'blue'},{id:2,counter:1,label:'green'},{id:3,counter:1,label:'red'}]),

    };
  },
 
  actions: {
    update(newOrder, draggedModel)
    {
      this.set('currentModel.items', a(newOrder));
    },

    insert (insertPos, draggedModel)
    {
      let items           = this.get("currentModel.items");
      let picklist        = this.get("currentModel.picklist");
      let picklistItem    = picklist.findBy('id', draggedModel.id);
      let dropTargetLabel = insertPos < items.length ? "before" + items[insertPos].label : "after " + items[items.length-1].label;

      items.insertAt(insertPos, {label:picklistItem.label + ' ' + picklistItem.counter,sorting:false, inserted:true});

      this.set('currentModel.dragged', picklistItem.label);

      Ember.set(picklistItem,"counter",picklistItem.counter+1);
 
      this.set("currentModel.dragItem",draggedModel.label);
      this.set("currentModel.dropTarget",dropTargetLabel);
    },

    sortstart (item)
    {
      this.set("currentModel.dragItem",item.model.label);
      Ember.set(item.model,"sorting",true);
    },

    sortend (item,dropTarget)
    {
      Ember.set(item.model,"sorting",false);
      Ember.set(item.model,"dragged",true);

      if (dropTarget)
      {
        this.set("currentModel.dropTarget",dropTarget.model.label);
      }
      else
      {
        // sort was aborted...
        this.set("currentModel.dropTarget","aborted!");        
      }
    }
  }

});