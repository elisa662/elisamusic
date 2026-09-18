window.addEventListener("load", function(event) {
/* Changes the color of the Hamburg when it is over a certain element  */

  function selectorSearch (hamburger, selector) {
		[].forEach.call(hamburger, function(div) {
			// do whatever
			div.style.backgroundColor = window.getComputedStyle(selector).getPropertyValue('color');
		});
	}
  
  function toggleNavigationColor (selector, element) {
		try {
			var toggleNavigation = selector;
			if(element === 'style') {
				toggleNavigation.removeAttribute("style");
			} else {
				toggleNavigation.style.backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');
				toggleNavigation.style.opacity = '0.75';
			}
		} catch (e){
			//instruction
		}
		
	}
  
  function removeAddClasses (element, addClass, removeClasse) {
    var element = element;
    element.classList.add(addClass);
    element.classList.remove(removeClasse);
  }

  function checkIfValueIsFulfilled (element, hamburgerContainer, hamburgerLines,  addClass, removeClasse) {
		
		const DIFFERENCE_PADDING = 100;
		
		var scrollPosition = window.pageYOffset;
		var elementHeight = parseInt(window.getComputedStyle(element).height) + element.offsetTop + parseInt(window.getComputedStyle(element).getPropertyValue('padding-bottom')) + parseInt(window.getComputedStyle(element).getPropertyValue('padding-top'));
		
		if(element.offsetTop > 0) {
		  if( scrollPosition >= element.offsetTop && scrollPosition <= elementHeight) {
				removeAddClasses(hamburgerLines, addClass, removeClasse);
				toggleNavigationColor(hamburgerContainer, element);
			}
		} // Check has Element cm_empty
	}

	function changeBurgerColor () {
		var contentSelector = document.querySelector('.cm-template-content'),
        keyvisualSelector = document.querySelector('.keyvisual_wrapper'),
        headerSelector = document.querySelector('.head_wrapper'),
				sidebarOneSelector = document.querySelector('.sidebar_wrapper_top'),
				sidebarTwoSelector = document.querySelector('.sidebar_wrapper_bottom'),
        sidebarthreeSelector = document.querySelector('.sidebar_wrapper_bottom_background'),
				footerSelector = document.querySelector('.footer_wrapper'),
				hamburgerContainer = document.querySelector('.toggle_navigation'),
				hamburgerLines = document.querySelector('.hamburger-inner'),
				scrollPosition = window.pageYOffset;
		
		const BREAKPOINT = 1250;
		
    if(window.innerWidth <= BREAKPOINT) {
		  	
			checkIfValueIsFulfilled(sidebarOneSelector, hamburgerContainer, hamburgerLines, 'hamburger-inner-sidebarcolor', 'hamburger-inner-contentcolor');
      checkIfValueIsFulfilled(contentSelector, hamburgerContainer, hamburgerLines, 'hamburger-inner-contentcolor', 'hamburger-inner-sidebarcolor');
			checkIfValueIsFulfilled(sidebarTwoSelector, hamburgerContainer, hamburgerLines, 'hamburger-inner-sidebarcolor', 'hamburger-inner-contentcolor');
			checkIfValueIsFulfilled(sidebarthreeSelector, hamburgerContainer, hamburgerLines, 'hamburger-inner-sidebarcolor', 'hamburger-inner-contentcolor');
			checkIfValueIsFulfilled(footerSelector, hamburgerContainer, hamburgerLines, 'hamburger-inner-sidebarcolor', 'hamburger-inner-contentcolor');
      
      if(parseInt(window.getComputedStyle(keyvisualSelector).height) > 0) {
        var removeSelectorClasses = keyvisualSelector;
      } else {
        var removeSelectorClasses = headerSelector;
      }
      
      if(scrollPosition <= (removeSelectorClasses.offsetTop + parseInt(window.getComputedStyle(removeSelectorClasses).height))) {
        hamburgerContainer.removeAttribute("style");
				hamburgerLines.classList.remove('hamburger-inner-sidebarcolor', 'hamburger-inner-contentcolor');
      }
			
	  } // if Breakpoint 
	} // function

	window.addEventListener('scroll', function(e) {
		changeBurgerColor();
	});
	window.addEventListener('resize', function(e) {
		changeBurgerColor();
	});
});