(function() {

  window.Step = (function() {

    function Step(content, properties) {
      this.content = content;
      this.properties = properties != null ? properties : {};
      window.steps || (window.steps = []);
      steps.push(this);
    }

    Step.prototype.dataProps = function() {
      var key, morsels, value, _ref;
      morsels = [];
      _ref = this.properties;
      for (key in _ref) {
        value = _ref[key];
        if (key === 'rotateX') key = 'rotate-x';
        if (key === 'rotateY') key = 'rotate-y';
        if (key === 'rotateZ') key = 'rotate-z';
        if (key === 'transitionDuration') key = 'transition-duration';
        if (key !== 'class') morsels.push("data-" + key + "='" + value + "'");
      }
      console.log(morsels.join(" "));
      return morsels.join(" ");
    };

    Step.prototype.to_html = function() {
      return "<div class='step " + this.properties["class"] + "' " + (this.dataProps()) + ">" + this.content + "</div>";
    };

    return Step;

  })();

  window.Impress = (function() {

    function Impress() {}

    Impress.run = function() {
      var step, _i, _len;
      $('body').add('div').attr('id', 'impress');
      for (_i = 0, _len = steps.length; _i < _len; _i++) {
        step = steps[_i];
        $("#impress").append(step.to_html());
      }
      return loadImpress(document, window);
    };

    return Impress;

  })();

}).call(this);
