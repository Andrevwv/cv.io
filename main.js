(function () {
  var mainBlockSections = document.querySelectorAll('.content > div');
  var mainMenuItems = document.querySelectorAll('.menu__button');
  var menu = document.querySelector('.menu');
  var footer = document.querySelector('footer');
  var content = document.querySelector('.content');
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

    /**
     * Function changes information block corresponding to menu item pressed
     */
  var changeContent = function(target) {
      var currentContentBlock = document.querySelector('div.content__' + target.dataset.id);
      addDisabledClass(mainBlockSections);
      currentContentBlock.classList.remove('disabled');
      removeCurrentItemClass();
      target.classList.add('menu__button--current');
    };

    /**
     * Function add event listeners to menu buttons
     */
  var changeSection = function () {
       for (var j = 0; j < mainMenuItems.length; j++) {
          mainMenuItems[j].addEventListener('click', function (evt) {
              changeContent(evt.currentTarget);
          });

           mainMenuItems[j].parentNode.addEventListener('keydown', function (evt) {
              if (evt.key === 'Enter') {
                  changeContent(evt.currentTarget.querySelector('.menu__button'));
              }
          });
      }
  };

    /**
     * Changes color scheme of the page, when color-button is clicked
     * @param {Node} target
     */
  var changeTheme = function (target) {
      switch (target.dataset.id) {
          case 'red':
              root.style.setProperty('--main-color', '#ce4f4a');
              root.style.setProperty('--selection-color', 'rgba(206, 79, 74, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom, rgba(1, 160, 228,.5) 10%, rgba(209, 58, 41,.5) 90%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;
          case 'gray':
              root.style.setProperty('--main-color', '#424242');
              root.style.setProperty('--selection-color', 'rgba(66, 66, 66, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom, rgba(153, 153, 153,.5) 10%, rgba(22, 22, 22,.5) 90%)';
              mainPhoto.style.filter = 'grayscale(0.9)';
              break;
          case 'blue':
              root.style.setProperty('--main-color', '#2C8BB8');
              root.style.setProperty('--selection-color', 'rgba(0, 125, 188, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom, rgba(157, 72, 99,.5) 10%, rgba(17, 59, 99,.7) 90%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;
          case 'green':
              root.style.setProperty('--main-color', '#5fb522');
              root.style.setProperty('--selection-color', 'rgba(66, 188, 0, 0.99)');
              background.style.backgroundImage = 'linear-gradient(to bottom, rgba(204, 153, 51,.5) 10%, rgba(53, 196, 53,.6) 90%)';
              mainPhoto.style.filter = 'grayscale(0)';
              break;
      }
  };

    /**
     * Changes color scheme of the page, when color-button is clicked
     * @param {event} evt
     */
  var colorButtonClickHandler = function (evt) {
        changeTheme(evt.currentTarget);
  };

  var colorButtonKeyDownHandler = function (evt) {
      if (evt.key === 'Enter') {
          changeTheme(evt.target);
      }
  };

    /**
     * Addes handler to theme switch buttons
     */
  var addHandlerToThemeButtons = function () {
      for (var i = 0; i < themeButtons.length; i++) {
          themeButtons[i].addEventListener('click', colorButtonClickHandler);
          themeButtons[i].parentNode.addEventListener('keydown', colorButtonKeyDownHandler);
      }
  };

  addHandlerToThemeButtons();
  changeSection();
})();
