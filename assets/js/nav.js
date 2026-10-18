
document.addEventListener('DOMContentLoaded', function () {
// Tìm thanh tab phim; nếu trang không có thanh này thì không cần khởi tạo hiệu ứng.
const navPills = document.querySelector('#movie-pills-nav');
if (!navPills) return; 
const navLinks = navPills.querySelectorAll('.nav-link');
const activeLink = navPills.querySelector('.nav-link.active');

// Hàm để di chuyển lớp nền trượt
function movePill(targetLink) {
    if (!targetLink) return;

    // offsetLeft và offsetWidth xác định vị trí/kích thước tab so với phần tử cha.
    const pillLeft = targetLink.offsetLeft;
    const pillWidth = targetLink.offsetWidth;

    // CSS pseudo-element đọc hai biến này để đặt vạch trượt ngay dưới tab đang chọn.
    navPills.style.setProperty('--pill-left', `${pillLeft}px`);
    navPills.style.setProperty('--pill-width', `${pillWidth}px`);
}

// Đặt vạch tại tab active ngay khi trang tải, không đợi người dùng bấm.
movePill(activeLink);

// Mỗi lần bấm tab, cập nhật class active rồi di chuyển vạch đến tab đó.
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
    // Chỉ một tab được active tại một thời điểm; xóa trạng thái cũ khỏi tất cả tab.
    navLinks.forEach(l => l.classList.remove('active'));
    // Gán trạng thái active cho tab vừa bấm để CSS hiển thị đúng.
    event.currentTarget.classList.add('active');
    
    // Tính lại vị trí/kích thước và cập nhật biến CSS của vạch trượt.
    movePill(event.currentTarget);
    });
});
});
