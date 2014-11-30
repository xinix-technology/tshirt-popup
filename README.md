T-Shirt Pop Up
==============

T-Shirt Pop Up is a jquery popup plugins made specially with Naked CSS. It's light and responsive.

**Available Configuration**

1. closeButton: true/false, display or hide close button
2. className: "popupContent", class name for outer wrapper of content div
3. type: "inline", type of content, right now it's only inline
4. width: "auto",
5. url: "". Define the url to use.
6. id: "popupOverflow", Id for the popup
7. disableTouchScroll: true/false, Disable scrolling in touch device

**How to use it**

	$("#popup").popup({
		className: "detailPopup",
		closeButton: false
	});

**Available Method**

Close the popup

	$.fn.popup().close();
