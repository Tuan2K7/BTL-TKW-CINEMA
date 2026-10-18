# Website rạp chiếu phim

## Chạy dự án

Mở thư mục dự án bằng VS Code, chạy `index.html` với tiện ích Live Server,
rồi dùng thanh điều hướng để mở các trang còn lại. Chạy qua máy chủ cục bộ để
đăng nhập và dữ liệu đặt vé được lưu trong trình duyệt.

## Các trang

- `index.html`: trang chủ, danh sách phim và banner.
- `new.html`: tin tức và khuyến mãi.
- `about.html`: thông tin giới thiệu rạp.
- `movie-detail.html`: thông tin phim và lịch chiếu.
- `seat.html`: chọn ghế và xác nhận thanh toán mô phỏng.

## Các file chính

- `assets/js/movie-data.js`: thông tin phim và suất chiếu dùng chung.
- `assets/js/cinema-store.js`: tài khoản, phiên đăng nhập, ghế đã đặt và giao dịch trong `localStorage`.
- `assets/js/login.js`: mở form đăng nhập/đăng ký và cập nhật trạng thái tài khoản.
- `assets/js/detail-page.js`: hiển thị phim và lịch chiếu.
- `assets/js/seat.js`: chọn ghế, tính tiền và lưu giao dịch mô phỏng.
- `assets/js/admin.js`: bảng thống kê dành cho tài khoản quản trị thử nghiệm.
- `assets/css/theme.css`: màu sắc và giao diện dùng chung.
- Các CSS còn lại: bố cục riêng cho từng phần như menu, banner, thẻ phim, tin tức, giới thiệu và chọn ghế.

Đây là bài tập chạy hoàn toàn ở trình duyệt. `localStorage` và vai trò quản trị
chỉ phục vụ mô phỏng, không thay thế đăng nhập, phân quyền hay thanh toán phía máy chủ.

## Kiểm tra thủ công

1. Mở trang chủ và chuyển giữa phim đang chiếu / sắp chiếu.
2. Mở một phim, chọn ngày và suất chiếu.
3. Chọn ghế, mở xác nhận thanh toán và hoàn tất giao dịch mô phỏng.
4. Đăng ký tài khoản thử nghiệm, đăng nhập và đăng xuất.
5. Mở các trang Tin tức, Giới thiệu và Đặt ghế ở kích thước màn hình nhỏ.
