import "./style.scss";
import header from './Components/Header';
import ShoppingList from './Components/ShoppingList'
import CartList from './Components/CartList'
import items from './data';
import ZBRangeSlider from './Components/filter'
  
  let newItemsArray = [];
let headerSection = document.getElementById("header");
headerSection.innerHTML = header();

document.addEventListener('DOMContentLoaded',()=>{ 
   newItemsArray =  ShoppingList.discountCalculation(items);
   let addtocartbtn = document.getElementsByClassName("addtocartbtn");
     for(let i=0;i<addtocartbtn.length;i++) {
         addtocartbtn[i].addEventListener('click',()=>{
         ShoppingList.addToCart(addtocartbtn[i].id,newItemsArray)
 })
}
let sortbtn = document.getElementById('sortApply');
sortbtn.addEventListener('click', ()=> {
ShoppingList.callSortFunction(newItemsArray)});
   let cartLink = document.getElementById("cart-link");
   cartLink.addEventListener('click',CartList.openCartPage);
   let sortHighToLow = document.getElementById("sortHighToLow");
   let sortLowToHigh = document.getElementById("sortLowToHigh");
   let sortDiscount = document.getElementById("sortDiscount");

   sortHighToLow.addEventListener('click',() => {
      // sortDiscount.classList.remove("activeLink"); 
      // sortLowToHigh.classList.remove("a:active"); 
      // sortHighToLow.classList.add("activeLink");
    ShoppingList.sortItemList(2,newItemsArray)});

   sortLowToHigh.addEventListener('click',() => {
    // sortDiscount.classList.remove("activeLink"); 
    // sortLowToHigh.classList.add("activeLink"); 
    // sortHighToLow.classList.remove("activeLink"); 
    ShoppingList.sortItemList(1,newItemsArray)});

   sortDiscount.addEventListener('click',() => {
    sortDiscount.classList.add("active-link"); 
    sortLowToHigh.classList.remove("active-link"); 
    sortHighToLow.classList.remove("active-link"); 
    ShoppingList.sortItemList(3,newItemsArray)});

   let searchBar = document.getElementById("search-bar");
   searchBar.addEventListener('keyup',()=> {
     setTimeout(ShoppingList.searchProduct(newItemsArray),1500)
   })
   let filter = document.getElementById("filter");
   var newRangeSlider = new ZBRangeSlider('my-slider');
   let minPrice = 0;
   let maxPrice =1000;
   newRangeSlider.onChange = function(min, max)
   {
   // ShoppingList.filterItemsArray(newItemsArray,min,max);
     minPrice = min;
    maxPrice = max;
     document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
   }
   
   newRangeSlider.didChanged = function(min, max)
   {
     document.getElementById('result').innerHTML = 'Min Price: ' + min + ' Max Price: ' + max;
   }
  // ///////////////////////////////////////////////////////////////////////////////////////////////
   var newRangeSliderModal = new ZBRangeSlider('modal-slider');
  
   newRangeSliderModal.onChange = function(min, max)
   {
    minPrice = min;
    maxPrice = max;
     document.getElementById('result-modal').innerHTML = 'Min: ' + min + ' Max: ' + max;
   }
   
   newRangeSliderModal.didChanged = function(min, max)
   {
     document.getElementById('result-modal').innerHTML = 'Min Price: ' + min + ' Max Price: ' + max;
   }
   let filterApplyBtn = document.getElementById("filterApplyBtn");
   filterApplyBtn.addEventListener('click',() => {
    ShoppingList.filterItemsArray(newItemsArray,minPrice,maxPrice)
   })
});
 
 