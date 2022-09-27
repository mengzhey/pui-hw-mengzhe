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
    const base = '2.49';
    priceUpdate.type = Number(base)+ Number(price.priceValue);
    let finalPriceElement = document.querySelector('#check-out-final');
    console.log(priceUpdate.finalPack);
    let finalPrice = priceUpdate.finalPack * priceUpdate.type;
    finalPriceElement.innerText = finalPrice.toFixed(2);
    };
   
   function onSelectValueChange() {
       console.log('You selected' + this.priceValue);
       let priceIndex = parseInt(this.value);
       let displayRoll = rollPrice[priceIndex];
       console.log(displayRoll);
   
       updatePrice(displayRoll);
   }

  const priceUpdate = {
        type: '2.49',
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
       
           displayFinalPrice(displayPack);
       }
       
       let selectPackElement = document.querySelector('#packOptions');
       selectPackElement.addEventListener('change', onSelectPackValueChange);

