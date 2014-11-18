(function ($, window, document) {
	"use strict";

	$.fn.popup = function (options) {
		// Default Settings
		var defaults = {
				closeButton: true,
				className: "popupContent",
				type: "inline",
				width: "auto",
				url: "",
				id: "popupOverflow",
				disableTouchScroll: true
			},
			popup = this,
			settings = $.extend({}, defaults, options);

		this.close = function () {
			$("#" + settings.id).fadeOut(128);
			$("#" + settings.id + " > div > div > div").removeClass("animated bounceIn");
		};

		return this.each(function () {
			var elem = $(this),
				url = elem.attr("href");

			// If url is predefine
			if (settings.url !== "") {
				url = settings.url;
			}

			elem.click(function (e) {
				// Type of the popup is inline
				if (settings.type === "inline") {
					$.ajax({
						url: url,
						beforeSend: function () {
							if ($("#popupOverflow").length === 0) {
								$("body").append("<div id='" + settings.id + "' style='display:none'><div id='popupTable'><div id='popupMargin'><div id='popupContent' class='" + settings.className + "' style='width:" + settings.width + "'><div class='content' /></div></div></div></div>");
								if (settings.closeButton) {
									$("#" + settings.id + " > div > div > div").append("<a href='#' class='close'><i class='xn xn-close'></i></a>");
								} else {
									$("#" + settings.id + " .close").remove();
								}
							} else {
								$("#" + settings.id + " > div > div > div > div").html("<p class='loading'><i class='xn xn-circle-o-notch xn-spin xn-5x'></i></p>");
							}

							$("#" + settings.id).fadeIn(100).on('touchmove', function(e) {
								if (settings.disableTouchScroll) {
									e.preventDefault();
								}
							});

							if (settings.closeButton) {
								$("#" + settings.id + " .close").click(function (e) {
									popup.close();
									e.preventDefault();
								});
							}
						},
						error: function () {
							if ($("#popupOverflow .close").length === 0) {
								$("#" + settings.id + " > div > div > div").append("<a href='#' class='close'><i class='xn xn-close'></i></a>");
								$("#" + settings.id + " .close").click(function (e) {
									popup.close();
									e.preventDefault();
								});
							}

							$("#" + settings.id + " > div > div > div").addClass("animated bounceIn")
							$("#" + settings.id + " > div > div > div > div").html("<p class='error'><i class='xn xn-chain-broken xn-5x'></i><br />Error while loading your content<br />Please close this popup and try again</p>");
						}
					}).done(function (element, status) {
						if (!settings.closeButton) {
							$("#" + settings.id + " .close").remove();
						}

						$("#" + settings.id + " > div > div > div").addClass("animated bounceIn")
						$("#" + settings.id + " > div > div > div > div").html($(element));
					});
				}

				e.preventDefault();
			});
		});
	};
}(jQuery, window, document));
