const items = [
    {
      "id": 9090,
      "name": "Item1",
      "price": 200,
      "discount": 10,
      "category": "fiction",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9091,
      "name": "Item2",
      "price": 250,
      "discount": 15,
      "category": "literature",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9092,
      "name": "Item3",
      "price": 320,
      "discount": 5,
      "category": "literature",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9093,
      "name": "Item4",
      "price": 290,
      "discount": 0,
      "category": "thriller",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9094,
      "name": "Item1",
      "price": 500,
      "discount": 25,
      "category": "thriller",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9095,
      "name": "Item2",
      "price": 150,
      "discount": 5,
      "category": "literature",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9096,
      "name": "Item3",
      "price": 700,
      "discount": 22,
      "category": "literature",
      "img_url": "http://lorempixel.com/500/600/technics/"
    },
    {
      "id": 9097,
      "name": "Item4",
      "price": 350,
      "discount": 18,
      "category": "fiction",
      "img_url": "http://lorempixel.com/500/600/technics/"
    }
  ]
  
  let newItemsArray = [];

class ShoppingList {
    constructor() {}
    static displayList(itemsArray) {
        localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")).length > 0 ? 
        setCartCount(JSON.parse(localStorage.getItem("Cart")).length) : null
        : null 
        let list = document.querySelector('#shopping-items');
         for(let i=0;i<list.childNodes.length;i++) list.removeChild(list.childNodes[i]);

      itemsArray.forEach(item => {
        ShoppingList.addToProductList(item);
      })
    }
    static discountCalculation(itemsArray) {
        itemsArray.map(item => {
          item.discountedPrice = item.price - item.discount;
          item.discountPercentage = item.discount/item.price *100;
        })
        newItemsArray = [...itemsArray]
        ShoppingList.displayList(itemsArray);
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
         <button class="addtocartbtn" onCLick = "ShoppingList.addToCart(${item.id})">Add to Cart</button>
        `
        list.appendChild(div);
    }
    static sortItemList(sortType) {
        let newItems = [...newItemsArray];
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
         ShoppingList.displayList(newItems)
    }
    static addToCart(itemId) {
        let itemDetails = newItemsArray.find(a=> 
            {
                return a.id === itemId ? a : false });
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
     setCartCount(cart.length);
        } 
  }
  static searchProduct() {
    let searchKey = document.getElementById("search-bar").value;
    let newItems = [...newItemsArray];
    if(searchKey && searchKey !== '') {
        newItems = newItems.filter(item => {
        return item.name.toLowerCase() === searchKey.toLowerCase()
      })
    }
    console.log(newItems)
    ShoppingList.displayList(newItems)
 
  }
}
document.addEventListener('DOMContentLoaded', ShoppingList.discountCalculation(items));
let sortbtn = document.getElementById('sortApply');
function callSortFunction() {
    let sortRadios = document.getElementsByName('sort');
    for(let i=0;i<sortRadios.length;i++) {
        if(sortRadios[i].checked) {
            ShoppingList.sortItemList(sortRadios[i].value);
            break;
        }
    }
}
  class CartList {
   constructor() {}
    static removeItem(itemId) {
     let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
     cartItems = cartItems.filter(a=>a.id !== itemId)
     localStorage.setItem("Cart", JSON.stringify(cartItems));
     let list = document.querySelector('#cart-items');
     let prevDiv = document.getElementById("cart" +itemId);
     if(prevDiv) {
     list.removeChild(prevDiv);
    }
    let cartCount = document.getElementsByClassName("cart-count");
    let parent = document.getElementById("cart-add")
    if (cartItems.length === 0) {
        let div = document.createElement('div');
        div.id="no-item"
        div.innerHTML = '<h3>No item in the cart</h3>'
        list.appendChild(div);
        if(cartCount) {
          parent.removeChild(parent.childNodes[0]);
       }
    } else {
        setCartCount(cartItems.length);
    }
    cartTotal(); 
    }
    static increaseQuantity(itemId) {
     let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
     cartItems = cartItems.map(a=> {
         a.quantity = a.id === itemId ? a.quantity +=1 : a.quantity;
         return a;
        })
     localStorage.setItem("Cart", JSON.stringify(cartItems)); 
     openCartPage();
    }
    static decreaseQuantity(itemId) {
        let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
        cartItems.forEach(a=> {
            if (a.id === itemId) {
            if (a.quantity === 1) {
                 CartList.removeItem(a.id);
            }
              a.quantity -=1 
           } 
           })
           cartItems = cartItems.filter(a=>a.quantity !== 0);
        localStorage.setItem("Cart", JSON.stringify(cartItems)); 
        openCartPage();
    }
  }
    function openCartPage() {
        let list = document.querySelector('#cart-items');
        list.style.display = "block";
       let mainBody = document.getElementById("main-body");
       mainBody.style.display ="none";
        const cartItemArray = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []; 
        
        if(cartItemArray.length <1) {
            let noItemDiv = document.getElementById("no-item");
            if(!noItemDiv) {
            let div = document.createElement('div');
            div.id="no-item"
            div.innerHTML = '<h3>No item in the cart</h3>'
            list.appendChild(div);
            }
        } else {
        cartItemArray.forEach(cartItem=>{
            let prevDiv = document.getElementById("cart" +cartItem.id);
            let noItemDiv = document.getElementById("no-item");
            if(noItemDiv) list.removeChild(noItemDiv);
             if(prevDiv) {
            list.removeChild(prevDiv);
            }
            let div = document.createElement('div');
            div.className = "cart-container";
            div.id = "cart" + cartItem.id;
            div.innerHTML = `
             <div class="cart-image-container"><img class="product-image" src=${cartItem.img_url}></div>
             <div class="cart-details">
             <div class="product-name">${cartItem.name}</div>
             <div class="rest-details">
             <div class="cart-prices">
             <div class="discount-price"><i class="fas fa-rupee-sign">${cartItem.discountedPrice}</i></div>
             <div class="product-price">${cartItem.price}</div>
             <div class="discount-percentage">${cartItem.discount} % Off</div>
             </div>
             <div class="quantity-control">
            <button class="decrement" onclick = "CartList.decreaseQuantity(${cartItem.id})">-</button>
          <input class="box" value = ${cartItem.quantity} type="text" readonly>
          <button class="increment" onclick = "CartList.increaseQuantity(${cartItem.id})">+</button></div>
          <div class="remove-div">
          <a class="remove" onclick = "CartList.removeItem(${cartItem.id})">REMOVE</a></div> 
          </div>  
          </div>        
            `
            list.appendChild(div);
        })
    }
    cartTotal(); 
    }
    function cartTotal() {
        const cartItemArray = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []; 
       if(cartItemArray.length >0) {
        let totalSection = document.querySelector("#cart-total");
        totalSection.style.display = "block";
        if(totalSection) {
            totalSection.removeChild(totalSection.childNodes[0])
        }
        let div = document.createElement('div');
        let totalPrice = 0;
        let discount = 0;
       cartItemArray.forEach(element => {
      totalPrice += element.price*element.quantity;
      discount += element.discount*element.quantity
    })
        div.innerHTML = `
        <div class="total-header">PRICE DETAILS</div>
        <div class="total-body">
        <div class="price-text">
        <div class="total-price-text">Price(${cartItemArray.length} items) :</div>
        <div class="discount-text">Discount :</div>
        </div>
        <div class="total-prices">
        <div class="total-price"><i class="fas fa-rupee-sign">${totalPrice}</i></div>
        <div><i class="fas fa-rupee-sign">${discount}</i></div>
        </div>
        </div>
        <div class="total-footer">
        <div class="net-amount-text">Total Payable :</div><div class="net-amount"><i class="fas fa-rupee-sign">${totalPrice-discount}</i></div>
        </div>`
        totalSection.appendChild(div);   
    } else {
        let totalSection = document.querySelector("#cart-total");
        totalSection.style.display = "none";
    }
       
    }
    // onReload() {

    // }
    function setCartCount(cartLength) {
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

  