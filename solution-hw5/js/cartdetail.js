let rollGlazingPrice = {
    "Original": {
        "price": 0,
    },
    "Sugar milk": {
        "price": 0,
    },
    "Vanilla milk": {
        "price": 0.5,
    },
    "Double chocolate": {
        "price": 1.5,
    },
  
};

let cartCalPrice = {
    "1": {
        "pack": 1,
    },
    "3": {
        "pack": 3,
    },
    "6": {
        "pack": 5,
    },
    "12": {
        "pack": 10,
    },
  
};

class Roll {

    constructor(imageURL,rollType, rollGlazing, packSize, rollPrice, rollCalPrice) {
        this.rollimageURL = imageURL;
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        const finalCartPrice = (rollGlazingPrice[rollGlazing].price+ Number(rollPrice)) * cartCalPrice[packSize].pack;
        rollCalPrice = finalCartPrice.toFixed(2);
        this.calPrice = rollCalPrice;

        this.element = null;
    
    }
}



const rollSet = new Set ();

    

function addNewRoll(imageURL, rollType, rollGlazing, packSize, rollPrice, rollCalPrice){
   
   const cartRoll = new Roll(imageURL,rollType, rollGlazing, packSize, rollPrice, rollCalPrice);
   rollSet.add(cartRoll);
   return cartRoll;    
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


function deleteRoll(cartRoll) {
    cartRoll.element.remove();
    rollSet.delete(cartRoll);
}

for (const item of rollSet) {
    totalPrice = item.calPrice;
    console.log(totalPrice);
}

const cartOriginal = addNewRoll(
    './assets/original-cinnamon-roll.jpg',
    'Original',
    'Sugar milk',
    '1',
    '2.49',
);

const cartWalnut = addNewRoll(
    './assets/walnut-cinnamon-roll.jpg',
    'Walnut',
    'Vanilla milk',
    '12',
    '3.49',
);

const cartRaisin = addNewRoll(
    './assets/raisin-cinnamon-roll.jpg',
    'Raisin',
    'Sugar milk',
    '3',
    '2.99',
);

const cartApple = addNewRoll(
    './assets/apple-cinnamon-roll.jpg',
    'Apple',
    'Original',
    '3',
    '3.49',
);


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