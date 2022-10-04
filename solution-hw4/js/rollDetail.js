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


let currentRollGlazing = null;
let currentRollPackSize = null;
let currentRollPrice = null;

const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const rollType = params.get('roll');
console.log(rollType);

let objectRoll = rolls[rollType];
console.log(objectRoll);
const headerElement = document.querySelector('.slogan');
headerElement.innerText = rollType + ' Cinnomon Roll';
const headerPriceElement = document.querySelector('#check-out-final');
headerPriceElement.innerText = objectRoll.basePrice;
const rollImage = document.querySelector('#roll-image');
rollImage.src = './assets/'+ objectRoll.imageFile; 

console.log(objectRoll.basePrice);


let select = document.querySelector('#glazingOptions');
let rollPrice = [
    {
        priceTag: 'Keep Origin',
        priceValue: '0',
    },
    {
        priceTag: 'Sugar Milk',
        priceValue: '0',
    },
    {
        priceTag: 'Vanila Milk',
        priceValue: '0.5',
    },
    {
        priceTag: 'Double Chocolate',
        priceValue: '1.5',
    },
    ];

for(var i = 0; i < rollPrice.length; i++)
{
let selectElement = document.querySelector('#glazingOptions');
var option = document.createElement("option");
option.text = rollPrice[i].priceTag;
option.value= i;
selectElement.add(option);
};


function updatePrice(price){ 
    const base = objectRoll.basePrice;
    priceUpdate.type = Number(base)+ Number(price.priceValue);
    let finalPriceElement = document.querySelector('#check-out-final');
    console.log(priceUpdate.finalPack);
    let finalPrice = priceUpdate.finalPack * priceUpdate.type;
    finalPriceElement.innerText = finalPrice.toFixed(2);
    };
    
    function onSelectValueChange() {
        console.log("glazing change");
        // console.log('You selected' + this.priceValue);
        let priceIndex = parseInt(this.value);
        let displayRoll = rollPrice[priceIndex];

        console.log(rollPrice[priceIndex].priceTag);

        currentRollGlazing = rollPrice[priceIndex].priceTag;


        console.log(displayRoll);
    
        updatePrice(displayRoll);
    }

    const priceUpdate = {
        type: objectRoll.basePrice,
        finalPack: '1',
    }
    
    let selectElement = document.querySelector('#glazingOptions');
    selectElement.addEventListener('change', onSelectValueChange);



        let packPrice = [
            {
                packTag: '1',
                packNumber: '1',
            },
            {
                packTag: '3',
                packNumber: '3',
            },
            {
                packTag: '6',
                packNumber: '5',
            },
            { 
                packTag: '12',
                packNumber: '10',
            },
        ];
        
        for(var i = 0; i < packPrice.length; i++)
        {
            let selectElement = document.querySelector('#packOptions');
            var option = document.createElement("option");
            option.text = packPrice[i].packTag;
            option.value= i;
            selectElement.add(option);
        };
    
    
    
    function displayFinalPrice(pack){
        let finalPriceElement = document.querySelector('#check-out-final');
        priceUpdate.finalPack =  Number(pack.packNumber);
        console.log(priceUpdate.finalPack);
        let finalPrice = priceUpdate.finalPack * priceUpdate.type;
        finalPriceElement.innerText = finalPrice.toFixed(2);
        };
        
        function onSelectPackValueChange() {
            console.log('You selected' + this.value);
            let priceIndex = parseInt(this.value);
            let displayPack = packPrice[priceIndex];
        
            currentRollPackSize = packPrice[priceIndex].packTag;
            displayFinalPrice(displayPack);
        }
        
        let selectPackElement = document.querySelector('#packOptions');
        selectPackElement.addEventListener('change', onSelectPackValueChange);



const cart = [
];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;  

        // rollType = this.type;
        // priceUpdate.type = this.glazing;
        // priceUpdate.finalPack = this.size;
        // objectRoll.basePrice = this.basePrice;


} 

}      

const btnAdd = document.querySelector('.bcart');
btnAdd.onclick = addCart;

function addCart() {
    const rollOne = new Roll(rollType, currentRollGlazing, currentRollPackSize, objectRoll.basePrice);
    console.log(rollOne);
}
