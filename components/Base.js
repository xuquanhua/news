"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** * Created by xuqh on 2016/7/18 */
var Base = function () {
  function Base(name) {
    _classCallCheck(this, Base);

    this.name = name;
  }

  _createClass(Base, [{
    key: "getValueByUrl",
    value: function getValueByUrl(href, key) {
      var _href = href + '',
          regexp = eval("/(\\?|\\&)" + key + "=([^\\&]+)/i"),
          value = _href.match(regexp);
      return value && value[2] ? value[2] : '';
    }
  }]);

  return Base;
}();

exports.Base = Base;

//# sourceMappingURL=Base.js.map