
window.addEventListener('DOMContentLoaded', () => {
    // Chờ HTML tải xong trước khi tìm phần tử sẽ được cập nhật.
    // Đọc ID phim từ query string, ví dụ movie-detail.html?id=avenger.
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (!movieId) {
        // Không có ID thì không thể biết cần hiển thị phim nào, nên báo lỗi và dừng.
        document.body.innerHTML = "<h1>Lỗi: Không tìm thấy ID phim.</h1>";
        return;
    }

    // Tìm object phim có id trùng trong danh sách dữ liệu tĩnh ALL_MOVIES.
    const movie = ALL_MOVIES.find(m => m.id === movieId);

    if (!movie) {
        // ID có trên URL nhưng không tồn tại trong danh sách cũng là trường hợp lỗi.
        document.body.innerHTML = `<h1>Lỗi: Không tìm thấy phim với ID: ${movieId}</h1>`;
        return;
    }

    // Đưa các trường dữ liệu phim vào đúng phần tử giao diện trang chi tiết.
    document.title = movie.title; // Cập nhật tiêu đề trang
    document.getElementById('movie-background-img').src = movie.background_img;
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-age-tag').textContent = movie.age_tag;
    document.getElementById('movie-age-tag').style.backgroundColor = movie.age_color;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-meta').textContent = movie.meta;
    document.getElementById('movie-rating-text').textContent = movie.rating_text;
    document.getElementById('movie-tagline').innerHTML = movie.tagline; // Dùng innerHTML vì có <br>
    document.getElementById('movie-description').textContent = movie.description;
    document.getElementById('movie-release-date').textContent = movie.release_date;
    
    // Lưu liên kết trailer vào nút và iframe để trình phát có thể sử dụng.
    document.getElementById('trailer-btn').setAttribute('data-link', movie.trailer_link);
    document.getElementById('trailerFrame').src = movie.trailer_link;
    
    
    // Chuẩn bị các vùng giao diện lịch chiếu được dùng bên dưới.
    
    // Cập nhật tiêu đề lịch chiếu
    document.getElementById('schedule-title').textContent = `Lịch chiếu ${movie.title}`;

    const dateSelector = document.getElementById('dateSelector');
    const showtimeFormat = document.getElementById('showtime-format');
    const timeSlots = document.getElementById('timeSlots');
    const scheduleContainer = document.querySelector('.schedule'); // Lấy cả container

    // Chỉ tạo lựa chọn ngày/giờ nếu phim có ít nhất một lịch chiếu.
    if (movie.schedules && movie.schedules.length > 0) {
        
        // Tạo một nút cho mỗi ngày chiếu; data-index liên kết nút với phần tử schedules.
        movie.schedules.forEach((schedule, index) => {
            const dateBtn = document.createElement('button');
            dateBtn.className = 'date';
            // Sửa class của span ngày cho đúng (từ file seat.html cũ)
            dateBtn.innerHTML = `<span class="day">${schedule.date}</span><br /><span>${schedule.day}</span>`;
            
            dateBtn.setAttribute('data-index', index); 

            if (index === 0) {
                dateBtn.classList.add('active'); // Tự động active nút đầu tiên
            }
            
            dateSelector.appendChild(dateBtn);
        });

        // Hiển thị các giờ của ngày được chọn và thay danh sách giờ cũ.
        function loadShowtimes(scheduleIndex) {
            const selectedSchedule = movie.schedules[scheduleIndex];
            
            timeSlots.innerHTML = ''; // Xóa các giờ chiếu cũ
            
            showtimeFormat.textContent = selectedSchedule.format; // Cập nhật (2D, 3D...)
            
            // Tạo nút cho từng giờ chiếu.
            selectedSchedule.times.forEach(time => {
                const timeBtn = document.createElement('button');
                timeBtn.textContent = time;
                
                // Mã hóa giờ và truyền thông tin phim/ngày/giờ sang trang chọn ghế.
                timeBtn.onclick = () => {
                    // Truyền cả 3 thông tin quan trọng
                    const url = `seat.html?id=${movie.id}&date=${selectedSchedule.date}&time=${encodeURIComponent(time)}`;
                    window.location.href = url;
                };
                timeSlots.appendChild(timeBtn);
            });
        }

        // Mặc định hiện các suất của ngày đầu tiên trong lịch.
        loadShowtimes(0);

        // Dùng một listener chung cho vùng ngày; closest hỗ trợ bấm cả phần tử con bên trong nút.
        dateSelector.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('.date');
            if (!clickedButton) return;

            dateSelector.querySelectorAll('.date').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
            
            const scheduleIndex = clickedButton.getAttribute('data-index');
            loadShowtimes(scheduleIndex);
        });

    } else {
        // Không có suất chiếu thì ẩn lịch để tránh hiển thị một vùng trống.
        if (scheduleContainer) {
            scheduleContainer.style.display = 'none';
        }
    }
});