// ======== nav mobile view ========

let menu=document.querySelector('#menu')
let header=document.querySelector('header')

menu.addEventListener('click',(e)=>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('show')
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-times')
    header.classList.remove('show')
})



//animate
var words=['Knowledge','Skills','Smart']
let span=document.querySelector('.wrap-text')
    let i=0
    // change()
function change(){
    span.innerHTML=words[i]
    i++
    if(i==words.length){
        i=0
    }
    setTimeout(change,2000)
}
setTimeout(change,1000)


// ====== timeline animation 

let cards=document.querySelectorAll('.list-qualify')

window.addEventListener('scroll',animateCards)
animateCards()
function animateCards(){
    const triggerBottom=window.innerHeight / 5 * 4
    cards.forEach(card =>{
        const boxTop=card.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            card.classList.add('show')
        }else{
            card.classList.remove('show')
        }
    })
    // console.log(triggerBottom,boxTop);
}


// ============= skill onscroll 

let bars=document.querySelectorAll('.progres-bar')

window.addEventListener('scroll',()=>{
    for(let i=0;i<bars.length;i++){
         const sectionPosition=bars[i].getBoundingClientRect().top
         const screenPosition=window.innerHeight 
    if(sectionPosition < screenPosition){
        bars[i].style.opacity=1
        bars[i].style.width=`${bars[i].dataset.value}%`
    }else{
        bars[i].style.opacity=0
        bars[i].style.width=0
    }
    }
    
})


// ================ nav active scroll

let navs=document.querySelectorAll('.navs li a')
let sections=document.querySelectorAll('section')
window.addEventListener('scroll',navActive)

function navActive(){
    for(let i=0;i<navs.length;i++){
        let secTop=sections[i].offsetTop
        let ht=sections[i].offsetHeight
        for(let j=0;j<navs.length;j++){
            if(scrollY >= secTop && scrollY <= secTop+ht){
                for(let k=0;k<navs.length;k++){
                    if(navs[k].classList.contains('active')){
                        navs[k].classList.remove('active')
                    }
                    navs[i].classList.add('active')
                }
            }
        }
    }
}

// ======== nav active click

for(let a=0;a<navs.length;a++){
    navs[a].addEventListener('click',function(){
        for(let b=0;b<navs.length;b++){
            if(navs[b].classList.contains('active')){
                navs[b].classList.remove('active')
            }
        }
        this.classList.add('avtive')
    })
}
