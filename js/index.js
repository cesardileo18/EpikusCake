const toTop = document.querySelector(".to-top")
if (toTop) {
    window.addEventListener('scroll',()=>{
        if (window.pageYOffset > 80) {
            toTop.classList.add('active')
        }else{
            toTop.classList.remove('active')
        }
    })
}
var i = 0;
var txt = 'Epikus Cake'
var speed = 70;
function tyWrite (){
    if (i <txt.length) {
        var texto= document.getElementById('texto')
        if (texto != null || texto != undefined) {
            texto.innerHTML += txt.charAt(i);
            i++;
            setTimeout(tyWrite, speed)
        }
    }
}
tyWrite()
