const btn = document.querySelector('button');
const img = document.querySelector('img');
btn.addEventListener("click",changeImage);
let list = [
    "C:\Users\Nafisa Tawakoli\Pictures\girals/",
    ""
]
img.setAttribute('src',list[0]);
let counter =0;
function changeImage(){
    if(counter<list.length-1){
 counter++;
}
else{
    counter = 0;
}
img.setAttribute('src',list[counter]);
}