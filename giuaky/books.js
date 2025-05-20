const danhSachSanPham = [
  {
    danhMuc: "phat-trien-nhan-cach",
    ten: "Chiến thắng con quỷ",
    tacGia: "Napoleon Hill",
    luotBan: "120,321",
    gia: "400,000 VND",
    danhGia: 5,
    hinhAnh: "img/chienthangconquytrongban.png",
    moTaHinhAnh: "Bìa sách Chiến thắng con quỷ trong bạn của Napoleon Hill",
    lienKetChiTiet: "thetu/chienthangconquytrongban.html",
  },
  {
    danhMuc: "phat-trien-nhan-cach",
    ten: "Đắc nhân tâm",
    tacGia: "Dale Carnegie",
    luotBan: "213,163",
    gia: "250,000 VND",
    danhGia: 4.5,
    hinhAnh: "img/dacnhantam.png",
    moTaHinhAnh: "Bìa sách Đắc nhân tâm của Dale Carnegie",
    lienKetChiTiet: "thetu/dacnhantam.html",
  },
  {
    danhMuc: "phat-trien-nhan-cach",
    ten: "Nhà giả kim",
    tacGia: "Paulo Coelho",
    luotBan: "123,984",
    gia: "105,000 VND",
    danhGia: 5,
    hinhAnh: "img/nhagiakim.png",
    moTaHinhAnh: "Bìa sách Nhà giả kim của Paulo Coelho",
    lienKetChiTiet: "thetu/nhagiakim.html",
  },
  {
    danhMuc: "tu-duy",
    ten: "Tư duy mở",
    tacGia: "Growth Mindset",
    luotBan: "132,654",
    gia: "350,000 VND",
    danhGia: 5,
    hinhAnh: "img/tuduymo.png",
    moTaHinhAnh: "Bìa sách Tư duy mở",
    lienKetChiTiet: "thetu/tuduymo.html",
  },
  {
    danhMuc: "tu-duy",
    ten: "Tư duy ngược",
    tacGia: "Edward de Bono",
    luotBan: "120,654",
    gia: "475,000 VND",
    danhGia: 5,
    hinhAnh: "img/tuduynguoc.png",
    moTaHinhAnh: "Bìa sách Tư duy ngược của Edward de Bono",
    lienKetChiTiet: "thetu/tuduynguoc.html",
    ngatDongTruoc: true,
  },
  {
    danhMuc: "tu-duy",
    ten: "Nghĩ giàu làm giàu",
    tacGia: "Napoleon Hill",
    luotBan: "102,132",
    gia: "325,000 VND",
    danhGia: 5,
    hinhAnh: "img/nghigiaulamgiau.png",
    moTaHinhAnh: "Bìa sách Nghĩ giàu làm giàu của Napoleon Hill",
    lienKetChiTiet: "thetu/nghigiaulamgiau.html",
  },
  {
    danhMuc: "hien-thuc",
    ten: "Who Are You Really?",
    tacGia: "Brian R. Little",
    luotBan: "120,165",
    gia: "220,000 VND",
    danhGia: 4.5,
    hinhAnh: "img/banlaai.png",
    moTaHinhAnh: "Bìa sách Who Are You Really? của Brian R. Little",
    lienKetChiTiet: "thetu/banlaai.html",
  },
  {
    danhMuc: "hien-thuc",
    ten: "Cây cam ngọt của tôi",
    tacGia: "José Mauro de Vasconcelos",
    luotBan: "103,654",
    gia: "130,000 VND",
    danhGia: 4.5,
    hinhAnh: "img/caycam.png",
    moTaHinhAnh: "Bìa sách Cây cam ngọt của tôi của José Mauro de Vasconcelos",
    lienKetChiTiet: "thetu/caycam.html",
  },
  {
    danhMuc: "hien-thuc",
    ten: "999 lá thư gửi cho chính mình",
    tacGia: "Miêu Công Tử",
    luotBan: "103,987",
    gia: "500,000 VND",
    danhGia: 5,
    hinhAnh: "img/999.png",
    moTaHinhAnh: "Bìa sách 999 lá thư gửi cho chính mình của Miêu Công Tử",
    lienKetChiTiet: "thetu/999.html",
  },
];

// Hàm tạo biểu tượng sao cho đánh giá
function taoSao(danhGia) {
  let sao = "";
  const soSaoDayDu = Math.floor(danhGia);
  const coSaoNua = danhGia % 1 !== 0;

  for (let i = 0; i < soSaoDayDu; i++) {
    sao += '<i class="bx bxs-star"></i>';
  }
  if (coSaoNua) {
    sao += '<i class="bx bxs-star-half"></i>';
  }
  return sao;
}

// Hàm xử lý khi nhấn nút " Thêm vào giỏ hàng"
function muaSanPham(index) {
  try {
    const sanPham = danhSachSanPham[index];
    if (!sanPham) {
      console.error("Không tìm thấy sản phẩm tại index:", index);
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find((item) => item.sanPham.ten === sanPham.ten);
    if (existingItem) {
      existingItem.soLuong += 1; // Tăng số lượng sp
    } else {
      cart.push({ sanPham, soLuong: 1 }); // Thêm mới sp
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Đã thêm vào giỏ hàng:", cart); // Debug
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    alert("Có lỗi xảy ra khi thêm sản phẩm! Vui lòng thử lại.");
  }
}

// Hàm hiển thị danh sách sản phẩm
function hienThiSanPham() {
  const danhMucSanPham = {
    "phat-trien-nhan-cach": document.getElementById("personal-development-books"),
    "tu-duy": document.getElementById("mindset-books"),
    "hien-thuc": document.getElementById("realism-books"),
  };

  let soThuTu = 1;

  Object.keys(danhMucSanPham).forEach((danhMuc) => {
    const sanPhamTheoDanhMuc = danhSachSanPham.filter(
      (sanPham) => sanPham.danhMuc === danhMuc
    );
    let htmlSanPham = "";

    sanPhamTheoDanhMuc.forEach((sanPham) => {
      const lopNgatDong = sanPham.ngatDongTruoc ? " break-before" : "";
      htmlSanPham += `
        <div class="book${lopNgatDong}">
          <img src="${sanPham.hinhAnh}" alt="${sanPham.moTaHinhAnh}" class="img" />
          <h3>Sản phẩm ${soThuTu}: ${sanPham.ten}</h3>
          <p><strong>Tác giả:</strong> ${sanPham.tacGia}</p>
          <p><strong>Lượt bán:</strong> ${sanPham.luotBan}</p>
          <p><strong>Giá:</strong> ${sanPham.gia}</p>
          <p>
            <strong>Đánh giá:</strong>
            ${taoSao(sanPham.danhGia)}
            ${sanPham.danhGia}/5
          </p>
          <div class="button-group">
            <button class="buy-button" onclick="muaSanPham(${soThuTu - 1})">Thêm vào giỏ hàng</button>
            <a href="${sanPham.lienKetChiTiet}" class="details-button">Xem chi tiết</a>
          </div>
        </div>
      `;
      soThuTu++;
    });

    if (danhMucSanPham[danhMuc]) {
      danhMucSanPham[danhMuc].innerHTML = htmlSanPham;
    }
  });
}


// Chạy hàm hiển thị khi trang được tải
document.addEventListener("DOMContentLoaded", hienThiSanPham);