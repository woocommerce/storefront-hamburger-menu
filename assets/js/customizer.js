(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  wp.customize('storefront_header_link_color', function (value) {
    value.bind(function (to) {
      $('.menu-toggle').css('color', to);
    });
  });
  wp.customize('storefront_header_background_color', function (value) {
    value.bind(function (to) {
      $('.main-navigation div.menu, .main-navigation .handheld-navigation').css('background-color', to);
    });
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY3VzdG9taXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQU1BLENBQUUsVUFBVSxDQUFWLEVBQWM7QUFDZixFQUFBLEVBQUUsQ0FBQyxTQUFILENBQWMsOEJBQWQsRUFBOEMsVUFBVSxLQUFWLEVBQWtCO0FBQy9ELElBQUEsS0FBSyxDQUFDLElBQU4sQ0FBWSxVQUFVLEVBQVYsRUFBZTtBQUMxQixNQUFBLENBQUMsQ0FBRSxjQUFGLENBQUQsQ0FBb0IsR0FBcEIsQ0FBeUIsT0FBekIsRUFBa0MsRUFBbEM7QUFDQSxLQUZEO0FBR0EsR0FKRDtBQU1BLEVBQUEsRUFBRSxDQUFDLFNBQUgsQ0FBYyxvQ0FBZCxFQUFvRCxVQUFVLEtBQVYsRUFBa0I7QUFDckUsSUFBQSxLQUFLLENBQUMsSUFBTixDQUFZLFVBQVUsRUFBVixFQUFlO0FBQzFCLE1BQUEsQ0FBQyxDQUFFLGtFQUFGLENBQUQsQ0FBd0UsR0FBeEUsQ0FBNkUsa0JBQTdFLEVBQWlHLEVBQWpHO0FBQ0EsS0FGRDtBQUdBLEdBSkQ7QUFLQSxDQVpELEVBWUssTUFaTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogVGhlbWUgQ3VzdG9taXplciBlbmhhbmNlbWVudHMgZm9yIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS5cbiAqXG4gKiBDb250YWlucyBoYW5kbGVycyB0byBtYWtlIFRoZW1lIEN1c3RvbWl6ZXIgcHJldmlldyByZWxvYWQgY2hhbmdlcyBhc3luY2hyb25vdXNseS5cbiAqL1xuXG4oIGZ1bmN0aW9uKCAkICkge1xuXHR3cC5jdXN0b21pemUoICdzdG9yZWZyb250X2hlYWRlcl9saW5rX2NvbG9yJywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcubWVudS10b2dnbGUnICkuY3NzKCAnY29sb3InLCB0byApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3N0b3JlZnJvbnRfaGVhZGVyX2JhY2tncm91bmRfY29sb3InLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0JCggJy5tYWluLW5hdmlnYXRpb24gZGl2Lm1lbnUsIC5tYWluLW5hdmlnYXRpb24gLmhhbmRoZWxkLW5hdmlnYXRpb24nICkuY3NzKCAnYmFja2dyb3VuZC1jb2xvcicsIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG59ICkoIGpRdWVyeSApOyJdfQ==
