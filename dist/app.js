"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var tooltipTriggerList = document.querySelectorAll('[data-bs-title]');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
var alertTrigger = document.getElementById('liveAlertBtn');
var alert = document.querySelector('.alert');
alertTrigger.addEventListener('click', function () {
  alert.classList.toggle('d-none');
});
var myBirthday = '19910607';
var p = document.querySelector('.birhtday');
p.innerHTML = moment(myBirthday).format('LL');
document.querySelector('.btn-send').addEventListener('click', function () {
  var input = document.querySelector('.birhtdayDate').value.trim();
  var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
  var result = document.querySelector('.result');
  result.innerHTML = '';
  if (!regex.test(input)) {
    result.innerHTML = "\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Invalid date, format DD/MM/YYYY\n            </div>\n        ";
    return;
  }
  var date = moment(input, "DD/MM/YYYY");
  var formatDate = date.format("YYYY-MM-DD");
  result.innerHTML = "\n        <div class=\"alert alert-success\" role=\"alert\">\n            Formatted date: <strong>".concat(formatDate, "</strong>\n        </div>\n    ");
});