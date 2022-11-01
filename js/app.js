const drinkBtn = document.querySelectorAll('.btn-drink');
const cartList = document.querySelector('.box-cart');

//음료를 장바구니에 담는 함수
function addCart(input) {
    const drinkName = input.querySelector('.name-drink').innerHTML;
    const drinkCart = document.createElement('li');
    drinkCart.classList.add('img-drink');
    drinkCart.classList.add(drinkName);
    const drinkImg = document.createElement('img');
    drinkImg.src = `./img/${drinkName}.png`;
    const name = document.createElement('p');
    name.innerHTML = drinkName;
    name.classList.add('name-drink');

    if (cartList.classList.contains(drinkName)) {
        const drinkNum = cartList.querySelector(`.${drinkName} .number-drink`);
        drinkNum.innerHTML++;
        console.log(drinkName);
        console.log(drinkNum);
    } else {
        cartList.classList.add(drinkName);
        const num = document.createElement('div');
        num.classList.add('number-drink');
        num.innerHTML = 1;

        drinkCart.appendChild(drinkImg);
        drinkCart.appendChild(name);
        drinkCart.appendChild(num);
        cartList.appendChild(drinkCart);
    }
}
drinkBtn.forEach((v) => {
    v.addEventListener('click', function () {
        addCart(v);
    });
});
