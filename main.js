(function () {
  var mainBlockSections = document.querySelectorAll('.content > section');
  var mainMenuItems = document.querySelectorAll('.menu__button');
  var mainBlock = document.querySelector('.main__block');

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
     * Removes current-menu-item class from non-active menu item
     */
  var removeCurrentItemClass = function () {
      for (var i = 0; i < mainMenuItems.length; i++) {
          if (mainMenuItems[i].classList.contains('current-menu-item')) {
              mainMenuItems[i].classList.remove('current-menu-item');
          }
      }
  };

  var setMainBlockHeight = function (activeBlock, mainBlockHeight) {
  mainBlock.height = mainBlockHeight + (activeBlock.offsetHeight - (mainBlockHeight - mainBlock.minHeight))
  };

    /**
     * Function changes information block corresponding to menu item pressed
     */
  var changeSection = function () {
       for (var j = 0; j < mainMenuItems.length; j++) {
          mainMenuItems[j].addEventListener('click', function (evt) {
              var currentContentBlock = document.querySelector('section.' + evt.currentTarget.dataset.id);
              var mainBlockCurrentHeight = mainBlock.offsetHeight;
              addDisabledClass(mainBlockSections);
              currentContentBlock.classList.remove('disabled');
              setMainBlockHeight(currentContentBlock, mainBlockCurrentHeight);
              removeCurrentItemClass();
              evt.currentTarget.classList.add('current-menu-item');
          });
      }
  };
  mainBlock.height = mainBlock.offsetHeight;
  changeSection();
})();
