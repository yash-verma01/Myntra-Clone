
let bagItem;
onload();

function onload(){
  let bagItemStr=localStorage.getItem('bagsitems')
  bagItem=bagItemStr?JSON.parse(bagItemStr):[];
displayContent();
displayBagIcon();
}


function addBag(item){
  bagItem.push(item);
  localStorage.setItem('bagsitems',JSON.stringify(bagItem))
  displayBagIcon();
}

function displayBagIcon(){ 
  let icon=document.querySelector('.bag-count');
  if(bagItem.length>0){
  icon.style.visibility='visible'
  icon.innerHTML=bagItem.length;
  }
  else
  icon.style.visibility='hidden';
}

function displayContent(){
let itemsContainerElement=document.querySelector('.items-container');
if(!itemsContainerElement){
  return
}
let inner='';
items.forEach(item =>{
   inner+=`<div class="item-container">
   <img src="${item.image}" alt="item image" class="image-style">
   <div class="rating">
     ${item.rating.stars}⭐️|${item.rating.count}
   </div>
   <div class="company-name">${item.company}</div>
   <div class="item-name">${item. item_name}</div>
   <div class="price">
     <span class="current-price">${item.current_price}</span>
     <span class="original-price">${item.original_price}</span>
     <span class="discount">${item.discount_percentage}%</span>
   </div>
   <div 
   <button class="btn-add" onclick="addBag(${item.id})"><center>add to bag</center></button></div>
   </div>`
})

itemsContainerElement.innerHTML=inner;
}
