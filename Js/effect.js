var x1 = document.querySelectorAll(".element");

x1.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });

  val.addEventListener("mousemove", (a) => {
    val.childNodes[3].style.left = a.x + "px";
    // val.childNodes[3].style.top=a.y+"px";
  });
});

// var img=document.querySelector("#x1 img");s

// x1.addEventListener("mousemove",function(a){
//     img.style.left=a.x+"px";
//     img.style.top=a.y+"px";
// })

// x1.addEventListener("mouseenter",function(a){
//     img.style.opacity=1;
// })

// x1.addEventListener("mouseleave",function(a){
//     img.style.opacity=0;
// })
