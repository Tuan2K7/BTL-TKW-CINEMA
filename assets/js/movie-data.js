const ALL_MOVIES = [
    // === PHIM ĐANG CHIẾU ===
    {
        id: "an-mang-xem-hoan-hao",
        title: "Án mạng xém hoàn hảo ",
        poster: "./assets/img/movies/an-mang-xem-hoan-hao.webp",
        background_img: "./assets/img/movies/an-mang-xem-hoan-hao.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2026 • 124 phút",
        rating_text: "Đang thịnh hành",
        tagline: "Thể loại: Hài",
        description: "Trinh, cô nàng TikToker ngôn tình triệu view, tỉnh dậy giữa  phim trường lạnh lẽo với cái đầu đau như búa bổ, mất trí nhớ và phát hiện xác của Yến (diễn viên) – tình địch đang bị nghi ngờ có gì mờ ám với diễn viên Khang (chồng sắp cưới). Đại (thám tử) được Trinh thuê theo dõi vụ ngoại tình lẻn vào giúp thì vấp ngã để lại dấu vân tay lên tử thi và vô tình bị bảo vệ bắt quả tang. Kể từ đây, liên tiếp những tình huống oái oăm mà cặp đôi “đũa lệch” phải đối mặt: chạy trốn khỏi cảnh sát dí sát gót và sát thủ rình rập, vừa cãi nhau tóe khói vừa phá án. Song Song đó, cả hai vô tình lật tẩy bí mật động trời của showbiz.",
        release_date: "09/10/2026",
        trailer_link: "https://www.youtube.com/embed/YUESTe-oL1U",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        rating_text: "Đang sợ hãi",
        tagline: "Thể loại: Hành động, Giả tưởng, Siêu anh hùng",
        description: "Khi Thanos quyết định nghỉ hưu, các siêu anh hùng một lần nữa đoàn kết lại để mang trở về những người đã mất từ sau trận chiến vô cực.",
        release_date: "25/09/2026",
        trailer_link: "https://www.youtube.com/embed/_XvulZckXLQ",
        schedules: [
            {
                date: "20/10",
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
                date: "21/10",
                day: "Thứ Ba",
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
        description: "Lữ Động Tân và Chung Ly Quyền dẫn đầu, tập hợp Hà Tiên Cô, Thiết Quải Lý, Hàn Tương Tử, Tào Quốc Cữu, Lam Thái Hòa và Trương Quả Lão. Tám con người với thân phận khác nhau, vì những cơ duyên riêng mà vô tình tụ họp tại tiên cảnh Bồng Lai. Người thì nhất thời nổi hứng, người thì thấy lập hội là nhập cuộc ngay. Cả nhóm cùng mở một đạo quán, thỏa sức đóng vai  thần tiên.",
        release_date: "11/09/2026",
        trailer_link: "https://www.youtube.com/embed/5N8jvHVtlko",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:15 ~ 12:15",
                    "13:15 ~ 15:15",
                    "19:15 ~ 21:15"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        description: "Theo chân 300 cầu thủ bóng đá trung học tham gia những vòng tuyển chọn khắc nghiệt tại một cơ sở huấn luyện bí mật, nơi chỉ một người duy nhất có thể vươn lên trở thành tiền đạo xuất sắc nhất thế giới, còn những người bị loại sẽ bị cấm thi đấu cho Đội tuyển Quốc gia Nhật Bản.",        release_date: "15/08/2025",
        trailer_link: "https://www.youtube.com/embed/8VMMDfAYi34",
        schedules: [
            {
                date: "20/10",
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
                date: "21/10",
                day: "Thứ Ba",
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
        tagline: "Thể loại: Phim tài liệu  ",
        description: "Đằng sau ánh hào quang của một siêu sao toàn cầu là hành trình đi tìm chính mình. Always Lalisa đưa khán giả bước vào một năm đặc biệt trong cuộc đời LISA – khi cô tạm rời Blackpink để lần đầu tiên thực sự bước đi trên con đường solo, đối diện với những câu hỏi chưa từng có lời giải: Nếu không có Blackpink, LISA là ai? Và cô muốn trở thành ai? Từ những khoảnh khắc trong phòng thu khi cô tạo nên album solo đầu tay Alter Ego, đến bước ngoặt diễn xuất trong The White Lotus và màn trình diễn solo tại Coachella 2025, bộ phim hé lộ hành trình phía sau những sân khấu rực rỡ – nơi LISA phải đối mặt với áp lực, sự kỳ vọng và ánh nhìn không ngừng của thế giới. Sinh ra tại Thái Lan, rời quê nhà từ năm 14 tuổi để theo đuổi giấc mơ K-pop tại Hàn Quốc",
        release_date: "10/10/2025",
        trailer_link: "https://www.youtube.com/embed/jTlYZjafxRQ9-djo",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "11:00 ~ 12:50",
                    "13:30 ~ 15:20",
                    "18:30 ~ 20:20"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        rating_text: "Hài ",
        tagline: "Thể loại: Hài, Kịch tính, Gia đình",
        description: "Lên Hương là bộ phim thuộc thể loại tâm lý - gia đình, xoay quanh cuộc sống của những con người lao động bình dị. Ẩn sâu trong lòng mỗi người đều có sự cố chấp, ý niệm riêng của bản thân. Tuy nhiên, tất cả đều xuất phát từ sự yêu thương và bám trụ, giữ gìn được nghề truyền thống mà cả gia đình vất vả gầy dựng. Trong guồng quay mưu sinh, mỗi nhân vật đều phải đối diện với những lựa chọn khó khăn, và cả những biến cố bất ngờ của số phận. Và bên cạnh  những tình huống đời thường đôi khi hài hước là hành trình trưởng thành của nhân vật khi đứng trước ranh giới mong manh giữa sự sống và cái chết. Chính trong những thời khắc đó, con người mới nhận ra giá trị của gia đình, của tình thân và đặc biệt là tình yêu vô điều kiện của người mẹ.",
        release_date: "18/09/2026",
        trailer_link: "https://www.youtube.com/embed/gdBx_SzNO8Q",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:53",
                    "13:00 ~ 14:53",
                    "19:00 ~ 20:53"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        trailer_link: "https://www.youtube.com/embed/5lFSI9UENVy2USnU",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:30 ~ 11:06",
                    "15:00 ~ 16:36",
                    "17:30 ~ 19:06"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        description: "Bộ phim theo sau hành trình khám phá thế giới ngày càng u tối của cô bé Bela. Tại ngôi nhà của mình, Bela dần hình thành một mối liên kết kỳ lạ với một thực thể bí ẩn mang vẻ ngoài giống hệt mẹ cô bé đến đáng sợ. ",
        release_date: "09/10/2026",
        trailer_link: "https://www.youtube.com/embed/YPCtgD0KnGk",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:00 ~ 10:59",
                    "14:00 ~ 15:59",
                    "17:00 ~ 18:59"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:30 ~ 12:29",
                    "16:30 ~ 18:29"
                ]
            }
        ]
    },
    {
        id: "chi-nga-em-nang",
        title: "Chị Ngã Em Nâng",
        poster: "./assets/img/banner_chingaemnang.jpg",
        background_img: "./assets/img/banner_chimgiaemnang.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 122 phút",
        rating_text: "Tình cảm gia đình",
        tagline: "Thể loại: Gia đình, Hài, Tâm lý",
        description: "Câu chuyện về hai chị em gái đùm bọc lẫn nhau vượt qua khó khăn.",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/A3SjIciWaqI",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:15 ~ 11:17",
                    "14:15 ~ 16:17",
                    "17:15 ~ 19:17"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:45 ~ 12:47",
                    "16:45 ~ 18:47"
                ]
            }
        ]
    },
    {
        id: "tay-anh-giu-mot-vi-sao",
        title: "Tay Anh Giữ Một Vì Sao",
        poster: "./assets/img/banner_tayanhgiuvisao.jpg",
        background_img: "./assets/img/banner_tayanhgiuvisao.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 117 phút",
        rating_text: "Lãng mạn",
        tagline: "Thể loại: Hài, Lãng mạn",
        description: "Một bộ phim hài lãng mạn về một nhà thiên văn học trẻ tuổi và một cô gái bí ẩn tin rằng mình đến từ một vì sao khác.",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/l5BuE4eJi4U",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:57",
                    "13:00 ~ 14:57",
                    "19:00 ~ 20:57"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:57",
                    "20:00 ~ 21:57"
                ]
            }
        ]
    },
    {
        id: "tu-chien-tren-khong",
        title: "Tử Chiến Trên Không",
        poster: "./assets/img/banner_tuchientrenkhong.jpg",
        background_img: "./assets/img/banner/tuchientrenkhong_banner.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 118 phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Tâm lý, Giật gân",
        description: "Một chuyến bay bị không tặc. Một cựu lính đặc nhiệm và phi hành đoàn phải chiến đấu trong không gian hẹp để cứu hành khách và ngăn chặn thảm họa.",
        release_date: "19/09/2025",
        trailer_link: "https://www.youtube.com/embed/Q-Zf8KhyS6E",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:58",
                    "20:00 ~ 21:58"
                ]
            }
        ]
    },
    {
        id: "lam-giau-voi-ma-2",
        title: "Làm Giàu Với Ma 2: Cuộc Chiến Hột Xoàn",
        poster: "./assets/img/banner_lamgiauvoima.jpg",
        background_img: "./assets/img/banner_lamgiauvoima.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 133 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài",
        description: "Tiếp nối hành trình dở khóc dở cười của anh chàng thấy ma, lần này liên quan đến một vụ cướp kim cương và dàn hồn ma quái dị mới.",
        release_date: "02/09/2025",
        trailer_link: "https://www.youtube.com/embed/AvxgRKe7sjI",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:30 ~ 12:43",
                    "13:30 ~ 15:43",
                    "19:30 ~ 21:43"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:30 ~ 16:43",
                    "20:30 ~ 22:43"
                ]
            }
        ]
    },
    {
        id: "to-quoc-trong-tim",
        title: "Tổ Quốc Trong Tim: The Concert Film",
        poster: "./assets/img/banner_toquoctrongtim.jpg",
        background_img: "./assets/img/banner_toquoctrongtim.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 120 phút",
        rating_text: "Âm nhạc",
        tagline: "Thể loại: Phim tài liệu, Âm nhạc",
        description: "Bộ phim tài liệu ghi lại concert quốc gia lịch sử 'Tổ Quốc Trong Tim', tôn vinh lòng yêu nước và di sản âm nhạc Việt Nam.",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/C7TaYSFm8fk",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:45 ~ 11:45",
                    "15:15 ~ 17:15",
                    "17:45 ~ 19:45"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:15 ~ 12:15",
                    "16:15 ~ 18:15"
                ]
            }
        ]
    },
    {
        id: "nam-cua-anh-ngay-cua-em",
        title: "Năm Của Anh, Ngày Của Em",
        poster: "./assets/img/banner_namcuaanh.jpg",
        background_img: "./assets/img/banner_namcuaanh.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Lãng mạn",
        tagline: "Thể loại: Tình cảm",
        description: "Câu chuyện lãng mạn về hai con người ở hai thế giới khác nhau, nhưng số phận đã gắn kết họ lại một cách kỳ diệu.",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/_x03xoSWlro",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 12:00",
                    "13:00 ~ 15:00",
                    "19:00 ~ 21:00"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 16:00",
                    "20:00 ~ 22:00"
                ]
            }
        ]
    },
    {
        id: "zombie-cung-cua-ba",
        title: "Zombie Cưng Của Ba (2025)",
        poster: "./assets/img/banner_zombie.jpg",
        background_img: "./assets/img/banner_zombie.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 107 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài, gia đình",
        description: "Một ông bố phát hiện con gái mình bị nhiễm virus zombie, nhưng cô bé vẫn giữ được ý thức. Anh cố gắng 'thuần hóa' cô bằng kinh nghiệm huấn luyện động vật của mình.",
        release_date: "08/08/2025",
        trailer_link: "https://www.youtube.com/embed/heoeD1jbye8",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:45 ~ 12:32",
                    "13:45 ~ 15:32",
                    "19:45 ~ 21:32"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
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
        id: "cai-ma",
        title: "Cải Mả (2025)",
        poster: "./assets/img/Cai_Ma.jpg",
        background_img: "./assets/img/Cai_Ma.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Tâm linh",
        description: "Một gia đình ở vùng quê phải tiến hành cải mả, nhưng vô tình đánh thức một linh hồn độc ác gắn liền với quá khứ đen tối của họ.",
        release_date: "31/10/2025",
        trailer_link: "https://www.youtube.com/embed/xjHch1D7Nqg",
        schedules: [
            {
                date: "31/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "20:00 ~ 22:00",
                    "22:00 ~ 24:00"
                ]
            }
        ]
    },
    {
        id: "xa-thuat-tieu-tam",
        title: "Xà Thuật Tiểu Tam (2025)",
        poster: "./assets/img/Xa_Thuat_Tieu_Tam.jpg",
        background_img: "./assets/img/Xa_Thuat_Tieu_Tam.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 99 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị",
        description: "Một người phụ nữ sử dụng tà thuật rắn (Xà Thuật) để giành lại người yêu từ tình địch, nhưng nghi lễ hắc ám đòi hỏi một cái giá kinh hoàng.",
        release_date: "24/10/2025",
        trailer_link: "https://www.youtube.com/embed/A5kDuGbTST4",
        schedules: [
            {
                date: "24/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:00 ~ 20:39",
                    "21:00 ~ 22:39"
                ]
            }
        ]
    },
    {
        id: "good-boy",
        title: "Good Boy: Chó Cưng Đừng Sợ (2025)",
        poster: "./assets/img/Good_Boy_Cho_Cung_Dung_So.jpg",
        background_img: "./assets/img/Good_Boy_Cho_Cung_Dung_So.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 73 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Siêu nhiên",
        description: "Được kể từ góc nhìn của một chú chó, chứng kiến các sự kiện siêu nhiên kỳ lạ và đáng sợ trong ngôi nhà mới, cố gắng bảo vệ chủ nhân của mình khỏi một thế lực tà ác.",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/auPnAAkrEBA",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:13",
                    "13:00 ~ 14:13",
                    "19:00 ~ 20:13"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:13",
                    "20:00 ~ 21:13"
                ]
            }
        ]
    },
    {
        id: "bit-mat-bat-nai",
        title: "Bịt Mắt Bắt Nai (2025)",
        poster: "./assets/img/Bit_Mat_Bat_Nai.jpg",
        background_img: "./assets/img/background/patel-5.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 105 phút",
        rating_text: "Đang thịnh hành",
        tagline: "Thể loại: Hài, Phiêu lưu",
        description: "Một bí mật đen tối của người chồng bị che giấu. Khi người vợ bắt đầu nghi ngờ, cô dấn thân vào một cuộc điều tra nguy hiểm, giống như trò chơi 'bịt mắt bắt nai'.",
        release_date: "31/10/2025",
        trailer_link: "https://www.youtube.com/embed/enefvdfyYoo",
        schedules: [
            {
                date: "25/10",
                day: "Thứ Bảy",
                format: "2D Lồng tiếng",
                times: [
                    "09:00 ~ 10:45",
                    "11:00 ~ 12:45",
                    "17:00 ~ 18:45"
                ]
            }
        ]
    },
    {
        id: "pha-dam-sinh-nhat-me",
        title: "Phá Đám: Sinh Nhật Mẹ (2025)",
        poster: "./assets/img/Pha_Dam_Sinh_Nhat_Me.jpg",
        background_img: "./assets/img/Pha_Dam_Sinh_Nhat_Me.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 98 phút",
        rating_text: "Hài kịch đen",
        tagline: "Thể loại: Chính kịch / Gia đình / Hài kịch đen",
        description: "Một gia đình không êm ấm tụ tập để mừng sinh nhật mẹ, nhưng những bí mật và bất bình sâu sắc bùng nổ, biến bữa tiệc thành hỗn loạn.",
        release_date: "05/09/2025",
        trailer_link: "https://www.youtube.com/embed/vl2hIjD5oTY",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:38",
                    "13:00 ~ 14:38",
                    "19:00 ~ 20:38"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:38",
                    "20:00 ~ 21:38"
                ]
            }
        ]
    },
    {
        id: "phong-tro-ma-bau",
        title: "Phòng Trọ Ma Bầu (2025)",
        poster: "./assets/img/Phong_Tro_Ma_Bau.jpg",
        background_img: "./assets/img/Phong_Tro_Ma_Bau.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Hài",
        description: "Hai người bạn thuê một phòng trọ giá rẻ, và bị ám ảnh bởi hồn ma của một phụ nữ mang thai ('ma bầu') đã chết ở đó, hé lộ một bí mật đen tối.",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/pGXfmnjTdsI",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:30 ~ 20:30",
                    "20:30 ~ 22:30"
                ]
            }
        ]
    },
    {
        id: "tinh-nguoi-duyen-ma",
        title: "Tình Người Duyên Ma: Nhắm Mak Yêu Luôn (2025)",
        poster: "./assets/img/Tinh_Nguoi_Duyen_Ma_Nham_Mak_Yeu_Luon.jpg",
        background_img: "./assets/img/Tinh_Nguoi_Duyen_Ma_Nham_Mak_Yeu_Luon.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 99 phút",
        rating_text: "Kinh dị / Hài",
        tagline: "Thể loại: Tình cảm / Hài / Kinh dị",
        description: "Phiên bản mới và hài hước của câu chuyện ma Thái kinh điển 'Pee Mak', kể về một người lính trở về nhà mà không biết vợ mình đã là ma.",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/V4AX5zBm-ag",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:15 ~ 20:54",
                    "21:15 ~ 22:54"
                ]
            }
        ]
    },
    {
        id: "trai-tim-que-quat",
        title: "Trái Tim Què Quặt (2025)",
        poster: "./assets/img/Trai_Tim_Que_Quat.jpg",
        background_img: "./assets/img/Trai_Tim_Que_Quat.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Ly kỳ",
        tagline: "Thể loại: Tâm lý / Ly kỳ",
        description: "Một bộ phim tâm lý ly kỳ về một người phụ nữ, sau khi được cấy ghép tim, bắt đầu mang những đặc điểm tính cách và ký ức đen tối của người hiến tạng.",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/TBkDA7WjKZE",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:30",
                    "21:30 ~ 23:30"
                ]
            }
        ]
    },
    {
        id: "quai-thu-vo-hinh",
        title: "Quái Thú Vô Hình: Vùng Đất Chết Chóc (2025)",
        poster: "./assets/img/Quai_Thu_Vo_Hinh_Vung_Dat_Chet_Choc.jpg",
        background_img: "./assets/img/Quai_Thu_Vo_Hinh_Vung_Dat_Chet_Choc.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Hành động / Khoa học viễn tưởng",
        description: "Một nhóm lính trên một hành tinh xa xôi bị săn đuổi bởi một quái thú săn mồi vô hình coi họ là con mồi.",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/4ORg9D6zNn4",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:45 ~ 20:45",
                    "20:45 ~ 22:45"
                ]
            }
        ]
    },
    {
        id: "tron-chay-tu-than",
        title: "Trốn Chạy Tử Thần (2025)",
        poster: "./assets/img/Tron_Chay_Tu_Than.jpg",
        background_img: "./assets/img/Tron_Chay_Tu_Than.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 120 phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Phiêu lưu / Khoa học viễn tưởng",
        description: "Trong một tương lai loạn lạc, một người đàn ông tuyệt vọng cần tiền cứu con gái đã tham gia một chương trình thực tế chết người, nơi anh phải trốn chạy khỏi các sát thủ trong 30 ngày.",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/CpgFJshfY-k",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "21:00 ~ 23:00"
                ]
            }
        ]
    },
    {
        id: "truy-tim-long-dien-huong",
        title: "Truy Tìm Long Diên Hương (2025)",
        poster: "./assets/img/Truy_Tim_Long_Dien_Huong.jpg",
        background_img: "./assets/img/Truy_Tim_Long_Dien_Huong.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Hài / Hành động",
        tagline: "Thể loại: Hành động / Hài",
        description: "Một kho báu quý giá (Long Diên Hương) bị đánh cắp, dẫn đến một cuộc rượt đuổi hỗn loạn và đầy hành động giữa các băng đảng và một ngư dân vô tình bị lôi kéo vào.",
        release_date: "14/11/2025",
        trailer_link: "https://www.youtube.com/embed/i-THQhaT7ts",
        schedules: [
            {
                date: "14/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "20:15 ~ 22:15"
                ]
            }
        ]
    },
    {
        id: "avatar-lua-va-tro-tan",
        title: "Avatar: Lửa Và Tro Tàn (2025)",
        poster: "./assets/img/Avatar_Lua_Va_Tro_Tan.jpg",
        background_img: "./assets/img/Avatar_Lua_Va_Tro_Tan.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Bom tấn",
        tagline: "Thể loại: Khoa học viễn tưởng / Phiêu lưu",
        description: "Jake Sully phải lãnh đạo người Na'vi chống lại một mối đe dọa mới, khi một ngọn núi lửa đe dọa phá hủy Pandora. Anh gặp gỡ 'Tộc Người Tro Tàn', một bộ lạc Na'vi của lửa.",
        release_date: "19/12/2025",
        trailer_link: "https://www.youtube.com/embed/gqBFTGmDClQ",
        schedules: [
            {
                date: "19/12",
                day: "Thứ Sáu",
                format: "3D Phụ đề",
                times: [
                    "18:00 ~ 21:00",
                    "20:00 ~ 23:00"
                ]
            }
        ]
    },
    {
        id: "nam-dem-kinh-hoang-2",
        title: "Năm Đêm Kinh Hoàng 2 (2025)",
        poster: "./assets/img/Nam_Dem_Kinh_Hoang_2.jpg",
        background_img: "./assets/img/Nam_Dem_Kinh_Hoang_2.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Bí ẩn",
        description: "Tiếp nối các sự kiện kinh hoàng tại Freddy Fazbear's Pizza, câu chuyện đào sâu hơn vào lịch sử đen tối của các linh vật máy và vụ án trẻ em mất tích.",
        release_date: "05/12/2025",
        trailer_link: "https://www.youtube.com/embed/yQ6tmH7WNdY",
        schedules: [
            {
                date: "05/12",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:00 ~ 21:00",
                    "21:30 ~ 23:30"
                ]
            }
        ]
    },
    {
        id: "mortal-kombat",
        title: "Mortal Kombat: Cuộc Chiến Sinh Tử",
        poster: "./assets/img/Mortal_Kombat_Cuoc_Chien_Sinh_Tu.jpg",
        background_img: "./assets/img/Mortal_Kombat_Cuoc_Chien_Sinh_Tu.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2021 • 110 phút",
        rating_text: "Hành động / Võ thuật",
        tagline: "Thể loại: Hành động / Võ thuật / Khoa học viễn tưởng",
        description: "Võ sĩ MMA Cole Young bị Sub-Zero săn đuổi. Anh tìm nơi ẩn náu với các chiến binh được chọn để bảo vệ Earthrealm trong một trận chiến sinh tử giành vũ trụ.",
        release_date: "23/04/2021",
        trailer_link: "https://www.youtube.com/embed/3JPgwgMoMZE",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:50",
                    "13:00 ~ 14:50",
                    "19:00 ~ 20:50"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:50",
                    "20:00 ~ 21:50"
                ]
            }
        ]
    },
    {
        id: "nha-hai-chu",
        title: "Nhà Hai Chủ (2025)",
        poster: "./assets/img/Nha_Hai_Chu.jpg",
        background_img: "./assets/img/Nha_Hai_Chu.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 110 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Tâm linh",
        description: "Một cặp vợ chồng trẻ mua nhà vào nhầm ngày Tam Nương và sớm bị ám ảnh bởi những người chủ trước, những người không muốn họ ở đó.",
        release_date: "05/12/2025",
        trailer_link: "https://www.youtube.com/embed/ZZZUfZzX0ZU",
        schedules: [
            {
                date: "05/12",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:20",
                    "21:45 ~ 23:35"
                ]
            }
        ]
    }
];