var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Very creative minds in Art');

fill;
