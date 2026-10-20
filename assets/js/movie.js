

// Phải bọc trong DOMContentLoaded để đảm bảo các thẻ #trailerPopup, #trailerFrame... đã tồn tại
document.addEventListener("DOMContentLoaded", () => {
  // Lấy các phần tử điều khiển trailer; chỉ chạy tiếp nếu cả ba phần tử có trong trang.
  const trailerBtn = document.getElementById("trailer-btn"); // Dùng ID
  const trailerPopup = document.getElementById("trailerPopup");
  const trailerFrame = document.getElementById("trailerFrame");

  if (trailerBtn && trailerPopup && trailerFrame) {
    trailerBtn.addEventListener("click", () => {
      // Lấy link TẠI THỜI ĐIỂM CLICK
      // (Vì detail-page.js cần thời gian để "đổ" link vào)
      const trailerLink = trailerBtn.getAttribute("data-link");

      if (trailerLink) {
        // Thêm "?autoplay=1" để tự động phát
        trailerFrame.src = `${trailerLink}?autoplay=1`;
        trailerPopup.style.display = "flex";
      } else {
        // Ghi lỗi vào console thay vì mở popup rỗng khi thiếu đường dẫn trailer.
        console.error("Không tìm thấy data-link của trailer");
      }
    });

    // Đóng popup khi bấm ra ngoài (giữ logic cũ của bạn)
    trailerPopup.addEventListener("click", (e) => {
      if (e.target === trailerPopup) {
        closeTrailer(); // Gọi hàm closeTrailer() toàn cục
      }
    });
  }
});

/*
  Hàm này phải để ở BÊN NGOÀI (toàn cục/global)
  vì nó được gọi bằng "onclick="closeTrailer()"" trực tiếp từ HTML
*/
function closeTrailer() {
  // Hàm toàn cục để nút đóng trong HTML có thể gọi trực tiếp.
  const trailerPopup = document.getElementById("trailerPopup");
  const trailerFrame = document.getElementById("trailerFrame");

  if (trailerPopup && trailerFrame) {
    // Ẩn popup và xóa URL khỏi iframe để video dừng phát ở chế độ nền.
    trailerPopup.style.display = "none";
    // Dừng video khi đóng (tránh chạy nền)
    trailerFrame.src = "";
  }
}
