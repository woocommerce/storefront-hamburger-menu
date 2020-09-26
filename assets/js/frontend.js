(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function ($) {
  $(function () {
    $('.main-navigation .handheld-navigation, .main-navigation div.menu').prepend('<span class="shm-close">' + shm_i18n.close + '</span>');
    /* jshint ignore:line */

    $('.shm-close').on('click', function () {
      $('.menu-toggle').trigger('click');
    });
    $(document).click(function (event) {
      var menuContainer = $('.main-navigation');

      if ($('.main-navigation').hasClass('toggled')) {
        if (!menuContainer.is(event.target) && 0 === menuContainer.has(event.target).length) {
          event.preventDefault();
          event.stopPropagation();
          $('.menu-toggle').trigger('click');
        }
      }
    });
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZnJvbnRlbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxDQUFFLFVBQVUsQ0FBVixFQUFjO0FBQ2YsRUFBQSxDQUFDLENBQUUsWUFBVztBQUNiLElBQUEsQ0FBQyxDQUFFLGtFQUFGLENBQUQsQ0FBd0UsT0FBeEUsQ0FBaUYsNkJBQTZCLFFBQVEsQ0FBQyxLQUF0QyxHQUE4QyxTQUEvSDtBQUE0STs7QUFDNUksSUFBQSxDQUFDLENBQUUsWUFBRixDQUFELENBQWtCLEVBQWxCLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDekMsTUFBQSxDQUFDLENBQUUsY0FBRixDQUFELENBQW9CLE9BQXBCLENBQTZCLE9BQTdCO0FBQ0EsS0FGRDtBQUlBLElBQUEsQ0FBQyxDQUFFLFFBQUYsQ0FBRCxDQUFjLEtBQWQsQ0FBcUIsVUFBVSxLQUFWLEVBQWtCO0FBQ3RDLFVBQUksYUFBYSxHQUFHLENBQUMsQ0FBRSxrQkFBRixDQUFyQjs7QUFFQSxVQUFLLENBQUMsQ0FBRSxrQkFBRixDQUFELENBQXdCLFFBQXhCLENBQWtDLFNBQWxDLENBQUwsRUFBcUQ7QUFDcEQsWUFBSyxDQUFFLGFBQWEsQ0FBQyxFQUFkLENBQWtCLEtBQUssQ0FBQyxNQUF4QixDQUFGLElBQXNDLE1BQU0sYUFBYSxDQUFDLEdBQWQsQ0FBbUIsS0FBSyxDQUFDLE1BQXpCLEVBQWtDLE1BQW5GLEVBQTRGO0FBQzNGLFVBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxVQUFBLEtBQUssQ0FBQyxlQUFOO0FBQ0EsVUFBQSxDQUFDLENBQUUsY0FBRixDQUFELENBQW9CLE9BQXBCLENBQTZCLE9BQTdCO0FBQ0E7QUFDRDtBQUNELEtBVkQ7QUFXQSxHQWpCQSxDQUFEO0FBa0JBLENBbkJELEVBbUJLLE1BbkJMIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKCBmdW5jdGlvbiggJCApIHtcblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJy5tYWluLW5hdmlnYXRpb24gLmhhbmRoZWxkLW5hdmlnYXRpb24sIC5tYWluLW5hdmlnYXRpb24gZGl2Lm1lbnUnICkucHJlcGVuZCggJzxzcGFuIGNsYXNzPVwic2htLWNsb3NlXCI+JyArIHNobV9pMThuLmNsb3NlICsgJzwvc3Bhbj4nICk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuXHRcdCQoICcuc2htLWNsb3NlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoICcubWVudS10b2dnbGUnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdH0gKTtcblxuXHRcdCQoIGRvY3VtZW50ICkuY2xpY2soIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBtZW51Q29udGFpbmVyID0gJCggJy5tYWluLW5hdmlnYXRpb24nICk7XG5cblx0XHRcdGlmICggJCggJy5tYWluLW5hdmlnYXRpb24nICkuaGFzQ2xhc3MoICd0b2dnbGVkJyApICkge1xuXHRcdFx0XHRpZiAoICEgbWVudUNvbnRhaW5lci5pcyggZXZlbnQudGFyZ2V0ICkgJiYgMCA9PT0gbWVudUNvbnRhaW5lci5oYXMoIGV2ZW50LnRhcmdldCApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdCQoICcubWVudS10b2dnbGUnICkudHJpZ2dlciggJ2NsaWNrJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIGpRdWVyeSApOyJdfQ==
