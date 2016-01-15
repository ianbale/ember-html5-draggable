"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember-resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/draggable-item', ['exports', 'ember-html5-draggable/components/draggable-item'], function (exports, _emberHtml5DraggableComponentsDraggableItem) {
  exports['default'] = _emberHtml5DraggableComponentsDraggableItem['default'];
});
define('dummy/components/sortable-group', ['exports', 'ember-html5-draggable/components/sortable-group'], function (exports, _emberHtml5DraggableComponentsSortableGroup) {
  exports['default'] = _emberHtml5DraggableComponentsSortableGroup['default'];
});
define('dummy/components/sortable-item', ['exports', 'ember-html5-draggable/components/sortable-item'], function (exports, _emberHtml5DraggableComponentsSortableItem) {
  exports['default'] = _emberHtml5DraggableComponentsSortableItem['default'];
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/ember-html5-draggable/tests/modules/ember-html5-draggable/components/draggable-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-html5-draggable/components');
  QUnit.test('modules/ember-html5-draggable/components/draggable-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-html5-draggable/components/draggable-item.js should pass jshint.\nmodules/ember-html5-draggable/components/draggable-item.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/draggable-item.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/draggable-item.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/draggable-item.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/draggable-item.js: line 5, col 60, \'object short notation\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('dummy/ember-html5-draggable/tests/modules/ember-html5-draggable/components/sortable-group.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-html5-draggable/components');
  QUnit.test('modules/ember-html5-draggable/components/sortable-group.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-html5-draggable/components/sortable-group.js should pass jshint.\nmodules/ember-html5-draggable/components/sortable-group.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-group.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-group.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 3, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-group.js: line 13, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 21, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 25, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 26, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 27, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 28, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 37, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 39, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 40, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 44, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 74, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 103, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 107, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 113, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 120, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 125, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 132, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 137, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 154, col 7, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 167, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 171, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 172, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 174, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 175, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 194, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 202, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 215, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 216, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 217, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/components/sortable-group.js: line 224, col 42, \'draggedModel\' used out of scope.\n\n35 errors');
  });
});
define('dummy/ember-html5-draggable/tests/modules/ember-html5-draggable/components/sortable-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-html5-draggable/components');
  QUnit.test('modules/ember-html5-draggable/components/sortable-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-html5-draggable/components/sortable-item.js should pass jshint.\nmodules/ember-html5-draggable/components/sortable-item.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-item.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-item.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-item.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/components/sortable-item.js: line 6, col 3, \'object short notation\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('dummy/ember-html5-draggable/tests/modules/ember-html5-draggable/mixins/draggable-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-html5-draggable/mixins');
  QUnit.test('modules/ember-html5-draggable/mixins/draggable-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-html5-draggable/mixins/draggable-item.js should pass jshint.\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 3, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 4, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 16, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 19, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 27, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/draggable-item.js: line 34, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n11 errors');
  });
});
define('dummy/ember-html5-draggable/tests/modules/ember-html5-draggable/mixins/sortable-item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-html5-draggable/mixins');
  QUnit.test('modules/ember-html5-draggable/mixins/sortable-item.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-html5-draggable/mixins/sortable-item.js should pass jshint.\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 3, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 4, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 5, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 7, col 1, \'export\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 17, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 22, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 25, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 44, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 51, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 55, col 65, Missing semicolon.\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 57, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 58, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 59, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 60, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 65, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 79, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 90, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 90, col 22, \'spread/rest operator\' is only available in ES6 (use esnext option).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 91, col 5, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodules/ember-html5-draggable/mixins/sortable-item.js: line 94, col 21, \'spread/rest operator\' is only available in ES6 (use esnext option).\n\n24 errors');
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('dummy/routes/application', ['exports', 'ember'], function (exports, _ember) {
  var a = _ember['default'].A;

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return {
        items: a([{ label: 'A - Alpha', sorting: false }, { label: 'B - Beta', sorting: false }, { label: 'C - Charlie', sorting: false }, { label: 'D - Delta', sorting: false }, { label: 'E - Echo', sorting: false }, { label: 'F - Foxtrot', sorting: false }, { label: 'G - Golf', sorting: false }, { label: 'H - Hotel', sorting: false }, { label: 'I - India', sorting: false }, { label: 'J - Juliet', sorting: false }, { label: 'K - Kilo', sorting: false }, { label: 'L - Lima', sorting: false }, { label: 'M - Mike', sorting: false }, { label: 'N - November', sorting: false }, { label: 'O - Oscar', sorting: false }, { label: 'P - Papa', sorting: false }, { label: 'Q - Quebec', sorting: false }, { label: 'R - Romeo', sorting: false }, { label: 'S - Sierra', sorting: false }, { label: 'T - Tango', sorting: false }, { label: 'U - Uniform', sorting: false }, { label: 'V - Victor', sorting: false }, { label: 'W - Whiskey', sorting: false }, { label: 'X - X-Ray', sorting: false }, { label: 'Y - Yankee', sorting: false }, { label: 'Z - Zulu', sorting: false }]),

        picklist: a([{ id: 1, counter: 1, label: 'blue' }, { id: 2, counter: 1, label: 'green' }, { id: 3, counter: 1, label: 'red' }])

      };
    },

    actions: {
      update: function update(newOrder, draggedModel) {
        this.set('currentModel.items', a(newOrder));
      },

      insert: function insert(insertPos, draggedModel) {
        var items = this.get("currentModel.items");
        var picklist = this.get("currentModel.picklist");
        var picklistItem = picklist.findBy('id', draggedModel.id);
        var dropTargetLabel = insertPos < items.length ? "before" + items[insertPos].label : "after " + items[items.length - 1].label;

        items.insertAt(insertPos, { label: picklistItem.label + ' ' + picklistItem.counter, sorting: false, inserted: true });

        this.set('currentModel.dragged', picklistItem.label);

        _ember['default'].set(picklistItem, "counter", picklistItem.counter + 1);

        this.set("currentModel.dragItem", draggedModel.label);
        this.set("currentModel.dropTarget", dropTargetLabel);
      },

      sortstart: function sortstart(item) {
        this.set("currentModel.dragItem", item.label);
        _ember['default'].set(item, "sorting", true);
      },

      sortend: function sortend(item, dropTarget) {
        _ember['default'].set(item, "sorting", false);
        _ember['default'].set(item, "dragged", true);

        if (dropTarget) {
          this.set("currentModel.dropTarget", dropTarget.label);
        } else {
          // sort was aborted...
          this.set("currentModel.dropTarget", "aborted!");
        }
      }
    }

  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 12
              },
              "end": {
                "line": 17,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "draghandle2");
            var el2 = dom.createTextNode("⇕");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createUnsafeMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["content", "item.label", ["loc", [null, [16, 14], [16, 30]]]], ["content", "item.counter", ["loc", [null, [16, 31], [16, 47]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 10
            },
            "end": {
              "line": 18,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "draggable-item", [], ["tagname", "div", "model", ["subexpr", "@mut", [["get", "item", ["loc", [null, [15, 50], [15, 54]]]]], [], []], "handle", ".draghandle2"], 0, null, ["loc", [null, [15, 12], [17, 31]]]]],
        locals: ["item"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 36,
                    "column": 15
                  },
                  "end": {
                    "line": 38,
                    "column": 15
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  : you're dragging me!\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 40,
                    "column": 15
                  },
                  "end": {
                    "line": 42,
                    "column": 15
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  : you've dragged me before\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 44,
                    "column": 15
                  },
                  "end": {
                    "line": 46,
                    "column": 15
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                  : you inserted me\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 32,
                  "column": 14
                },
                "end": {
                  "line": 50,
                  "column": 14
                }
              },
              "moduleName": "dummy/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                           \n               ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n               ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "draghandle");
              var el2 = dom.createTextNode("⇕");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(4);
              morphs[0] = dom.createUnsafeMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
              return morphs;
            },
            statements: [["content", "item.label", ["loc", [null, [34, 15], [34, 31]]]], ["block", "if", [["get", "item.sorting", ["loc", [null, [36, 21], [36, 33]]]]], [], 0, null, ["loc", [null, [36, 15], [38, 22]]]], ["block", "if", [["get", "item.dragged", ["loc", [null, [40, 21], [40, 33]]]]], [], 1, null, ["loc", [null, [40, 15], [42, 22]]]], ["block", "if", [["get", "item.inserted", ["loc", [null, [44, 21], [44, 34]]]]], [], 2, null, ["loc", [null, [44, 15], [46, 22]]]]],
            locals: [],
            templates: [child0, child1, child2]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 12
              },
              "end": {
                "line": 51,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "sortable-item", [], ["tagName", "div", "model", ["subexpr", "@mut", [["get", "item", ["loc", [null, [32, 51], [32, 55]]]]], [], []], "group", ["subexpr", "@mut", [["get", "group", ["loc", [null, [32, 62], [32, 67]]]]], [], []], "handle", ".draghandle"], 0, null, ["loc", [null, [32, 14], [50, 32]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 10
            },
            "end": {
              "line": 52,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.items", ["loc", [null, [31, 20], [31, 31]]]]], [], 0, null, ["loc", [null, [31, 12], [51, 21]]]]],
        locals: ["group"],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 66,
                  "column": 10
                },
                "end": {
                  "line": 68,
                  "column": 10
                }
              },
              "moduleName": "dummy/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "item.label", ["loc", [null, [67, 12], [67, 26]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 65,
                "column": 8
              },
              "end": {
                "line": 69,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "sortable-item", [], ["tagName", "li", "model", ["subexpr", "@mut", [["get", "item", ["loc", [null, [66, 46], [66, 50]]]]], [], []], "group", ["subexpr", "@mut", [["get", "group", ["loc", [null, [66, 57], [66, 62]]]]], [], []]], 0, null, ["loc", [null, [66, 10], [68, 28]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 64,
              "column": 6
            },
            "end": {
              "line": 70,
              "column": 6
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.items", ["loc", [null, [65, 16], [65, 27]]]]], [], 0, null, ["loc", [null, [65, 8], [69, 17]]]]],
        locals: ["group"],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 90,
                    "column": 17
                  },
                  "end": {
                    "line": 90,
                    "column": 40
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("YES");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 90,
                    "column": 40
                  },
                  "end": {
                    "line": 90,
                    "column": 50
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("no");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 91,
                    "column": 17
                  },
                  "end": {
                    "line": 91,
                    "column": 40
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("YES");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child3 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 91,
                    "column": 40
                  },
                  "end": {
                    "line": 91,
                    "column": 50
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("no");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child4 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 92,
                    "column": 17
                  },
                  "end": {
                    "line": 92,
                    "column": 41
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("YES");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child5 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 92,
                    "column": 41
                  },
                  "end": {
                    "line": 92,
                    "column": 51
                  }
                },
                "moduleName": "dummy/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("no");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 86,
                  "column": 12
                },
                "end": {
                  "line": 96,
                  "column": 12
                }
              },
              "moduleName": "dummy/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                         \n             ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n             ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n             ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n             ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n             ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              dom.setAttribute(el1, "class", "draghandle");
              var el2 = dom.createTextNode("⇕");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
              morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 0, 0);
              morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7]), 0, 0);
              return morphs;
            },
            statements: [["content", "item.label", ["loc", [null, [88, 17], [88, 31]]]], ["block", "if", [["get", "item.sorting", ["loc", [null, [90, 23], [90, 35]]]]], [], 0, 1, ["loc", [null, [90, 17], [90, 57]]]], ["block", "if", [["get", "item.dragged", ["loc", [null, [91, 23], [91, 35]]]]], [], 2, 3, ["loc", [null, [91, 17], [91, 57]]]], ["block", "if", [["get", "item.inserted", ["loc", [null, [92, 23], [92, 36]]]]], [], 4, 5, ["loc", [null, [92, 17], [92, 58]]]]],
            locals: [],
            templates: [child0, child1, child2, child3, child4, child5]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 85,
                "column": 10
              },
              "end": {
                "line": 97,
                "column": 10
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "sortable-item", [], ["tagName", "tr", "model", ["subexpr", "@mut", [["get", "item", ["loc", [null, [86, 48], [86, 52]]]]], [], []], "group", ["subexpr", "@mut", [["get", "group", ["loc", [null, [86, 59], [86, 64]]]]], [], []], "handle", ".draghandle"], 0, null, ["loc", [null, [86, 12], [96, 30]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 84,
              "column": 8
            },
            "end": {
              "line": 98,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.items", ["loc", [null, [85, 18], [85, 29]]]]], [], 0, null, ["loc", [null, [85, 10], [97, 19]]]]],
        locals: ["group"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 111,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        dom.setAttribute(el1, "class", "demo");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Ember HTML5 Draggable List");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("main");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        dom.setAttribute(el5, "valign", "top");
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Add these to the list on the right by dragging");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      \n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        var el6 = dom.createTextNode("   ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("td");
        dom.setAttribute(el5, "valign", "top");
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Sort these by dragging (scrollable)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "scrolling-container");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n\n    Dragging : ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Drop target : ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "horizontal-demo");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("Label");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("Dragging");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("Dragged");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("Inserted");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "https://github.com/ianbale/ember-html5-draggable");
        var el5 = dom.createTextNode("View on GitHub");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [5, 3]), 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 6, 6);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [8]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [10]), 3, 3);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.picklist", ["loc", [null, [14, 18], [14, 32]]]]], [], 0, null, ["loc", [null, [14, 10], [18, 19]]]], ["block", "sortable-group", [], ["tagName", "div", "model", ["subexpr", "@mut", [["get", "model.items", ["loc", [null, [30, 48], [30, 59]]]]], [], []], "onChange", "update", "onInsert", "insert", "onSortStart", "sortstart", "onSortEnd", "sortend"], 1, null, ["loc", [null, [30, 10], [52, 29]]]], ["content", "model.dragItem", ["loc", [null, [60, 15], [60, 33]]]], ["content", "model.dropTarget", ["loc", [null, [61, 18], [61, 38]]]], ["block", "sortable-group", [], ["tagName", "ol", "model", ["subexpr", "@mut", [["get", "model.items", ["loc", [null, [64, 43], [64, 54]]]]], [], []], "onChange", "update", "onInsert", "insert", "onSortStart", "sortstart", "onSortEnd", "sortend"], 2, null, ["loc", [null, [64, 6], [70, 25]]]], ["block", "sortable-group", [], ["tagName", "tbody", "model", ["subexpr", "@mut", [["get", "model.items", ["loc", [null, [84, 48], [84, 59]]]]], [], []], "onChange", "update", "onInsert", "insert", "onSortStart", "sortstart", "onSortEnd", "sortend"], 3, null, ["loc", [null, [84, 8], [98, 27]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-html5-draggable","version":"1.0.1+fc0771c1"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map