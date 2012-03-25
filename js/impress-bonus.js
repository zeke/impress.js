(function() {

  window.Step = (function() {

    function Step(id, properties) {
      var key, value, _ref;
      this.id = id;
      this.properties = properties != null ? properties : {};
      _ref = this.properties;
      for (key in _ref) {
        value = _ref[key];
        if (key === 'rotateX') key = 'rotate-x';
        if (key === 'rotateY') key = 'rotate-y';
        if (key === 'rotateZ') key = 'rotate-z';
        if (key === 'transitionDuration') key = 'transition-duration';
        $("#" + this.id).data(key, value);
      }
    }

    return Step;

  })();

  window.Impress = (function() {

    function Impress() {}

    Impress.run = function() {
      return loadImpress(document, window);
    };

    return Impress;

  })();

}).call(this);
