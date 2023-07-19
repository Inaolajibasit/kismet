const menu = document.getElementById('menu')
const close = document.getElementById('close')
const navBar = document.getElementById('navbar')
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
var scrollTop = document.getElementById('scroll');

let valueDisplays = document.querySelectorAll('.num')
let interval = 5000



// =========header======


// =====navbar ========
menu.addEventListener('click', ()=>{
    if(navBar.style.top = '-260px'){
        navBar.style.top = '60px'
    }else{
        navBar.style.top = '-260px'
    }
})

close.addEventListener('click', ()=>{
    if(navBar.style.top = '60px'){
        navBar.style.top = '-260px';
    }
})

// scrool to top =======
scrollTop.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
})
scrollTop.style.display = 'none';
window.addEventListener('scroll', ()=>{
    if(pageYOffset > (window.innerHeight * 1.0)){
        scrollTop.style.display = 'flex';
    }else{
        scrollTop.style.display = 'none';
    }
})

// =====counter up =====
window.addEventListener('scroll', ()=>{
    if(pageYOffset < (window.innerHeight * 6.5)){
        valueDisplays.forEach(value => {
        let startValue = 0 
        let endValue = parseInt(value.getAttribute("data-val"))
        let duration = Math.floor(interval / endValue)
        let counter = setInterval(function (){
            startValue += 1
            value.innerHTML = startValue
            if(startValue == endValue){
            clearInterval(counter)
            }
        }, duration)
    })
    }
})

// ========tabs======
function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}