const convi=99;
let bagItemObjects;
onload();

function onload(){

  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function loadBagItemObjects(){
  bagItemObjects=bagItem.map(itemId=>{
    for(let i=0;i<items.length;i++)
    {
      if(itemId==items[i].id){
        return items[i];
      }
    }
  })
}

function displayBagItems(){
  containerElement=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObjects.forEach(bagItem => {
    innerHTML+=generateItemHTML(bagItem);
    console.log(innerHTML)
  });
  containerElement.innerHTML=innerHTML;
}


function generateItemHTML(item){
  return ` <div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
    </div>
     
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>
`
}


function removeFromBag(bagId){
  bagItem=bagItem.filter(bagItemId=>bagItemId!=bagId)
  localStorage.setItem('bagsitems',JSON.stringify(bagItem))
  loadBagItemObjects()
  displayBagIcon()
 
  displayBagItems()
  displayBagSummary()
}
function displayBagSummary(){
  let bagSummaryElement=document.querySelector('.bag-summary');
  let totalItems=bagItemObjects.length
  let totalMrp=0
  let totalDis=0
  let totalPayment=0
  bagItemObjects.forEach(item=>{
    totalMrp+=item.original_price;
    totalDis+=item.original_price-item.current_price;
    totalPayment=totalMrp-totalDis+convi;
  })
 
    bagSummaryElement.innerHTML=` <div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItems}) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">${totalMrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs${totalDis}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${totalPayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>`

}