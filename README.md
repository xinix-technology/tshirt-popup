T-Shirt Pop Up
==============

T-Shirt Pop Up is a jquery popup plugins made specially with Naked CSS. It's light and responsive.

**Available Configuration**

1. closeButton: true/false, display or hide close button
2. closeOutside: true/false, make the shade area close the popup on click
3. className: "popupContent", class name for outer wrapper of content div
4. animation: "bounceIn", see animate.css for available animation class
5. type: "inline", type of content, right now it's only inline
6. width: "auto", set the width based of number, px or %
7. height: "auto", set the height based of number, px or %
8. url: "". Define the url to use.
9. id: "popupOverflow", Id for the popup
10. disableTouchScroll: true/false, Disable scrolling in touch device
11. iconPrefix: "xn", font-awesome icon prefix
12. target: "", set selector name for target content both external link or internal element
13. onClick: function () {}, a callback that fired after popup trigger element clicked (almost like on enter)
14. onClose: function () {}, a callback that fired after the popup window being closed
15. afterLoad: function () {}, a callback that fired after all the necessary element loaded (if ajax) and randered


**How to use it**

	$("#popup").popup({
		className: "detailPopup",
		closeButton: false
	});

**Available Method**

Close the popup

	$.fn.popup().close();

**Todo**

1. Load url inside iframe
2. Load youtube or vimeo video
3. Gallery functionality
4. Width becomes auto when the window size is smaller than defined width
