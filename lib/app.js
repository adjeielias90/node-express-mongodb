"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // create a server to listen on a given port

var port = process.env.PORT || 9090;
app.listen(port, function () {
  console.log('The app started on port', port);
});