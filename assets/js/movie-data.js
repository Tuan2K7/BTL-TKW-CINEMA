// Danh sách dữ liệu phim được các trang danh sách, chi tiết và đặt vé dùng chung.
// Mỗi object mô tả một phim: id dùng tra cứu; title/meta/description là nội dung hiển thị;
// poster/background_img/trailer_link là đường dẫn tài nguyên; age_tag/age_color là nhãn tuổi;
// release_date là ngày khởi chiếu; schedules chứa ngày, định dạng và các suất chiếu.
// Đây là dữ liệu tĩnh mẫu, không phải cơ sở dữ liệu máy chủ.
const ALL_MOVIES = [
    // === PHIM ĐANG CHIẾU ===
    {
        id: "an-mang-xem-hoan-hao",
        title: "Án mạng xém hoàn hảo",
        poster: "./assets/img/movies/an-mang-xem-hoan-hao.webp",
        background_img: "./assets/img/movies/an-mang-xem-hoan-hao.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 124 phút",
        rating_text: "Đang thịnh hành",
        tagline: "Thể loại: Hài",
        description: "Trinh, cô nàng TikToker ngôn tình triệu view, tỉnh dậy giữa phim trường lạnh lẽo với cái đầu đau như búa bổ, mất trí nhớ và phát hiện xác của Yến (diễn viên) – tình địch đang bị nghi ngờ có gì mờ ám với diễn viên Khang (chồng sắp cưới). Đại (thám tử) được Trinh thuê theo dõi vụ ngoại tình lẻn vào giúp thì vấp ngã để lại dấu vân tay lên tử thi và vô tình bị bảo vệ bắt quả tang. Kể từ đây, liên tiếp những tình huống oái oăm mà cặp đôi “đũa lệch” phải đối mặt: chạy trốn khỏi cảnh sát dí sát gót và sát thủ rình rập, vừa cãi nhau tóe khói vừa phá án. Song song đó, cả hai vô tình lật tẩy bí mật động trời của showbiz.",
        release_date: "09/10/2026",
        trailer_link: "https://www.youtube.com/embed/YUESTe-oL1U",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:58",
                    "20:00 ~ 21:58"
                ]
            }
        ]
    },
    {
        id: "avenger",
        title: "Avengers: Endgame",
        poster: "./assets/img/movies/avenger.webp",
        background_img: "./assets/img/movies/avenger.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 181 phút",
        rating_text: "Bom tấn",
        tagline: "Thể loại: Hành động, Giả tưởng, Siêu anh hùng",
        description: "Khi Thanos quyết định nghỉ hưu, các siêu anh hùng một lần nữa đoàn kết lại để mang trở về những người đã mất từ sau trận chiến vô cực.",
        release_date: "25/09/2026",
        trailer_link: "https://www.youtube.com/embed/_XvulZckXLQ",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:30 ~ 12:14",
                    "14:30 ~ 16:14",
                    "20:00 ~ 21:44",
                    "22:00 ~ 23:44"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "15:00 ~ 16:44",
                    "21:00 ~ 22:44"
                ]
            }
        ]
    },
    {
        id: "bat-tien",
        title: "Bát Tiên: Truy tìm lưu ly đăng",
        poster: "./assets/img/movies/bat-tien.webp",
        background_img: "./assets/img/movies/bat-tien.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 144 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài, Hành động, Phiêu lưu",
        description: "Lữ Động Tân và Chung Ly Quyền dẫn đầu, tập hợp Hà Tiên Cô, Thiết Quải Lý, Hàn Tương Tử, Tào Quốc Cữu, Lam Thái Hòa và Trương Quả Lão. Tám con người với thân phận khác nhau, vì những cơ duyên riêng mà vô tình tụ họp tại tiên cảnh Bồng Lai. Người thì nhất thời nổi hứng, người thì thấy lập hội là nhập cuộc ngay. Cả nhóm cùng mở một đạo quán, thỏa sức đóng vai thần tiên.",
        release_date: "11/09/2026",
        trailer_link: "https://www.youtube.com/embed/5N8jvHVtlko",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:15 ~ 12:15",
                    "13:15 ~ 15:15",
                    "19:15 ~ 21:15"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:15 ~ 16:15",
                    "20:15 ~ 22:15"
                ]
            }
        ]
    },
    {
        id: "blue-lock",
        title: "Blue Lock: Cuộc chiến của những tiền đạo",
        poster: "./assets/img/movies/blue-lock.webp",
        background_img: "./assets/img/movies/blue-lock.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 128 phút",
        rating_text: "Rất được mong đợi",
        tagline: "Nhà sản xuất: Ufotable <br> Thể loại: Hành động, Kịch tính <br> Đạo diễn: Yūsuke Taki",
        description: "Theo chân 300 cầu thủ bóng đá trung học tham gia những vòng tuyển chọn khắc nghiệt tại một cơ sở huấn luyện bí mật, nơi chỉ một người duy nhất có thể vươn lên trở thành tiền đạo xuất sắc nhất thế giới, còn những người bị loại sẽ bị cấm thi đấu cho Đội tuyển Quốc gia Nhật Bản.",
        release_date: "15/08/2025",
        trailer_link: "https://www.youtube.com/embed/8VMMDfAYi34",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "11:15 ~ 13:33",
                    "13:30 ~ 15:48",
                    "14:30 ~ 16:48",
                    "15:45 ~ 18:03",
                    "18:00 ~ 20:18"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 12:18",
                    "14:00 ~ 16:18",
                    "19:00 ~ 21:18"
                ]
            }
        ]
    },
    {
        id: "lalisa",
        title: "ALWAYS LALISA",
        poster: "./assets/img/movies/lalisa.webp",
        background_img: "./assets/img/movies/lalisa.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 98 phút",
        rating_text: "Rất được mong đợi",
        tagline: "Thể loại: Phim tài liệu",
        description: "Đằng sau ánh hào quang của một siêu sao toàn cầu là hành trình đi tìm chính mình. Always Lalisa đưa khán giả bước vào một năm đặc biệt trong cuộc đời LISA – khi cô tạm rời Blackpink để lần đầu tiên thực sự bước đi trên con đường solo, đối diện với những câu hỏi chưa từng có lời giải: Nếu không có Blackpink, LISA là ai? Và cô muốn trở thành ai? Từ những khoảnh khắc trong phòng thu khi cô tạo nên album solo đầu tay Alter Ego, đến bước ngoặt diễn xuất trong The White Lotus và màn trình diễn solo tại Coachella 2025, bộ phim hé lộ hành trình phía sau những sân khấu rực rỡ – nơi LISA phải đối mặt với áp lực, sự kỳ vọng và ánh nhìn không ngừng của thế giới.",
        release_date: "12/10/2026",
        trailer_link: "https://www.youtube.com/embed/wfGqzDYkHf8",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "11:00 ~ 12:50",
                    "13:30 ~ 15:20",
                    "18:30 ~ 20:20"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:30 ~ 16:20",
                    "20:30 ~ 22:20"
                ]
            }
        ]
    },
    {
        id: "len-huong",
        title: "Lên Hương",
        poster: "./assets/img/movies/len-huong.webp",
        background_img: "./assets/img/movies/len-huong.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 121 phút",
        rating_text: "Hài",
        tagline: "Thể loại: Hài, Kịch tính, Gia đình",
        description: "Lên Hương là bộ phim thuộc thể loại tâm lý - gia đình, xoay quanh cuộc sống của những con người lao động bình dị. Ẩn sâu trong lòng mỗi người đều có sự cố chấp, ý niệm riêng của bản thân. Tuy nhiên, tất cả đều xuất phát từ sự yêu thương và bám trụ, giữ gìn được nghề truyền thống mà cả gia đình vất vả gầy dựng. Trong guồng quay mưu sinh, mỗi nhân vật đều phải đối diện với những lựa chọn khó khăn, và cả những biến cố bất ngờ của số phận. Và bên cạnh những tình huống đời thường đôi khi hài hước là hành trình trưởng thành của nhân vật khi đứng trước ranh giới mong manh giữa sự sống và cái chết.",
        release_date: "18/09/2026",
        trailer_link: "https://www.youtube.com/embed/gdBx_SzNO8Q",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:53",
                    "13:00 ~ 14:53",
                    "19:00 ~ 20:53"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:53",
                    "20:00 ~ 21:53"
                ]
            }
        ]
    },
    {
        id: "linh-gioi-dai-chien",
        title: "Thần sư Chung Quỳ: Linh giới đại chiến",
        poster: "./assets/img/movies/linh-gioi-dai-chien.webp",
        background_img: "./assets/img/movies/linh-gioi-dai-chien.webp",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 97 phút",
        rating_text: "Dành cho gia đình",
        tagline: "Thể loại: Hành động, Hoạt hình, Hài",
        description: "Suốt nhiều thế hệ, gia tộc Chung Quỳ luôn giữ gìn hòa bình giữa loài người và yêu quái. Sau khi được vị thợ săn yêu huyền thoại cứu mạng và đưa xuống âm giới, cô gái phàm trần Sơ Cửu gặp gỡ những người bạn kỳ lạ: một vị thần có năng lực tâm linh, một bà chủ hiền hậu và hai hộ vệ ngốc nghếch. Quyết tâm bái vị thợ săn yêu làm sư phụ, cô kề vai chiến đấu cùng anh và dần nhận được sự công nhận. Thế nhưng, lũ yêu quái ngày càng trở nên nguy hiểm và đằng sau chúng là một âm mưu có thể phá hủy sự cân bằng giữa cả hai thế giới.",
        release_date: "02/10/2026",
        trailer_link: "https://www.youtube.com/embed/RIGtijmvtI4",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:30 ~ 11:06",
                    "15:00 ~ 16:36",
                    "17:30 ~ 19:06"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Lồng tiếng",
                times: [
                    "10:00 ~ 11:36",
                    "16:00 ~ 17:36"
                ]
            }
        ]
    },
    {
        id: "other-mom",
        title: "Người mẹ khác (Other Mommy)",
        poster: "./assets/img/movies/other-mom.webp",
        background_img: "./assets/img/movies/other-mom.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 123 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị",
        description: "Bộ phim theo sau hành trình khám phá thế giới ngày càng u tối của cô bé Bela. Tại ngôi nhà của mình, Bela dần hình thành một mối liên kết kỳ lạ với một thực thể bí ẩn mang vẻ ngoài giống hệt mẹ cô bé đến đáng sợ.",
        release_date: "09/10/2026",
        trailer_link: "https://www.youtube.com/embed/YPCtgD0KnGk",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:00 ~ 10:59",
                    "14:00 ~ 15:59",
                    "17:00 ~ 18:59"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Lồng tiếng",
                times: [
                    "10:30 ~ 12:29",
                    "16:30 ~ 18:29"
                ]
            }
        ]
    },
    {
        id: "scotty",
        title: "Scotty: Giải Cứu Hoàng Thượng",
        poster: "./assets/img/movies/scotty.webp",
        background_img: "./assets/img/movies/scotty.webp",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 80 phút",
        rating_text: "Gia đình, Hoạt hình",
        tagline: "Thể loại: Gia đình, Phiêu lưu, Hoạt hình",
        description: "Scotty - một chú mèo hoang vốn quen sống trong lãnh địa của mình bất ngờ bị kéo vào cuộc phiêu lưu bất đắc dĩ cùng Katie, một cô mèo nhà. Đến từ hai thế giới khác biệt, Boss hạng sang và Mèo hạng xoàng học cách cùng nhau vượt qua muôn vàn hiểm nguy. Sau hành trình ấy, cả hai dần gắn kết và hiểu được ý nghĩa thật sự của nơi gọi là nhà.",
        release_date: "02/10/2026",
        trailer_link: "https://www.youtube.com/embed/B6z2QdwrJ8A",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:15 ~ 11:17",
                    "14:15 ~ 16:17",
                    "17:15 ~ 19:17"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Lồng tiếng",
                times: [
                    "10:45 ~ 12:47",
                    "16:45 ~ 18:47"
                ]
            }
        ]
    },
    {
        id: "shin",
        title: "Shin - Cậu Bé Bút Chì: Kỳ Kỳ Quái Quái! Kỳ Nghỉ Yêu Quái Của Tớ!",
        poster: "./assets/img/movies/shin.jpg",
        background_img: "./assets/img/movies/shin.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 100 phút",
        rating_text: "Đáng xem",
        tagline: "Phiêu lưu, Hài, Hoạt hình",
        description: "Lấy bối cảnh mùa hè tại Akita, bộ phim theo chân Shin và gia đình Nohara trong chuyến về quê đầy háo hức. Tuy nhiên, một sự kiện kỳ lạ đã đưa cả gia đình lạc vào Xứ sở Yêu quái bí ẩn – nơi con người không được phép đặt chân tới. Tại đây, Shin và gia đình phải đối mặt với những thử thách chưa từng có, đồng thời gặp gỡ hàng loạt yêu quái độc đáo, hài hước và đáng yêu.",
        release_date: "21/08/2026",
        trailer_link: "https://www.youtube.com/embed/FVRcC7sR9KE",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:57",
                    "13:00 ~ 14:57",
                    "19:00 ~ 20:57"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:57",
                    "20:00 ~ 21:57"
                ]
            }
        ]
    },
    {
        id: "suzume",
        title: "Khóa Chặt Cửa Nào Suzume",
        poster: "./assets/img/movies/suzume.webp",
        background_img: "./assets/img/movies/suzume.webp",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 121 phút",
        rating_text: "Giả tưởng, Hoạt hình",
        tagline: "Chính kịch, Phiêu lưu, Giả tưởng, Hoạt hình",
        description: "Suzume, 17 tuổi, mồ côi mẹ từ nhỏ. Trên đường đến trường, cô gặp một chàng trai bí ẩn. Nhưng sự tò mò của cô ấy đã gây ra một tai họa gây nguy hiểm cho toàn bộ người dân Nhật Bản, vì vậy Suzume bắt đầu cuộc hành trình để giải quyết mọi việc.",
        release_date: "10/03/2023",
        trailer_link: "https://www.youtube.com/embed/5pTcio2hTSw",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:58",
                    "20:00 ~ 21:58"
                ]
            }
        ]
    },
    {
        id: "the-odyssey",
        title: "The Odyssey",
        poster: "./assets/img/movies/the-odyssey.webp",
        background_img: "./assets/img/movies/the-odyssey.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2026 • 180 phút",
        rating_text: "Siêu phẩm",
        tagline: "Thể loại: Chính kịch, Phiêu lưu, Giả tưởng",
        description: "Câu chuyện theo chân Odysseus trong hành trình kéo dài 10 năm trở về nhà sau cuộc chiến thành Troy, nơi ông phải đối mặt với các vị thần, quái vật và vô vàn thử thách, đồng thời nỗ lực đoàn tụ với vợ và giành lại vương quốc của mình.",
        release_date: "17/07/2026",
        trailer_link: "https://www.youtube.com/embed/R4CYAv3zHHQ",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:30 ~ 12:43",
                    "13:30 ~ 15:43",
                    "19:30 ~ 21:43"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:30 ~ 16:43",
                    "20:30 ~ 22:43"
                ]
            }
        ]
    },
    {
        id: "trai-buon-nguoi",
        title: "Trại Buôn Người",
        poster: "./assets/img/movies/trai-buon-nguoi.webp",
        background_img: "./assets/img/movies/trai-buon-nguoi.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 135 phút",
        rating_text: "Siêu phẩm",
        tagline: "Thể loại: Gay cấn, Hành động",
        description: "Vì cứu em gái sa bẫy buôn người ở vùng biên giới, Ny (Steven Nguyễn) cùng bạn thân Báu (Trầm Minh Hoàng) bị bắt làm nô dịch trong sào huyệt lừa đảo tàn bạo. Tại đây, họ cùng các trinh sát nằm vùng và các nạn nhân âm thầm lập kế hoạch trốn thoát.",
        release_date: "25/09/2026",
        trailer_link: "https://www.youtube.com/embed/TUzx32ejTlY",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:45 ~ 11:45",
                    "15:15 ~ 17:15",
                    "17:45 ~ 19:45"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Lồng tiếng",
                times: [
                    "10:15 ~ 12:15",
                    "16:15 ~ 18:15"
                ]
            }
        ]
    },
    {
        id: "trai-tim-quai-thu",
        title: "Trái Tim Quái Thú (Heart of the Beast)",
        poster: "./assets/img/movies/trai-tim-quai-thu.webp",
        background_img: "./assets/img/movies/trai-tim-quai-thu.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 121 phút",
        rating_text: "Đáng xem",
        tagline: "Thể loại: Phiêu lưu, Hành động",
        description: "Sau một vụ tai nạn máy bay kinh hoàng, sĩ quan Lực lượng Đặc nhiệm James Belmont (Brad Pitt) và chú chó chiến đấu Odin bị mắc kẹt giữa vùng hoang dã sâu thẳm của Alaska. Từ đó, họ buộc phải cùng nhau bước vào cuộc chiến sinh tồn khốc liệt trước thiên nhiên khắc nghiệt. Từ đạo diễn danh tiếng David Ayer, Trái Tim Quái Thú là một bộ phim phiêu lưu đầy căng thẳng, khai thác mối gắn kết không thể tách rời giữa một người đàn ông và người bạn thân thiết nhất của mình.",
        release_date: "02/10/2026",
        trailer_link: "https://www.youtube.com/embed/qZbmPbdTyo8",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 12:00",
                    "13:00 ~ 15:00",
                    "19:00 ~ 21:00"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 16:00",
                    "20:00 ~ 22:00"
                ]
            }
        ]
    },
    {
        id: "ut-lan",
        title: "Út Lan 2",
        poster: "./assets/img/movies/ut-lan.webp",
        background_img: "./assets/img/movies/ut-lan.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 107 phút",
        rating_text: "Đáng xem",
        tagline: "Thể loại: Kinh dị",
        description: "Từ lúc một con rắn hai đầu xuất hiện, ngôi làng ven sông liên tiếp xảy ra những cái chết bí ẩn. Khi những bí mật bị lãng quên dần trồi lên mặt nước, người dân nhận ra có những lời nguyền chưa bao giờ thực sự biến mất.",
        release_date: "21/09/2026",
        trailer_link: "https://www.youtube.com/embed/BPnZ0DdbMjI",
        schedules: [
            {
                date: "21/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:45 ~ 12:32",
                    "13:45 ~ 15:32",
                    "19:45 ~ 21:32"
                ]
            },
            {
                date: "22/10",
                day: "Thứ Năm",
                format: "2D Phụ đề",
                times: [
                    "14:45 ~ 16:32",
                    "20:45 ~ 22:32"
                ]
            }
        ]
    },

    // === PHIM SẮP CHIẾU ===
    {
        id: "an-mang-karaoke",
        title: "Án Mạng Karaoke",
        poster: "./assets/img/coomingsoon/an-mang-karaoke.webp",
        background_img: "./assets/img/coomingsoon/an-mang-karaoke.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 96 phút",
        rating_text: "Hài / Bí ẩn",
        tagline: "Thể loại: Bí ẩn, Gay cấn, Hài",
        description: "Một người hàng xóm mê hát karaoke đêm muộn bất ngờ bị sát hại trong căn homestay biệt lập trên núi với hung khí chính là chiếc micro, biến kỳ nghỉ của cả xóm nhỏ thành một cuộc đấu trí tìm hung thủ dở khóc dở cười.",
        release_date: "30/10/2026",
        trailer_link: "https://www.youtube.com/embed/8QtlRSA8yWs",
        schedules: [
            {
                date: "30/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 19:36",
                    "20:00 ~ 21:36",
                    "22:00 ~ 23:36"
                ]
            }
        ]
    },
    {
        id: "bambi",
        title: "Bambi: Lãnh Địa Săn Mồi",
        poster: "./assets/img/coomingsoon/bambi.webp",
        background_img: "./assets/img/coomingsoon/bambi.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 85 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị, Sinh tồn",
        description: "Khi màn đêm buông xuống, Bambi không còn là chú nai ngây thơ của tuổi thơ mà đã bị hắc hóa thành một quái thú đột biến khát máu với bản năng săn mồi tàn bạo, biến con người lạc vào rừng sâu trở thành con mồi trong cuộc săn đẫm máu.",
        release_date: "23/10/2026",
        trailer_link: "https://www.youtube.com/embed/Abk_DhHyqyg",
        schedules: [
            {
                date: "23/12",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:00 ~ 20:25",
                    "21:00 ~ 22:25"
                ]
            }
        ]
    },
    {
        id: "bo-sua-bay",
        title: "Bò Sữa Bay",
        poster: "./assets/img/coomingsoon/bo-sua-bay.webp",
        background_img: "./assets/img/coomingsoon/bo-sua-bay.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 112 phút",
        rating_text: "Hài / Lãng mạn",
        tagline: "Đạo diễn: Nguyễn Phạm Thành Đạt <br> Thể loại: Hài, Tâm lý, Gia đình",
        description: "Lấy bối cảnh thập niên 80–90, bộ phim xoay quanh một trang trại bò sữa đang nghiên cứu công thức sữa độc quyền có khả năng chữa lành và trẻ hóa. Để thoát nghèo, một nhóm công nhân quyết định đánh cắp công thức bí mật ấy, nhưng kế hoạch dần đảo lộn khi Trâu – tên đầu sỏ – lại nảy sinh tình cảm đặc biệt với cô gái tạo ra công thức sữa.",
        release_date: "06/11/2026",
        trailer_link: "https://www.youtube.com/embed/3ypTdoBMKgg",
        schedules: [
            {
                date: "06/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:52",
                    "14:00 ~ 15:52",
                    "19:30 ~ 21:22"
                ]
            }
        ]
    },
    {
        id: "ca-voi-nuot",
        title: "Cá Voi Nuốt Chửng (Whalefall)",
        poster: "./assets/img/coomingsoon/ca-voi-nuot.webp",
        background_img: "./assets/img/coomingsoon/ca-voi-nuot.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2026 • 108 phút",
        rating_text: "Sinh tồn / Gay cấn",
        tagline: "Thể loại: Sinh tồn, Giật gân, Phiêu lưu",
        description: "Trong lúc lặn xuống đáy đại dương để tìm kiếm hài cốt của người cha quá cố, một thợ lặn trẻ vô tình bị một con cá nhà táng khổng lồ nuốt chửng. Khi lượng dưỡng khí trong bình chỉ còn đủ dùng trong một giờ, anh phải chạy đua với tử thần để tìm đường thoát thân từ bên trong bụng quái vật biển sâu.",
        release_date: "16/10/2026",
        trailer_link: "https://www.youtube.com/embed/FTjdRGRq-9M",
        schedules: [
            {
                date: "22/12",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:15 ~ 12:03",
                    "15:00 ~ 16:48",
                    "20:15 ~ 22:03"
                ]
            }
        ]
    },
    {
        id: "chang-meo-mang-mu",
        title: "Chàng Mèo Mang Mũ (The Cat in the Hat)",
        poster: "./assets/img/coomingsoon/chang-meo-mang-mu.webp",
        background_img: "./assets/img/coomingsoon/chang-meo-mang-mu.webp",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 95 phút",
        rating_text: "Hoạt hình / Gia đình",
        tagline: "Thể loại: Hoạt hình, Hài hước, Phiêu lưu, Gia đình",
        description: "Tiếp nối tinh thần kỳ diệu và đầy trí tưởng tượng từ tác phẩm kinh điển của Dr. Seuss, Chàng Mèo Mang Mũ mang chiếc mũ sọc đỏ trắng quen thuộc trở lại, kéo hai anh em nhỏ vào một thế giới phép thuật hỗn loạn vượt ngoài tầm kiểm soát cùng những sinh vật tí hon tinh nghịch.",
        release_date: "06/11/2026",
        trailer_link: "https://www.youtube.com/embed/gXdNytoxe88",
        schedules: [
            {
                date: "06/11",
                day: "Thứ Sáu",
                format: "2D Lồng tiếng",
                times: [
                    "09:30 ~ 11:05",
                    "14:30 ~ 16:05",
                    "18:30 ~ 20:05"
                ]
            }
        ]
    },
    {
        id: "chi-chi-em-em-3",
        title: "Chị Chị Em Em 3",
        poster: "./assets/img/coomingsoon/chi-chi-em-em-3.webp",
        background_img: "./assets/img/coomingsoon/chi-chi-em-em-3.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 118 phút",
        rating_text: "Kịch tính / Tâm lý",
        tagline: "Đạo diễn: Nguyễn Hữu Hoàng <br> Thể loại: Tâm lý, Chính kịch",
        description: "Với sự góp mặt của Ninh Dương Lan Ngọc, Chi Pu, Kỳ Duyên, Steven Nguyễn và Quốc Anh, bộ phim xoay quanh năm con người trong những mối quan hệ tình - tiền chồng chéo. Khi tình yêu đặt lên bàn cân cùng gia tộc và tham vọng riêng, những bí mật đen tối và màn đấu trí khốc liệt giữa các mỹ nhân chính thức bùng nổ.",
        release_date: "30/10/2026",
        trailer_link: "https://www.youtube.com/embed/hpLGi0dn3OA",
        schedules: [
            {
                date: "30/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:30 ~ 20:28",
                    "20:45 ~ 22:43"
                ]
            }
        ]
    },
    {
        id: "clayface",
        title: "Clayface",
        poster: "./assets/img/coomingsoon/clayface.webp",
        background_img: "./assets/img/coomingsoon/clayface.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 115 phút",
        rating_text: "Kinh dị / Siêu anh hùng",
        tagline: "Thể loại: Kinh dị, Giật gân, Khoa học viễn tưởng (DC Studios)",
        description: "Theo chân sự sa ngã đầy ám ảnh của một nam diễn viên đầy triển vọng tại thành phố Gotham. Sau khi sử dụng một hợp chất bí ẩn để níu giữ sự nghiệp, cơ thể anh dần biến đổi thành một khối đất sét sống có khả năng biến hình kỳ dị, đẩy anh vào ranh giới kinh hoàng giữa con người và ác quỷ.",
        release_date: "30/10/2026",
        trailer_link: "https://www.youtube.com/embed/qnCQ3dlH7_k",
        schedules: [
            {
                date: "30/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:15 ~ 21:10",
                    "21:30 ~ 23:25"
                ]
            }
        ]
    },
    {
        id: "coi-nguyen",
        title: "Cõi Nguyền",
        poster: "./assets/img/coomingsoon/coi-nguyen.webp",
        background_img: "./assets/img/coomingsoon/coi-nguyen.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 104 phút",
        rating_text: "Top 1 Kinh dị Nhật",
        tagline: "Thể loại: Kinh dị, Tâm linh",
        description: "Dựa trên loạt truyền thuyết đô thị gây chấn động Nhật Bản, Cõi Nguyền bắt nguồn từ lời nguyền tà ác của một người phụ nữ kỳ bí đeo bám cô gái trẻ tên Riko. Mỗi đêm trôi qua, những hiện tượng siêu nhiên rùng rợn liên tiếp ập đến thông qua chiếc điện thoại, kéo cô vào cõi u minh không lối thoát.",
        release_date: "23/10/2026",
        trailer_link: "https://www.youtube.com/embed/p6-SIpVJass",
        schedules: [
            {
                date: "23/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:14",
                    "21:45 ~ 23:29"
                ]
            }
        ]
    },
    {
        id: "godzilla-minus-zero",
        title: "Godzilla Minus Zero: Godzilla Trừ Không",
        poster: "./assets/img/coomingsoon/godzilla.webp",
        background_img: "./assets/img/coomingsoon/godzilla.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2026 • 130 phút",
        rating_text: "Bom tấn IMAX",
        tagline: "Đạo diễn: Takashi Yamazaki <br> Thể loại: Hành động, Quái vật, Viễn tưởng",
        description: "Tiếp nối kiệt tác từng đoạt giải Oscar 'Godzilla Minus One', đạo diễn Takashi Yamazaki cùng bộ đôi diễn viên Ryunosuke Kamiki và Minami Hamabe chính thức trở lại. Khi tội lỗi và hình phạt của nhân loại không thể trở về con số 0, sự trỗi dậy kinh hoàng của Godzilla đẩy nước Nhật vào cuộc chiến sinh tồn tàn khốc hơn bao giờ hết.",
        release_date: "06/11/2026",
        trailer_link: "https://www.youtube.com/embed/SVoCkVazmtU",
        schedules: [
            {
                date: "06/11",
                day: "Thứ Sáu",
                format: "IMAX 2D Phụ đề",
                times: [
                    "18:45 ~ 20:55",
                    "21:15 ~ 23:25"
                ]
            }
        ]
    },
    {
        id: "ngay-con-con-me",
        title: "Ngày Con Còn Mẹ",
        poster: "./assets/img/coomingsoon/ngay-con-con-me.webp",
        background_img: "./assets/img/coomingsoon/ngay-con-con-me.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 115 phút",
        rating_text: "Cảm động",
        tagline: "Thể loại: Gia đình, Tâm lý, Tình cảm",
        description: "Đánh dấu màn tái hợp của nghệ sĩ Hồng Đào (bà Tím) và Phương Anh Đào (Mây), bộ phim khai thác góc nhìn chân thật và đầy xúc động về những tổn thương âm ỉ trong gia đình từ sự thiên vị. Đằng sau những cuộc cãi vã và lời trách móc là khát khao được thấu hiểu, nhắc nhở mỗi người học cách tha thứ và yêu thương khi còn có mẹ.",
        release_date: "11/11/2026",
        trailer_link: "https://www.youtube.com/embed/gihuep9BNSg",
        schedules: [
            {
                date: "11/11",
                day: "Thứ Tư",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 19:55",
                    "20:30 ~ 22:25"
                ]
            }
        ]
    },
    {
        id: "quy-an-tang-4",
        title: "Quỷ Ăn Tạng 4: Hổ Tinh (Death Whisperer 4)",
        poster: "./assets/img/coomingsoon/quy-an-tang-4.webp",
        background_img: "./assets/img/coomingsoon/quy-an-tang-4.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 118 phút",
        rating_text: "Kinh dị / Hành động",
        tagline: "Thể loại: Kinh dị, Hành động, Tâm linh",
        description: "Một thế lực tà ác mới lại trỗi dậy giữa khu rừng sâu bí ẩn. Trong phần thứ 4 của thương hiệu kinh dị ăn khách Thái Lan, Yak cùng những người đồng đội phải đối đầu trực diện với Hổ Tinh (Saming The Werebeast) – một sinh vật biến hình khát máu ẩn mình trong rừng thiêng cùng hàng loạt hiện tượng ma quái nghẹt thở.",
        release_date: "16/10/2026",
        trailer_link: "https://www.youtube.com/embed/cJj-9PAE9xM",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 19:58",
                    "20:15 ~ 22:13"
                ]
            }
        ]
    },
    {
        id: "ramayana",
        title: "Sử Thi Ramayana: Khởi Nguồn Một Huyền Thoại",
        poster: "./assets/img/coomingsoon/ramayana.webp",
        background_img: "./assets/img/coomingsoon/ramayana.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 165 phút",
        rating_text: "Bom tấn sử thi",
        tagline: "Thể loại: Hành động, Sử thi, Thần thoại, Phiêu lưu",
        description: "Tái hiện một trong những thiên sử thi vĩ đại nhất phương Đông, bộ phim theo chân hoàng tử Rama trong hành trình vượt đại dương đầy hiểm nguy để giải cứu người vợ Sita khỏi tay quỷ vương Ravana, mở ra cuộc đại chiến long trời lở đất giữa ánh sáng và bóng tối.",
        release_date: "06/11/2026",
        trailer_link: "https://www.youtube.com/embed/XFGk3h1k3do",
        schedules: [
            {
                date: "06/11",
                day: "Thứ Sáu",
                format: "3D Phụ đề",
                times: [
                    "18:00 ~ 20:45",
                    "20:30 ~ 23:15"
                ]
            }
        ]
    },
    {
        id: "shaun-the-sheep",
        title: "Shaun the Sheep: \"Quái Lạ\" Ghé Nhà",
        poster: "./assets/img/coomingsoon/shaun-sheep.webp",
        background_img: "./assets/img/coomingsoon/shaun-sheep.webp",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2026 • 88 phút",
        rating_text: "Hoạt hình / Vui nhộn",
        tagline: "Thể loại: Hoạt hình, Hài hước, Gia đình",
        description: "Câu chuyện bắt đầu với sự cố Ông chủ vô tình phá hỏng vườn bí ngô mà đàn cừu đang chuẩn bị cho lễ hội Halloween. Để cứu vãn tình hình, chú cừu Shaun trổ tài làm 'nhà khoa học' trong phòng thí nghiệm tự chế, nhưng thí nghiệm lại kéo theo sự xuất hiện của một sinh vật quái lạ cùng hàng loạt rắc rối cười ra nước mắt.",
        release_date: "16/10/2026",
        trailer_link: "https://www.youtube.com/embed/8q6XZq8a0iA",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:30 ~ 10:58",
                    "14:00 ~ 15:28",
                    "17:30 ~ 18:58"
                ]
            }
        ]
    },
    {
        id: "street-fighter",
        title: "Street Fighter",
        poster: "./assets/img/coomingsoon/street-fighter.webp",
        background_img: "./assets/img/coomingsoon/street-fighter.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2026 • 115 phút",
        rating_text: "Hành động / Võ thuật",
        tagline: "Thể loại: Hành động, Võ thuật, Phiêu lưu",
        description: "Chuyển thể từ tượng đài game đối kháng huyền thoại, bộ phim quy tụ những võ sĩ đường phố xuất sắc nhất thế giới như Ryu, Ken, Chun-Li và Guile. Họ buộc phải bước vào giải đấu sinh tử World Warrior để ngăn chặn âm mưu thống trị toàn cầu của tổ chức tội ác Shadaloo do M. Bison cầm đầu.",
        release_date: "16/10/2026",
        trailer_link: "https://www.youtube.com/embed/j7h5bqu4roI",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:55",
                    "13:00 ~ 14:55",
                    "19:00 ~ 20:55"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:55",
                    "20:00 ~ 21:55"
                ]
            }
        ]
    },
    {
        id: "verity",
        title: "Verity: Bí Mật Bị Chôn Vùi",
        poster: "./assets/img/coomingsoon/verity.webp",
        background_img: "./assets/img/coomingsoon/verity.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2026 • 122 phút",
        rating_text: "Tâm lý / Giật gân",
        tagline: "Thể loại: Tâm lý, Giật gân, Bí ẩn",
        description: "Chuyển thể từ tiểu thuyết ăn khách toàn cầu của Colleen Hoover, bộ phim xoay quanh nữ nhà văn trẻ Lowen (Dakota Johnson) được thuê hoàn thành nốt bộ sách của nữ tác giả nổi tiếng Verity Crawford (Anne Hathaway) sau một tai nạn thảm khốc. Tại căn biệt thự của gia đình Crawford, Lowen vô tình tìm thấy bản tự truyện chưa từng công bố chứa đựng những bí mật gia đình đen tối đến rợn người.",
        release_date: "16/10/2026",
        trailer_link: "https://www.youtube.com/embed/J82paKIlUZw",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:32",
                    "21:45 ~ 23:47"
                ]
            }
        ]
    }
];