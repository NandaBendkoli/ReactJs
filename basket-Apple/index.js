const basket1 = document.querySelector(".basket-1 span");
const basket2 = document.querySelector(".basket-2 span");

const right = document.querySelector(".right-arrow");
const left = document.querySelector(".left-arrow");


let totalApples = 10;
let basket2Apples = 0;


// initial apples in two baskets
basket1.innerText = totalApples;
basket2.innerText = basket2Apples;


right.addEventListener("click", () => {
    if (totalApples > 0) {
        totalApples--;
        basket2Apples++
    }
    basket1.innerText = totalApples;
    basket2.innerText = basket2Apples;
});

left.addEventListener("click", () => {
    if (basket2Apples > 0) {
        totalApples++;
        basket2Apples--;
    }
    basket1.innerText = totalApples;
    basket2.innerText = basket2Apples;

})
