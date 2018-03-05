(function () {
  var mainBlockSections = document.querySelectorAll('.content > section');
  var mainMenuItems = document.querySelectorAll('ul.menu li a');

    /**
     * Adding class disabled to all child nodes of array
     * @param {array} nodesArray array with nodes
      */
  var addDisabledClass = function (nodesArray) {
      for (var i = 1; i < nodesArray.length; i++) {
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

    /**
     * Function changes information block corresponding to menu item pressed
     */
  var changeSection = function () {
       for (var j = 0; j < mainMenuItems.length; j++) {
          mainMenuItems[j].addEventListener('click', function (evt) {
              addDisabledClass(mainBlockSections);
              document.querySelector('section.' + evt.currentTarget.dataset.id).classList.remove('disabled');
              removeCurrentItemClass();
              evt.currentTarget.classList.add('current-menu-item');
          });
      }
  };

  changeSection();
})();
