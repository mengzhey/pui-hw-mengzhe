class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice, finalPrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice; 
      this.price= finalPrice;  
      this.element = null; 
} 
}   

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice){
   
  const cartRoll = new Roll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice);
  rollSet.add(cartRoll);
  return cartRoll;    
}

let cart = new Array ();

function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem('storedRoll');
  const cart = JSON.parse(cartString);
  console.log(cart);

  for (const rollData of cart) {
    const cartRoll = addNewRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice, rollData.price
    );

    createElement(cartRoll);
  }
}


function createElement(cartRoll){
    const template = document.querySelector('#roll-template')
    const clone = template.content.cloneNode(true);
    cartRoll.element = clone.querySelector('.clink');

    const rollListElement = document.querySelector('.cartcollection');
    rollListElement.prepend(cartRoll.element);

    updateElement(cartRoll);
}

function updateElement(cartRoll) {
    const priceElement = cartRoll.element.querySelector('.cartPrice');
    const packElement = cartRoll.element.querySelector('.cartPack');
    const cartTitleElement = cartRoll.element.querySelector('.cartTitle');
    const cartImageElement = cartRoll.element.querySelector('#cart-image');
    const glazingElement = cartRoll.element.querySelector('.cartGlazing');
    
    const btnDelete = cartRoll.element.querySelector('#removeIcon')
    btnDelete.addEventListener('click', () => {
        deleteRoll(cartRoll);   
        console.log(rollSet);
        updatePrice(cartRoll);
        
    });

    priceElement.innerText = cartRoll.calPrice;
    packElement.innerText = 'Pack Size:' + cartRoll.size;
    cartTitleElement.innerText = cartRoll.type + ' Cinnammon Roll';
    cartImageElement.src = cartRoll.rollimageURL;
    glazingElement.innerText = cartRoll.glazing;
    
}


  
  if (localStorage.getItem('storedRoll') != null) {
    retrieveFromLocalStorage();
  }

function deleteRoll(cartRoll) {
    cartRoll.element.remove();
    rollSet.delete(cartRoll);
}

for (const item of rollSet) {
    totalPrice = item.calPrice;
    console.log(totalPrice);
}



for (const cartRoll of rollSet) {
    console.log(cartRoll);

    createElement(cartRoll);
  }    


function updatePrice () {
    let totalPrice = 0;
    

    for (const item of rollSet) {
        console.log(item.calPrice)
        totalPrice = Number(totalPrice) + Number(item.calPrice);
    }
    console.log(totalPrice);
    printTotalPrice = totalPrice.toFixed(2);
    const totalPriceElement = document.querySelector('.price');
    totalPriceElement.innerText = printTotalPrice;
}


updatePrice ();