let rollprice = [
    {
        pricetag: '0',
    },
    {
        pricetag: '0',
    },
    {
        pricetag: '0.5',
    },
    {
        pricetag: '1.5',
    },
];

function updatePrice(price){
     const base = '2.49';
     priceUpdate.type = Number(base)+ Number(price.pricetag);
     console.log(priceUpdate.type);
    };
    
    function onSelectValueChange() {
        console.log('You selected' + this.value);
        let priceIndex = parseInt(this.value);
        let displayRoll = rollprice[priceIndex];
    
        updatePrice(displayRoll);
    }

    const priceUpdate = {
         type: '2.49',
         pack:'1',
    }
    
    let selectElement = document.querySelector('#glazingOptions');
    selectElement.addEventListener('change', onSelectValueChange);
    

        let packprice = [
            {
                packnumber: '1',
            },
            {
                packnumber: '3',
            },
            {
                packnumber: '5',
            },
            {
                packnumber: '10',
            },
        ];
    
    
    
    function displayFinalPrice(pack){
        let finalPriceElement = document.querySelector('#check-out-final');
        priceUpdate.pack = Number(pack.packnumber);
        console.log(priceUpdate.pack);
        let finalPrice = priceUpdate.type * priceUpdate.pack;
        finalPriceElement.innerText = finalPrice.toFixed(2);
        };
        
        function onSelectPackValueChange() {
            console.log('You selected' + this.value);
            let priceIndex = parseInt(this.value);
            let displayPack = packprice[priceIndex];
        
            displayFinalPrice(displayPack);
        }
        
        let selectPackElement = document.querySelector('#packOptions');
        selectPackElement.addEventListener('change', onSelectPackValueChange);
