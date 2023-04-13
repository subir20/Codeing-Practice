console.log("hello world!");

const count = document.querySelector(".count");

const mrp = document.querySelector(".mrp");

const discountValue =document.querySelector(".discount-value");

const discountNo = Number.parseFloat(discountValue.innerHTML.replace(/[^\d\.]*/g, ''));

const mrpNo = Number.parseFloat(mrp.innerHTML.replace(/[^\d\.]*/g, ''));

const sellPrice = document.querySelector(".sell-price");

sellPrice.innerHTML = "&#8377;" + (mrpNo - ((mrpNo * discountNo)/100));

count.children[0].onclick = function(){
    
}
