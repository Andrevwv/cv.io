(function () {
  var mainBlockSections = document.querySelectorAll('.content > section');
  var mainMenuItems = document.querySelectorAll('.menu__button');
  var mainBlock = document.querySelector('.main');
  var menu = document.querySelector('.menu');
  var footer = document.querySelector('footer');

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
      if (activeBlock.offsetHeight > 200) {
          mainBlock.style.height = mainBlockHeight + (activeBlock.offsetHeight - oldBlock.offsetHeight ) + 'px';
      } else {
          mainBlock.style.height = activeBlock.offsetHeight + menu.offsetHeight + footer.offsetHeight + 'px';

      }
  };

    /**
     * Function changes information block corresponding to menu item pressed
     */
  var changeSection = function () {
       for (var j = 0; j < mainMenuItems.length; j++) {
          mainMenuItems[j].addEventListener('click', function (evt) {
              var currentContentBlock = document.querySelector('section.content__' + evt.currentTarget.dataset.id);
              var mainBlockCurrentHeight = mainBlock.offsetHeight;
              addDisabledClass(mainBlockSections);
              currentContentBlock.classList.remove('disabled');
              var oldBlock = removeCurrentItemClass();
              // setMainBlockHeight(currentContentBlock, mainBlockCurrentHeight, document.querySelector('section.' + oldBlock.dataset.id));
              evt.currentTarget.classList.add('menu__button--current');
          });
      }
  };
  // mainBlock.style.height = mainBlock.offsetHeight + 'px';

  changeSection();
})();
