const hamburger = document.getElementById('hamburger')
const mobileNav = document.querySelector('aside')

hamburger.addEventListener('click', function(){
    this.classList.toggle('open')
    
    if(hamburger.classList.contains('open')){
        mobileNav.style.transform = 'translateX(0%)'
        document.querySelector('body').style.overflow = 'hidden'
    }else{
        mobileNav.style.transform = 'translateX(-100%)'
        document.querySelector('body').style.overflow = 'auto'
    }
})

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 50){
        header.style.backgroundColor = '#798AC9'
    }
    else{
        header.style.backgroundColor = 'transparent'
    }
})