// Generated by CoffeeScript 1.12.7
(function() {
  var time;

  window.loading = setInterval(function() {
    if (Tone.context.state === "suspended") {
      Tone.context.resume();
    }
    if (Tone.context.state === "running") {
      return clearInterval(window.loading);
    }
  }, 1000 / 60);

  window.nodes = [];

  window.lastId = 0;

  window.mousePos = {
    x: 0,
    y: 0
  };

  window.bpm = 120;

  window.Save = function() {
    var nodesCopy;
    nodesCopy = JSON.parse(JSON.stringify(window.nodes));
    return nodesCopy.forEach(function(node) {
      return node.dom = null;
    });
  };

  time = 0;

  window.update = setInterval(function() {
    window.nodes.forEach(function(node) {
      if (node !== null) {
        return node.update(time);
      }
    });
    return time += 1;
  }, 1000 / 60);

}).call(this);
