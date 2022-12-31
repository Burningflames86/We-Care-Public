const doses = document.querySelector('.doses');
const timings = document.querySelector('.timings');
const time = document.querySelector('.date');
const meds = document.querySelector('.meds');
const stop = document.querySelector('.stop');
const audio = new Audio("./alarm.mp3");
let add = undefined;
let string = '';
let i = 0;

doses.addEventListener('keyup', function(){
    string = '';
    for (let i = 1; i <= doses.value; i++) {
        string += `<div class="dosage mt-4 ">
        <h5>Enter timings: </h5>
        <input type="text" class=" rounded-3xl border-2 border-black pl-4 dosagetime">
        </div>`
    }
    timings.innerHTML = string + `<div class="add">
    <button class="rounded-3xl bg-black border-2 border-black text-white mt-3 px-3 hover:bg-white hover:text-black">Add</button>
    </div>`;
    add = document.querySelector('.add');
    add.addEventListener('click', function(){
        let parent = add.parentNode.parentNode;
        let name = parent.children[0].children[1].value;
        let newstring = '';
        let ostring = ''
        dosagetime = document.querySelectorAll('.dosagetime')
        var div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('border-black')
        div.classList.add('rounded-3xl')
        // div.classList.add('min-w-44')
        div.classList.add('min-h-[40px]')
        div.classList.add('px-4')
        div.classList.add('Reminders')
        ostring = `<div class='font-semibold text-3xl'>${name}</div>`
        div.innerHTML = ostring;
        for (let i = 0; i < dosagetime.length; i++) {
             newstring += `<div>Dose ${i+1} at : <span class="font-semibold dosetime"> ${dosagetime[i].value} </span> </div>`
        }
        div.innerHTML+=newstring;
        meds.appendChild(div);
    })

})

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var date = new Date()
    time.innerHTML = date.getHours()+"."+date.getMinutes()+"."+ date.getSeconds() + `<div class='text-sm w-44 text-left'> (Use 24 Hour Format and Decimal Convention while entering times <span class="font-semibold"> Ex-20.54.32 </span>)`;
    display_c();

    dosetime = document.querySelectorAll('.dosetime');
    dosetime.forEach(element => {
        parts = element.textContent.split(".");
        element.parentNode.parentNode.classList.add('transition-all')
        element.parentNode.parentNode.classList.add('delay-700')
        // console.log(parts[1])
        if(parts[1] == undefined){
            parts[1] = "00";
        }
        if(parts[2] == undefined){
            parts[2] = "00";
        }
        let finalstring = parts.join(".");
        if(parts[0] == date.getHours()){
            if(parts[1] == date.getMinutes()){
                if(parts[2] == date.getSeconds()){
                    audio.play();
                    stop.classList.remove('hidden')
                    (element.parentNode.parentNode.classList.add('bg-red-700'));
                }
            }    
        }
    });
}

document.body.onload=display_ct();

stop.addEventListener('click', function(){
    audio.pause()
    stop.classList.add('hidden')
    dosetime = document.querySelectorAll('.dosetime');
    dosetime.forEach(e =>{
        console.log(e)
        e.parentNode.parentNode.classList.add('bg-white')

    })

})
