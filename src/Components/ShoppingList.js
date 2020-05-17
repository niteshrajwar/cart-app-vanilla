class ShoppingList {
    constructor() {
      this.items = [];
    }
    static getItemsArray() {
      return this.items;
    }
    static setItemsArray(items) {
      this.items = items;
    }
    static displayList(itemsArray) {
        localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")).length > 0 ? 
        this.setCartCount(JSON.parse(localStorage.getItem("Cart")).length) : null
        : null 
        let list = document.querySelector('#shopping-items');
        let child = list.lastElementChild;  
         while (child) { 
            list.removeChild(child); 
            child = list.lastElementChild; 
        } 
      itemsArray.forEach(item => {
        ShoppingList.addToProductList(item);
      })
    }
    static discountCalculation(itemsArray) {
        itemsArray.map(item => {
          item.discountedPrice = item.price - item.discount;
          item.discountPercentage = item.discount/item.price *100;
        })
       let newItemsArray = [...itemsArray]
        ShoppingList.displayList(itemsArray);
        this.setItemsArray(newItemsArray);
        return newItemsArray;
       }
    static addToProductList(item) {
        let list = document.querySelector('#shopping-items');
        let prevDiv = document.getElementById(item.id);
        if(prevDiv) {
            list.removeChild(prevDiv);
        }
        let totalSection = document.querySelector("#cart-total");
        totalSection.style.display = "none";
        let div = document.createElement('div');
        div.className = "product-container";
        div.id = item.id;
        div.innerHTML = `
         <div class="product-image-container"><img alt="No preview Available" class="product-image" src=${item.img_url}></div>
         <div class="product-name">${item.name}</div>
         <div class="prices">
         <div class="discount-price"><i class="fas fa-rupee-sign">${item.discountedPrice}</i></div>
         <div class="product-price">${item.price}</div>
         <div class="discount-percentage">${item.discount} % Off</div>
         </div>
         <button class="addtocartbtn" id=${item.id}>Add to Cart</button>
        `
        list.appendChild(div);
    }
    static sortItemList(sortType,newItems) {
        if(sortType ==1) {
        newItems = newItems.sort((a,b)=> {
           return a.discountedPrice - b.discountedPrice})
        }
         else if(sortType == 2) {
         newItems = newItems.sort((a,b)=>b.discountedPrice - a.discountedPrice)
         }
         else if(sortType ==3) {
         newItems = newItems.sort((a,b)=>b.discountPercentage - a.discountPercentage);
         }
         this.displayList(newItems)
    }
    static addToCart(itemId,newItemsArray) {
        let itemDetails = newItemsArray.find(a=> 
            {
                return a.id == itemId ? a : false });
        if (typeof window !== 'undefined' && localStorage) {
            const cart = localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem("Cart")) : [];
            if(cart.length > 0) {
             const find =  cart.findIndex(a => {
                 return (a.id === itemDetails.id)   } 
             )
       if (find !== -1) {
          cart[find].quantity += 1;
       } else {
         itemDetails.quantity = 1;
         cart.push(itemDetails);
      }
      }else {
        itemDetails.quantity = 1;
         cart.push(itemDetails);
      }
      localStorage.setItem("Cart", JSON.stringify(cart));
     this.setCartCount(cart.length);
        } 
  }
  static searchProduct(newItemsArray) {
    let searchKey = document.getElementById("search-bar").value;
    let newItems = [...newItemsArray];
    if(searchKey && searchKey !== '') {
        newItems = newItems.filter(item => {
        return item.name.toLowerCase() === searchKey.toLowerCase()
      })
    }
    ShoppingList.displayList(newItems)
 
  }
  static setCartCount(cartLength) {
    let cartAdd = document.getElementById("cart-add");
    if(cartAdd.hasChildNodes()) {
        cartAdd.removeChild(cartAdd.childNodes[0])
    }
     let input = document.createElement('input');
     input.type="text";
     input.className = "cart-count";
     input.value = cartLength
     cartAdd.appendChild(input);
}
static callSortFunction(newItemsArray) {
    let sortRadios = document.getElementsByName('sort');
    for(let i=0;i<sortRadios.length;i++) {
        if(sortRadios[i].checked) {
            this.sortItemList(sortRadios[i].value, newItemsArray);
            break;
        }
    }
}
 static filterItemsArray(min,max) {
   let newItemsArray = this.getItemsArray();
   newItemsArray = newItemsArray.filter(item => {
    return (item.discountedPrice >= min && item.discountedPrice <=max )
 })
  ShoppingList.displayList(newItemsArray)
  return newItemsArray;
 }
}
export default ShoppingList