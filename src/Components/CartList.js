import ShoppingList from './ShoppingList'
class CartList {
    constructor() {}
     static removeItem(itemId) {
      let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
      cartItems = cartItems.filter(a=>a.id != itemId)
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
         ShoppingList.setCartCount(cartItems.length);
     }
     this.cartTotal(); 
     }
     static increaseQuantity(itemId) {
      let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
      cartItems = cartItems.map(a=> {
          a.quantity = a.id == itemId ? a.quantity +=1 : a.quantity;
          return a;
         })
      localStorage.setItem("Cart", JSON.stringify(cartItems)); 
      this.openCartPage();
     }
     static decreaseQuantity(itemId) {
         let cartItems = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
         cartItems.forEach(a=> {
             if (a.id == itemId) {
             if (a.quantity === 1) {
                  this.removeItem(a.id);
             }
               a.quantity -=1 
            } 
            })
            cartItems = cartItems.filter(a=>a.quantity !== 0);
         localStorage.setItem("Cart", JSON.stringify(cartItems)); 
         this.openCartPage();
     }
     static cartTotal() {
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
        <div class="discount-price"><i class="fas fa-rupee-sign">${discount}</i></div>
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
    static openCartPage() {
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
            <button class="decrement" id=${cartItem.id}>-</button>
          <input class="box" value = ${cartItem.quantity} type="text" readonly>
          <button class="increment" id=${cartItem.id}>+</button></div>
          <div class="remove-div">
          <a class="remove" id=${cartItem.id}>REMOVE</a></div> 
          </div>  
          </div>        
            `
            list.appendChild(div);
        })
    }
    CartList.removeCartItemButtonClick();
    CartList.increaseQuantityButtonClick();
    CartList.decreaseQuantityButtonClick();
    CartList.cartTotal(); 
    }
    static removeCartItemButtonClick() {
        let removebtn = document.getElementsByClassName('remove');
        for(let i=0;i<removebtn.length;i++) {
          removebtn[i].addEventListener('click',()=>{
           this.removeItem(removebtn[i].id)
          })
        }
      }
      static increaseQuantityButtonClick() {
        let increment = document.getElementsByClassName('increment');
        for(let i=0;i<increment.length;i++) {
          increment[i].addEventListener('click',()=>{
            this.increaseQuantity(increment[i].id)
          })
        }
      }
      static decreaseQuantityButtonClick() {
        let decrement = document.getElementsByClassName('decrement');
        for(let i=0;i<decrement.length;i++) {
              decrement[i].addEventListener('click',()=>{
              this.decreaseQuantity(decrement[i].id)
          })
        }
      }
   }
   export default CartList;