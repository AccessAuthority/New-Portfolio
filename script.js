Shery.mouseFollower();
     
  Shery.makeMagnet(".magnet-target");


body.addEventListener("scroll",()=>{
var scroll = body.scrollY
if(scroll >= 50){
    nav.style.position = "fixed";
    nav.style.backgroundColor = "black"
}
})