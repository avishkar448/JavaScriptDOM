var x=[
    {
        dp:"Images/spider.jpg",
        story:"Images/batman.jpg"
    },
    {
        dp:"Images/batman.jpg",
        story:"Images/xyz.jpg"
    },
    {
        dp:"Images/ironman.jpg",
        story:"Images/avishkar.jpg"
    },
    {
        dp:"Images/superman.jpg",
        story:"Images/spider.jpg"
    }
];

var storys=document.querySelector("#storys");
var c="";
x.forEach((elem,id)=>{
    c+=` <div class="story">
    <img id="${id}" src="${elem.dp}" alt="">
</div>`;
})

storys.innerHTML=c;

storys.addEventListener("click",function(dets){
    x[dets.target.id].story

    document.querySelector("#fullscreen").style.display="block";
    document.querySelector("#fullscreen").style.backgroundImage=`url(${x[dets.target.id].story})`;

    setTimeout(function(){
    document.querySelector("#fullscreen").style.display="none";
    },3000)
})