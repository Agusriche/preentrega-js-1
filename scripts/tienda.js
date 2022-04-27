console.log("a");

// SI TRAE LA A ANDA

const addToShoppingCartButtons = document.querySelectorAll(`.addToCart`);

console.log(`addToShoppingCartButtons`, addToShoppingCartButtons);
// CONSOLA PARA CHEQUEAR QUE TRAIGA EL ARRAY

// addToShoppingCartButtons.forEach(addToCardButton => {
//     addToCardButton.addEventListener(`click`, () => console.log(`click`));
// });

// CONTADOR DE CLICK, FUNCIONA :D

// Error previo, falta de llave y 2da flecha


addToShoppingCartButtons.forEach(addToCardButton => {
    addToCardButton.addEventListener(`click`, addToCartClicked);
});

// --------------------


// function addToCartClicked(event) {
//     const button = event.target;
//     console.log(`:o: addToCardClicked -> button`, button)
// }

// FUNCIONA

// EVENT A CHEQUEAR ANYWAY


function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(`.item`);


    // CREO LAS VARIABLES PARA CADA VALOR DEL OBJETO

    const itemTitle = item.querySelector(`.item-tittle`);

    //TESTEO
    console.log(`:o : addToCartClicked -> item-tittle`, itemTitle);
}