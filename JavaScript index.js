$(function() {
  $('#bookmarkme').click(function() {
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
  });
});

<script type="text/javascript">
    $(function() {
        $("#bookmarkme").click(function() {
            // Mozilla Firefox Bookmark
            if ('sidebar' in window && 'addPanel' in window.sidebar) { 
                window.sidebar.addPanel(location.href,document.title,"");
            } else if( /*@cc_on!@*/false) { // IE Favorite
                window.external.AddFavorite(location.href,document.title); 
            } else { // webkit - safari/chrome
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
            }
        });
    });
</script>

// Функция добавления страницы в избранное

function addToFavorites() {

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  favorites.push(window.location.href);
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  }
  
  // Обработчик клика на кнопку "Добавить в избранное"
  
  document.getElementById('add-to-favorites').addEventListener('click', addToFavorites);
  
  // Функция создания списка избранных элементов
  
  function createFavoritesList() {
  
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  const list = document.getElementById('favorites-list');
  
  favorites.forEach((favorite) => {
  });

}

// Обработчик события onload для загрузки списка избранных элементов

window.addEventListener('load', createFavoritesList);

// Получаем элемент кнопки
var myButton = document.getElementById("myButton");

// Добавляем обработчик событий на клик по кнопке
myButton.addEventListener("click", function(event) {
  // Отменяем стандартное поведение браузера
  event.preventDefault();

  // Открываем всплывающее окно
  // ...
});


// Получить ссылку на кнопку "Закрыть окно"
var closeButton = document.getElementById("closeButton");

// Добавить обработчик события на клик по кнопке
closeButton.addEventListener("click", function(event) {
  // Отменить стандартное поведение браузера
  event.preventDefault(); 
  
  // Закрыть всплывающее окно
  // ... 

  // Вернуться на место, где находился пользователь
  history.pushState(null, null, window.location.pathname + window.location.search);
});

// Получить ссылку на объект, который имеет метод disableAutoscroll ()
let myObject = document.getElementById("my-object");

// Вызвать метод disableAutoscroll ()
myObject.disableAutoscroll();

// Добавить обработчик события клика для кнопки, чтобы вызвать метод
let disableAutoscrollBtn = document.getElementById("disable-autoscroll-btn");
disableAutoscrollBtn.addEventListener("click", function() {
myObject.disableAutoscroll();
});











