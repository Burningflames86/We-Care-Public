
const chevron = document.querySelector('.scroll');
window.addEventListener('scroll',function(){
  console.log(chevron.getBoundingClientRect().top);
  if(chevron.getBoundingClientRect().top < 424){
    chevron.style.animation = `fadeOutDown 1s 1  forwards`;
  } if(chevron.getBoundingClientRect().top > 424){
    chevron.style.animation = `fadeInUp 1s 1  forwards`
  }
})