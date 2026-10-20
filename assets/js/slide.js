const banners = document.getElementsByClassName('img');
const autoSlideDelay = 10000;
let currentBannerIndex = 0;
let autoSlideTimeout;

function showCurrentBanner() {
  if (banners.length === 0) return;

  // Ẩn tất cả banner, rồi chỉ hiện banner đang được chọn.
  for (const banner of banners) {
    banner.classList.add('hidden');
  }
  banners[currentBannerIndex].classList.remove('hidden');

  // Tự chuyển banner sau 10 giây.
  autoSlideTimeout = setTimeout(next, autoSlideDelay);
}

function next() {
  clearTimeout(autoSlideTimeout);
  currentBannerIndex++;

  // Hết danh sách thì quay lại banner đầu tiên.
  if (currentBannerIndex >= banners.length) {
    currentBannerIndex = 0;
  }

  showCurrentBanner();
}

function prev() {
  clearTimeout(autoSlideTimeout);
  currentBannerIndex--;

  // Đang ở banner đầu thì quay về banner cuối cùng.
  if (currentBannerIndex < 0) {
    currentBannerIndex = banners.length - 1;
  }

  showCurrentBanner();
}

showCurrentBanner();
