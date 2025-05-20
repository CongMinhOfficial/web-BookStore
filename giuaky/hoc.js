// Thêm mô tả cho từng sản phẩm
const products = [
  // product
  {
    name: "Sản Phẩm 1",
    price: "500,000 VNĐ",
    image: "/img/DivineComedy.png",
    description: "Mô tả chi tiết cho sản phẩm 1.",
  },
  {
    name: "Sản Phẩm 2",
    price: "750,000 VNĐ",
    image: "/img/TamQuocDienNghia.png",
    description: "Mô tả chi tiết cho sản phẩm 2.",
  },
  {
    name: "Sản Phẩm 3",
    price: "1,200,000 VNĐ",
    image: "images/3.jpg",
    description: "Mô tả chi tiết cho sản phẩm 3.",
  },
  {
    name: "Sản Phẩm 4",
    price: "300,000 VNĐ",
    image: "images/4.jpg",
    description: "Mô tả chi tiết cho sản phẩm 4.",
  },
  {
    name: "Sản Phẩm 5",
    price: "900,000 VNĐ",
    image: "images/5.jpg",
    description: "Mô tả chi tiết cho sản phẩm 5.",
  },
];
// tạo một hàm để đỗ những sản phẩm vào div cha product-list
function displayProduct() {
  // thấy được div cha
  const ProductList = document.getElementById("product-list");
  // Gán nội dung của cha về rỗng
  ProductList.innerHTML = "";
  // tenmang.forEach(Tên hàm)
  products.forEach((product, index) => {
    // tạo thẻ div cho object
    const productDIV = document.createElement("div");
    // tạo class cho nut
    productDIV.classList.add("product");
    // tạo nội dung cho nút
    productDIV.innerHTML = `
         <img src="${product.image}" alt="${product.name}">
         <h3>${product.name}</h3>
         <p>${product.price}</p>
         <button onclick="viewDetail(${index})">Xem chi tiết</button> 
         <button onclick="addToCart(${product.name})">Thêm vào giỏ hàng</button>
        `;
    ProductList.appendChild(productDIV);
  });
}
// Phương thức xem chi tiết của 1 sản phẩm
function viewDetail(index) {
  // lấy thông của 1 object
  const product = products[index];
  const detail = document.getElementById("detail-content");
  const productsection = document.querySelector(".products");
  const detailsection = document.getElementById("product-detail");
  detail.innerHTML = `
         <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.price}</p>
        <p><strong>${product.description}</strong></p>
        <button onclick="addToCart(${product.name})">Thêm vào giỏ hàng</button>
    `;
  // cho section của products ẩn lại
  productsection.style.display = "none";
  detailsection.style.display = "block";
}
//phơng thức goBack()
function goBack() {
  document.querySelector(".products").style.display = "block";
  document.getElementById("product-detail").style.display = "none";
}
// dùng DOMContentLoaded
// cú pháp document.addEventListener('DOMContentLoaded',tên hàm cần load lên)
document.addEventListener("DOMContentLoaded", displayProduct);
