// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }
document.addEventListener('scroll', onScroll);
function onScroll(event){
    const currPos = window.scrollY;
    const divs = document.querySelectorAll('#body>div');
    
    const links = document.querySelectorAll('#menu>a');
    const linksMobile = document.querySelectorAll('ul.mobilMenuList a');
    //console.log(linksMobile);
    //console.log(currPos);
    document.querySelectorAll('body>div').forEach((el) => {
        //console.log(el);
        //debugger;
        if(el.offsetTop-64 <= currPos && (el.offsetTop +el.offsetHeight) >currPos){
            linksMobile.forEach((a) =>{
                a.classList.remove('activeMenuTag');
                if(el.getAttribute('rel')===a.getAttribute('href').substring(1)){
                    a.classList.add('activeMenuTag');
                }
            })
       }


         if(el.offsetTop-64 <= currPos && (el.offsetTop +el.offsetHeight) >currPos){
             links.forEach((a) =>{
                 a.classList.remove('activeMenuTag');
                 if(el.getAttribute('rel')===a.getAttribute('href').substring(1)){
                     a.classList.add('activeMenuTag');
                 }
             })
        }
    });
}


window.onload = function() {
    addSelectRedTagMenu();
    addSelectedPortfolioTag();
    //setInterval();
    //turnScreenPhoneVert();
    addSelectRedPortfolioImage();
}


const addSelectRedTagMenu = () => {
    document.querySelector('.menu').addEventListener('click', (e) => {
        if (e.target.classList.contains('tagMenu')){
            let clickedMenuItem = e.target;
            removeInactiveMenuTag();
            addActiveMenuTag(clickedMenuItem);
        }
    })
}
const removeInactiveMenuTag = () =>{
    let tagsMenu = document.querySelectorAll('.tagMenu');
    
    tagsMenu.forEach(tag => {
        tag.classList.remove('activeMenuTag');
        tag.classList.add('inactiveMenu');
    });
}

const  addActiveMenuTag = (clickedMenuItem) => {
    clickedMenuItem.classList.add('activeMenuTag');
    clickedMenuItem.classList.remove('inactiveMenu');
} 



const addSelectedPortfolioTag = () => {
    document.querySelector('.portfolio__nav').addEventListener('click', (e) => {
        if (e.target.classList.contains('tagPortfolio')){
            let clickedPortfolioItem = e.target;
            removeInactivePortfolioTag();
            addActivePortfolioTag(clickedPortfolioItem);
            
            mixingPortfolioImages();
        }
    })
}
const removeInactivePortfolioTag = () =>{
    let tagsPortfolio = document.querySelectorAll('.tagPortfolio');
    
    tagsPortfolio.forEach(tag => {
        tag.classList.remove('activePortfolioTag');
        tag.classList.add('inactivePortfolioTag');
    });
}

const  addActivePortfolioTag = (clickedPortfolioItem) => {
    clickedPortfolioItem.classList.add('activePortfolioTag');
    clickedPortfolioItem.classList.remove('inactivePortfolioTag');
} 



addSelectRedTagMenu();
addSelectedPortfolioTag();


//-------------SLIDER

// let counter = 0;
// let interval = setInterval(function(){
//     document.querySelectorAll('.itemSlider').forEach((item) => {
//         if(item.style.left === '-795px'){
//             clearInterval(interval);
//             return;
//         }
//         counter -=1;
//         item.style.left = `${counter}px`;
//     });
// },0.05);

// let slider =document.querySelector('.slider__Container'),
//     slides = slider.querySelectorAll('.itemSlider'),
//     len = slides.length,
//     index = len - 1,
//     dir = -1;
//     (function move(){
//         slides[index].style.left='';
//         index = (index + dir + len) % len;
//         slides[index].style.left = dir == -1 ? "100%" : "-100%";
//         window.setTimeout(move, 5000);

//     })();
// (function() {

//     var doc = document,
//         index = 1;

//     var Slider = function() {
//         this.box = doc.querySelector('.carousel-container');
//         this.slidesBox = doc.querySelector('.carousel-slides');
//         this.slides = doc.querySelectorAll('.slide');
//         this.btns = doc.querySelectorAll('.btn');
//         this.size = this.box.clientWidth;

//         this.position();
//         this.carousel();

//     };

//     Slider.prototype.position = function() {
//         var size = this.size;
//         this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
//     };

//     Slider.prototype.carousel = function() {
//         var i, max = this.btns.length,
//             that = this;

//         for (i = 0; i < max; i += 1) {
//             that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
//         }
//     }

//     Slider.prev = function(box) {
//         box.slidesBox.style.transition = "transform .3s ease-in-out";
//         //document.querySelector("body > div.sliderWidth").style.backgroundColor="#648BF0";
//         var size = box.size;
//         index <= 0 ? false : index--;
//         box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
//         box.jump();
//     };

//     Slider.next = function(box) {
//         box.slidesBox.style.transition = "transform .3s ease-in-out";
//         var max = box.slides.length;
//         var size = box.size;
//         index >= max - 1 ? false : index++;
//         box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
//         box.jump();
//     };

//     Slider.prototype.jump = function() {
//         var that = this;
//         var size = this.size;
//         this.slidesBox.addEventListener('transitionend', function() {
//             that.slides[index].id === "firstClone" ? index = 1 : index;
//             that.slides[index].id === "lastClone" ? index = that.slides.length - 2 : index;
//             that.slidesBox.style.transition = "none";
//             that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
//         });
//     }


//     new Slider();

// })();

// let sliderBlock = document.querySelector("#sliderBlock");
// (function(){
//     document.querySelector("#prev").addEventListener('click', (e) => {  
//         if (sliderBlock.classList.contains('sliderColorRed')){
//             sliderBlock.classList.remove('sliderColorRed');
//             sliderBlock.classList.add('sliderColorBlue');
//         } else if(sliderBlock.classList.contains('sliderColorBlue')){
//             sliderBlock.classList.remove('sliderColorBlue');
//             sliderBlock.classList.add('sliderColorRed');
//         }
//     })
// })();


// (function(){
//     document.querySelector("#next").addEventListener('click', (e) => {  
//         if (sliderBlock.classList.contains('sliderColorRed')){
//             sliderBlock.classList.remove('sliderColorRed');
//             sliderBlock.classList.add('sliderColorBlue');
//         } else if(sliderBlock.classList.contains('sliderColorBlue')){
//             sliderBlock.classList.remove('sliderColorBlue');
//             sliderBlock.classList.add('sliderColorRed');
//         }
//     })
// })();



//----------выключение экрана телефона при нажатии.---------//
// let blackScreenVert = document.querySelector("#blackScreenVert");
// (function(){
//     document.querySelector("#slideSec > div:nth-child(1)").addEventListener('click', (e) => {  
//         console.log(e.target);
//         if (blackScreenVert.classList.contains('hiddenScreen')){
//             blackScreenVert.classList.remove('hiddenScreen');
//             blackScreenVert.classList.add('activeScreen');
//         } else if(blackScreenVert.classList.contains('activeScreen')){
//             blackScreenVert.classList.remove('activeScreen');
//             blackScreenVert.classList.add('hiddenScreen');
//         }
//     })
// })();
// let blackScreenHor = document.querySelector("#blackScreenHor");
// (function(){
//     document.querySelector("#slideSec > div:nth-child(2) > img").addEventListener('click', (e) => {
        
//         if (blackScreenHor.classList.contains('hidden')){
//             blackScreenHor.classList.remove('hidden');
//             blackScreenHor.classList.add('visible');
//         } else if(blackScreenHor.classList.contains('visible')){
//             blackScreenHor.classList.remove('visible');
//             blackScreenHor.classList.add('hidden');
//         }
        
        
//     })
// })();



let blackScreenHor = document.querySelector("#blackScreenHor");
function switchOnOffScreenHor(){
    let blackScreenHor = document.querySelector("#blackScreenHor");
    if (blackScreenHor.classList.contains('hiddenScreen')){
        blackScreenHor.classList.remove('hiddenScreen');
    } else{
        blackScreenHor.classList.remove('hiddenScreen');
    }
}
let blackScreenVert = document.querySelector("#blackScreenVert");
function switchOnOffScreenVert(){
    console.log('eee');
    if (blackScreenVert.classList.contains('hiddenScreen')){
        blackScreenVert.classList.remove('hiddenScreen');
        blackScreenVert.classList.add('activeScreen');
    } else if(blackScreenVert.classList.contains('activeScreen')){
        blackScreenVert.classList.remove('activeScreen');
        blackScreenVert.classList.add('hiddenScreen');
    }
}
// (function(){
//     document.querySelector("#slideSec > div:nth-child(1)").addEventListener('click', (e) => {  
//         console.log(e.target);
//         if (blackScreenVert.classList.contains('hidden')){
//             blackScreenVert.classList.remove('hidden');
//             blackScreenVert.classList.add('visible');
//         } else if(blackScreenVert.classList.contains('visible')){
//             blackScreenVert.classList.remove('visible');
//             blackScreenVert.classList.add('hidden');
//         }
//     })
// })();
// let blackScreenHor = document.querySelector("#blackScreenHor");
// (function(){
//     document.querySelector("#slideSec > div:nth-child(2) > img").addEventListener('click', (e) => {
        
//         if (blackScreenHor.classList.contains('hidden')){
//             blackScreenHor.classList.remove('hidden');
//             blackScreenHor.classList.add('visible');
//         } else if(blackScreenHor.classList.contains('visible')){
//             blackScreenHor.classList.remove('visible');
//             blackScreenHor.classList.add('hidden');
//         }
        
        
//     })
// })();

//----------перемешивание картинок в блоке портфолио-------//
const mixingPortfolioImages = () =>{
    let portfolioGrid = document.querySelector(".portfolio > div > div");
    portfolioGrid.prepend(portfolioGrid.lastElementChild);
};


const addSelectRedPortfolioImage = () => {
    document.querySelector('.portfolio__grid').addEventListener('click', (e) => {
        
        if (e.target.classList.contains('imgTag')){
            if (e.target.classList.contains('activePortImg')){
                removeInactivePortImg();
                return;
            }
            let clickedPortImg = e.target;
            removeInactivePortImg();
            addActivePortImg(clickedPortImg);
        }
    })
}
const removeInactivePortImg = () =>{
    let portfolioPic = document.querySelectorAll('.imgTag');
    
    portfolioPic.forEach(pic => {
        pic.classList.remove('activePortImg');
        pic.classList.add('inactivePortImg');
    });
}

const  addActivePortImg = (clickedPortImg) => {
    clickedPortImg.classList.add('activePortImg');
    clickedPortImg.classList.remove('inactivePortImg');
} 


//-----------------открытие модального окна формы---------------//

(function(){
    document.querySelector("#button_submit").addEventListener('click', (e) => {  
        e.preventDefault(); // отмена действия браузера по умолчанию.

        let modalDiv = document.querySelector('.modal__overlay'),
            subject = document.querySelector('#subject'),
            description = document.querySelector('#textarea'),
            username = document.querySelector('#username'),
            email = document.querySelector('#email');
        let subjectContent = 'Without subject ';
        let descriptionContent = 'Without description';
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email.value) == false){
            alert('Email is incorrect');
            return;
        }
        if(subject.value != ''){
            subjectContent= "Subject: " + subject.value;
        }
        if(description.value != ''){
            descriptionContent= "Description: " + description.value;
        }
        modalDiv.classList.remove('hidden');
        
        document.querySelector('.message').innerHTML = `<h3>The Letter was sent!</h3>
        <p>${subjectContent}</p>
        <p>${descriptionContent}</p>
        <button class="closeModal">OK</button>
        `;
        (function(){
            document.querySelector(".closeModal").addEventListener('click', (e) => {  
                modalDiv.classList.add('hidden');
                description.value='';
                subject.value = '';
                username.value = '';
                email.value = '';


            })
        })();
    })
})();


//-----------------открытие бокового меню---------------//
let mobile__menu = document.querySelector(".mobile__menu");
(function(){
    document.querySelector("#mobileMenu > div.logo__mobile__menu").addEventListener('click', (e) => { 
        //let mobile__menu = document.getElementById("mobileMenu"); 
        //console.log(e);
        document.querySelector("#mobileMenu > ul").classList.remove('hidden');
        document.querySelector("#mobileMenu").style.left = 0 +'%';   
    })
})();
(function(){
    document.querySelector("#burger__menu__open").addEventListener('click', (e) => {  
        let mobile__menu = document.getElementById("mobileMenu");
        mobile__menu.style.left='-74%';      

    })
})();


/*---------выключение мобильного меню при нажатии на ссылку меню------------*/
function mobileMenuHide(){
    document.querySelector("#mobileMenu > ul").classList.add('hidden');
}
(function(){
    document.querySelector(".mobilMenuList").addEventListener('click', (e) => {  
        let mobile__menu = document.getElementById("mobileMenu");
        mobile__menu.style.left='-74%';    
        setTimeout(mobileMenuHide, 2000);
    })
})();





'use strict';
    var multiItemSlider = (function () {

      function _isElementVisible(element) {
        var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
          || rect.left > vWidth || rect.top > vHeight)
          return false;
        return (
          element.contains(elemFromPoint(rect.left, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.bottom))
          || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
      }

      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = [], // массив элементов
          _interval = 0,
          _html = _mainElement.innerHTML,
          _states = [
            { active: false, minWidth: 0, count: 1 },
            { active: false, minWidth: 980, count: 2 }
          ],
          _config = {
            isCycling: false, // автоматическая смена слайдов
            direction: 'right', // направление смены слайдов
            interval: 5000, // интервал между автоматической сменой слайдов
            pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
          };

        for (var key in config) {
          if (key in _config) {
            _config[key] = config[key];
          }
        }

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var _setActive = function () {
          var _index = 0;
          var width = parseFloat(document.body.clientWidth);
          _states.forEach(function (item, index, arr) {
            _states[index].active = false;
            if (width >= _states[index].minWidth)
              _index = index;
          });
          _states[_index].active = true;
        }

        var _getActive = function () {
          var _index;
          _states.forEach(function (item, index, arr) {
            if (_states[index].active) {
              _index = index;
            }
          });
          return _index;
        }

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (!_isElementVisible(_mainElement)) {
            return;
          }
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        var _cycle = function (direction) {
          if (!_config.isCycling) {
            return;
          }
          _interval = setInterval(function () {
            _transformItem(direction);
          }, _config.interval);
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        };

        // обработка события изменения видимости страницы
        var _handleVisibilityChange = function () {
          if (document.visibilityState === "hidden") {
            clearInterval(_interval);
          } else {
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        }

        var _refresh = function () {
          clearInterval(_interval);
          _mainElement.innerHTML = _html;
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
          _sliderItems = _mainElement.querySelectorAll('.slider__item');
          _sliderControls = _mainElement.querySelectorAll('.slider__control');
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
          _sliderControlRight = _mainElement.querySelector('.slider__control_right');
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
          _positionLeftItem = 0;
          _transform = 0;
          _step = _itemWidth / _wrapperWidth * 100;
          _items = [];
          _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
          });
        }

        var _setUpListeners = function () {
          _mainElement.addEventListener('click', _controlClick);
          if (_config.pause && _config.isCycling) {
            _mainElement.addEventListener('mouseenter', function () {
              clearInterval(_interval);
            });
            _mainElement.addEventListener('mouseleave', function () {
              clearInterval(_interval);
              _cycle(_config.direction);
            });
          }
          document.addEventListener('visibilitychange', _handleVisibilityChange, false);
          window.addEventListener('resize', function () {
            var
              _index = 0,
              width = parseFloat(document.body.clientWidth);
            _states.forEach(function (item, index, arr) {
              if (width >= _states[index].minWidth)
                _index = index;
            });
            if (_index !== _getActive()) {
              _setActive();
              _refresh();
            }
          });
        }

        // инициализация
        _setUpListeners();
        if (document.visibilityState === "visible") {
          _cycle(_config.direction);
        }
        _setActive();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          },
          stop: function () { // метод stop
            _config.isCycling = false;
            clearInterval(_interval);
          },
          cycle: function () { // метод cycle 
            _config.isCycling = true;
            clearInterval(_interval);
            _cycle();
          }
        }

      }
    }());

    var slider = multiItemSlider('.slider', {
      isCycling: false
    })