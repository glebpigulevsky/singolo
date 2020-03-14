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
}


const addSelectRedTagMenu = () => {
    document.querySelector('.menu').addEventListener('click', (e) => {
        console.log(e);
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

addSelectRedTagMenu();