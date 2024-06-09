(function () {
    'use strict';
    window.addEventListener('load', function () {
      var canvas = document.getElementById('canvas');
  
      if (!canvas || !canvas.getContext) {
        return false;
      }
  
      /********************
        Random Number
      ********************/
  
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      /********************
        Var
      ********************/
  
      var ctx = canvas.getContext('2d');
      var X = canvas.width = window.innerWidth;
      var Y = canvas.height = window.innerHeight;
      var mouseX = null;
      var mouseY = null;
      var shapeNum = 300;
      var shapes = [];
      var style = {
        black: 'black',
        white: 'white',
        lineWidth: 4,
      };
  
      /********************
        Animation
      ********************/
  
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(cb) {
          setTimeout(cb, 17);
        };
  
      /********************
        Shape
      ********************/
       
      function Shape(ctx, x, y) {
        this.ctx = ctx;
        this.init(x, y);
      }
      
      Shape.prototype.init = function(x, y) {
        this.x = x;
        this.y = y;
        this.r = rand(10, 25);
        this.ga = Math.random() * Math.random() * Math.random() * Math.random();
        this.v = {
          x: Math.random(),
          y: -1
        };
        this.l = rand(0, 20);
        this.sl = this.l;
      };
  
      Shape.prototype.updateParams = function() {
        var ratio = this.l / this.sl;
        //this.r *= ratio;
        this.l -= 1;
        if (this.l < 0) {
          this.init(X * (Math.random() + Math.random()) / 2, rand(0, Y));
        }
      };
  
      Shape.prototype.updatePosition = function() {
        this.x += Math.random(); // Движение влево
        this.y += -Math.random(); // Движение вверх

        // Проверяем, чтобы частица не выходила за пределы canvas по горизонтали
        if (this.x < 0) {
          this.x = 0;
        }
      };
      
      Shape.prototype.draw = function() {
        var ctx  = this.ctx;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.ga;
        //ctx.fillStyle = 'rgb(123, 252, 100)';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      };
  
      Shape.prototype.render = function(i) {
        this.updatePosition();
        this.updateParams();
        this.draw();
      };
  
      for (var i = 0; i < shapeNum; i++) {
        var s = new Shape(ctx, X * (Math.random() + Math.random()) / 2, rand(0, Y));
        shapes.push(s);
      }
  
      /********************
        Render
      ********************/
      
      function render() {
        ctx.clearRect(0, 0, X, Y);
        for (var i = 0; i < shapes.length; i++) {
          shapes[i].render(i);
        }
        requestAnimationFrame(render);
      }
  
      render();
  
      /********************
        Event
      ********************/
      
      function onResize() {
        X = canvas.width = window.innerWidth;
        Y = canvas.height = window.innerHeight;
      }
  
      window.addEventListener('resize', function() {
        onResize();
      });
  
      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, false);
  
    });
  })();

      const modal = document.getElementById("myModal");
      const modalImg = document.getElementById("modalImage");
      const span = document.getElementsByClassName("close")[0];
  
      document.querySelectorAll('th, td').forEach(cell => {
          cell.addEventListener('click', () => {
              const imageSrc = cell.getAttribute('data-image');
              if (imageSrc) {
                  modalImg.src = imageSrc;
                  modal.style.display = "block";
              }
          });
      });
  
      span.onclick = function() {
          modal.style.display = "none";
      }
  
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }


  function toggleSlide(slideNumber) {
    var slide1 = document.getElementById("slideContainer1");
    var slide2 = document.getElementById("slideContainer2");
    
    if (slideNumber === 1) {
      slide1.style.display = (slide1.style.display === "block") ? "none" : "block";
      slide2.style.display = "none";
    } else if (slideNumber === 2) {
      slide2.style.display = (slide2.style.display === "block") ? "none" : "block";
      slide1.style.display = "none";
    }
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
  