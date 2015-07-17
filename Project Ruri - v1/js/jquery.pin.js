(function ($) {
    "use strict";
    $.fn.pin = function (options) {
        var scrollX = 0, elements = [], disabled = false, $window = $(window);

        options = options || {};

        var recalculateLimits = function () {
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = elements[i];

                if (options.minWidth && $window.width() <= options.minWidth) {
                    if ($this.parent().is(".pin-wrapper")) { $this.unwrap(); }
                    $this.css({width: "", left: "", top: "", position: ""});
                    disabled = true;
                    continue;
                } else {
                    disabled = false;
                }

                var $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
                var offset = $this.offset();
                var containerOffset = $container.offset();
                var parentOffset = $this.offsetParent().offset();

                if (!$this.parent().is(".pin-wrapper")) {
                    $this.wrap("<div class='pin-wrapper'>");
                }

                $this.data("pin", {
                    from: options.containerSelector ? containerOffset.left : offset.left,
                    to: containerOffset.left + $container.width() - $this.outerWidth(),
                    end: containerOffset.left + $container.width(),
                    parentTop: parentOffset.left
                });

                $this.css({height: $this.outerHeight()});
                $this.parent().css("width", $this.outerWidth());
            }
        };

        var onScroll = function () {
            if (disabled) { return; }

            scrollX = $window.scrollLeft();
   
            for (var i=0, len=elements.length; i<len; i++) {          
                var $this = $(elements[i]),
                    data  = $this.data("pin"),
                    from  = data.from,
                    to    = data.to;
              
                if (from + $this.outerHeight() > data.end) {
                    $this.css('position', '');
                    continue;
                }
              
                if (from < scrollX && to > scrollX) {
                    !($this.css("position") == "fixed") && $this.css({
                        left: 0,
                        top: $this.offset().top
                    }).css("position", "fixed");
                } else if (scrollX >= to) {
                    $this.css({
                        left: to - data.parentTop,
                        top: "auto"
                    }).css("position", "absolute");
                } else {
                    $this.css({position: "", top: "", left: ""});
                }
          }
        };

        var update = function () { recalculateLimits(); onScroll(); };

        this.each(function () {
            var $this = $(this), 
                data  = $(this).data('pin') || {};

            if (data && data.update) { return; }
            elements.push($this);
            $("img", this).one("load", recalculateLimits);
            data.update = update;
            $(this).data('pin', data);
        });

        $window.scroll(onScroll);
        $window.resize(function () { recalculateLimits(); });
        recalculateLimits();

        $window.load(update);

        return this;
      };
})(jQuery);