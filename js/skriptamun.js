let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fddba3";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    for(let j = 0; j < 10; j++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
       f.splice(i,1);
       }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
  c.fillStyle = "rgba(30,30,30,1)";
  c.fillRect(0, 0, w, h);
  return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function() {
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);


document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Функция для перелистывания к предыдущему слайду
    function goToPrevSlide() {
        if (currentIndex === 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex--;
        }
        updateSlider(); // Вызываем функцию обновления слайдера
    }

    // Функция для перелистывания к следующему слайду
    function goToNextSlide() {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlider(); // Вызываем функцию обновления слайдера
    }

    // Функция для обновления слайдера
    function updateSlider() {
        // Прячем все слайды
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        // Отображаем активный слайд
        slides[currentIndex].classList.add('active');
    }

    // Обработчики событий для кнопок
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);

    // Вызываем функцию обновления слайдера при загрузке страницы
    updateSlider();
});


 // форма для выбора 
 function showResponse() {
    var selectBox = document.getElementById("answerSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    var responseDiv = document.getElementById("response");

    // Показываем блок с ответом, если выбран вариант ответа
    responseDiv.style.display = selectedValue ? "block" : "none";

    // Определение ответа в зависимости от выбора
    var responseText = "";
    var imageURL = "";
    var buyLink = "";



    if (selectedValue === "Хлыст") {
        responseText = "Хлыст инструмент, используемый всадником для воздействия на лошадь. Он представляет собой гибкую плетеную или кожаную палку с ручкой на одном конце. Хлыст может использоваться для коммуникации с лошадью, указания направления движения, стимулирования или дисциплинирования. Часто хлыст применяется для поддержания ритма и скорости лошади во время соревнований или тренировок. Однако следует помнить, что правильное и бережное использование хлыста важно для обеспечения безопасности и комфорта лошади.";
        imageURL = "ima/хлыст.jpg";
        buyLink = "https://www.joom.ru/ru/best/hlyst-dlya-loshadey";
    } else if (selectedValue === "Шлем") {
        responseText = "Шлем: Специальный головной убор, предназначенный для защиты головы всадника от травм в случае падения или других несчастных случаев при верховой езде. Он обычно имеет жесткую оболочку и мягкую подкладку для амортизации ударов, а также фиксируется под подбородком ремешками для обеспечения надежной посадки на голове. Шлемы для верховой езды должны соответствовать определенным стандартам безопасности и часто используются всадниками на тренировках и соревнованиях.";
        imageURL = "ima/шлем.jpg";
        buyLink = "https://www.wildberries.ru/catalog/83860033/detail.aspx";
    } else if (selectedValue === "Бриджи") {
        responseText = "Бриджи: Стильные и функциональные брюки, созданные специально для верховой езды. Они обладают уникальным дизайном, который обеспечивает комфорт и удобство всаднику во время езды. Бриджи имеют усиленные участки в области коленей и внутренней части бедер, что обеспечивает дополнительную поддержку и защиту во время контакта с лошадью. Кроме того, они обычно имеют узкий крой и эластичный материал, который обеспечивает свободу движений и комфортную посадку в седле. Бриджи - это не только практичная часть экипировки для верховой езды, но и стильный аксессуар, который подчеркивает элегантность и профессионализм всадника.";
        imageURL = "ima/бриджи.jpg";
        buyLink = "https://www.ozon.ru/category/bridzhi-dlya-verhovoy-ezdy-belye/";
    } 

    // Вывод ответа с фотографией и кнопкой "Купить"
    responseDiv.innerHTML = `
    <div class="response-item">
        <div class="response-text">
            <p>${responseText}</p>
            <a class="buy-button" href="${buyLink}" target="_blank">Купить</a>
        </div>
        <div class="response-image">
            <img src="${imageURL}" alt="Фотография">
        </div>
    </div>`;
}


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
    