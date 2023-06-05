const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');
var c = 0;
document.addEventListener("keydown", function(event) {
    press(event.key)
} )
function press(key){
    setTimeout(()=>{vermelho.style.backgroundColor='white'},500)
    setTimeout(()=>{amarelo.style.backgroundColor='white'},500)
    setTimeout(()=>{roxo.style.backgroundColor='white'},500)
    setTimeout(()=>{laranja.style.backgroundColor='white'},500)
    switch (key) {
        case "d":
            const t1Position = t1.offsetTop;
            if (t1Position >=793) {
                console.log(t1Position);
                c++;      
                let vermelho = document.querySelector('#vermelho');          
                vermelho.style.backgroundColor='green';                
            }
            else{
                c=0
                vermelho.style.backgroundColor='red';
            }
            break;
        case "f":
            const t2Position = t2.offsetTop;
            if (t2Position >=793) {
                console.log(t2Position);
                c++;
                let amarelo = document.querySelector('#amarelo');
                amarelo.style.backgroundColor='green';
            }
            else{
                c=0
                amarelo.style.backgroundColor='red';
            }
            break;
        case "j":
            const t3Position = t3.offsetTop;
            if (t3Position >=793) {
                console.log(t3Position);
                c++;
                let laranja = document.querySelector('#laranja');
                laranja.style.backgroundColor='green';
            }
            else{
                c=0
                laranja.style.backgroundColor='red';
            }
            break;
        case "k":
            const t4Position = t4.offsetTop;
            if (t4Position >=793) {
                console.log(t4Position);
                c++;
                let roxo = document.querySelector('#roxo');
                roxo.style.backgroundColor='green';
            }
            else{
                c=0
                roxo.style.backgroundColor='red';
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