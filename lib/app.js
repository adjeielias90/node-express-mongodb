"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();

_db["default"].initDB(); // create a server to listen on a given port


var port = process.env.PORT || 9090;
app.listen(port, function () {
  console.log('The app started on port', port);
});