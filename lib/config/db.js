"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = {};

db.initDB = function () {
  return new Promise(function (resolve, reject) {
    _mongoose["default"].connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true
    }).then(function (data) {
      console.log('Database Intialized');
      resolve(data);
    })["catch"](function (err) {
      console.log('An error occured while connecting to the database', err);
      reject(err);
    });
  });
};

var _default = db;
exports["default"] = _default;