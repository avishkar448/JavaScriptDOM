var  x=document.querySelector("#container");
var icon=document.querySelector("i");

x.addEventListener("dblclick",()=>{
    icon.style.transform='translate(-50%,-50%) scale(1)';
    icon.style.opacity=0.8;

    setTimeout(()=>{
    icon.style.opacity=0;
    },1000);

    setTimeout(function(){
        icon.style.transform='translate(-50%,-50%) scale(0)';
    },3000)
})