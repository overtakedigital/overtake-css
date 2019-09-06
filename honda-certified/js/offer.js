"use strict";function turnOnOfferButton(){console.log("offer:",$.urlParam("offer")),"1"==$.urlParam("offer")&&($(".fos-box").trigger("click"),console.log("turnOnOfferButton set inside"))}$.urlParam=function(r,o){o||(o=window.location.href);var e=new RegExp("[\\?&|]"+r+"=([^&#|]*)").exec(o);if(e)return e[1]||void 0};
//# sourceMappingURL=offer.js.map
