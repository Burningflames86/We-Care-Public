carbnum = document.getElementById('carbnum');
showname = document.getElementById('showname');
elems = document.querySelector('.elems');
menu = document.querySelector('.menu');
oh = document.querySelector('.OH')
ch3 = document.querySelector('.CH3')
no2 = document.querySelector('.NO2')
o = document.querySelector('.O')
nomen = document.querySelector('.nomen')
nameofcarb = document.querySelector('.name')
let carbchain = ' '
let carbs;
cando = true;
let somenum = 0;
ohstr = ' '


const names = { 
1: "methan",
2: "ethan",
3: "propan",
4: "butan",
5: "pentan",
6: "hexan",
7: "heptan",
8:	"octan",
9:	"nonan",
10:    "decan"
}
const nums = { 
0: " ",
1: " ",
2: "di",
3: "tri",
4: "tetra",
5: "penta",
6: "hexa",
7: "hepta",
8:	"octa",
9:	"nona",
10:    "deca"
}



carbnum.addEventListener('keyup', event=>{
    carbchain = ' ';
    if(carbnum.value <= 10){
    for (let i = 1; i <= carbnum.value; i++) {
        if (i%2==0){
            carbchain +=`<div class="carbs even ${i}"></div>`
        }else{
            carbchain += `<div class="carbs odd ${i}"></div>`
        }
    }
    
    elems.innerHTML =  carbchain;
    }
    else{
        elems.innerHTML = `<div class="warning">Nomenclature  breaks down after 10</div>`
    }
    carbs = document.querySelectorAll('.carbs');
  for (let i = 0; i < carbs.length; i++) {
    
    carbs[i].addEventListener('click', pleasework);
    
  }
  function pleasework(){
    g = this;
    somenum++
        menu.style.left = this.getBoundingClientRect().left + 'px'
        menu.style.visibility  = `visible`
        classes = g.className.split(" ");
        ohc = document.getElementsByClassName('oh');
        chc = document.getElementsByClassName('ch3');
        noc =document.getElementsByClassName('no2');
        oc = document.getElementsByClassName('o');
        oh.addEventListener('click', event=>{
                        
                        for (let i = 3; i < classes.length; i++) {
                            g.classList.remove(classes[i]);
                            
                        }
                        g.classList.add('carbs');
                        g.classList.add('oh');
                        menu.style.visibility  = `hidden`
                        
                    
                    })
                    ch3.addEventListener('click', event=>{
                        for (let i = 3; i < classes.length; i++) {
                            g.classList.remove(classes[i]);
                            
                        }
                        g.classList.add('carbs');
                        g.classList.add('ch3');
                        menu.style.visibility  = `hidden`
                        
            
                    })
                    no2.addEventListener('click', event=>{
                        for (let i = 3; i < classes.length; i++) {
                            g.classList.remove(classes[i]);
                            
                        }
                        g.classList.add('carbs');
                        g.classList.add('no2');
                        menu.style.visibility  = `hidden`
                        
            
                    })
                    o.addEventListener('click', event=>{
                        for (let i = 3; i < classes.length; i++) {
                            g.classList.remove(classes[i]);
                            
                        }
                        g.classList.add('carbs');
                        g.classList.add('o');
                        menu.style.visibility  = `hidden`
                        
            
                    })
                    nomen.style.visibility = 'visible';
                    showname.addEventListener('click', event => {
                        
                            newstr = ''; 
                            anotherstr = ''; 
                            onemorestr = ''
                            laststr= '';
                            firststr = ''; 
                            secondstr = ''; 
                            thirdstr = ''; 
                            fourthstr = ''; 
                            for (let i = 0; i < ohc.length; i++) {
                                newstr += `${ohc[i].className.split(' ')[2]},`;
                                
                            }
                            if(ohc.length > 0){
                            firststr = ("-" + newstr + "-" + nums[ohc.length] + "ol");
                            }else{
                            firststr = ``

                            }

                            for (let i = 0; i < chc.length; i++) {
                                anotherstr += `${chc[i].className.split(' ')[2]},`;
                                
                            }
                            if(chc.length > 0){
                            secondstr = ("-" + anotherstr + "-" + nums[chc.length] + "yl");
                            }else{
                                secondstr = ``
                            }

                            for (let i = 0; i < noc.length; i++) {
                                onemorestr += `${noc[i].className.split(' ')[2]},`;
                                
                            }
                            if(noc.length > 0){
                            thirdstr = ("-" + onemorestr + "-" + nums[noc.length] + "nitro");
                            }else{
                            thirdstr = ``;

                            }

                            for (let i = 0; i < oc.length; i++) {
                                laststr += `${oc[i].className.split(' ')[2]},`;
                                
                            }
                            if(oc.length > 0){
                            fourthstr = ("-" + laststr + "-" + nums[oc.length] + "one");
                            }else{
                                fourthstr = ``;
                            }
                            finalstring = ((thirdstr+ names[carbnum.value] + secondstr + firststr +  fourthstr).replaceAll(' ', ''));
                            let result = "";

                            const commas = finalstring.split(",");
                            commas.forEach(substring => {
                                const prevChar = substring.charAt(substring.length - 1);
                                const nextChar = substring.charAt(0);
                                if (!isNaN(prevChar) && !isNaN(nextChar)) {
                                    result += "," + substring;
                                } else {
                                    result += substring;
                                }
                            })
                            if(result.indexOf('-') == 0){
                                result = result.substring(1,result.length)
                            }
                            nameofcarb.textContent = result;
                        
                      })
                    
}
  
})


  
  
