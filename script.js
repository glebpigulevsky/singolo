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
    
    //console.log(currPos);
    document.querySelectorAll('body>div').forEach((el) => {
        //console.log(el);
        //debugger;
        
         if(el.offsetTop-60 <= currPos && (el.offsetTop +el.offsetHeight) >currPos){
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
(function() {

    var doc = document,
        index = 1;

    var Slider = function() {
        this.box = doc.querySelector('.carousel-container');
        this.slidesBox = doc.querySelector('.carousel-slides');
        this.slides = doc.querySelectorAll('.slide');
        this.btns = doc.querySelectorAll('.btn');
        this.size = this.box.clientWidth;

        this.position();
        this.carousel();

    };

    Slider.prototype.position = function() {
        var size = this.size;
        this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    };

    Slider.prototype.carousel = function() {
        var i, max = this.btns.length,
            that = this;

        for (i = 0; i < max; i += 1) {
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
        }
    }

    Slider.prev = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        //document.querySelector("body > div.sliderWidth").style.backgroundColor="#648BF0";
        var size = box.size;
        index <= 0 ? false : index--;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.next = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        var max = box.slides.length;
        var size = box.size;
        index >= max - 1 ? false : index++;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.prototype.jump = function() {
        var that = this;
        var size = this.size;
        this.slidesBox.addEventListener('transitionend', function() {
            that.slides[index].id === "firstClone" ? index = 1 : index;
            that.slides[index].id === "lastClone" ? index = that.slides.length - 2 : index;
            that.slidesBox.style.transition = "none";
            that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        });
    }


    new Slider();

})();

let sliderBlock = document.querySelector("#sliderBlock");
(function(){
    document.querySelector("#prev").addEventListener('click', (e) => {  
        if (sliderBlock.classList.contains('sliderColorRed')){
            sliderBlock.classList.remove('sliderColorRed');
            sliderBlock.classList.add('sliderColorBlue');
        } else if(sliderBlock.classList.contains('sliderColorBlue')){
            sliderBlock.classList.remove('sliderColorBlue');
            sliderBlock.classList.add('sliderColorRed');
        }
    })
})();


(function(){
    document.querySelector("#next").addEventListener('click', (e) => {  
        if (sliderBlock.classList.contains('sliderColorRed')){
            sliderBlock.classList.remove('sliderColorRed');
            sliderBlock.classList.add('sliderColorBlue');
        } else if(sliderBlock.classList.contains('sliderColorBlue')){
            sliderBlock.classList.remove('sliderColorBlue');
            sliderBlock.classList.add('sliderColorRed');
        }
    })
})();



//----------выключение экрана телефона при нажатии.---------//
let blackScreenVert = document.querySelector("#blackScreenVert");
(function(){
    document.querySelector("div.slide>img:nth-child(1)").addEventListener('click', (e) => {  
        if (blackScreenVert.classList.contains('hidden')){
            blackScreenVert.classList.remove('hidden');
            blackScreenVert.classList.add('visible');
        } else if(blackScreenVert.classList.contains('visible')){
            blackScreenVert.classList.remove('visible');
            blackScreenVert.classList.add('hidden');
        }
    })
})();
let blackScreenHor = document.querySelector("#blackScreenHor");
(function(){
    document.querySelector("div.slide>img:nth-child(2)").addEventListener('click', (e) => {
        
        if (blackScreenHor.classList.contains('hidden')){
            blackScreenHor.classList.remove('hidden');
            blackScreenHor.classList.add('visible');
        } else if(blackScreenHor.classList.contains('visible')){
            blackScreenHor.classList.remove('visible');
            blackScreenHor.classList.add('hidden');
        }
        
        
    })
})();

//----------перемешивание картинок в блоке портфолио-------//
const mixingPortfolioImages = () =>{

    let portfolioGrid = document.querySelector(".portfolio > div > div");
    portfolioGrid.prepend(portfolioGrid.lastElementChild);
    // var arrImg = Array.prototype.slice.call(imgNode);
    // function shuffle(arr){
    //     var j, temp;
    //     for(var i = arr.length - 1; i > 0; i--){
    //         j = Math.floor(Math.random()*(i + 1));
    //         temp = arr[j];
    //         arr[j] = arr[i];
    //         arr[i] = temp;
    //     }
    //     return arr;
    // }
    // console.log(arrImg);
   
    //  let newArr =  shuffle(arrImg);
    //  console.log(newArr);
    //  return newArr;
    // let portfolioDiv = document.querySelector("#portfolio > div > div");
    // portfolioDiv.innerHTML='';
    // for(let i = 0; i<newArr.length; i++){
    //     portfolioDiv.innerHTML+=newArr[i];
    // }
};

//----------добавление стилей при нажатии на картинку в блоке потфолио-----------//

// (function(){
//     document.querySelector("#portfolio > div > div > div").addEventListener('click', (e) => {  
//         console.log(e);
//         let clickedPortfolioItem=e.target;
        
//         if (clickedPortfolioItem.classList.contains('inactivePortImg')){
//             clickedPortfolioItem.classList.remove('inactivePortImg');
//             clickedPortfolioItem.classList.add('activePortImg');
//         } else if(clickedPortfolioItem.classList.contains('activePortImg')){
//             clickedPortfolioItem.classList.remove('activePortImg');
//             clickedPortfolioItem.classList.add('inactivePortImg');
//         }
//     })
// })();

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
            description = document.querySelector('#textarea');
        let subjectContent = 'Without subject ';
        let descriptionContent = 'Without description';
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

            })
        })();
    })
})();