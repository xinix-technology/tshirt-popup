(function ($, window, document) {
	"use strict";

	$.fn.popup = function (options) {
		// Default Settings
		var defaults = {
				url: "",
				id: "popupOverflow",
				target: "",
				type: "inline",
				className: "popupContent",
				animation: "bounceIn",
				iconPrefix: "xn",
				width: "auto",
				height: "auto",
				closeButton: true,
				disableTouchScroll: true
			},
			popup = this,
			settings = $.extend({}, defaults, options);

		this.close = function () {
			$("#" + settings.id).fadeOut(128);
			$("#" + settings.id + " > div > div > div").removeClass("animated " + settings.animation);
		};

		return this.each(function () {
			var elem = $(this),
				url = elem.attr("href");

			// If url is predefine
			if (settings.url !== "") {
				url = settings.url;
			}

			// If target is defined
			if (settings.target !== "") {
				url = url + " " + settings.target;
			}

			elem.click(function (e) {
				// Type of the popup is inline
				if (settings.type === "inline") {
					// Append all the necessary divs
					if ($("#popupOverflow").length === 0) {
						$("body").append("<div id='" + settings.id + "' style='display:none'><div id='popupTable'><div id='popupMargin'></div></div></div>");
					}
					
					// Add loading content
					$("#" + settings.id + " > div > div").html("<div id='popupContent' class='" + settings.className + "'><div class='content'><p class='loading'><i class='" + settings.iconPrefix +" " + settings.iconPrefix +"-circle-o-notch " + settings.iconPrefix +"-spin " + settings.iconPrefix +"-5x'></i></p></div></div>");
					
					// Set Height and Width
					if (settings.width != "auto") {
						$("#" + settings.id + " > div > div > div > div").width (settings.width);
					}
					if (settings.height != "auto") {
						$("#" + settings.id + " > div > div > div > div").height (settings.height);
					}
					
					// Draw close button
					if (settings.closeButton) {
						$("#" + settings.id + " > div > div > div").append("<a href='#' class='close'><i class='" + settings.iconPrefix +" " + settings.iconPrefix +"-close'></i></a>");
					} else {
						$("#" + settings.id + " .close").remove();
					}

					// Display popup and prevent touch scroll event
					$("#" + settings.id).fadeIn(100).on('touchmove', function(e) {
						if (settings.disableTouchScroll) {
							e.preventDefault();
						}
					});

					// Assign close action to close button
					if (settings.closeButton) {
						$("#" + settings.id + " .close").click(function (e) {
							popup.close();
							e.preventDefault();
						});
					}

					// Ajax call
					$("#" + settings.id + " > div > div > div > div").load( url, function( response, status, xhr ) {
						// Ir url is not found or connection is broken
						if ( status === "error" ) {
							if ($("#popupOverflow .close").length === 0) {
								$("#" + settings.id + " > div > div > div").append("<a href='#' class='close'><i class='" + settings.iconPrefix +" " + settings.iconPrefix +"-close'></i></a>");
								$("#" + settings.id + " .close").click(function (e) {
									popup.close();
									e.preventDefault();
								});
							}

							$("#" + settings.id + " > div > div > div").addClass("animated " + settings.animation)
							$("#" + settings.id + " > div > div > div > div").html("<p class='error'><i class='" + settings.iconPrefix +" " + settings.iconPrefix +"-chain-broken " + settings.iconPrefix +"-5x'></i><br />Error while loading your content<br />Please close this popup and try again</p>");

						// Everything is fine so we can load it
						} else {
							if (!settings.closeButton) {
								$("#" + settings.id + " .close").remove();
							}

							// Add animation
							$("#" + settings.id + " > div > div > div").addClass("animated " + settings.animation);
						}
					});
				}

				e.preventDefault();
			});
		});
	};
}(jQuery, window, document));
