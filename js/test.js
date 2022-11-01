const balanceMoney = document.querySelector('.balance');
const inputMoney = document.querySelector('.input-money');
const btnInput = document.querySelector('.btn-input');
const pocketMoney = document.querySelector('#my-money-value');
const totalPrice = document.querySelector('.total-price');
const btnReturnMoney = document.querySelector('.btn-return');
const cartList = document.querySelector('.box-cart');
const images = ['Original_Cola.png', 'Violet_Cola.png', 'Yellow_Cola.png', 'Cool_Cola.png', 'Green_Cola.png', 'Orange_Cola.png'];
const listName = ['Original_Cola', 'Violet_Cola', 'Yellow_Cola', 'Cool_Cola', 'Green_Cola', 'Orange_Cola'];

function inputMyMoney() {
    if (parseInt(pocketMoney.innerHTML) < parseInt(inputMoney.value)) {
        alert('소지금이 부족합니다.');
    } else {
        pocketMoney.innerHTML = parseInt(pocketMoney.innerHTML) - parseInt(inputMoney.value);
        balanceMoney.innerHTML = parseInt(balanceMoney.innerHTML) + parseInt(inputMoney.value);
    }
}

function ReturnMyMoney() {
    pocketMoney.innerHTML = parseInt(pocketMoney.innerHTML) + parseInt(balanceMoney.innerHTML);
    balanceMoney.innerHTML = 0;
}
btnInput.addEventListener('click', inputMyMoney);

btnReturnMoney.addEventListener('click', ReturnMyMoney);
function addCart(a) {
    const drinkCart = document.createElement('li');
    drinkCart.classList.add('img-drink');
    drinkCart.classList.add(listName[a]);
    const drinkImage = document.createElement('img');
    drinkImage.src = `./img/${images[a]}`;
    const name = document.createElement('p');
    name.innerHTML = listName[a];
    name.classList.add('name-drink');
    const num = document.createElement('div');

    if (cartList.classList.contains(listName[a])) {
        const alNum = document.querySelector(`.box-cart .${listName[a]} .number-drink`);
        alNum.innerText++;
    } else {
        num.innerText = 1;
        num.classList.add('number-drink');

        drinkCart.appendChild(drinkImage);
        drinkCart.appendChild(name);
        drinkCart.appendChild(num);
        cartList.appendChild(drinkCart);
        cartList.classList.add(listName[a]);
    }
}

const originalBtn = document.querySelector('.Original');
originalBtn.addEventListener('click', function () {
    addCart(0);
});
const violetBtn = document.querySelector('.Violet');
violetBtn.addEventListener('click', function () {
    addCart(1);
});
const yellowBtn = document.querySelector('.Yellow');
yellowBtn.addEventListener('click', function () {
    addCart(2);
});
const coolBtn = document.querySelector('.Cool');
coolBtn.addEventListener('click', function () {
    addCart(3);
});
const greenBtn = document.querySelector('.Green');
greenBtn.addEventListener('click', function () {
    addCart(4);
});
const orangeBtn = document.querySelector('.Orange');
orangeBtn.addEventListener('click', function () {
    addCart(5);
});

const listGetDrink = document.querySelector('.list-get-drink');

function getAndRemove() {
    while (cartList.hasChildNodes()) {
        cartList.removeChild(cartList.firstChild);
    }
    cartList.classList = 'box-cart';
}

const getBtn = document.querySelector('.btn-get');

getBtn.addEventListener('click', function () {
    getAndRemove();
});
