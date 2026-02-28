let productsDiv = document.getElementById("products");

function createProduct(name,image){

let div = document.createElement("div");
div.className="product";

let img = document.createElement("img");
img.src=image;

let p = document.createElement("p");
p.textContent=name;

let btn=document.createElement("button");
btn.textContent="Buy Now";

btn.onclick=function(){
alert("Order Placed for "+name);
}

div.appendChild(img);
div.appendChild(p);
div.appendChild(btn);

productsDiv.appendChild(div);

}