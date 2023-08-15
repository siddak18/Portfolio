window.addEventListener('scroll',function(){
const navbar=this.document.getElementById("nav-bar");
const height=this.window.scrollY;
if(height>100){
    navbar.style.height="60px"
}else{
    navbar.style.height="100px"
}
});



const handel=()=>{
   console.log("jvng");
   const x=document.getElementById("he");
   x.classList.toggle('active');
}
// document.addEventListener("DOMContentLoaded",function(){
// const line=document.querySelector(".line");
// line.addEventListener("mouseover",function(){
//     line.style.width="100%";
//     line.style.color="blue";
//     console.log("hi");
// });
// line.addEventListener("mouseout",function(){
//     line.style.width="0%";
// });
// console.log("kn ");
// });