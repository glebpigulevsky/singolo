const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.onload = function() {
    addSelectRedTagMenu();
    addSelectedPortfolioTag();
    //setInterval();
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

let counter = 0;
let interval = setInterval(function(){
    document.querySelectorAll('.itemSlider').forEach((item) => {
        if(item.style.left === '-795px'){
            clearInterval(interval);
            return;
        }
        counter -=1;
        item.style.left = `${counter}px`;
    });
},0.05);
