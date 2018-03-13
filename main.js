(function () {
  var mainBlockSections = document.querySelectorAll('.content > div');
  var mainMenuItems = document.querySelectorAll('.menu__button');
  var mainBlock = document.querySelector('.main');
  var menu = document.querySelector('.menu');
  var footer = document.querySelector('footer');
  var content = document.querySelector('.content');
  var menuHeight = menu.offsetHeight;
  var footerHeight = footer.offsetHeight;
  var themeButtons = document.querySelectorAll('.theme__color-button');
  var root = document.documentElement;
  var background = document.querySelector('.background');
  var mainPhoto = document.querySelector('.main__photo');

    /**
     * Adding class disabled  to all child nodes of array
     * @param {array} nodesArray array with nodes
      */
  var addDisabledClass = function (nodesArray) {
      for (var i = 0; i < nodesArray.length; i++) {
          if (!nodesArray[i].classList.contains('disabled')) {
              nodesArray[i].classList.add('disabled');
          }
      }
  };

    /**
     * Removes menu__button--current class from non-active menu item
     */
  var removeCurrentItemClass = function () {
      var currentMenuItem = null;
      for (var i = 0; i < mainMenuItems.length; i++) {
          if (mainMenuItems[i].classList.contains('menu__button--current')) {
              currentMenuItem = mainMenuItems[i];
              mainMenuItems[i].classList.remove('menu__button--current');
          }
      }
      return currentMenuItem;
  };

  var setMainBlockHeight = function (activeBlock, mainBlockHeight, oldBlock) {
      // if (activeBlock.offsetHeight > 200) {
      //     mainBlock.style.height = mainBlockHeight + (activeBlock.offsetHeight - oldBlock.offsetHeight ) + 'px';
      // } else {
      console.log(activeBlock.parentNode.offsetHeight);
          mainBlock.style.height = activeBlock.parentNode.offsetHeight + menuHeight + footerHeight + 'px';
      // }
  };

    /**
     * Function changes information block corresponding to menu item pressed
     */
  var changeSection = function () {
       for (var j = 0; j < mainMenuItems.length; j++) {
          mainMenuItems[j].addEventListener('click', function (evt) {
              var currentContentBlock = document.querySelector('div.content__' + evt.currentTarget.dataset.id);
              var mainBlockCurrentHeight = mainBlock.offsetHeight;
              addDisabledClass(mainBlockSections);
              currentContentBlock.classList.remove('disabled');
              var oldBlock = removeCurrentItemClass();
              // setMainBlockHeight(currentContentBlock, mainBlockCurrentHeight, document.querySelector('div.' + oldBlock.dataset.id));
              evt.currentTarget.classList.add('menu__button--current');
          });
      }
  };

    /**
     * Changes color scheme of the page, when color-button is clicked
     * @param {event} evt
     */
  var colorButtonClickHandler = function (evt) {
      switch (evt.target.dataset.id) {
          case 'red':
              root.style.setProperty('--main-color', '#ce4f4a');
              root.style.setProperty('--selection-color', 'rgba(206, 79, 74, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom right, rgba(1, 160, 228,.8), rgba(255,0,0,0) 40%), linear-gradient(to bottom left, rgba(1, 160, 228,.8), rgba(0,255,0,0) 40%), linear-gradient(to top, rgba(209, 58, 41,.8), rgba(0,0,255,0) 40%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;
          case 'gray':
              root.style.setProperty('--main-color', '#424242');
              root.style.setProperty('--selection-color', 'rgba(66, 66, 66, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom right, rgba(153, 153, 153,.8), rgba(255,0,0,0) 40%), linear-gradient(to bottom left, rgba(153, 153, 153,.8), rgba(0,255,0,0) 40%), linear-gradient(to top, rgba(22, 22, 22,.8), rgba(0,0,255,0) 40%)';
              mainPhoto.style.filter = 'grayscale(0.9)';
              break;
          case 'blue':
              root.style.setProperty('--main-color', '#2C8BB8');
              root.style.setProperty('--selection-color', 'rgba(0, 125, 188, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom right, rgba(157, 72, 99,.8), rgba(255,0,0,0) 40%), linear-gradient(to bottom left, rgba(157, 72, 99,.8), rgba(0,255,0,0) 40%), linear-gradient(to top, rgba(17, 59, 99,.8), rgba(0,0,255,0) 40%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;
          case 'green':
              root.style.setProperty('--main-color', '#5fb522');
              root.style.setProperty('--selection-color', 'rgba(66, 188, 0, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom right, rgba(204, 153, 51,.8), rgba(255,0,0,0) 40%), linear-gradient(to bottom left, rgba(204, 153, 51,.8), rgba(0,255,0,0) 40%), linear-gradient(to top, rgba(51, 153, 51,.8), rgba(0,0,255,0) 40%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;

      }
  };

    /**
     * Addes handler to theme switch buttons
     */
  var addHandlerToThemeButtons = function () {
      for (var i = 0; i < themeButtons.length; i++) {
          themeButtons[i].addEventListener('click', colorButtonClickHandler);
      }
  };

    addHandlerToThemeButtons();
  // mainBlock.style.height = mainBlock.offsetHeight + 'px';
  changeSection();
})();
