// menu show y hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


//show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})


// remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll section active link
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYoffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionID +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionID +']').classList.remove('active')
        }
    })

}