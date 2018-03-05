(function () {

  var contentBlocks = document.querySelectorAll('.main__block > section');
  var mainMenu = document.querySelectorAll('ul.menu');

    /**
     * Добавляет всем дочерним элементам переданного массиваэлементам класс disabled
     * @param {array} nodesArray массив с нодами
      */
  var addDisabledClass = function (nodesArray) {
      for (var i = 1; i < nodesArray.length; i++) {
          if (!nodesArray[i].classList.contains('disabled')) {
              nodesArray[i].classList.add('disabled');
          }
      }
  };

  for (var j = 0; j < mainMenu.length; j++) {
      mainMenu[j].addEventListener('click', function (evt) {
          var mainMenu = document.querySelectorAll('ul.menu');
          addDisabledClass(contentBlocks);
          if (evt.target.tagName.toLowerCase() === 'div') {
              document.querySelector('section.' + evt.target.parentNode.dataset.id).classList.remove('disabled');
              evt.target.classList.add('current-menu-item');
          } else {
              document.querySelector('section.' + evt.target.dataset.id).classList.remove('disabled');
              evt.target.classList.add('current-menu-item');
          }
      });
  }
})();
