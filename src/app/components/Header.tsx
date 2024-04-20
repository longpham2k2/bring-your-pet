"use client";

import { usePathname } from "next/navigation";
import BookingForm from "../forms/bookingForm";
import BookingCoupon from "../forms/bookingCoupon";
import { Suspense } from "react";

export default function Header() {
  const pathname = usePathname();
  return (
    <div
      data-elementor-type="header"
      data-elementor-id="1943"
      className="elementor elementor-1943 elementor-location-header"
      data-elementor-post-type="elementor_library"
    >
      <div className="elementor-section-wrap">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-b455296 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="b455296"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1aebc02e"
              data-id="1aebc02e"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f9cbb0e elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                  data-id="f9cbb0e"
                  data-element_type="widget"
                  data-widget_type="theme-site-logo.default"
                >
                  <div className="elementor-widget-container">
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                          /*! elementor - v3.19.0 - 29-01-2024 */
                          .elementor-widget-image {
                            text-align: center;
                          }
                          .elementor-widget-image a {
                            display: inline-block;
                          }
                          .elementor-widget-image a img[src$=".svg"] {
                            width: 48px;
                          }
                          .elementor-widget-image img {
                            vertical-align: middle;
                            display: inline-block;
                          }
                        `,
                      }}
                    ></style>
                    <div className="elementor-image">
                      <a href="/">
                        <img
                          fetchPriority="high"
                          width="504"
                          height="168"
                          src="wp-content/uploads/2023/06/Qinpet-Logo-Black.png"
                          className="attachment-full size-full wp-image-1959"
                          alt=""
                          srcSet="
                            /wp-content/uploads/2023/06/Qinpet-Logo-Black.png         504w,
                            /wp-content/uploads/2023/06/Qinpet-Logo-Black-300x100.png 300w
                          "
                          sizes="(max-width: 504px) 100vw, 504px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6d4bf7f6"
              data-id="6d4bf7f6"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-413fca0b elementor-widget__width-auto elementor-nav-menu--stretch elementor-widget-mobile__width-initial elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                  data-id="413fca0b"
                  data-element_type="widget"
                  data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"&lt;svg class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"&gt;&lt;path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"&gt;&lt;\/path&gt;&lt;\/svg&gt;","library":"fa-solid"},"toggle":"burger"}'
                  data-widget_type="nav-menu.default"
                >
                  <div className="elementor-widget-container">
                    <link
                      rel="stylesheet"
                      href="wp-content/plugins/pro-elements/assets/css/widget-nav-menu.min.css"
                    />
                    <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-sink">
                      <ul id="menu-1-413fca0b" className="elementor-nav-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1906 current_page_item menu-item-2196">
                          <a
                            href="/"
                            aria-current="page"
                            className={`elementor-item${
                              pathname == "/" ? " elementor-item-active" : ""
                            }`}
                          >
                            Trang chủ
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2197">
                          <a
                            href="bai-viet/"
                            className={`elementor-item${
                              pathname.startsWith("/bai-viet")
                                ? " elementor-item-active"
                                : ""
                            }`}
                          >
                            Bài viết
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2405">
                              <a
                                href="category/chia-se-cach-cham-soc-thu-cung/"
                                className="elementor-sub-item"
                              >
                                Chia sẻ &#8211; chăm sóc thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2987">
                              <a
                                href="category/chia-se-phoi-giong-cho-meo/"
                                className="elementor-sub-item"
                              >
                                Chia sẻ &#8211; Phối Giống cho chó mèo
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2202">
                          <a
                            href="san-pham/"
                            className={`elementor-item${
                              pathname.startsWith("/san-pham")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            suppressHydrationWarning
                          >
                            Sản phẩm
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2211">
                              <a
                                href="danh-muc-san-pham/cac-loai-sua-tam/"
                                className="elementor-sub-item"
                              >
                                Sữa Tắm
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2213">
                              <a
                                href="danh-muc-san-pham/thuc-an-meo/"
                                className="elementor-sub-item"
                              >
                                Thức ăn hạt mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2214">
                              <a
                                href="danh-muc-san-pham/thuc-an-cho/"
                                className="elementor-sub-item"
                              >
                                Thức ăn hạt chó
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2215">
                              <a
                                href="danh-muc-san-pham/phu-kien-thu-cung/"
                                className="elementor-sub-item"
                              >
                                Phụ kiện thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2888">
                              <a
                                href="danh-muc-san-pham/san-pham-cong-nghe/"
                                className="elementor-sub-item"
                              >
                                Công nghệ &#8211; Điện tử cho thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3305">
                              <a
                                href="danh-muc-san-pham/ve-sinh-cho-meo/"
                                className="elementor-sub-item"
                              >
                                VỆ SINH CHO MÈO
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3308">
                              <a
                                href="danh-muc-san-pham/banh-xuong-pate-do-thuong-cho-cung/"
                                className="elementor-sub-item"
                              >
                                Bánh &#8211; Xương &#8211; Pate &#8211; Đồ
                                thưởng chó cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3306">
                              <a
                                href="danh-muc-san-pham/khu-mui-ve-sinh-cho-thu-cung/"
                                className="elementor-sub-item"
                              >
                                Khử mùi &#8211; vệ sinh cho thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3309">
                              <a
                                href="danh-muc-san-pham/sot-pate-do-thuong-meo-cung/"
                                className="elementor-sub-item"
                              >
                                Sốt &#8211; Pate &#8211; Đồ thưởng mèo cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3307">
                              <a
                                href="danh-muc-san-pham/deal-soc/"
                                className="elementor-sub-item"
                              >
                                DEAL SỐC
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3310">
                              <a
                                href="danh-muc-san-pham/quan-ao-thu-cung/"
                                className="elementor-sub-item"
                              >
                                Quần Áo Thú Cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3311">
                              <a
                                href="danh-muc-san-pham/cac-loai-sua-tam/sua-tam-cho-meo/"
                                className="elementor-sub-item"
                              >
                                Sữa tắm &#8211; trị ve rận, nước hoa, Khử mùi,
                                Dưỡng lông chó mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3312">
                              <a
                                href="danh-muc-san-pham/thuoc-cho-cho-meo/"
                                className="elementor-sub-item"
                              >
                                Thuốc cho chó mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2748">
                              <a
                                href="bao-hanh/"
                                className="elementor-sub-item"
                              >
                                THÔNG TIN BẢO HÀNH
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2199">
                          <a
                            href="dich-vu/"
                            className={`elementor-item${
                              pathname.startsWith("/dich-vu")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            suppressHydrationWarning
                          >
                            Giới thiệu
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2576">
                              <a
                                href="category/dv-khach-san/"
                                className="elementor-sub-item"
                              >
                                Dịch vụ Khách Sạn
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2403">
                              <a
                                href="category/https-qinpethouse-com-cat-tia-long-cho-tai-ha-noi/"
                                className="elementor-sub-item"
                              >
                                Spa Grooming
                              </a>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2404">
                                  <a
                                    href="gioi-thieu-ve-dich-vu-grooming-spa-qinpet/"
                                    className="elementor-sub-item"
                                  >
                                    Giới thiệu về dịch vụ Grooming Spa | QINPET
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3288">
                                  <a
                                    href="category/tam-say-ve-sinh-cho-meo/"
                                    className="elementor-sub-item"
                                  >
                                    Tắm sấy và vệ sinh cho thú cưng
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2419">
                                  <a
                                    href="dich-vu-tam-say-va-ve-sinh-cho-thu-cung-tai-qinpet-cham-soc-toan-dien-cho-thu-cung-cua-ban/"
                                    className="elementor-sub-item"
                                  >
                                    Giới thiệu – Dịch Vụ Tắm Sấy Và Vệ Sinh Cho
                                    Thú Cưng
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2997">
                              <a
                                href="category/thuong-hieu-qinpet/"
                                className="elementor-sub-item"
                              >
                                Về chúng tôi &#8211; Thương Hiệu QINPET
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2201">
                          <a
                            href="lien-he/"
                            className={`elementor-item${
                              pathname.startsWith("/lien-he")
                                ? " elementor-item-active"
                                : ""
                            }`}
                          >
                            Liên hệ
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3433">
                          <a
                            href="thanh-toan/gio-hang/"
                            className={`elementor-item${
                              pathname.startsWith("/gio-hang")
                                ? " elementor-item-active"
                                : ""
                            }`}
                          >
                            Giỏ hàng
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div
                      className="elementor-menu-toggle"
                      role="button"
                      tabIndex={0}
                      aria-label="Menu Toggle"
                      aria-expanded="false"
                    >
                      <svg
                        aria-hidden="true"
                        role="presentation"
                        className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar"
                        viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        role="presentation"
                        className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close"
                        viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                      </svg>
                      <span className="elementor-screen-only">Menu</span>
                    </div>
                    <nav
                      className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                      aria-hidden="true"
                    >
                      <ul id="menu-2-413fca0b" className="elementor-nav-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1906 current_page_item menu-item-2196">
                          <a
                            href="/"
                            aria-current="page"
                            className={`elementor-item${
                              pathname == "/" ? " elementor-item-active" : ""
                            }`}
                            tabIndex={-1}
                          >
                            Trang chủ
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2197">
                          <a
                            href="bai-viet/"
                            className={`elementor-item${
                              pathname.startsWith("/bai-viet")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            tabIndex={-1}
                          >
                            Bài viết
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2405">
                              <a
                                href="category/chia-se-cach-cham-soc-thu-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Chia sẻ &#8211; chăm sóc thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2987">
                              <a
                                href="category/chia-se-phoi-giong-cho-meo/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Chia sẻ &#8211; Phối Giống cho chó mèo
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2202">
                          <a
                            href="san-pham/"
                            className={`elementor-item${
                              pathname.startsWith("/san-pham")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            tabIndex={-1}
                          >
                            Sản phẩm
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2211">
                              <a
                                href="danh-muc-san-pham/cac-loai-sua-tam/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Sữa Tắm
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2213">
                              <a
                                href="danh-muc-san-pham/thuc-an-meo/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Thức ăn hạt mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2214">
                              <a
                                href="danh-muc-san-pham/thuc-an-cho/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Thức ăn hạt chó
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2215">
                              <a
                                href="danh-muc-san-pham/phu-kien-thu-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Phụ kiện thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2888">
                              <a
                                href="danh-muc-san-pham/san-pham-cong-nghe/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Công nghệ &#8211; Điện tử cho thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3305">
                              <a
                                href="danh-muc-san-pham/ve-sinh-cho-meo/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                VỆ SINH CHO MÈO
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3308">
                              <a
                                href="danh-muc-san-pham/banh-xuong-pate-do-thuong-cho-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Bánh &#8211; Xương &#8211; Pate &#8211; Đồ
                                thưởng chó cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3306">
                              <a
                                href="danh-muc-san-pham/khu-mui-ve-sinh-cho-thu-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Khử mùi &#8211; vệ sinh cho thú cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3309">
                              <a
                                href="danh-muc-san-pham/sot-pate-do-thuong-meo-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Sốt &#8211; Pate &#8211; Đồ thưởng mèo cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3307">
                              <a
                                href="danh-muc-san-pham/deal-soc/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                DEAL SỐC
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3310">
                              <a
                                href="danh-muc-san-pham/quan-ao-thu-cung/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Quần Áo Thú Cưng
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3311">
                              <a
                                href="danh-muc-san-pham/cac-loai-sua-tam/sua-tam-cho-meo/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Sữa tắm &#8211; trị ve rận, nước hoa, Khử mùi,
                                Dưỡng lông chó mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3312">
                              <a
                                href="danh-muc-san-pham/thuoc-cho-cho-meo/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Thuốc cho chó mèo
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2748">
                              <a
                                href="bao-hanh/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                THÔNG TIN BẢO HÀNH
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2199">
                          <a
                            href="dich-vu/"
                            className={`elementor-item${
                              pathname.startsWith("/dich-vu")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            tabIndex={-1}
                          >
                            Giới thiệu
                          </a>
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2576">
                              <a
                                href="category/dv-khach-san/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Dịch vụ Khách Sạn
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2403">
                              <a
                                href="category/https-qinpethouse-com-cat-tia-long-cho-tai-ha-noi/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Spa Grooming
                              </a>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2404">
                                  <a
                                    href="gioi-thieu-ve-dich-vu-grooming-spa-qinpet/"
                                    className="elementor-sub-item"
                                    tabIndex={-1}
                                  >
                                    Giới thiệu về dịch vụ Grooming Spa | QINPET
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3288">
                                  <a
                                    href="category/tam-say-ve-sinh-cho-meo/"
                                    className="elementor-sub-item"
                                    tabIndex={-1}
                                  >
                                    Tắm sấy và vệ sinh cho thú cưng
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2419">
                                  <a
                                    href="dich-vu-tam-say-va-ve-sinh-cho-thu-cung-tai-qinpet-cham-soc-toan-dien-cho-thu-cung-cua-ban/"
                                    className="elementor-sub-item"
                                    tabIndex={-1}
                                  >
                                    Giới thiệu – Dịch Vụ Tắm Sấy Và Vệ Sinh Cho
                                    Thú Cưng
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2997">
                              <a
                                href="category/thuong-hieu-qinpet/"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Về chúng tôi &#8211; Thương Hiệu QINPET
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2201">
                          <a
                            href="lien-he/"
                            className={`elementor-item${
                              pathname.startsWith("/lien-he")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            tabIndex={-1}
                          >
                            Liên hệ
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3433">
                          <a
                            href="thanh-toan/gio-hang/"
                            className={`elementor-item${
                              pathname.startsWith("/gio-hang")
                                ? " elementor-item-active"
                                : ""
                            }`}
                            tabIndex={-1}
                          >
                            Giỏ hàng
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-65dd6382 elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-mobile-align-center elementor-widget elementor-widget-button"
                  data-id="65dd6382"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push"
                        href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjMyNDciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Đặt lịch ngay
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Suspense>
            <BookingForm />
            <BookingCoupon />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
