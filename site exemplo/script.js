const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const t4 = document.querySelector('#t4');
var c = 0;
function press(x){
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
        default:
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
}