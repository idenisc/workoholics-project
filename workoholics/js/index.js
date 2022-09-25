const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const siteNav = document.querySelector('#site-nav');
const ImagenLogo = document.querySelector('#imagen-logo');
const btnSpan = document.querySelector('#btn span')



//Efectos que se ejecutan al hacer click en el boton
btn.addEventListener ('click', function(){
    btn.classList.toggle('efecto');
    body.classList.toggle('efecto');
   siteNav.classList.toggle('mostrar');
   imagenLogo.classList.toggle('efecto');
   btnSpan.classList.toggle('efecto');
   
});




const items = document.querySelectorAll('#site-nav #menu a');

items.forEach (item=>{

item.addEventListener('click', function(){
 siteNav.classList.toggle('mostrar');
 btn.classList.toggle('efecto');
   
})

});




  
//EFECTO SCROLL



const cajaTop= document.querySelector('#caja-top');
const imagenLogo = document.querySelector('#imagen-logo')
window.addEventListener('scroll', function(){


  if(window.scrollY>0){
  cajaTop.classList.add('colorFondo')
  imagenLogo.classList.add('colorFondo');
  btn.classList.add('colorFondo');
  siteNav.classList.add('colorFondo');
 
  
  }
  else{
      cajaTop.classList.remove('colorFondo');
      imagenLogo.classList.remove('colorFondo');
      btn.classList.remove('colorFondo');
      siteNav.classList.remove('colorFondo');

  }
  
  })
