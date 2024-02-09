document.getElementById("demo").innerHTML = 'start';
document.getElementById("demo").innerHTML = localStorage.clickcount;

 function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = localStorage.clickcount;
    }
    document.getElementById("demo").innerHTML = localStorage.clickcount;
}
function clear(){
    localStorage.clickcount = Number(0);
    document.getElementById("demo").innerHTML = localStorage.clickcount;
}
function clear_all(){
    clear();
    
}