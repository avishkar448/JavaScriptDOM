var x=document.querySelector("#main");
var cur=document.querySelector(".cursor");

x.addEventListener("mousemove",(a)=>{
    console.log(a.x)
    cur.style.left=a.x+"px";
    cur.style.top=a.y+"px";

    
})