const header = () => {
 let  temp = `  <div class="logo">
  <a href="/cart-app-vanilla"><i class="logo__img fas fa-star"></i></a>
</div>
<ul class="nav__links">
    <li class="nav__link search">
        <input type="text" id="search-bar" placeholder="search">
    </li>
    <li id="cart__link" class="btn-cart nav__link" href="#cart">
        <i id="cart-add" class="fas fa-shopping-cart">
      </i></li>
</ul>`
return temp
}
export default header;