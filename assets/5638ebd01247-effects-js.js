jQuery(document).ready(function () {

	// add fontAwesome arrow for subnavigation
	var hasSubnavigationMobile = document.querySelectorAll('.mobile_navigation .cm_has_subnavigation');

	if(hasSubnavigationMobile.length > 0) {
		for (var designSubnavigationPoints = 0; designSubnavigationPoints < hasSubnavigationMobile.length; designSubnavigationPoints++ ) {
			hasSubnavigationMobile[designSubnavigationPoints].insertAdjacentHTML('beforeend', '<span class="cm-templates-icon__arrow-mobile fas fa-angle-down"></span>');
		}
	}

	//Open 2nd + 3rd Layer Nav on Click
	var subNavigationArrow = document.querySelectorAll('.mobile_navigation .cm_has_subnavigation .cm-templates-icon__arrow-mobile');

	if(subNavigationArrow.length > 0) {
		for (var x = 0; x < subNavigationArrow.length; x++ ) {
			subNavigationArrow[x].addEventListener('click', function() {
				this.parentNode.classList.toggle('cm-templates-navigation--open-subnav');
			});
		}
	}

	/* **************************** */
	// Change color of burgerbutton - only bigger at 651px
	var browserWidth = jQuery(window).width();
	jQuery(window).resize(function () {
		breite = jQuery(window).width();
	});

	var triangle = document.querySelectorAll('.triangle'),
		index;

	// set visibility hidden to transparent triangles
	function removeTriangle() {
		for (var angle = 0; angle < triangle.length; angle++) {
			var elmStyle = window.getComputedStyle(triangle[angle]);
			if (elmStyle.getPropertyValue("border-color") === "rgba(0, 0, 0, 0)" && !document.body.classList.contains('cm-edit')) {
				triangle[angle].classList.add('cm-triangle--hidden');
			} else if (elmStyle.getPropertyValue("border-top-color") === "rgba(0, 0, 0, 0)" && elmStyle.getPropertyValue("border-right-color") === "rgba(0, 0, 0, 0)" && !document.body.classList.contains('cm-edit')) {
				triangle[angle].classList.add('cm-triangle--hidden');
			}
		}
	}

	// GET OFFSETHEIGHT FOR TRIANGLE
	function calcMargin() {
		var triangleHeight = triangle[0].getBoundingClientRect().height;
		//triangleHeight = triangleHeight - 1;

		for (index = 0; index < triangle.length; index++) {
			if (triangle[index].classList.contains('cm-templates-triangle--bottom')) {
				triangle[index].style.marginBottom = '-' + triangleHeight + "px";
			} else if (triangle[index].classList.contains('cm-templates-triangle--top')) {
				triangle[index].style.marginTop = '-' + triangleHeight + "px";
			}
		}
	}

	window.onresize = function () {
		calcMargin();
		removeTriangle();
	};

	calcMargin();
	removeTriangle();

	// SET PSEUDO ARROW FOR SUBNAVI
	jQuery(".cm-templates-header .navigation_wrapper > ul > li.cm_has_subnavigation > a").each(function () {
		jQuery(this).append(" <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>");
	});

	// SET PSEUDO ARROW FOR SUBNAVI
	jQuery(".cm-templates-header .navigation_wrapper > ul > li > ul > li.cm_has_subnavigation > a").each(function () {
		jQuery(this).append(" <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>");
	});

	//Toggle Mobile Navigation
	jQuery('.toggle_navigation').click(function () {
		//jQuery('.mobile_navigation').css('visibility', 'visible');
		jQuery('body').toggleClass('open_mobile_navigation');
		jQuery('body .toggle_navigation .hamburger').toggleClass('is-active');
		jQuery('.mobile_navigation').toggleClass('open_mobile_navigation');
	});

	jQuery('.mobile_navigation ul li.cm_has_subnavigation a').click(function () {
		jQuery(this).toggleClass('open_mobile_navigation_level');
	});

	/* **************************** */
	// This feature hides elements on the web page
	function setCmEmptyForElements(elements, hiddenElement, switchVariable, type, cssAttribute, cssValue, cssClass) {

		function elementsAddClass(elements) {
			jQuery(elements).addClass('cm-templates-empty');
		}

		function hiddenElementAddClass(hiddenElement) {
			jQuery(hiddenElement).addClass('cm-templates-empty');
		}

		//cm-empty - The function knows inline style or class
		function setCssAttributes(element, type, cssAttribute, cssValue, cssClass) {
			if (type == 'cssInlineStyle') {
				jQuery(element).css(cssAttribute, cssValue);
			} else if (type == 'addClass') {
				jQuery(element).addClass(cssClass);
			}
		}

		function setCmEmptyMultiElements(element, hiddenElement) {
			var stringArray = new Array();
			for (i = 0; i < element.length; i++) {
				stringArray[i] = "jQuery('" + element[i] + "').hasClass('cm_empty')";
			}

			var queryVarsArray = '';
			for (z = 0; z < stringArray.length; z++) {
				queryVarsArray += stringArray[z];
				if (z < (stringArray.length - 1)) {
					queryVarsArray += ' && ';
				}
			}

			if (queryVarsArray) {
				jQuery(hiddenElement).addClass('cm-templates-empty');
			}
		}

		//check is elments empty
		if (elements != '') {
			//check has element cm-empty
			if (jQuery(elements).hasClass('cm_empty')) {
				switch (switchVariable) {
					// Element is empty -> get element class cm-templates-empty
					case '1':
						elementsAddClass(elements);
						break;
					case '2':
						elementsAddClass(elements);
						setCssAttributes(elements, type, cssAttribute, cssValue, cssClass);
						break;
					case '3':
						elementsAddClass(elements);
						setCssAttributes(hiddenElement, type, cssAttribute, cssValue, cssClass);
						break;
					case '4':
						hiddenElementAddClass(hiddenElement);
						break;
					case '5':
						hiddenElementAddClass(hiddenElement);
						setCssAttributes(hiddenElement, type, cssAttribute, cssValue, cssClass)
						break;
					case '6':
						hiddenElementAddClass(hiddenElement);
						setCssAttributes(elements, type, cssAttribute, cssValue, cssClass)
						break;
					case '7':
						setCmEmptyMultiElements(['#widgetbar_page_5', '#widgetbar_site_6'], '.sidebar_wrapper_bottom_background');
						break;
				}
			}
		}
	}

	//Find last Navigation point in a row
	function checkLastNaviItem(naviElement, elementSelector, mobilBreakPoint) {
		var naviElement = document.querySelectorAll(naviElement);
		naviItemArray = Array.prototype.slice.call(naviElement),
			naviSelector = document.querySelector(elementSelector),
			windwoWidth = window.innerWidth;

		if (windwoWidth > mobilBreakPoint) {
			for (var item in naviItemArray) {
				if ((naviSelector.offsetWidth - (naviItemArray[item].offsetLeft + naviItemArray[item].offsetWidth)) < 184) {
					naviItemArray[item].classList.add('cm-template-navigation__row-last-item');
				} else if ((naviSelector.offsetWidth - (naviItemArray[item].offsetLeft + naviItemArray[item].offsetWidth)) > 185) {
					naviItemArray[item].classList.remove('cm-template-navigation__row-last-item');
				}
			}
		}
	}

	checkLastNaviItem('#cm_navigation > ul > li', '#cm_navigation', 1199);

	jQuery(window).resize(function () {
		checkLastNaviItem('#cm_navigation > ul > li', '#cm_navigation', 1199);
	});

	function cm_emptyKeyvisual() {
		var headerheight = 82,
			triangleBottomLeft = jQuery('.head_wrapper > .triangleBottomLeft').css('border-top-width'),
			triangleBottomLeftColor = jQuery('.head_wrapper > .triangleBottomLeft').css('border-top-color'),
			alpha = parseFloat(triangleBottomLeftColor.split(',')[3]),
			resultHeight;

		if (window.innerWidth > 1201) {
			headerheight = jQuery('.head_wrapper').height();
		} else {
			headerheight = 80;
		}
		if (isNaN(alpha) || alpha > 0) {
			resultHeight = (parseInt(headerheight) + parseInt(triangleBottomLeft));
		} else {
			resultHeight = parseInt(headerheight);
		}

		if (jQuery('#keyvisual').hasClass('cm_empty')) {
			jQuery('.title_wrapper').addClass('cm-template-title-container--cm-empty');
			if (jQuery('#title').hasClass('cm_empty') && jQuery('#subtitle').hasClass('cm_empty')) {
				jQuery('.cm-template-keyvisual').css('height', resultHeight + 'px');
				jQuery('.sidebar_wrapper_top').addClass('sidebar_wrapper_top__empty_triangle');
			}
			if (jQuery('.title_wrapper').not('.cm_empty')) {
				jQuery('.keyvisual_wrapper').addClass('cm-template-keyvisual__cm-empty');
			}
		}
	}

	jQuery(window).resize(function () {
		cm_emptyKeyvisual();
	});

	setTimeout(function () {
		//cm-empty
		//1. elements - 2. hiddenElements - 3. switchVariable - 4. type - 5. cssAttribute - 6. cssValue - 7. cssClass
		setCmEmptyForElements('.cm-templates-logo', '.navigation_wrapper', '3', 'cssInlineStyle', 'margin', '0 auto', '');
		setCmEmptyForElements('.cm-templates-footer', '', '1', '', '', '', '');
		setCmEmptyForElements('.sidebar_wrapper_bottom_background', '', '1', '', '', '', '');
		setCmEmptyForElements('.sidebar_wrapper_top', '', '1', '', '', '', '');
		setCmEmptyForElements('.sidebar_wrapper_bottom', '', '1', '', '', '', '');
		setCmEmptyForElements('.footer_wrapper', '', '1', '', '', '', '');
		setCmEmptyForElements('.title', '', '1', '', '', '', '');
		setCmEmptyForElements('.subtitle', '', '1', '', '', '', '');
		setCmEmptyForElements('.title_wrapper', '', '1', '', '', '', '');

		if (jQuery('.cm-templates-logo').hasClass('cm_empty')) {
			jQuery('.cm-templates-header').addClass('cm-templates-header-fixheight--mobil');
		}

		if (jQuery('.sidebar_wrapper_bottom').hasClass('cm_empty')) {
			if (jQuery('.sidebar_wrapper_bottom_background').hasClass('cm_empty')) {
				triangle[5].classList.remove('cm-templates-triangle--top');
				jQuery('.footer_wrapper').addClass('cm-templates-footer--change-margin');

				jQuery('.widthWrapper').css('padding', '60px 0');

				jQuery('.footer_wrapper .triangleTopLeft').css('position', 'inherit');
			} else {
				if (!triangle[3].classList.contains('cm-triangle--hidden') || !triangle[4].classList.contains('cm-triangle--hidden')) {
					jQuery('.sidebar_wrapper_bottom_background').addClass('cm-templates-triangle--change-margin');
					jQuery('.sidebar_wrapper_bottom_background .triangleTopLeft').css('position', 'inherit');
				}
				jQuery('.sidebar_wrapper_bottom').addClass('cm-templates-empty');
				triangle[4].classList.remove('cm-templates-triangle--top');
			}
		}

		if (jQuery('.sidebar_wrapper_bottom').hasClass('cm_empty') && jQuery('.sidebar_wrapper_bottom_background').hasClass('cm_empty') && jQuery('.footer_wrapper').hasClass('cm_empty')) {
			jQuery('.cm-template-content .triangleBottomLeft').addClass('cm-templates-empty');
		}

		cm_emptyKeyvisual();

	}, 100);
	jQuery(window).load(function () {

	});

});



