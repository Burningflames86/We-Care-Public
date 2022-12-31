// const checkbox = document.querySelectorAll('.checkbox');
const child = document.querySelectorAll('.child');
const close = document.querySelector('.close');
const symplist = document.getElementById('symplist');
const particulardiv = document.getElementById('particulardiv');
child.forEach(element => {
    submit = element.querySelector('.submit');
    submit.addEventListener('click', function(){
    const checkbox = element.querySelectorAll('.checkbox');
    const checkedarray = [];
    checkbox.forEach(e =>{
        if(e.checked){
            checkedarray.push(e);
        }
    })
    if(checkedarray.length<=2){
        console.log("You need not to worry");
        element.children[0].textContent = `You need not to worry`
        element.children[0].style.backgroundColor = `lightgreen`
        element.children[0].style.borderColor = `lightgreen`
        element.style.borderColor = `lightgreen`;
    }else if(checkedarray.length >=3 && checkedarray.length <= 4){
        element.children[0].textContent = `Moderate Risk`
        element.children[0].style.backgroundColor = `orange`
        element.children[0].style.borderColor = `orange`
        element.style.borderColor = `orange`;
    }else if(checkedarray.length >= 5){
        element.children[0].textContent = `High Risk`
        element.children[0].style.backgroundColor = `red`
        element.children[0].style.borderColor = `red`
        element.style.borderColor = `red`;
    }

    const checkboxall = document.querySelectorAll('.checkbox');
    const checkedarrayall = [];
    let string = ` `;
    checkboxall.forEach(e =>{
        if(e.checked){
            checkedarrayall.push(e);
        }
    })

    let uniqueChars = [];
    checkedarrayall.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
    });



    uniqueChars.forEach(e=>{
            string += `<li>${e.name}</li>`;
    })
    // console.log(string);
    // const div = document.createElement('div');
    // div.innerHTML = string;
    // symplist.appendChild(div);
    // div.classList.add('my-4')
    particulardiv.innerHTML = string;
    symplist.style.animation = `pop 0.2s linear forwards`
})
});

close.addEventListener('click', function(){
    symplist.style.animation = `unpop 0.2s linear forwards`

})