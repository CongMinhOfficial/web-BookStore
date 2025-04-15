<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 style="color: green; text-align: center">
      Phiếu đăng ký tham gia chương trình khuyến mãi
    </h1>
    <table
      border="1"
      width="60%"
      bordercolor="black"
      cellpadding="7"
      cellspacing="0"
      align="center"
    >
      <tr style="color: green">
        <td>Họ và tên</td>
        <td><?php echo htmlspecialchars($_POST['name']); ?></td>
      </tr>
      <tr style="color: green">
        <td>Địa chỉ</td>
        <td><?php echo htmlspecialchars($_POST['address']); ?></td>
      </tr>
      <tr style="color: green">
        <td>SDT</td>
        <td><?php echo htmlspecialchars($_POST['phone']); ?></td>
      </tr>
      <tr>
        <td style="color: green">SEX</td>
        <td><?php echo htmlspecialchars($_POST['sex']); ?></td>
      </tr>
      <tr>
        <td style="color: green">Nghề Nghiệp</td>
        <td><?php echo htmlspecialchars($_POST['nghe_nghiep']); ?></td>
      </tr>
      <tr>
        <td style="color: green">Chọn sản phẩm tham gia</td>
        <td><?php echo htmlspecialchars(implode(", ", $_POST['san_pham'])); ?></td>
      </tr>
      <tr>
        <td style="color: green">Số người dự đoán tham gia</td>
        <td><?php echo htmlspecialchars($_POST['so_nguoi']); ?></td>
      </tr>
      <tr style="text-align: center; color: red">
        <td colspan="2">Bạn đã đăng ký thành công</td>
      </tr>
    </table>
  </body>
</html>