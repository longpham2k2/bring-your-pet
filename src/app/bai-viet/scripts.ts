import IArticle from "./interfaces/IArticle";

export function getArticles(page: number): IArticle[] {
  if (page == 1) {
    return [
      {
        image: {
          width: 212,
          height: 300,
          src: "/wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-212x300.png",
          srcSet:
            "/wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-212x300.png 212w, /wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-724x1024.png 724w, /wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-768x1086.png 768w, /wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-1086x1536.png 1086w, /wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-1448x2048.png 1448w, /wp-content/uploads/2024/04/Ctrinh-Mua-ve-thang-1-1-900x1273.png 900w",
          sizes: "(max-width: 212px) 100vw, 212px",
        },
        badge: "Tắm sấy và vệ sinh cho thú cưng",
        href: "/cham-soc-thu-cung-toan-dien-voi-chuong-trinh-tam-thang-tiet-kiem-tai-qinpet/",
        title:
          "Chăm sóc thú cưng toàn diện với chương trình Tắm tháng tiết kiệm tại QINPET!",
        excerpt:
          "Tắm rửa thường xuyên là điều cần thiết cho sức khỏe và vệ sinh của chó mèo. Không chỉ giúp loại bỏ bụi bẩn, vi",
      },
      {
        image: {
          width: 212,
          height: 300,
          src: "/wp-content/uploads/2023/11/bia-poster--212x300.png",
          srcSet:
            "/wp-content/uploads/2023/11/bia-poster--212x300.png 212w, /wp-content/uploads/2023/11/bia-poster--724x1024.png 724w, /wp-content/uploads/2023/11/bia-poster--768x1086.png 768w, /wp-content/uploads/2023/11/bia-poster--1086x1536.png 1086w, /wp-content/uploads/2023/11/bia-poster--1448x2048.png 1448w, /wp-content/uploads/2023/11/bia-poster--900x1273.png 900w",
          sizes: "(max-width: 212px) 100vw, 212px",
        },
        badge: "Dịch vụ Khách Sạn",
        href: "/gioi-thieu-ve-dich-vu-khach-san-thu-cung-5-sao/",
        title: "Giới thiệu về dịch vụ Khách sạn thú cưng 5 SAO",
        excerpt:
          "Chào mừng bạn đến với Dịch vụ Khách sạn Thú cưng 5 sao – nơi bạn và thú cưng của bạn có thể tận hưởng",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2023/10/a1-300x300.png",
          srcSet:
            "/wp-content/uploads/2023/10/a1-300x300.png 300w, /wp-content/uploads/2023/10/a1-1024x1024.png 1024w, /wp-content/uploads/2023/10/a1-150x150.png 150w, /wp-content/uploads/2023/10/a1-768x768.png 768w, /wp-content/uploads/2023/10/a1-900x900.png 900w, /wp-content/uploads/2023/10/a1-100x100.png 100w, /wp-content/uploads/2023/10/a1.png 1200w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/bo-long-lap-lanh-va-mem-min-do-chinh-la-ket-qua-khi-chung-toi-su-dung-sua-tam-cao-cap/",
        title:
          "Bộ lông lấp lánh và mềm mịn: Đó chính là kết quả khi chúng tôi sử dụng Sữa Tắm Cao Cấp.",
        excerpt:
          "Ra đời từ năm 2007, YU không chỉ là một sữa tắm, mà là một trải nghiệm tắm sang trọng cho thú cưng, với những",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/08/cute-stylish-family-spring-park-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/08/cute-stylish-family-spring-park-300x200.jpg 300w, /wp-content/uploads/2023/08/cute-stylish-family-spring-park-1024x683.jpg 1024w, /wp-content/uploads/2023/08/cute-stylish-family-spring-park-768x512.jpg 768w, /wp-content/uploads/2023/08/cute-stylish-family-spring-park-1536x1024.jpg 1536w, /wp-content/uploads/2023/08/cute-stylish-family-spring-park-2048x1365.jpg 2048w, /wp-content/uploads/2023/08/cute-stylish-family-spring-park-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/nguoi-tre-toan-tam-toan-y-cham-soc-thu-cung-nhu-nguoi-than/",
        title: "Người trẻ toàn tâm toàn ý chăm sóc thú cưng như người thân",
        excerpt:
          "Không đơn giản chỉ là thú cưng, nhiều người trẻ coi động vật như một người thân trong gia đình và chăm lo vô cùng",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/07/freepik_8323332-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/freepik_8323332-300x200.jpg 300w, /wp-content/uploads/2023/07/freepik_8323332-1024x683.jpg 1024w, /wp-content/uploads/2023/07/freepik_8323332-768x512.jpg 768w, /wp-content/uploads/2023/07/freepik_8323332-1536x1024.jpg 1536w, /wp-content/uploads/2023/07/freepik_8323332-2048x1365.jpg 2048w, /wp-content/uploads/2023/07/freepik_8323332-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Về chúng tôi - Thương Hiệu QINPET",
        href: "/qinpet-diem-den-tin-cay-cho-san-pham-dinh-duong-cham-soc-thu-cung-chinh-hang/",
        title:
          "QINPET: Điểm đến tin cậy cho sản phẩm dinh dưỡng chăm sóc thú cưng chính hãng",
        excerpt:
          "QINPET: Điểm đến tin cậy cho sản phẩm dinh dưỡng chăm sóc thú cưng chính hãng",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-300x200.jpg 300w, /wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-1024x683.jpg 1024w, /wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-768x512.jpg 768w, /wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-1536x1024.jpg 1536w, /wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-2048x1365.jpg 2048w, /wp-content/uploads/2023/07/girl-blue-shirt-standing-trees-background-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/bi-quyet-cham-soc-meo/",
        title:
          "Cải Thiện Chất Lượng Lông Mèo: Hướng Dẫn Bí Quyết Giúp Mèo Cưng Của Bạn Tỏa Sáng",
        excerpt:
          "Cải Thiện Chất Lượng Lông Mèo: Hướng Dẫn Bí Quyết Giúp Mèo Cưng Của Bạn Tỏa Sáng",
      },
      {
        image: {
          width: 300,
          height: 215,
          src: "/wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-300x215.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-300x215.jpg 300w, /wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-1024x732.jpg 1024w, /wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-768x549.jpg 768w, /wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-1536x1099.jpg 1536w, /wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-2048x1465.jpg 2048w, /wp-content/uploads/2023/07/woman-holding-hands-near-chest-with-illustration-lungs-light-grey-background-closeup-1-900x644.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/hieu-ro-hon-ve-mui-hoi-tu-thu-cung-anh-huong-den-suc-khoe-va-cach-khac-phuc/",
        title:
          "Hiểu Rõ Hơn Về Mùi Hôi Từ Thú Cưng: Ảnh Hưởng Đến Sức Khỏe Và Cách Khắc Phục",
        excerpt:
          "Thú cưng không chỉ mang lại niềm vui và tình yêu mà còn là một nguồn mùi không mong muốn. Mùi hôi của thú cưng",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-300x200.jpg 300w, /wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-1024x683.jpg 1024w, /wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-768x512.jpg 768w, /wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-1536x1024.jpg 1536w, /wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-2048x1365.jpg 2048w, /wp-content/uploads/2023/07/woman-cleaning-dog-s-teeth-with-toothbrush-indoors-closeup-1-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/6-giai-phap-khu-mui-hieu-qua-ma-ban-nen-tim-hieu/",
        title: "6 Giải pháp Khử mùi hiệu quả mà bạn nên tìm hiểu",
        excerpt: "6 Giải pháp khử mùi cho thú cưng hiệu quả",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-300x200.jpg 300w, /wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-1024x683.jpg 1024w, /wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-768x512.jpg 768w, /wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-1536x1024.jpg 1536w, /wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-2048x1365.jpg 2048w, /wp-content/uploads/2023/07/teenage-girl-crying-home-hugging-dog-depression-after-breaking-up-with-guy-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/mui-hoi-tu-cho-meo-de-doa-tham-lang-den-suc-khoe-cua-ban/",
        title: "Mùi Hôi từ Chó Mèo: Đe Dọa Thầm Lặng Đến Sức Khỏe Của Bạn?",
        excerpt: "Mùi Hôi từ Chó Mèo: Đe Dọa Thầm Lặng Đến Sức Khỏe Của Bạn?",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-300x200.jpg 300w, /wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-1024x683.jpg 1024w, /wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-768x512.jpg 768w, /wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-1536x1024.jpg 1536w, /wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-2048x1365.jpg 2048w, /wp-content/uploads/2023/07/cute-pet-dog-watch-young-female-medical-mask-put-sanitizer-spray-rubber-ball-near-desk-with-laptop-family-life-during-isolation-period-900x600.jpg 900w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/triet-tieu-mui-hoi-o-thu-cung-huong-dan-tu-a-z-cho-cho-meo/",
        title: "Triệt Tiêu Mùi Hôi Ở Thú Cưng: Hướng Dẫn Từ A-Z Cho Chó Mèo",
        excerpt:
          "I. Đánh bay mùi không mong muốn Hương thơm của thú cưng có thể tạo nên một kỷ niệm khó quên, nhưng khi đó là",
      },
    ];
  } else if (page == 2) {
    return [
      {
        image: {
          width: 200,
          height: 300,
          src: "/wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-200x300.jpg",
          srcSet:
            "/wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-200x300.jpg 200w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-683x1024.jpg 683w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-768x1152.jpg 768w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-1024x1536.jpg 1024w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-1365x2048.jpg 1365w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-900x1350.jpg 900w, /wp-content/uploads/2023/07/veterinarian-taking-care-pet-dog-scaled.jpg 1707w",
          sizes: "(max-width: 200px) 100vw, 200px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/bi-quyet-cham-soc-long-cho-meo-nhung-dieu-ban-can-biet/",
        title: "Bí Quyết Chăm Sóc Lông Chó Mèo: Những Điều Bạn Cần Biết",
        excerpt:
          "Chăm sóc lông chó mèo không chỉ giúp thú cưng của bạn trở nên đẹp mắt, mà còn phản ánh sức khỏe tổng thể của",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min-300x200.jpg 300w, /wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min-900x600.jpg 900w, /wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min-1024x683.jpg 1024w, /wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min-768x512.jpg 768w, /wp-content/uploads/2023/05/dog-taking-bath-at-home-2022-07-04-23-07-13-utc-min.jpg 1500w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Tắm sấy và vệ sinh cho thú cưng",
        href: "/dich-vu-tam-say-va-ve-sinh-cho-thu-cung-tai-qinpet-cham-soc-toan-dien-cho-thu-cung-cua-ban/",
        title: "Giới thiệu – Dịch Vụ Tắm Sấy Và Vệ Sinh Cho Thú Cưng",
        excerpt:
          "Chăm Sóc Toàn Diện Cho Thú Cưng Của Bạn Đã bao giờ bạn băn khoăn về việc làm thế nào để chăm sóc chó mèo",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2023/07/1a-300x300.png",
          srcSet:
            "/wp-content/uploads/2023/07/1a-300x300.png 300w, /wp-content/uploads/2023/07/1a-1024x1024.png 1024w, /wp-content/uploads/2023/07/1a-150x150.png 150w, /wp-content/uploads/2023/07/1a-768x768.png 768w, /wp-content/uploads/2023/07/1a-900x900.png 900w, /wp-content/uploads/2023/07/1a-100x100.png 100w, /wp-content/uploads/2023/07/1a.png 1200w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/gioi-thieu-ve-dich-vu-grooming-spa-qinpet/",
        title: "Giới thiệu về dịch vụ Grooming Spa | QINPET",
        excerpt: "giới thiệu dịch vu spa grooming",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2023/07/QUOTE-06-300x300.png",
          srcSet:
            "/wp-content/uploads/2023/07/QUOTE-06-300x300.png 300w, /wp-content/uploads/2023/07/QUOTE-06-1024x1024.png 1024w, /wp-content/uploads/2023/07/QUOTE-06-150x150.png 150w, /wp-content/uploads/2023/07/QUOTE-06-768x768.png 768w, /wp-content/uploads/2023/07/QUOTE-06-1536x1536.png 1536w, /wp-content/uploads/2023/07/QUOTE-06-2048x2048.png 2048w, /wp-content/uploads/2023/07/QUOTE-06-900x900.png 900w, /wp-content/uploads/2023/07/QUOTE-06-100x100.png 100w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - Phối Giống cho chó mèo",
        href: "/meo-va-thoi-ki-dong-duc-tim-hieu-chu-ki-phoi-giong-cua-meo-cai/",
        title:
          "Mèo và thời kì động dục: “Tìm hiểu chu kì phối giống của mèo cái”",
        excerpt: "Chu kì phối giống cho mèo cái",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-300x300.png",
          srcSet:
            "/wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-300x300.png 300w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-900x900.png 900w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-100x100.png 100w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-1024x1024.png 1024w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-150x150.png 150w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-768x768.png 768w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-1536x1536.png 1536w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-2048x2048.png 2048w, /wp-content/uploads/2023/03/Grooming-Spa-900-x-900-1-510x510.png 510w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/cach-ren-cho-di-ve-sinh-dung-cho/",
        title: "5 bước quan trọng để rèn chó đi vệ sinh đúng chỗ",
        excerpt:
          "QIN chia sẻ kinh nghiệm dưới đây là cách rèn luyện cho bé chó cưng đi vệ sinh đúng chỗ, giải quyết nỗi lo của",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2022/07/CÓ-NÊN-CẠO-LÔNG-CHO-CHÓ-1.png",
          srcSet: null,
          sizes: null,
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/ban-da-cham-soc-long-cho-thu-cung-dung-cach-hay-chua/",
        title: "Bạn đã chăm sóc lông cho thú cưng đúng cách hay chưa ???",
        excerpt:
          "Dạo gần đây, Khách nhà Qin có thắc mắc là sau khi cạo lông cho mát, dễ kiểm soát rụng lông để chăm lông lại",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2022/07/291687681_3164225673790705_7987222252675503368_n.png",
          srcSet: null,
          sizes: null,
        },
        badge: "Chia sẻ - chăm sóc thú cưng",
        href: "/ban-co-nen-cao-long-mau-cho-cho/",
        title: "Bạn có nên cạo lông “Máu” cho chó ???",
        excerpt:
          "Mùa hè nóng gần đây, với thời tiết ngoài trời lên tới 36 – 38 độ, Nóng muốn phát hờn lên thì QinPetHouse nhận được",
      },
      {
        image: {
          width: 225,
          height: 300,
          src: "/wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-225x300.jpg",
          srcSet:
            "/wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-225x300.jpg 225w, /wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-900x1200.jpg 900w, /wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-768x1024.jpg 768w, /wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-1152x1536.jpg 1152w, /wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n-510x680.jpg 510w, /wp-content/uploads/2020/08/183555241_2871127079767234_5965021396282968459_n.jpg 1536w",
          sizes: "(max-width: 225px) 100vw, 225px",
        },
        badge: "Spa Grooming",
        href: "/cat-tia-long-cho-tai-ha-noi/",
        title: "Cắt tỉa lông thú cưng tại Hà Nội ? Grooming spa pet",
        excerpt:
          "Chi phí Spa thú cưng bao nhiêu ? Chi phí Spa thú cưng bao nhiêu ? Chi phí Spa thú cưng bao nhiêu ? Chi",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2020/07/Untitled-2-300x300.jpg",
          srcSet:
            "/wp-content/uploads/2020/07/Untitled-2-300x300.jpg 300w, /wp-content/uploads/2020/07/Untitled-2-900x900.jpg 900w, /wp-content/uploads/2020/07/Untitled-2-100x100.jpg 100w, /wp-content/uploads/2020/07/Untitled-2-150x150.jpg 150w, /wp-content/uploads/2020/07/Untitled-2-768x768.jpg 768w, /wp-content/uploads/2020/07/Untitled-2.jpg 1000w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/xoa-not-ruoi-tay-not-ruoi-bang-laser-an-toan-tai-beryl-beauty-spa/",
        title: "Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?",
        excerpt:
          "Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe cổ xưa nhất trên thế giới. Tên của giống chó",
      },
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2020/07/sdfssdf-300x300.jpg",
          srcSet:
            "/wp-content/uploads/2020/07/sdfssdf-300x300.jpg 300w, /wp-content/uploads/2020/07/sdfssdf-900x900.jpg 900w, /wp-content/uploads/2020/07/sdfssdf-100x100.jpg 100w, /wp-content/uploads/2020/07/sdfssdf-150x150.jpg 150w, /wp-content/uploads/2020/07/sdfssdf-768x768.jpg 768w, /wp-content/uploads/2020/07/sdfssdf.jpg 1000w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/dieu-tri-mun-hieu-qua-bang-cong-nghe-blue-light-va-green-laser/",
        title: "Cách chăm sóc chó mang thai tại nhà cần phải biết",
        excerpt:
          "Việc chăm sóc chó mang thai tại nhà cũng không hề đơn giản. Nếu bạn không có kiến thức cũng như sự chuẩn bị kỹ",
      },
    ];
  } else if (page == 3) {
    return [
      {
        image: {
          width: 300,
          height: 300,
          src: "/wp-content/uploads/2020/07/nhân-viên-300x300.jpg",
          srcSet:
            "/wp-content/uploads/2020/07/nhân-viên-300x300.jpg 300w, /wp-content/uploads/2020/07/nhân-viên-900x900.jpg 900w, /wp-content/uploads/2020/07/nhân-viên-100x100.jpg 100w, /wp-content/uploads/2020/07/nhân-viên-150x150.jpg 150w, /wp-content/uploads/2020/07/nhân-viên-768x768.jpg 768w, /wp-content/uploads/2020/07/nhân-viên.jpg 960w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/lam-trang-da-mat-hoan-hao-bang-cong-nghe-doc-quyen-baby-skin/",
        title: "Danh sách các thuốc tẩy giun cho chó con an toàn",
        excerpt:
          "Mua thuốc tẩy giun cho chó con là một việc nhất thiết bạn phải làm khi nuôi một chú chó. Nó không chỉ dừng lại",
      },
      {
        image: {
          width: 300,
          height: 200,
          src: "/wp-content/uploads/2019/07/cho-bi-hoc-xuong-300x200.jpg",
          srcSet:
            "/wp-content/uploads/2019/07/cho-bi-hoc-xuong-300x200.jpg 300w, /wp-content/uploads/2019/07/cho-bi-hoc-xuong.jpg 500w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/lam-hong-nhu-hoa-bang-cong-nghe-peeling-tai-beryl-beauty-spa/",
        title: "Xương Canxi có lợi cho chú cún của bạn hay không ?",
        excerpt:
          "Lợi ích từ xương canxi cho chó con Việc bổ sung canxi cho chó ngay từ nhỏ đã là điều các “sen” cần làm. Canxi",
      },
      {
        image: {
          width: 300,
          height: 204,
          src: "/wp-content/uploads/2019/07/ve-rận-1-300x204.png",
          srcSet:
            "/wp-content/uploads/2019/07/ve-rận-1-300x204.png 300w, /wp-content/uploads/2019/07/ve-rận-1-900x613.png 900w, /wp-content/uploads/2019/07/ve-rận-1-1024x698.png 1024w, /wp-content/uploads/2019/07/ve-rận-1-768x523.png 768w, /wp-content/uploads/2019/07/ve-rận-1-1536x1047.png 1536w, /wp-content/uploads/2019/07/ve-rận-1-2048x1395.png 2048w, /wp-content/uploads/2019/07/ve-rận-1-510x347.png 510w",
          sizes: "(max-width: 300px) 100vw, 300px",
        },
        badge: "Spa Grooming",
        href: "/triet-long-cong-nghe-shr-aft-ipl-cam-ket-bao-hanh/",
        title: "Giải pháp diệt trừ ve rận cho chó đơn giản và hiệu quả",
        excerpt:
          "Giải pháp diệt trừ ve rận cho chó đơn giản và hiệu quả Chó bị ve rận là điều khó tránh khỏi. Ve chó khi",
      },
    ];
  }
  return [];
}
