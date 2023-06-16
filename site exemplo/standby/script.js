const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');
const t5 = document.querySelector('#t5');

var c = 0;
document.addEventListener("keydown", function(event) {
    press(event.key)
} )
function press(key){
    setTimeout(()=>{a.style.backgroundColor='white'},500);
    setTimeout(()=>{s.style.backgroundColor='white'},500);
    setTimeout(()=>{d.style.backgroundColor='white'},500);
    setTimeout(()=>{f.style.backgroundColor='white'},500);
    setTimeout(()=>{g.style.backgroundColor='white'},500);
    switch (key) {
        case "a":
            const t1Position = t1.offsetTop;
            console.log(t1Position);
            if (t1Position >=793) {
                console.log(t1Position);
                c++;      
                let a = document.querySelector('#a');          
                a.style.backgroundColor='#66FF99';                
            }
            else{
                c=0
                a.style.backgroundColor='red';
            }
            break;
        case "s":
            const t2Position = t2.offsetTop;
            if (t2Position >=793) {
                console.log(t2Position);
                c++;
                let s = document.querySelector('#s');
                s.style.backgroundColor='green';
            }
            else{
                c=0
                s.style.backgroundColor='red';
            }
            break;
        case "d":
            const t3Position = t3.offsetTop;
            if (t3Position >=793) {
                console.log(t3Position);
                c++;
                let d = document.querySelector('#d');
                d.style.backgroundColor='green';
            }
            else{
                c=0
                d.style.backgroundColor='red';
            }
            break;
        case "f":
            const t4Position = t4.offsetTop;
            if (t4Position >=793) {
                console.log(t4Position);
                c++;
                let f = document.querySelector('#f');
                f.style.backgroundColor='green';
            }
        case "g":
            const t5Position = t5.offsetTop;
            if (t5Position >=793) {
                console.log(t5Position);
                c++;
                let g = document.querySelector('#g');
                g.style.backgroundColor='green';
            }
            else{
                c=0
                g.style.backgroundColor='red';
            }
            break;
    }
    
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
}

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