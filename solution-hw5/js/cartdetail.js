
let rollGlazingPrice = {
    "Original": {
        "price": 0,
    },
    "Sugar-milk": {
        "price": 0,
    },
    "Vanilla-milk": {
        "price": 0.5,
    },
    "Double-chocolate": {
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

    constructor(rollType, rollGlazing, packSize, rollPrice, rollCalPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        const finalCartPrice = (rollGlazingPrice[rollGlazing].price+ Number(rollPrice)) * cartCalPrice[packSize].pack;
        this.rollCalPrice = finalCartPrice.toFixed(2);
    
    }
}


const rollSet = new Set();
    

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice){
   
   const cartRoll = new Roll(rollType, rollGlazing, packSize, rollPrice, rollCalPrice);
   rollSet.add(cartRoll);
   return cartRoll;    
}

const cartOriginal = addNewRoll(
    'Original',
    'Sugar-milk',
    '1',
    '2.49',

);

const cartWalnut = addNewRoll(
    'Walnut',
    'Vanilla-milk',
    '12',
    '3.49',
);

const cartRaisin = addNewRoll(
    'Raisin',
    'Sugar-milk',
    '3',
    '2.99',
);

const cartApple = addNewRoll(
    'Apple',
    'Original',
    '3',
    '3.49',
);