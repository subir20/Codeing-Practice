console.log("Hello World!");

let mainBox= document.querySelectorAll(".main-box");
let boxChild = document.querySelectorAll(".main-box>div");
let icon = document.querySelectorAll(".icon");

for (let i = 0; i < 4; i++) {
   boxChild[i].addEventListener("mouseover",function(){
      boxChild[i].children[0].style.visibility="visible";
      boxChild[i].style.borderColor="dodgerblue";
      icon[i].children[0].classList.add("fa-xmark");
   })
   
   boxChild[i].addEventListener("mouseleave",function(){
      boxChild[i].children[0].style.visibility="";
      boxChild[i].style.borderColor="";
      icon[i].children[0].classList.remove("fa-xmark");
   })
}

