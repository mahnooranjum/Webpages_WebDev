
function randomHeight(obj){
    h = Math.floor(Math.random() * 600)+1;
    obj.style.height = h ;
}

window.addEventListener('click', function (e) {
    console.log(e.target.classList[1]);
    h = Math.floor(Math.random() * 600 )+1;
    document.querySelector('.' + e.target.classList[1]).style.minHeight = h + "px";
    document.querySelector('.display').textContent= h;
})

divs = []

document.querySelector('.flexbox-item1').addEventListener('click', function(){
    h = Math.floor(Math.random() * 600 )+1;
    document.querySelector('.flexbox-item1').style.minHeight = h + "px";
    // document.querySelector('.display').textContent= h;
})