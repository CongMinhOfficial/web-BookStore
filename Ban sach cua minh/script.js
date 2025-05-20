const btn = document.querySelectorAll(".Chieu");
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var product = btnItem.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("h1").innerText;
      var productPrice = product.querySelector("p").innerText;
      addcart(productImg, productName, productPrice);
    }
  });
});
function addcart(productImg, productName, productPrice) {
  var addtr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title");
    if (productT[i].innerHTML == productName) {
      alert("Sản phẩm của bạn đã có trong giỏ hàng");
      return;
    }
  }
  var trcontent =
    '<td style="align-items: center; display: flex"><img style="width: 70px" src="' +
    productImg +
    '" alt=""/><span class="title">' +
    productName +
    '</span></td><td><span class="gia">' +
    productPrice +
    '</span><sup>đ</sup></td><td><input style="width: 30px; outline: none" type="number" value="1" min="1"/> </td><td style="cursor: pointer"><span class="delete-cart">Xóa</span></td>';
  addtr.innerHTML = trcontent;
  var cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  carttotal();
  deleteCart();
}
//-----------totalprice------------
function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  var totalC = 0;
  // console.log(cartItem.length)
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input").value;
    // console.log(inputValue)
    var productPrice = cartItem[i].querySelector(".gia").innerHTML;
    // console.log(productPrice)
    totalA = inputValue * productPrice * 1000;
    // totalB = totalA.toLocaleString('de-DE')
    // console.log(totalB)
    totalC = totalC + totalA;
    // totalD = totalC.toLocaleString("de-DE");
  }
  var cartTotalA = document.querySelector(".price-total span");
  cartTotalA.innerHTML = totalC;
  console.log(cartTotalA);
  inputchange();
  // cartTotalA.innerHTML = totalD;
  // console.log(cartTotalA)
}
function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".delete-cart");
    productT[i].addEventListener("click", function (event) {
      var cartDelete = event.target;
      var cartItemR = cartDelete.parentElement.parentElement;
      cartItemR.remove();
    });
  }
}
function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", function () {
      carttotal();
    });
  }
}
// const cartbtn = document.querySelector("i");
// const cartshow = document.querySelector(".cart-icon");
// cartshow.addEventListener("click", function () {
//   console.log(cartshow);
//   document.querySelector(".cart").style.right = "0";
// });

// cartshow.addEventListener("click", function () {
//   console.log(cartshow);
//   document.querySelector(".cart").style.right = "0";
// });
const cartbtn = document.querySelector(".x"); // Correctly select the close button
const cartshow = document.querySelector(".cart-icon");
const cartElement = document.querySelector(".cart"); // Select the cart element

// Function to show the cart
function showCart() {
  cartElement.style.right = "0";
}

// Function to hide the cart
function hideCart() {
  cartElement.style.right = "-100%";
}

// Event listener to show the cart when the cart icon is clicked
cartshow.addEventListener("click", showCart);

// Event listener to hide the cart when the close button is clicked
cartbtn.addEventListener("click", hideCart);
