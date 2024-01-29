"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BASE_IMG = void 0;

var _axios = _interopRequireDefault(require("axios"));

var qs = _interopRequireWildcard(require("qs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BASEURL = 'http://localhost:4000/';
var BASE_IMG = 'http://localhost:4000/';
exports.BASE_IMG = BASE_IMG;

var ApiServices =
/*#__PURE__*/
function () {
  function ApiServices() {
    _classCallCheck(this, ApiServices);
  }

  _createClass(ApiServices, [{
    key: "register",
    value: function register(data) {
      return _axios["default"].post(BASEURL + 'user/add', data);
    }
  }, {
    key: "login",
    value: function login(data) {
      return _axios["default"].post(BASEURL + 'user/login', qs.stringify(data));
    }
  }, {
    key: "All_user",
    value: function All_user() {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/user/all', {}, {
        headers: head
      });
    }
  }, {
    key: "Single_user",
    value: function Single_user(data) {
      return _axios["default"].post(BASEURL + 'admin/user/single', qs.stringify(data));
    }
  }, {
    key: "Update_user_status",
    value: function Update_user_status(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/user/status/update', qs.stringify(data), {
        headers: head
      });
    }
  }, {
    key: "Add_company",
    value: function Add_company(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/company/add', data, {
        headers: head
      });
    }
  }, {
    key: "getAllCompany",
    value: function getAllCompany(data) {
      return _axios["default"].post(BASEURL + "admin/company/all");
    }
  }, {
    key: "getSinglecompany",
    value: function getSinglecompany(data) {
      return _axios["default"].post(BASEURL + 'admin/company/single', qs.stringify(data));
    }
  }, {
    key: "Update_company",
    value: function Update_company(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/company/update', data, {
        headers: head
      });
    }
  }, {
    key: "add_placement",
    value: function add_placement(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/placement/add', data, {
        headers: head
      });
    }
  }, {
    key: "all_placement",
    value: function all_placement() {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/placement/all', {}, {
        headers: head
      });
    }
  }, {
    key: "single_placement",
    value: function single_placement(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/placement/single', qs.stringify(data), {
        headers: head
      });
    }
  }, {
    key: "update_placement",
    value: function update_placement(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/placement/update', data, {
        headers: head
      });
    }
  }, {
    key: "appliedjob",
    value: function appliedjob(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/company/update', qs.stringify(data), {
        headers: head
      });
    }
  }, {
    key: "appliedjob",
    value: function appliedjob(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'user/appliedjob/add', qs.stringify(data), {
        headers: head
      });
    }
  }, {
    key: "getallappliedjob",
    value: function getallappliedjob() {
      return _axios["default"].post(BASEURL + "admin/appliedjob/all");
    }
  }, {
    key: "getSingleappliedjob",
    value: function getSingleappliedjob(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'user/appliedjob/single', {}, {
        headers: head
      });
    }
  }, {
    key: "getallcontact",
    value: function getallcontact() {
      return _axios["default"].post(BASEURL + 'admin/contact/all');
    }
  }, {
    key: "getAllBranch",
    value: function getAllBranch() {
      return _axios["default"].post(BASEURL + "user/branch/all");
    }
  }, {
    key: "getalljob",
    value: function getalljob(data) {
      return _axios["default"].post(BASEURL + 'user/job/all');
    }
  }, {
    key: "addJob",
    value: function addJob(data) {
      var token = sessionStorage.getItem("token");
      var head = {
        Authorization: token
      };
      return _axios["default"].post(BASEURL + 'admin/job/add', data, {
        headers: head
      });
    }
  }]);

  return ApiServices;
}();

var _default = new ApiServices();

exports["default"] = _default;