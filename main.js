// Amount BTNS

(() => {
  const minusButton = document.querySelector('.minus-button');
  const plusButton = document.querySelector('.plus-button');
  const counterValue = document.querySelector('.counter-value');

  function counterButtonHandler (operation) {
    let counterCurrentValue = +counterValue.innerHTML;

    switch (operation) {
      case "+":
        counterCurrentValue++;
        if (counterCurrentValue <= 3) {
          counterValue.innerHTML = counterCurrentValue
        };
        break;
      case "-":
        counterCurrentValue--;
        if (counterCurrentValue >= 1) {
          counterValue.innerHTML = counterCurrentValue
        };
        break;
    
      default:
        break;
    }
  }

  minusButton.addEventListener('click', () => counterButtonHandler('-'));
  plusButton.addEventListener('click', () => counterButtonHandler('+'));
})()

// Color Select

const spaceGrayButton = document.querySelector('.space-gray');
const gildingButton = document.querySelector('.rose-gold');
const silverButton = document.querySelector('.silver');
const select = document.querySelector('.select');

select.style.color = "#595961"

function selector(color) {
  let selectColor = select.innerHTML;
  switch (color) {
    case 'space-gray':
      selectColor = 'Space Gray';
      select.style.color = "#595961"
      select.innerHTML = selectColor;
      break;
    case 'rose-gold':
      selectColor = 'Rose Gold';
      select.style.color = "#FFD1C2"
      select.innerHTML = selectColor;
      break;
    case 'silver':
      selectColor = 'Silver';
      select.style.color = "#C8C8CF"
      select.innerHTML = selectColor;
      break;
  
    default:
      break;
  }
}

spaceGrayButton.addEventListener('click', () => selector('space-gray'));
gildingButton.addEventListener('click', () => selector('rose-gold'));
silverButton.addEventListener('click', () => selector('silver'));

// Add to cart

const addCart = document.querySelector('.btn-cart');
const counterValue = document.querySelector('.counter-value');
const numberCart = document.querySelector('.number');

addCart.addEventListener('click', () => {
  let counter = counterValue.innerHTML;

  if (0 <= counterValue <= 3 ){
    numberCart.innerHTML = counter
  };
});
