let rollprice = [
    {
        pricetag: '2.49',
    },
    {
        pricetag: '2.49',
    },
    {
        pricetag: '2.99',
    },
    {
        pricetag: '3.99',
    },
];

function displayPrice(price){
    let priceElement = document.querySelector('#check-out');
    
    priceElement.innerText = price.pricetag;
    
    };
    
    function onSelectValueChange() {
        console.log('You selected' + this.value);
        let priceIndex = parseInt(this.value);
        let displayRoll = rollprice[priceIndex];
    
        displayPrice(displayRoll);
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
        let priceElement = document.querySelector('#check-out');
        
        finalPriceElement.innerText = pack.packnumber;
        };
        
        function onSelectPackValueChange() {
            console.log('You selected' + this.value);
            let priceIndex = parseInt(this.value);
            let displayRoll = packprice[priceIndex];
        
            displayFinalPrice(displayRoll);
        }
        
        let selectPackElement = document.querySelector('#packOptions');
        selectPackElement.addEventListener('change', onSelectPackValueChange);
