'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vehicle_details = function () {
    function vehicle_details(map) {
        _classCallCheck(this, vehicle_details);

        Object.defineProperty(this, 'map', {
            enumerable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, 'mapObj', {
            enumerable: true,
            writable: true,
            value: null
        });


        this.mapObj = map;
        var that = this;

        $(document).ready(function () {

            /* STICKY VEHICLE HEADER */
            var triggerElement = $('.vehicle-detail-payment').offset().top - 100;
            $(window).scroll(function () {

                var currentScroll = $(window).scrollTop();

                if (currentScroll >= triggerElement) {
                    $('#stickyVdpHeader').addClass('fixed');
                } else {
                    $('#stickyVdpHeader').removeClass('fixed');
                }

                // mini-compare bar

                var $triggerElement = $('.footer');
                var $stickyElement = $('.compare-content');
                if ($stickyElement.offset().top + $stickyElement.height() >= $triggerElement.offset().top - 10) {
                    $stickyElement.addClass('fixed');
                    $(".mini-compare-bar").removeClass("pfixed");
                    $(".mini-compare-bar").removeClass("super-mini-ie");
                }
                if ($(document).scrollTop() + window.innerHeight < $triggerElement.offset().top) $stickyElement.removeClass('fixed');

                // Back To Top Button
                if (currentScroll > 900) {
                    $(".btn-back-to-top").show();
                } else {
                    $(".btn-back-to-top").hide();
                }
            });

            //that.showGlobalErrorMSG("contact");
            $(".link-car-fax").on("click", function () {
                var url = $(this).attr("data-url");
                if (url != "null" && url != "" && url != null) {
                    callFloodlight('inspection-report');
                    // console.log("calling callFloodlight('inspection-report');");
                }
            });

            $(".btn-back-to-result").on("click", function () {
                window.location = "/vehicle-search";
            });
            $("#vdpPriceInfo").on("click", function () {
                $("#vdpPriceInfoBox").toggle(300);
            });

            $("#vdpHeaderInfo").on("click", function () {
                $("#vdpHeaderInfoBox").toggle(300);
            });

            /*
            $(".vdo-btn-view-all-specs").on("click", function(){
                var pdf=$(".vdt-title").html().replace(/ /g, "-")+".pdf";
                window.open("/app_data/downloads/"+pdf,"_blank");
            });
            */

            // Share Link
            $(".share").on("click", function () {
                $("#this-page-url").attr("value", window.location.href);
                var good = copyURLToClipboard();
                if (good) {
                    $(".contact-overlay").fadeIn(300);
                    $(".copy-link-box").fadeIn(300);
                } else {
                    $(".contact-overlay").fadeIn(300);
                    $(".copy-link-box").fadeIn(300);
                    $(".copy-link-box .contact-box-title h4").html('This copy functionality is not compatible with this version of Safari. Please upgrade your browser for optimal performance.');
                }
            });

            // Chat Button | Text Button
            // also applies to sticky chat/text on the side
            // $(".vdd-btn-chat, .vdd-btn-text, .sticky-chat, .sticky-text").on("click", function () {
            //     var scope = angular.element($("#vehicle-detail-page")).scope();
            //     var dealerid = scope.myCar.dealer.id;
            //     var zip = scope.zip;
            //     var make = "Honda";
            //     var year = scope.myCar.year;
            //     var model = scope.myCar.groupName;
            //     var vin = scope.myCar.vin;

            //     // Satellite tracking for sticky or regular chat
            //     if ($(this).hasClass("sticky-chat") || $(this).hasClass("sticky-text")) {
            //         that.trackSatellite("global_tab_chat");
            //     } else {
            //         var dealername = $(".vdd-contact").attr("data-dealer");
            //         that.trackSatellite("modeldetail_reviews_chat", dealername);
            //     }

            //     callFloodlight('dealer-chat');


            //     if ($(this).hasClass("vdd-btn-text") || $(this).hasClass("sticky-text")) {
            //         // old code
            //         //  window.open('http://mtc.contactatonce.com/MobileTextConnectConversationInitiater.aspx?AdvertiserId=' + dealerid + '&ProviderId=6&PlacementId=2&Year=' + year + '&Make=' + make + '&Model=' + model + '&ZipCode=' + zip + '&VIN=' + vin + '&Message=Hi%2C%20I%20have%20a%20question%20about%20Honda&OriginationUrl=' + encodeURIComponent(location.href), '', 'resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=no,status=no,height=350,width=410');
            //         var mtcPropertiesErrorCallback = function (data) {
            //             console.log('Error retrieving mtc property data for referenceId:' + referenceId);
            //         };

            //         var mtcPropertiesSuccessCallback = function (data) {
            //             var mtcEngConfiguration = {
            //                 "referenceId": dealerid,
            //                 "engagementId": 1,
            //                 "channel": "mtc",
            //                 "mtc": data.properties
            //             };
            //             if (mtcEngConfiguration.mtc.phoneNumber) {
            //                 lpTag.sdk.exec("caoEngager.startChat", mtcEngConfiguration);
            //             }
            //         };
            //         lpTag.sdk.exec("caoEngager.getMtcProperties", {
            //             referenceId: dealerid,
            //             onSuccess: mtcPropertiesSuccessCallback,
            //             onError: mtcPropertiesErrorCallback
            //         });
            //     } else {
            //         // old code
            //         //  window.open('http://honda.contactatonce.com/caoclientcontainer.aspx?ProviderId=6&MerchantId=' + dealerid + '&PlacementId=2&Year=' + year + '&Make=' + make + '&Model=' + model + '&ZipCode=' + zip + '&VIN=' + vin + '&OriginationUrl=' + encodeURIComponent(location.href), '', 'resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=no,status=no,height=400,width=600');
            //         var chatEngConfiguration = {
            //             "referenceId": dealerid,
            //             "engagementId": 1,
            //             "channel": "chat"
            //         };
            //         lpTag.sdk.exec("caoEngager.startChat", chatEngConfiguration);
            //     }

            // });

            // Read More Review Button
            $(".btn-read-more").on("click", function () {
                callFloodlight('customer-reviews');
                that.trackSatellite("modeldetail_reviews_more");
                var model = $(".vdt-title").attr("data-groupname").toLowerCase().replace("sedan", "").replace("coupe", "");
                model = $.trim(model);
                var year = $(".vdt-title").attr("data-year");
                var url = "https://www.edmunds.com/honda/" + model + "/" + year + "/consumer-reviews/pg-1/?sorting=OVERALL_RATINGS";
                window.open(url);
            });

            //  Contact Dealer Button
            $(".vdt-btn-contact-dealer").on("click", function () {

                var top = $(".vehicle-detail-dealer").offset().top - 60;
                $("html, body").animate({
                    scrollTop: top + "px"
                });
                var dealername = $(".vdd-contact").attr("data-dealer");
                that.trackSatellite("modeldetail_hero_contact", dealername);
                callFloodlight('vdp-contact-dealer');
            });

            //vdp-btn1 vdp-btn2 Calculate Monthly Payment
            $(".dealer-detail ").find(".get-directions").on("click", function () {
                that.trackSatellite("modeldetail_paycalc_directions");
            });
            //vdo-btn-box View All Specs
            $(".vdo-btn-box").find("a").on("click", function () {
                that.trackSatellite("modeldetail_specs_viewall");
            });
            //data-by-edmunds EDMUNDS LOGO
            $(".data-by-edmunds").find("a").on("click", function () {
                that.trackSatellite("modeldetail_reviews_edmunds");
            });
            //get-directions Directions
            $(".get-directions").on("click", function () {
                var dealername = $(".vdd-contact").attr("data-dealer");
                that.trackSatellite("modeldetail_reviews_directions", dealername);
            });
            //vdd-phone Phone Link Call
            $(".vdd-phone").find("a").on("click", function () {
                var dealername = $(".vdd-contact").attr("data-dealer");
                that.trackSatellite("modeldetail_reviews_call", dealername);
                callFloodlight('dealer-call');
            });
            //link-see-details
            $(".list-items").on("click", ".link-see-details", function () {
                that.trackSatellite("modeldetail_similar_seedetails");
            });

            // $(".contact-writeus").hide();
            // $(".contact-thankyou").hide();
            // $(".contact-box").first().fadeIn(300);
            // $(".contact-overlay, .email-dealer-layer .contact-layer").fadeIn(300);


            // Email Dealer Button (BOTTOM OF PAGE)
            $(".vdd-btn-email").on("click", function () {

                $(".contact-box").first().hide();
                $(".contact-writeus").show();
                $(".contact-box-btn-back").hide();
                $(".contact-thankyou").hide();

                $(".contact-overlay, .email-dealer-layer .contact-layer").fadeIn(300);
                var dealername = $(".vdd-contact").attr("data-dealer");
                that.trackSatellite("modeldetail_reviews_email", dealername);
            });

            //** AC ** modifying email dealer for pop-up
            // CALCULATE MONTHLY PAYMENT CTA (IN POP-UP CALCULATOR)
            $(".vdp-btn-calculator").on("click", function () {

                $(".contact-writeus").hide();
                $(".contact-thankyou").hide();

                $(".contact-box").first().fadeIn(300);
                $(".contact-overlay, .email-dealer-layer .contact-layer").fadeIn(300);
                var dealername = $(".vdd-contact").attr("data-dealer");
                that.trackSatellite("modeldetail_hero_paycalc", dealername);
            });

            $(".contact-box-btn-back").on("click", function () {
                $(".contact-writeus").fadeOut(300);
                $(".contact-box").first().show();
            });

            $(".vdp-btn-email-inner").on("click", function () {
                $(".contact-box").first().fadeOut(300);
                $(".contact-writeus").fadeIn();
                $(".contact-box-btn-back").show();
            });

            // Email Dealer Form X close button
            $(".contact-box-btn-x, .contact-filter-btn-edit, .contact-filter-btn-return, .btn-gallery-layer-x").on("click", function () {
                $(".contact-overlay, .contact-layer, .gallery-layer").fadeOut(300);
            });
            // Email Dealer Form Send button
            $(".btn-dealer-send-email").on("click", function () {

                var zip = $("#contact-zip").val();
                var firstname = $("#contact-first-name").val();
                var lastname = $("#contact-last-name").val();
                var email = $("#contact-email").val();
                var tradein = $('input[name=checkbox_tradein]').prop('checked');

                //used for radiobttn option
                // if (tradein == "tradein") tradein = true;
                // else tradein = false;

                $(".contact-form .form-control").each(function () {
                    if ($.trim($(this).val()) == "") $(this).addClass("form-error");else $(this).removeClass("form-error");
                });

                if ($.trim(zip) == "" || hcpv_rpa_util.validateZipCode(zip) == false) $("#contact-zip").addClass("form-error");else $("#contact-zip").removeClass("form-error");

                if ($.trim(email) == "" || validateEmail(email) == false) $("#contact-email").addClass("form-error");else $("#contact-email").removeClass("form-error");

                if ($(".contact-form").find(".form-error").length > 0) return false;

                var year = $(".vdt-title").attr("data-year");
                var dealerid = $(".vdt-title").attr("data-dealerid");
                var vin = $(".vdt-title").attr("data-vin");

                var scope = angular.element($("#vehicle-detail-page")).scope();
                var car = scope.myCar;
                var dealer = car.dealer;
                var address = dealer.address + " " + dealer.city + ", " + dealer.state + " " + dealer.zip;

                //get _CampaignName from cookies
                if (Cookies.get('_CampaignName')) {
                    var CampaignName = Cookies.get('_CampaignName');
                }

                var dealerRequest = {
                    "FirstName": firstname,
                    "LastName": lastname,
                    "ZipCode": zip,
                    "Email": email,
                    "ModelYear": year,
                    "ModelMake": "Honda",
                    "ModelMarketingName": car.groupName + " " + car.trimName,

                    "DealerName": dealer.name,
                    "DealerAddress": address,
                    "DealerPhone": dealer.phone,
                    "VehicleImage": car.photo,
                    "ModelTrim": car.trimName,
                    "ModelPrice": car.dsrp,

                    "Model": {
                        "modelId": car.modelId,
                        "modelGroupName": null,
                        "modelYearStart": 0,
                        "modelYearEnd": 0,
                        "modelExteriorColorCd": car.exColorName,
                        "modelInteriorColorCd": car.inColor,
                        "modelPriceLimit": 0.0,
                        "modelTransmission": null,
                        "modelVin": vin,
                        "modelMileage": 0.0,
                        "modelDealerStockNumber": car.stock,
                        "ModelConfiguredDSRP": car.dsrp
                    },
                    "Tracking": {
                        "CampaignName": CampaignName,
                        "ShoppingTool": "Inventory - Detail Page"
                    },
                    "Dealer": {
                        "dealerId": dealerid
                    },
                    "CarToTradeIn": tradein

                    //  console.log('dealerRequest.ModelMarketingName: ', dealerRequest);
                    //  console.log('dealerRequest stringfy: ', JSON.stringify(dealerRequest));

                };var posturl = "/handlers/submit-dealer-request-handler.ashx";

                $.post(posturl, {
                    dealerRequest: JSON.stringify(dealerRequest)
                }, function (data) {
                    data = JSON.parse(data);
                    data = data.Output;
                    console.log("data: " + data.Results.Status.toLowerCase());
                    if (data.Results.Status.toLowerCase() == "submitted") {
                        //if (data.Results.Status.toLowerCase().indexOf("submitted") > -1) {
                        //    console.log("submitted")
                        //setting applicant number and returnURL hidden field values for eshopping
                        var appnum = data.Results.ApplicantNumber;
                        console.log("AppNumber: " + appnum);
                        var returnURL = $(location).attr('href');

                        $('input[name="AppNumber"]').val(appnum);
                        $('input[name="returnurl"]').val(returnURL);
                        $(".contact-box").first().fadeOut(300);
                        $(".contact-thankyou-name").html(firstname);
                        $(".contact-thankyou").fadeIn(300).css({ "display": "flex" });

                        callFloodlight('contact-dealer');
                        var dealername = $(".vdd-contact").attr("data-dealer");
                        that.trackSatellite("modeldetail_contact_submit", dealername);
                        IgnitionOne('contact-dealer', dealerRequest.ModelMarketingName, dealerRequest.ZipCode, dealerRequest.CarToTradeIn);
                    } else {
                        that.showGlobalErrorMSG("contact");
                        $(".contact-box-btn-x").click();
                    }
                }).fail(function () {
                    that.showGlobalErrorMSG("contact");
                    $(".contact-box-btn-x").click();
                });
            });

            //Expand Gallery
            $(".btn-expand-gallery").click(function () {
                $("html, body").animate({
                    scrollTop: "80px"
                });
                $(".contact-overlay, .gallery-layer").fadeIn(300);
                that.trackSatellite("modeldetail_gallery_full");
                function thumbClick(thisItem) {
                    $(".slide3-box .owl-item").each(function (index) {
                        console.log("thisItem: " + thisItem);
                        console.log("index: " + index);
                        if (thisItem == index) {
                            console.log(thisItem + " clicked");
                            console.log(this);
                            // $(this).trigger("click");
                            // $(this).trigger("click");
                        }
                    });
                }
                function getActiveIndex() {
                    $(".slide2-box .owl-item").each(function (index) {

                        if ($(this).hasClass("active") && index == $(".slide2-box .owl-item").length - 6) {
                            console.log($(".slide2-box .owl-item").length - 6);
                            console.log("activeIndex: " + index);
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                //getThumbLength();
                $(".owl-nav .owl-prev").on("click", function () {
                    console.log('prev clicked');
                    if ($(".owl-nav .owl-prev").hasClass("disabled")) {
                        console.log("disabled clicked");

                        var thumbCount = $(".slide3-box .owl-item").length - 1;
                        thumbClick(thumbCount);
                        console.log('xxxxxx reset');
                        //     $(".owl-nav .owl-next").removeClass("disabled");
                        //$(".vehicle-detail-slide2").data('owl.carousel').to(thumbCount, 300, true);
                        // }$(".vehicle-detail-slide2")
                    }
                });

                $(".owl-nav .owl-next").on("mousedown", function () {
                    console.log('next clicked');
                    if ($(this).hasClass("disabled")) {
                        console.log("disabled clicked");
                        console.log("items:" + $(".slide3-box .owl-item").length);
                        var thumbCount = $(".slide3-box .owl-item").length - 1;

                        $(".vehicle-detail-slide2").data('owl.carousel').to(0, 300, true);
                    }
                });
            });
            //Left Arrow | Right Arrow
            $(".vehicle-detail-slide").on("click", ".slide-arrow-left", function () {
                that.trackSatellite("modeldetail_gallery_left");
            });
            $(".vehicle-detail-slide").on("click", ".slide-arrow-right", function () {
                that.trackSatellite("modeldetail_gallery_right");
            });
            $(".vdr-slide").on("click", ".slide-arrow-left", function () {
                that.trackSatellite("modeldetail_reviews_left");
            });
            $(".vdr-slide").on("click", ".slide-arrow-right", function () {
                that.trackSatellite("modeldetail_reviews_right");
            });
        });
    }

    // Setup Bing Map


    _createClass(vehicle_details, [{
        key: 'loadBingMap',
        value: function loadBingMap() {

            // console.log("Load Bing Map");

            //this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            //    credentials: bingMapsAPIKey,
            //    disableScrollWheelZoom: true,
            //    disableZooming: true,
            //    disablePanning: true
            //});

            /* LOAD OTHER MODULE -----------------------------------------------------------------*/
            Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', function () {

                //Microsoft.Maps.loadModule("Microsoft.Maps.SpatialMath", function () { this.initMap(0); }.bind(this));
                //Microsoft.Maps.Events.addHandler(this.map, 'viewchangeend', function () { this.mapViewChange(); }.bind(this));


                this.infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), {
                    visible: false
                });
                this.infobox.setMap(this.map);

                this.loadData();
            }.bind(this));
            /* LOAD OTHER MODULE -----------------------------------------------------------------*/
        }
    }, {
        key: 'getDistance',


        // Find Distance Between 2 Locations Using Bing
        value: function getDistance(loc1, loc2) {

            var url = "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=" + loc1 + "&wp.1=" + loc2 + "&avoid=minimizeTolls&distanceUnit=mi&key=" + bingMapsAPIKey;
            // console.log(url);
            CallRestService(url, function (r) {

                //console.log(r);

                var distance = r.resourceSets[0].resources[0].travelDistance;
                distance = parseInt(distance);
                // console.log(distance);
                // $("span.dealer-distance").html(distance);

            });
        }

        // Load Data From Handler And Fill The Page

    }, {
        key: 'loadData',
        value: function loadData() {

            var vin = this.mapObj.getParameterByName("vin");

            if (localStorageGetItemCommon("vins") == undefined) localStorageSetItemCommon("vins", vin);else if (localStorageGetItemCommon("vins") == "") localStorageSetItemCommon("vins", vin);else {
                var tmp = localStorageGetItemCommon("vins").split("|");
                if (tmp.indexOf(vin) !== -1) tmp.splice(tmp.indexOf(vin), 1);
                tmp.push(vin);
                if (tmp.length > 4) tmp = tmp.slice(tmp.length - 4);
                localStorageSetItemCommon("vins", tmp.join("|"));
            }

            // console.log(localStorageGetItemCommon("vins"));

            var zip = localStorageGetItemCommon("_GeoCurrentZipCode");
            var ajaxurl = "/handlers/get-vehicle-details.ashx?vin=" + vin + "&zip=" + zip;

            // console.log(ajaxurl);

            $.getJSON(ajaxurl, function (data) {

                // console.log('333',data);  //Output.Results.ModelAttributes.ModelAttribute[0]  = # of PAssengers = 8 here == VIN = 5FNYF3H53FB010888 PILOT SCoot Robinson

                var d = data.Output.Results;

                if (d.Models == null) {
                    this.showModelDNE();
                    return;
                }
                if (d.Models.Model == null) {
                    this.showModelDNE();
                    return;
                }

                this.mapObj.initStylesAttributesLists(d);
                var cars = d.Models.Model;
                var specialsData = d.Specials;
                if (d.Specials) {
                    specialsData = d.Specials;
                }
                console.log('specialsData: ', specialsData);
                // console.log(cars);  //

                cars = this.mapObj.initCarsList(cars, null, null, specialsData); //seating is populated at this point

                // console.log('vehicle-details.js 351');
                // console.log(cars);  //

                var dealers = d.Dealers.Dealer;

                dealers = this.mapObj.initDealersList(cars, dealers);
                var car = cars[0];
                // Hide Expand Gallery Button If No Photo
                // console.log('351 car.photos: ', car.photos);
                if (car.photos == null) {
                    console.log("car.photos " + car.photos);
                    $(".btn-expand-gallery").hide();
                } else {
                    //HCPVISSUES-15   work with incoming image aspect ratio
                    car.photos = this.addDistributedImagesFolder(car.photos);
                    // console.log('hcpv_car-369', car.photos);

                }
                var dealer = dealers[0];
                car.generateFullAttributes(this.mapObj.attributesObj);

                if (this.mapObj.bodyStylesObj != null) car.style = this.mapObj.bodyStylesObj.getStyleNameById2(car.styles.BodyStyle[0]);
                var keyServiceCodes = ["09", "19", "CU"];
                var keyServices = new Array();
                for (var i = 0; i < car.dealer.attributes.DealerAttribute.length; i++) {
                    var code = car.dealer.attributes.DealerAttribute[i].Code;
                    if (keyServiceCodes.indexOf(code) !== -1) keyServices.push(car.dealer.attributes.DealerAttribute[i]);
                }

                this.applyData(keyServices, 5);

                if (car.trimName == null) car.trimName = "";
                this.applyData(car);

                if (car.seating == undefined) {
                    $(".seat-hide").hide();
                } else if (car.seating == null) {
                    $(".seat-hide").hide();
                }
                //car.vhrurl="http://www.eshopping.honda.com/Content/AutocheckVHR";

                if (car.vhrurl != null) {

                    $(".link-car-fax").attr("target", "_blank").attr("href", car.vhrurl);

                    if (car.vhrsource != null) {
                        if (car.vhrsource.toLowerCase() == "autocheck") {
                            $(".link-car-fax").eq(0).hide();
                            $(".link-car-fax").eq(1).show();
                        }
                    }
                } else {}
                // console.log("VHRURL is NULL and VHRSOURCE is " + car.vhrsource);


                // alert(car.iceurl)
                if (car.iceurl != null) {
                    $(".link-ice").attr("target", "_blank").attr("href", car.iceurl);
                    $('.vdt-btn-view-inspection-report').show();
                } else {
                    console.log("ICEUrl is NULL");
                }

                $("#dtm-data-layer").append('<script>dtmDataLayerModel ={ "modelname":"' + car.groupName + '","modeltrim":"' + car.trimName + '","modelyear":"' + car.year + '", "dealername":"' + car.dealer.name + '"}</script>');

                // Satellite tracking for sticky or regular chat
                // if ($(".sticky-chat-wrapper").is(":visible")) {
                //     _satellite.setVar('abtest', 'chat visible');
                // } else { console.log("abtesting not visible") }

                this.trackSatellite("modeldetail_page_ready");

                /* ------------------------TIMEOUT---------------------------------------- */
                function setStagePaddingOC() {

                    var owl = $(".vehicle-detail-slide");
                    var carousel = owl.data('owl.carousel');
                    var StgPad = 20;

                    if ($(window).width() >= 1430 && $(window).width() < 2900) {
                        StgPad = 0;
                    } else if ($(window).width() > 1350 && $(window).width() < 1430) {
                        StgPad = 350;
                    } else if ($(window).width() > 1300 && $(window).width() < 1350) {
                        StgPad = 340;
                    } else if ($(window).width() > 1250 && $(window).width() < 1300) {
                        StgPad = 330;
                    } else if ($(window).width() > 1200 && $(window).width() < 1250) {
                        StgPad = 310;
                    } else if ($(window).width() > 999 && $(window).width() < 1200) {
                        StgPad = 260;
                    } else if ($(window).width() > 768 && $(window).width() < 999) {
                        StgPad = 160;
                    }
                    // else if ($(window).width() > 768) {
                    //     StgPad = 160;
                    else if ($(window).width() >= 320) {
                            StgPad = 40;
                        }
                    carousel.settings.stagePadding = StgPad;
                    carousel.options.stagePadding = StgPad;
                    owl.trigger('refresh.owl.carousel');

                    // console.log('window width :', $(window).width());
                }

                function counter(e) {
                    if (!e.namespace) {
                        return;
                    }
                    var carousel = e.relatedTarget;
                    var currentItem = carousel.relative(carousel.current()) + 1;
                    $('.slider-counter').text('GALLERY: ' + currentItem + ' of ' + carousel.items().length);
                }

                var loopit = true;

                if (car.photos != null) {
                    if (car.photos.length > 1) {
                        loopit = true;
                    } else {
                        loopit = false;
                    }
                }
                //console.log("loop it "+loopit);

                setTimeout(function () {

                    $('.vehicle-detail-slide').owlCarousel({
                        margin: 10,
                        loop: loopit,
                        items: 1,
                        //stagePadding: 357,
                        dots: true,
                        center: true,
                        nav: true,
                        linked: ".vehicle-detail-slide-thumbs",
                        navText: ['<div class="slide-arrow-left"></div>', '<div class="slide-arrow-right"></div>'],
                        //onResized: setStagePaddingOC,
                        onInitialized: counter,
                        onTranslated: counter

                    });

                    //setStagePaddingOC();
                    $('.vehicle-detail-slide-thumbs').owlCarousel({
                        loop: false,
                        items: 6,
                        dots: false,
                        nav: true,
                        linked: ".vehicle-detail-slide",
                        navText: ['<div class="slide-arrow-left"></div>', '<div class="slide-arrow-right"></div>'],
                        onInitialized: function onInitialized() {
                            $(this).find(".owl-item.current").removeClass("current");
                            var current = $(this).find(".owl-item.active").length ? $(this).find(".owl-item.active") : $(this).find(".owl-item.active").eq(0);
                            current.addClass("current");
                        }
                    });
                    //$('.vehicle-detail-slide-thumbs').on('initialized.owl.carousel linked.to.owl.carousel', function () {
                    //    $(this).find(".owl-item.current").removeClass("current");
                    //    var current = $(this).find(".owl-item.active").length ? $(this).find(".owl-item.active") : $(this).find(".owl-item.active").eq(0);
                    //    current.addClass("current");
                    //});
                    $('.vehicle-detail-slide2').owlCarousel({
                        loop: true,
                        items: 1,
                        dots: false,
                        nav: true,
                        linked: ".vehicle-detail-slide3",
                        navText: ['<div class="slide-arrow-left"></div>', '<div class="slide-arrow-right"></div>']
                    });
                    $('.vehicle-detail-slide3').owlCarousel({
                        margin: 10,
                        loop: false,
                        items: 5,
                        dots: false,
                        nav: true,
                        linked: ".vehicle-detail-slide2",
                        navText: ['<div class="slide-arrow-left"></div>', '<div class="slide-arrow-right"></div>'],

                        onInitialize: function onInitialize() {
                            $(this.$element).find(".owl-item.current").removeClass("current");
                            var current = $(this.$element).find(".owl-item.active.center").length ? $(this.$element).find(".owl-item.active.center") : $(this.$element).find(".owl-item.active").eq(0);
                            current.addClass("current");
                        }
                    }).on("initialized.owl.carousel link.to.owl.carousel", function () {
                        $(this).find(".owl-item.current").removeClass("current");
                        var current = $(this).find(".owl-item.active.center").length ? $(this).find(".owl-item.active.center") : $(this).find(".owl-item.active").eq(0);
                    });

                    var owl1 = $(".vehicle-detail-slide2");
                    var owl2 = $(".vehicle-detail-slide3");
                    var owlMain = $(".vehicle-detail-slide");
                    var owlMainThumbs = $(".vehicle-detail-slide-thumbs");

                    owl2.on("click", ".owl-item", function (e) {
                        e.preventDefault();
                        var number = $(this).index();
                        console.log("number: " + number);
                        owl1.data('owl.carousel').to(number, 300, true);
                    });

                    owlMainThumbs.on("click", ".owl-item", function (e) {
                        e.preventDefault();
                        var number = $(this).index();
                        console.log("number: " + number);
                        owlMain.data('owl.carousel').to(number, 300, true);
                    });
                }, 1500);

                /* ------------------------TIMEOUT---------------------------------------- */

                $(".vdd-right").height($(".vehicle-detail-dealer").height() + 60);

                var loc = new Microsoft.Maps.Location(dealer.lat, dealer.lon);
                var pin = new Microsoft.Maps.Pushpin(loc, {
                    icon: '/images/vehicle-details/location-pointer.png',
                    anchor: new Microsoft.Maps.Point(12, 16)
                });
                //this.map.entities.push(pin);
                //this.map.setView({
                //    center: loc,
                //    zoom: 15
                //});


                var zip = localStorageGetItemCommon("_GeoCurrentZipCode");
                this.getDistance(zip, dealer.lat + "," + dealer.lon);
                this.applyData(zip, 3);

                this.loadReviews(car.year, car.groupName);
                this.loadSimilarVehicles(car);
                this.loadKeyFeatures(car);
                this.loadMonthlyPayment(car);
                this.setContactAtOnceButtons(dealer.id);
            }.bind(this)).fail(function () {
                this.showGlobalErrorMSG("detail");
            }.bind(this));
        }
    }, {
        key: 'setContactAtOnceButtons',
        value: function setContactAtOnceButtons(dealerId) {
            setTimeout(function () {
                var url = 'https://dm5.contactatonce.com/PresencePostback.aspx?';
                var merchantId = dealerId;
                var providerId = '6';
                var placementId = '1';
                //  var callbackFunction = 'PresenceCallback';

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    //    jsonpCallback: callbackFunction,
                    contentType: "text",
                    dataType: 'jsonp',
                    data: {
                        ProviderId: providerId,
                        MerchantId: merchantId,
                        PlacementId: placementId
                    },
                    success: function success(json) {
                        if (json.presenceStatus == "online") {
                            // console.log("Contact At Once ONLINE");
                        } else {
                            // console.log("Contact At Once OFFLINE");
                            $(".contact-at-once").hide();
                        }
                    }
                });
            }, 500);
        }

        // Global Error Message

    }, {
        key: 'showGlobalErrorMSG',
        value: function showGlobalErrorMSG(which) {
            var message = "We are sorry, we are experiencing some server error.";

            if (which == "detail") {
                message = "Sorry about that! There seems to be a glitch in the matrix. We’ve dispatched a team of helper-bots to get this feature back up and running soon. Please check back in a bit.";
            } else if (which == "contact") {
                message = "Sorry about that! It seems that the dealer email features isn’t working the way it should, but you can be sure we’re working on getting it back up and running. Please check back in a bit.";
            }

            allError.setMessage({
                msg: message,
                closeButton: true,
                template: 'A'
            });
        }
    }, {
        key: 'addDistributedImagesFolder',
        value: function addDistributedImagesFolder(arrCar) {
            var a = arrCar;
            var arrOut = arrCar;

            //    console.log('hcpv_car-214', a[0]);

            if (arrCar == undefined) {
                return;
            }

            //search ModelAttribute [#of Passenger] for this VIN
            for (var i = 0; i < a.length; i++) {
                var url = a[i]["#text"];
                arrOut[i]["#text"] = url.replace("https://content.homenetiol.com/", "https://content.homenetiol.com/distributedimages/900x500/");
            }

            return arrOut;
        }
    }, {
        key: 'applyData',
        value: function applyData(data, which) {
            var scope = angular.element($("#vehicle-detail-page")).scope();

            if (which == 1) {
                scope.$apply(function () {
                    scope.similarCars = data;
                });
            } else if (which == 2) {
                scope.$apply(function () {
                    scope.reviews = data;
                });
            } else if (which == 3) {
                scope.$apply(function () {
                    scope.zip = data;
                });
            } else if (which == 4) {
                scope.$apply(function () {
                    scope.keyFeatures = data;
                });
            } else if (which == 5) {
                scope.$apply(function () {
                    scope.keyServices = data;
                });
            } else if (which == 6) {
                scope.$apply(function () {

                    scope.monthlyPayment = data;
                    scope.mpVal = data; // binding to separate variable to deal with in pop-up calculator
                });
                // ** AC ** adding a few more cases: APR, terms, dp, etv
            } else if (which == 7) {
                scope.$apply(function () {
                    scope.aprVal = data;
                    scope.aprObj.set(data);
                });
            } else if (which == 8) {
                scope.$apply(function () {
                    scope.termsVal = data;
                });
            } else if (which == 9) {
                scope.$apply(function () {
                    scope.downVal = data;
                    scope.dpObj.set(data);
                });
            } else if (which == 10) {
                scope.$apply(function () {
                    scope.tradeVal = data;
                    scope.etvObj.set(data);
                });
            } else if (which == 11) {
                scope.$apply(function () {
                    scope.offerObj = data;
                    scope.hasOffer = true;
                });
            } else if (which == 12) {
                scope.$apply(function () {
                    scope.offerDisclaimer = data;
                });
            } else scope.$apply(function () {
                scope.myCar = data;
                // console.log("VEHICLE DATA:");
                // console.log(data);
            });
        }

        // Get the customer reveiws from Edmunds

    }, {
        key: 'loadReviews',
        value: function loadReviews(year, model) {

            model = model.split(" ")[0];
            var ajaxurl = "/handlers/get-customer-reviews-handler.ashx?make=honda&model=" + model + "&year=" + year;
            // console.log(ajaxurl);

            $.getJSON(ajaxurl, function (data) {

                //console.log(data);

                for (var i = 0; i < data.reviews.length; i++) {
                    if (data.reviews[i].text == undefined) data.reviews[i].text = data.reviews[i].title;
                    if (data.reviews[i].text.length > 500) {
                        data.reviews[i].text = data.reviews[i].text.substring(0, 500) + "...";
                    }
                }
                this.applyData(data.reviews, 2);

                setTimeout(function () {
                    $(".vdr-slide").owlCarousel({
                        margin: 10,
                        loop: true,
                        items: 1,
                        dots: true,
                        nav: true,
                        navText: ['<div class="slide-arrow-left"></div>', '<div class="slide-arrow-right"></div>']
                    });
                }, 500);
            }.bind(this));
        }

        // Get similar vehicles

    }, {
        key: 'loadSimilarVehicles',
        value: function loadSimilarVehicles(car) {

            var zip = localStorageGetItemCommon("_GeoCurrentZipCode");
            var radius = this.mapObj.radiusMiles;

            var ajaxurl = "/handlers/get-inventory-data.ashx?zip=" + zip + "&radius=" + radius;
            // console.log(ajaxurl);


            // Do we have cache???
            var apicache = localStorageGetItemCommon("apicache");
            if (apicache != null) {
                var apicacheObj = JSON.parse(apicache);
                var d = apicacheObj.Output.Results;
                this.mapObj.initStylesAttributesLists(d);
                var cars = this.mapObj.initCarsList(d.Models.Model);
                var dealers = this.mapObj.initDealersList(cars, d.Dealers.Dealer);
                //console.log(cars);
                var similarCars = new Array();
                for (var i = 0; i < cars.length; i++) {
                    var c = cars[i];
                    if (c.vin == car.vin) continue;
                    if (c.groupName == car.groupName) {
                        similarCars.push(c);
                    }
                    if (similarCars.length > 3) break;
                }
                if (similarCars.length > 0) {
                    this.applyData(similarCars, 1);
                    $(".vehicle-detail-similar").fadeIn(300);
                }
                return;
            }

            $.getJSON(ajaxurl, function (data) {

                var d = data.Output.Results;
                this.mapObj.initStylesAttributesLists(d);
                var cars = this.mapObj.initCarsList(d.Models.Model, null, null, d.Specials);
                var dealers = this.mapObj.initDealersList(cars, d.Dealers.Dealer);
                //console.log(cars);

                var similarCars = new Array();
                for (var i = 0; i < cars.length; i++) {
                    var c = cars[i];
                    if (c.vin == car.vin) continue;
                    if (c.groupName == car.groupName) {
                        similarCars.push(c);
                    }
                    if (similarCars.length > 3) break;
                }
                if (similarCars.length > 0) {
                    this.applyData(similarCars, 1);
                    $(".vehicle-detail-similar").fadeIn(300);
                }
            }.bind(this));

            // See Details Button
            $("#vehicle-detail-page").on("click", ".list-item-inner-wrapper", function () {
                var year = $(this).find('.list-car-btn-detail').attr("data-year");
                var model = $(this).find('.list-car-btn-detail').attr("data-name");
                var url = $(this).find('.list-car-btn-detail').attr("data-url");
                window.location = url;
            });
        }

        // Get the key features from json file or sitecore

    }, {
        key: 'loadKeyFeatures',
        value: function loadKeyFeatures(car) {
            var modelId = car.modelId;
            var ajaxurl = "/webservices/jsonrequest.asmx/Features?modelId=" + modelId;
            // console.log(ajaxurl);
            $.getJSON(ajaxurl, function (data) {
                //console.log(data);
                if (data != null) {
                    if (data.features != undefined) {
                        var features = data.features;
                        var max = 10;
                        var html = "";
                        if (features.length < max) max = features.length;
                        for (var i = 0; i < max; i++) {
                            var dis = '<sup><a class="disclaimer-callout" data-disclaimers-content="' + features[i].disclaimer + '">*</a></sup>';
                            features[i].name = features[i].name.replace("*", dis);
                            html += '<div class="vdo-value">' + features[i].name + '</div>';
                        }
                        $(".vdo-values").html(html);
                        //this.applyData(features, 4);
                    } else console.log(data);
                }
            }.bind(this));
        }

        // Get the monthly payment

    }, {
        key: 'loadMonthlyPayment',
        value: function loadMonthlyPayment(car) {

            var special = null;
            var downpayment = 0;

            //default values
            var apr = 3.5;
            var terms = 60;

            var aprOffer = null;
            var termsOffer = null;

            var hasOffer = false;

            // ** AC ** adding etiv for pop-up calculator
            var etv = 0;

            // ** AC ** setting defaut values for etiv and downpayment
            this.applyData(downpayment, 9);
            this.applyData(etv, 10);

            if (m.specialsObj !== null) {
                console.log("YES OFFER");
                if (m.specialsObj.specialList.length > 0) {

                    special = m.specialsObj.specialList[0];
                    console.log(special);
                    //apr = special.PaymentTerms.FinanceTerms.SampleFinancePayment.SampleAPR;
                    //apr = special.PaymentTerms.FinanceTerms.FinanceTerm[0].APR;
                    // var fterms = special.PaymentTerms.FinanceTerms.FinanceTerm;
                    //console.log('offer terms');
                    //console.log(fterms);
                    var disclaimerTxt = special.SpecialDescription + '<br/>' + special.TermAndConditions;
                    // if (Array.isArray(fterms)) {
                    //     terms = special.PaymentTerms.FinanceTerms.FinanceTerm[0].TermMax;
                    // } else terms = special.PaymentTerms.FinanceTerms.FinanceTerm.TermMax;

                    //console.log('offer terms');
                    //console.log(terms);

                    // ** AC ** setting default values for apr and terms
                    this.applyData(special, 11);
                    this.applyData(disclaimerTxt, 12);
                    this.applyData(apr, 7);
                    this.applyData(terms, 8);

                    var ajaxurl = "/handlers/get-payment-calculator-data.ashx?DownPayment=" + downpayment + "&ComputeFlag=MP&APR=" + apr + "&Term=" + terms + "&MSRP=" + car.dsrp;
                    // console.log(ajaxurl);
                    $.getJSON(ajaxurl, function (data) {

                        var monthlyPayment = data.Output.Results.MonthlyPayment;
                        this.applyData(monthlyPayment, 6);
                    }.bind(this));
                }
            } else {
                // console.log("NO OFFER");
                $.getJSON("/handlers/get-payment-calculator-constants.ashx", function (aprdata) {

                    apr = aprdata.Output.Results.Settings.Setting[7]["#cdata-section"];
                    var ts = aprdata.Output.Results.Settings.Setting[0].Item;
                    for (var i = 0; i < ts.length; i++) {
                        if (ts[i]["@default"] != undefined) {
                            terms = ts[i]["#text"];
                            break;
                        }
                    }

                    // ** AC ** setting default values for apr and terms
                    // console.log('APR : ' + apr);
                    // console.log('TERM LENGTH : ' + terms);
                    this.applyData(apr, 7);
                    this.applyData(terms, 8);

                    var ajaxurl = "/handlers/get-payment-calculator-data.ashx?DownPayment=" + downpayment + "&ComputeFlag=MP&APR=" + apr + "&Term=" + terms + "&MSRP=" + car.dsrp;
                    // console.log(ajaxurl);

                    $.getJSON(ajaxurl, function (data) {

                        var monthlyPayment = data.Output.Results.MonthlyPayment;
                        this.applyData(monthlyPayment, 6);
                    }.bind(this));
                }.bind(this));
            }
        }

        // Satellite Tracking

    }, {
        key: 'trackSatellite',
        value: function trackSatellite(which, dealername) {
            if (dealername != undefined) _satellite.setVar('dealername', dealername);
            _satellite.track(which);
            console.log("_satellite: " + which + " : " + dealername);
        }

        //Model Does Not Exists

    }, {
        key: 'showModelDNE',
        value: function showModelDNE() {
            $(".copy-link-layer").find(".contact-box-btn-x").hide();
            $(".copy-link-layer").find("h4").html("We're sorry, this vehicle is no longer available. Search our inventory to find another Honda that's perfect for you.");
            $(".copy-link-layer").find("a").show();
            $(".contact-overlay").fadeIn(300);
            $(".copy-link-box").fadeIn(300);
        }
    }]);

    return vehicle_details;
}();

/**
 * Plugin for linking multiple owl instances
 * @version 1.0.0
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


(function ($, window, document, undefined) {
    /**
     * Creates the Linked plugin.
     * @class The Linked Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Linked = function Linked(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "dragged.owl.carousel changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings.linked) {
                    this.update(e);
                }
            }, this),
            "linked.to.owl.carousel": $.proxy(function (e, index, speed, standard, propagate) {
                if (e.namespace && this._core.settings.linked) {
                    this.toSlide(index, speed, propagate);
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Linked.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Linked.Defaults = {
        linked: false
    };

    /**
     * Updated linked instances
     */
    Linked.prototype.update = function (e) {
        if (e.page.size == 1) {
            this.toSlide(e.relatedTarget.relative(e.item.index));
        }
    };

    /**
     * Carry out the to.owl.carousel proxy function
     * @param {int} index
     * @param {int} speed
     * @param {bool} propagate
     */
    Linked.prototype.toSlide = function (index, speed, propagate) {

        if (typeof propagate == "undefined") {
            propagate = true;
        }

        var id = this._core.$element.attr("id"),
            linked = this._core.settings.linked.split(",");

        if (index == null || typeof index == 'undefined') {
            index = 0;
        }

        if (propagate) {
            $.each(linked, function (i, el) {
                $(el).trigger("linked.to.owl.carousel", [index, 300, true, false]);
            });
        } else {
            this._core.$element.trigger("to.owl.carousel", [index, 300, true]);

            if (this._core.settings.current) {
                this._core._plugins.current.switchTo(index);
            }
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Linked.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.linked = Linked;
})(window.Zepto || window.jQuery, window, document);

function copyURLToClipboard() {
    var target = jQuery('#this-page-url');

    // make it visible, so can be focused
    target.attr('type', 'text');
    target.focus();
    // select all the text
    target[0].setSelectionRange(0, target.val().length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }

    // hide input again
    target.attr('type', 'hidden');

    return succeed;
}

// Get  recent vehicles
/*
function loadRecentVehicles(){


            var vins=localStorage.vins.split("|");
            var vinstring="";
            if(vins.length>1){
                if(vins.length>4){
                    vins=vins.splice(0,vins.length-4);
                }
                vinstring=vins.join("|");
            }
            else{
                vinstring=vins[0]
            }
            console.log(vins);
            var ajaxurl="/handlers/get-vehicle-details.ashx?vin="+vinstring;

            console.log(ajaxurl);

            $.getJSON(ajaxurl, function( data ) {

                //console.log(data);
                var d=data.Output.Results;
                console.log(d);

                m.initStylesAttributesLists(d);
                var cars=m.initCarsList(d.Models.Model);
                var dealers=m.initDealersList(cars, d.Dealers.Dealer);
                console.log(cars);

                if(cars.length>0)
                {
                    var scope = angular.element($("#vehicle-detail-page")).scope();
                    scope.$apply(function () { scope.recentCars = cars; });
                    //$(".vehicle-detail-similar").fadeIn(300);
                }

            });

}
*/
//# sourceMappingURL=vehicle-details.js.map
