(function () {
  var mainBlockSections = document.querySelectorAll('.content > div');
  var mainMenuItems = document.querySelectorAll('.menu__button');
  var mainBlock = document.querySelector('.main');
  var menu = document.querySelector('.menu');
  var footer = document.querySelector('footer');
  var content = document.querySelector('.content');
  var menuHeight = menu.offsetHeight;
  var footerHeight = footer.offsetHeight;
  var themeButtons = document.querySelectorAll('.color-button');
  var root = document.documentElement;
  var background = document.querySelector('.background');

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
              background.style.backgroundImage = 'linear-gradient(10deg, rgba(255, 255, 255, 0) 75%, #333 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 75%, #333 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 51%, #01a0e4 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 51%, #01a0e4 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 1%, #d13a29 1%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 1%, #d13a29 1%)';
              break;
          case 'gray':
              root.style.setProperty('--main-color', '#424242');
              root.style.setProperty('--selection-color', 'rgba(66, 66, 66, 0.99)');
              background.style.backgroundImage = 'linear-gradient(10deg, rgba(255, 255, 255, 0) 75%, #161616 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 75%, #161616 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 51%, #999999 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 51%, #999999 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 1%, #161616 1%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 1%, #161616 1%)';
              break;
          case 'blue':
              root.style.setProperty('--main-color', '#2C8BB8');
              root.style.setProperty('--selection-color', 'rgba(0, 125, 188, 0.99)');
              background.style.backgroundImage = 'linear-gradient(10deg, rgba(255, 255, 255, 0) 75%, #E42E77 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 75%, #E42E77 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 51%, #FFE833 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 51%, #FFE833 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 1%, #2C8AB8 1%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 1%, #2C8AB8 1%)';
              break;
          case 'green':
              root.style.setProperty('--main-color', '#5fb522');
              root.style.setProperty('--selection-color', 'rgba(66, 188, 0, 0.99)');
              background.style.backgroundImage = 'linear-gradient(10deg, rgba(255, 255, 255, 0) 75%, #48268C 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 75%, #48268C 75%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 51%, #CD9227 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 51%, #CD9227 51%), linear-gradient(10deg, rgba(255, 255, 255, 0) 1%, #5FB522 1%), linear-gradient(-10deg, rgba(255, 255, 255, 0) 1%, #5FB522 1%)';

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
