const inputproduct = document.querySelector('#user_product');
const inputquantity = document.querySelector('#user_quantity');
const inputprice = document.querySelector('#user_price');
const submitbtn = document.querySelector('#submit');
const clearbtn = document.querySelector('#clear');
const alertbox = document.querySelector('ion-alert-controller');
const ul = document.querySelector('ul')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
var get_product ,get_price,get_quantity;

//getListValue();

clearbtn.addEventListener('click', () => {
    inputproduct.value = '';
    inputquantity.value = '';
    inputprice.value = '';

});
submitbtn.addEventListener('click', () => {
    const enter_product = inputproduct.value;
    const enter_quantity = inputquantity.value;
    const enter_price = inputprice.value;

    if (enter_product == 0 || enter_quantity == 0 || enter_price == 0) {
        presentAlert();
    } else{

        itemsArray.push(enter_product);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(enter_product + " ("+`Price:`+enter_price +", Quantity:"+ enter_quantity+")");
        inputproduct.value = "";
        inputprice.value = "";
        inputquantity.value = "";



        // localStorage.setItem('local_product', enter_product);
        // localStorage.setItem('local_quantity', enter_quantity);
        // localStorage.setItem('local_price', enter_price);

        // console.log(enter_product  + enter_quantity  );

        // get_product = localStorage.getItem('local_product');
        // get_quantity = localStorage.getItem('local_quantity');
        // get_price = localStorage.getItem('local_price');
        // console.log(get_product);


    }

});

function getListValue(){
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        console.log( localStorage.getItem( localStorage.key( i ) ) );
      }
}

data.forEach(item => {
    liMaker(item);
  });
  

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Invalid Inputs';
    alert.message = 'Enter the valid data  .';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }
