import "./style.scss";
import header from './Components/Header';
import ShoppingList from './Components/ShoppingList'
import CartList from './Components/CartList'
import items from './data';
import ZBRangeSlider from './Components/filter'

let newItemsArray = [];
let headerSection = document.getElementById("header");
headerSection.innerHTML = header();

document.addEventListener('DOMContentLoaded', () => {
  newItemsArray = ShoppingList.discountCalculation(items);
  cartButtonListener(newItemsArray);
  let sortbtn = document.getElementById('sortApply');
  sortbtn.addEventListener('click', () => {
    ShoppingList.callSortFunction(newItemsArray)
  });
  let cartLink = document.getElementById("cart__link");
  cartLink.addEventListener('click', CartList.openCartPage);
  let sortHighToLow = document.getElementById("sortHighToLow");
  let sortLowToHigh = document.getElementById("sortLowToHigh");
  let sortDiscount = document.getElementById("sortDiscount");

  sortHighToLow.addEventListener('click', () => {
    ShoppingList.sortItemList(2, newItemsArray)
    cartButtonListener(newItemsArray);
  });

  sortLowToHigh.addEventListener('click', () => {
    ShoppingList.sortItemList(1, newItemsArray)
    cartButtonListener(newItemsArray);
  });

  sortDiscount.addEventListener('click', () => {
     ShoppingList.sortItemList(3, newItemsArray);
     cartButtonListener(newItemsArray);
  });
  let searchBar = document.getElementById("search-bar");
  searchBar.addEventListener('keyup', () => {
    setTimeout(ShoppingList.searchProduct(newItemsArray), 1500)
  })
  let filter = document.getElementById("filter");
  var newRangeSlider = new ZBRangeSlider('my-slider');
  let minPrice = 0;
  let maxPrice = 1000;
  newRangeSlider.onChange = function (min, max) {
    // ShoppingList.filterItemsArray(newItemsArray,min,max);
    minPrice = min;
    maxPrice = max;
    document.getElementById('result-min').innerHTML = `<i class="fas fa-rupee-sign">${min}</i> `;
    document.getElementById('result-max').innerHTML = `<i class="fas fa-rupee-sign">${max}</i>`;
  }

  newRangeSlider.didChanged = function (min, max) {
    document.getElementById('result-min').innerHTML = `<i class="fas fa-rupee-sign">${min}</i> `;
    document.getElementById('result-max').innerHTML = `<i class="fas fa-rupee-sign">${max}</i>`;
  }
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // var newRangeSliderModal = new ZBRangeSliderMobile('modal-slider');

  // newRangeSliderModal.onChange = function (min, max) {
  //   minPrice = min;
  //   maxPrice = max;
  //   document.getElementById('result__modal__min').innerHTML = `<i class="fas fa-rupee-sign">${min}</i> `;
  //   document.getElementById('result__modal__max').innerHTML = `<i class="fas fa-rupee-sign">${max}</i>`;
    
  // }

  // newRangeSliderModal.didChanged = function (min, max) {
  //   document.getElementById('result__modal__min').innerHTML = `<i class="fas fa-rupee-sign">${min}</i> `;
  //   document.getElementById('result__modal__max').innerHTML = `<i class="fas fa-rupee-sign">${max}</i>`;
  // }
  let filterApplyBtn = document.getElementById("filterApplyBtn");
  filterApplyBtn.addEventListener('click', () => {
   newItemsArray = ShoppingList.filterItemsArray(minPrice, maxPrice)
    cartButtonListener(newItemsArray);
  })
  let filterApply = document.getElementById("filterApply");
  filterApply.addEventListener('click', () => {
    let minPrice = document.getElementById('price-min').value;
    let maxPrice = document.getElementById('price-max').value;
   newItemsArray = ShoppingList.filterItemsArray(minPrice, maxPrice)
    cartButtonListener(newItemsArray);
  })
});

function cartButtonListener(newItemsArray) {
  let addtocartbtn = document.getElementsByClassName("product__addtocartbtn");
  for (let i = 0; i < addtocartbtn.length; i++) {
    addtocartbtn[i].addEventListener('click', () => {
       ShoppingList.addToCart(addtocartbtn[i].id, newItemsArray)
    })
  }
 
}

