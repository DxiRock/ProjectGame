var block = document.getElementById('square');
var left = 0;
var down1 = 0;
var up1 = 0;
document.onkeydown = function (event){
    console.log(event);
    if (event.key == 'ArrowRight'){
        block.style.right = left + 'px';
       left++;
   
    }
    if (event.key == 'ArrowDown'){
        block.style.top = down1 + 'px';
       down1++;
   
    }
    if (event.key == 'ArrowUp'){
        block.style.all = up1 + 'px';
       up1++;
    
}
}