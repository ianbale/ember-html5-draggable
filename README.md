# Ember-html5-draggable

Sortable / Drggable UI primitives for Ember using HTML5 dragging.

[Check out the demo](http://www.bale.net/ember-html5-draggable/)

## Requirements


## Installation

```sh
$ ember install ember-html5-draggable
```

## Usage

## Developing

### Setup

```sh
$ git clone git@github.com:ianbale/ember-html5-draggable
$ cd ember-html5-draggable
$ ember install
```

### Dev Server

```sh
$ ember server
```


###To Do

1. When dragging new items to the list, if you drag out of the list, the drop-target remains in place so it looks like it'll still insert when it doesn't. I need to remove the drop-target in this situation.

2. Positioning of the drop-target above/below an item depending upon where in the item you are (top half = drop target above, bottom half = drop-traget below) works fine in this demo, but in a real world app, the dividing line is not in the right place. It looks like I might be checking the height of the dropped item rather than teh height of the item being dragged over,

3. If your list is longer than the view port, then the built-in auto-scroll in Chrome will allow you to drag further up/down the list. This is not suported in IE (Although I believe it is supposed to be!?), Firefox or Safari (Not sure about Opera). I need to implement a similar function for these browsers.

4. Check if this work for horizontal sorting and sorting inside a table.