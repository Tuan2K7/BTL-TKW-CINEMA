// Khi bấm nút tìm rạp, mở vị trí rạp trên Google Maps trong tab mới.
document.getElementById("findMap").addEventListener("click", function() {
    // window.open nhận địa chỉ bản đồ và tên đích; _blank yêu cầu trình duyệt mở tab mới.
    window.open(
        "https://www.google.com/maps/place/R%E1%BA%A1p+Beta+Gi%E1%BA%A3i+Ph%C3%B3ng/@20.985902,105.8396324,409m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3135ac6627f26b6d:0xd1605128577844b5!2zMzYwIMSQLiBHaeG6o2kgUGjDs25nLCBQaMawxqFuZyBMaeG7h3QsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!3b1!8m2!3d20.9859002!4d105.8405428!16s%2Fg%2F11j0vxfd9c!3m5!1s0x3135ad3cf00312e7:0xd033d791be7be6df!8m2!3d20.9857005!4d105.8405838!16s%2Fg%2F11j1h4d_dq?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D","_blank");
});

// Tìm kiếm địa chỉ rạp chiếu phim qua liên kết Google Map (click và sẽ nhảy sang trình duyệt mới )