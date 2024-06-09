
// Функция для плавного скроллинга наверх
function scrollToTop() {
// Получаем текущую позицию прокрутки
const scrollStep = -window.scrollY / (500 / 15); // 500 - время скроллинга (в миллисекундах), 15 - скорость прокрутки
const scrollInterval = setInterval(function(){
  if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep); // Прокручиваем страницу вверх
  } else {
      clearInterval(scrollInterval); // Останавливаем прокрутку, когда достигнут верх страницы
  }
}, 15); // Интервал скроллинга (в миллисекундах)
}
