const medic = document.querySelector('.symptom');
const Meds = document.querySelector('.Meds');
const capsule = document.querySelectorAll('.capsule');
const circle = document.querySelectorAll('.circle');
const medcontainer = document.querySelector('.medcontainer');
const circontainer = document.querySelector('.circontainer');
const overallcontainer = document.querySelector('.overallcontainer');
const nomen = document.querySelector('.nomen');
const chevron = document.querySelector('.scroll');
window.addEventListener('scroll',function(){
  console.log(chevron.getBoundingClientRect().top);
  if(chevron.getBoundingClientRect().top < 424){
    chevron.style.animation = `fadeOutDown 1s 1  forwards`;
  } if(chevron.getBoundingClientRect().top > 424){
    chevron.style.animation = `fadeInUp 1s 1  forwards`
  }
})

window.addEventListener('scroll', function (e) {
  let t = medic.getBoundingClientRect().top;
  let o = Meds.getBoundingClientRect().top;
  let p = nomen.getBoundingClientRect().top;
  capsule.forEach(e =>{
    e.style.transform = `rotate(${t}deg)`
  })
  circle.forEach(e =>{
    e.style.transform = `rotate(${t}deg)`
  })
  medcontainer.style.top = `${p-300}px`
  circontainer.style.top = `${o+1200}px`
  overallcontainer.style.top = `${t+800}px`

  medcontainer.style.visibility = `visible`;
  circontainer.style.visibility = `visible`;
  overallcontainer.style.visibility = `visible`;

  
})