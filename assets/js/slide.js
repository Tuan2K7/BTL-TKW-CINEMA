// Lấy toàn bộ ảnh slideshow; index luôn trỏ đến ảnh đang hiển thị.
const images = document.getElementsByClassName('img');
let index = 0;
// Lưu ID bộ đếm để hủy lịch chuyển ảnh trước khi người dùng chuyển thủ công.
let timeoutId;
// Ẩn các ảnh khác, hiện ảnh theo index rồi hẹn giờ tự chuyển sau 10 giây.
function showImage(){ 
    if (!images.length) return;
    for(let i = 0; i < images.length; i++){
        if(!images[i].classList.contains("hidden")){
            images[i].classList.add("hidden");
        }
    }
    images[index].classList.remove("hidden");
    timeoutId = setTimeout(next, 10000);
}
function next(){
    // Hủy bộ đếm cũ để thao tác thủ công không tạo nhiều lịch chuyển ảnh song song.
    clearTimeout(timeoutId);
    // Sang ảnh kế tiếp; quay lại ảnh đầu tiên khi đã tới cuối danh sách.
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
}
// Chuyển về ảnh trước; nếu đang ở ảnh đầu thì quay vòng đến ảnh cuối.
function prev(){
    clearTimeout(timeoutId);
    index--;   
    if(index < 0){
        index = images.length - 1;
    }
    showImage();
}

showImage();
