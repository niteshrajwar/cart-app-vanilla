const header = () => {
 let  temp = `  <div class="logo">
  <a href="/cart-app-vanilla"><i class="logo-img fas fa-star"></i></a>
</div>
<ul class="nav-links">
    <li class="nav-link search">
        <input type="text" id="search-bar" placeholder="search">
    </li>
    <li id="cart-link" class="cart nav-link" href="#cart">
        <i id="cart-add" class="fas fa-shopping-cart">
      </i></li>
</ul>`
return temp
}
export default header;