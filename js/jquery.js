function myFunction(){
    document.getElementById("myclick").style.border = "1px solid black";
    document.getElementById("myclick2").style.border = "none";
    document.getElementById("myclick3").style.border = "none";
}
function myFunction2(){
    document.getElementById("myclick2").style.border = "1px solid black";
    document.getElementById("myclick").style.border = "none";
    document.getElementById("myclick3").style.border = "none";
}
function myFunction3(){
    document.getElementById("myclick3").style.border = "1px solid black";
    document.getElementById("myclick").style.border = "none";
    document.getElementById("myclick2").style.border = "none";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("bar-item_op").style.display = "none";
    document.getElementById("bar-item_cl").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("bar-item_op").style.display = "block";
    document.getElementById("bar-item_cl").style.display = "none";
}