const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');
let d = document.querySelector('#d');
let f = document.querySelector('#f');
let j = document.querySelector('#j');
let k = document.querySelector('#k');
var c = 0;
var p = 0;
document.addEventListener("keydown", function(event) {
    press(event.key)
} )
function press(key){
    setTimeout(()=>{d.style.backgroundColor='white'},500)
    setTimeout(()=>{f.style.backgroundColor='white'},500)
    setTimeout(()=>{j.style.backgroundColor='white'},500)
    setTimeout(()=>{k.style.backgroundColor='white'},500)
    switch (key) {
        case "d":
            const t1Position = t1.offsetTop;
            if (t1Position >=760) {
             
                c++;      
                p++;   
                d.style.backgroundColor='green';                
            }
            else{
                c=0
                d.style.backgroundColor='red';
            }
            break;
        case "f":
            const t2Position = t2.offsetTop;
            if (t2Position >=760) {
               
                c++;
                p++;
                f.style.backgroundColor='green';
            }
            else{
                c=0
                f.style.backgroundColor='red';
            }
            break;
        case "j":
            const t3Position = t3.offsetTop;
            if (t3Position >=760) {
                
                c++;
                p++;
                j.style.backgroundColor='green';
            }
            else{
                c=0
                j.style.backgroundColor='red';
            }
            break;
        case "k":
            const t4Position = t4.offsetTop;
            if (t4Position >=760) {
                
                c++;
                p++;
                k.style.backgroundColor='green';
            }
            else{
                c=0
                k.style.backgroundColor='red';
            }
            break;

        
    }
    
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
    const point = document.querySelector('#point');
    point.innerHTML = p;
}
let barra = 0;
setInterval(()=>{ 
    const t1Position = t1.offsetTop;
    const t2Position = t2.offsetTop;
    const t3Position = t3.offsetTop;
    const t4Position = t4.offsetTop;
    if (t1Position>80 || t2Position>880 || t3Position>880 || t4Position>880) {
        barra++;
      
    }
    if (barra>c) {
        console.log("passou");
        console.log(barra);
        barra = 0;
        c = 0;
    }

    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
    const point = document.querySelector('#point');
    point.innerHTML = p;
},1000)


/*function press(x){
    switch (x) {
        case 1:
            const t1Position = t1.offsetTop;
            if (t1Position >=793) {
                console.log(t1Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 2:
            const t2Position = t2.offsetTop;
            if (t2Position >=793) {
                console.log(t2Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 3:
            const t3Position = t3.offsetTop;
            if (t3Position >=793) {
                console.log(t3Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 4:
            const t4Position = t4.offsetTop;
            if (t4Position >=793) {
                console.log(t4Position);
                c++;
            }
            else{
                c=0
            }
            break;
    }
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
}*/