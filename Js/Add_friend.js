var x=document.querySelector("h5");
var btn=document.querySelector("#add");
// var rmv=document.querySelector("#remove");
var check=0;

btn.addEventListener("click",function(){
    if(check==0){
        x.innerHTML="Friends";
        x.style.color="green";
        btn.innerHTML="Remove";
        btn.style.backgroundColor="#ee4b2b";
        check=1;
    }
    else{
        x.innerHTML="Stranger";
        x.style.color="red";
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="#0096ff";
        check=0;
    }

})

// rmv.addEventListener("click",function(){
//     x.innerHTML="Stranger";
//     x.style.color="red";
// })
