"use strict";function _classCallCheck(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}var nav=function a(){_classCallCheck(this,a),$(document).ready(function(){var a=$("#menu-toggle"),t=$("#wrapper"),n=($("#page-content-wrapper"),$(".navbar-header .location"));a.on("click",function(a){t.toggleClass("toggled"),$(this).toggleClass("active"),n.toggleClass("active")}),$("#page-content-wrapper").on("click",function(i){t.hasClass("toggled")&&(t.toggleClass("toggled"),a.toggleClass("active"),n.toggleClass("active"))}),$(function(){var a=window.location.pathname;$(".navigation li a").each(function(){var t=$(this).attr("data-destination");a==t?($(".navigation li").removeClass("active"),$(".navigation li").find("[data-destination='"+t+"']").closest("li").addClass("active")):"/payment-estimator"==a&&$(".navigation li").find("[data-destination='/special-offers']").closest("li").addClass("active")})})})};
//# sourceMappingURL=nav.js.map
