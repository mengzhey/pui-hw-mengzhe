const rolls = {
  "Original": {
      "basePrice": 2.49,
      "imageFile": "original-cinnamon-roll.jpg"
  },
  "Apple": {
      "basePrice": 3.49,
      "imageFile": "apple-cinnamon-roll.jpg"
  },
  "Raisin": {
      "basePrice": 2.99,
      "imageFile": "raisin-cinnamon-roll.jpg"
  },
  "Walnut": {
      "basePrice": 3.49,
      "imageFile": "walnut-cinnamon-roll.jpg"
  },
  "Double-Chocolate": {
      "basePrice": 3.99,
      "imageFile": "double-chocolate-cinnamon-roll.jpg"
  },
  "Strawberry": {
      "basePrice": 3.99,
      "imageFile": "strawberry-cinnamon-roll.jpg"
  }    
};

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice, finalPrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice; 
      this.price= finalPrice;  
      this.element = null; 
      this.rollimageURL = rolls[rollType].imageFile;
} 
}   

const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice){
  const cartRoll = new Roll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice);
  rollSet.add(cartRoll);
  return cartRoll;    
}



function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem('storedRoll');
  const cart = JSON.parse(cartString);
  const results = cart.filter(element => {
    return element !== null;
  });
  console.log(results);

  for (const rollData of results) {
    console.log(rollData.type);
    const cartRoll = addNewRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice, rollData.price
    );
 
    createElement(cartRoll);
  }
}
if (localStorage.getItem('storedRoll') != null) {
    retrieveFromLocalStorage();
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

    priceElement.innerText = cartRoll.price;
    packElement.innerText = 'Pack Size:' + cartRoll.size;
    cartTitleElement.innerText = cartRoll.type + ' Cinnammon Roll';
    cartImageElement.src = './assets/' + cartRoll.rollimageURL;
    glazingElement.innerText = cartRoll.glazing;
    
}

  
  


function deleteRoll(cartRoll) {
    cartRoll.element.remove();
    rollSet.delete(cartRoll);
    saveToLocalStorage();
}

function saveToLocalStorage() {
  const cartArray = Array.from(rollSet);
  const cartString = JSON.stringify(cartArray);
  console.log(cartArray);
  localStorage.setItem('storedRoll', cartString);
} 



function updatePrice () {
    let totalPrice = 0;
    
    for (const item of rollSet) {
        console.log(item.calPrice)
        totalPrice = Number(totalPrice) + Number(item.price);
    }
    console.log(totalPrice);
    printTotalPrice = totalPrice.toFixed(2);
    const totalPriceElement = document.querySelector('.price');
    totalPriceElement.innerText = printTotalPrice;
}

updatePrice ();