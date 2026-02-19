const btn = document.querySelector('button');
const img = document.querySelector('img');
btn.addEventListener("click",changeImage);
let list = [
    "FB_IMG_1701430178341.jpg",
    "FB_IMG_1701430176337.jpg",
    "FB_IMG_1700724137222.jpg",
    "FB_IMG_1700724147699.jpg",
    "FB_IMG_1703871468060.jpg",
    "FB_IMG_1701425533671 (2).jpg"
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