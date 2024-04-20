"use client";

import React from "react";

export default function ExtraScript({children}: {children?: React.ReactNode}) {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          const lazyloadRunObserver = () => {
            const dataAttribute = 'data-e-bg-lazyload';
            const lazyloadBackgrounds = document.querySelectorAll( "[" + dataAttribute + "]" + ":not(.lazyloaded)" );
            const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
            entries.forEach( ( entry ) => {
              if ( entry.isIntersecting ) {
                let lazyloadBackground = entry.target;
                const lazyloadSelector = lazyloadBackground.getAttribute( dataAttribute );
                if ( lazyloadSelector ) {
                  lazyloadBackground = entry.target.querySelector( lazyloadSelector );
                }
                if( lazyloadBackground ) {
                  lazyloadBackground.classList.add( 'lazyloaded' );
                }
                lazyloadBackgroundObserver.unobserve( entry.target );
              }
            });
            }, { rootMargin: '100px 0px 100px 0px' } );
            lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
              lazyloadBackgroundObserver.observe( lazyloadBackground );
            } );
          };
          const events = [
            'DOMContentLoaded',
            'elementor/lazyload/observe',
          ];
          events.forEach( ( event ) => {
            document.addEventListener( event, lazyloadRunObserver );
          } );
        `,
        }}
      ></script>
      <link
        rel="stylesheet"
        id="wc-blocks-style-css"
        href="wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks8fea.css?ver=11.8.0-dev"
        media="all"
      />
      <link
        rel="stylesheet"
        id="flatpickr-css"
        href="wp-content/plugins/elementor/assets/lib/flatpickr/flatpickr.mineda1.css?ver=4.1.4"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-3318-css"
        href="wp-content/uploads/elementor/css/post-33187bad.css?ver=1706552612"
        media="all"
      />
      {children}
      <link
        rel="stylesheet"
        id="e-animations-css"
        href="wp-content/plugins/elementor/assets/lib/animations/animations.min225e.css?ver=3.19.0"
        media="all"
      />
      <script
        src="wp-content/themes/hello-elementor/assets/js/hello-frontend.min8a54.js?ver=1.0.0"
        id="hello-theme-frontend-js"
      ></script>
      <script
        id="eael-general-js-extra"
        dangerouslySetInnerHTML={{
          __html: `
          var localize = {
            ajaxurl: "https:\/\/qinpet.vn\/wp-admin\/admin-ajax.php",
            nonce: "34129860cb",
            i18n: { added: "Added ", compare: "Compare", loading: "Loading..." },
            eael_translate_text: {
              required_text: "is a required field",
              invalid_text: "Invalid",
              billing_text: "Billing",
              shipping_text: "Shipping",
              fg_mfp_counter_text: "of",
            },
            page_permalink: "https:\/\/qinpet.vn\/",
            cart_redirectition: "yes",
            cart_page_url: "https:\/\/qinpet.vn\/thanh-toan\/gio-hang\/",
            el_breakpoints: {
              mobile: {
                label: "Mobile Portrait",
                value: 767,
                default_value: 767,
                direction: "max",
                is_enabled: true,
              },
              mobile_extra: {
                label: "Mobile Landscape",
                value: 880,
                default_value: 880,
                direction: "max",
                is_enabled: false,
              },
              tablet: {
                label: "Tablet Portrait",
                value: 1024,
                default_value: 1024,
                direction: "max",
                is_enabled: true,
              },
              tablet_extra: {
                label: "Tablet Landscape",
                value: 1200,
                default_value: 1200,
                direction: "max",
                is_enabled: false,
              },
              laptop: {
                label: "Laptop",
                value: 1366,
                default_value: 1366,
                direction: "max",
                is_enabled: false,
              },
              widescreen: {
                label: "Widescreen",
                value: 2400,
                default_value: 2400,
                direction: "min",
                is_enabled: false,
              },
            },
          };
        `,
        }}
      ></script>
      <script
        src="wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.mind552.js?ver=5.8.12"
        id="eael-general-js"
      ></script>
      <script
        src="wp-content/plugins/pro-elements/assets/lib/smartmenus/jquery.smartmenus.minf269.js?ver=1.0.1"
        id="smartmenus-js"
      ></script>
      <script
        src="wp-includes/js/imagesloaded.minbb93.js?ver=5.0.0"
        id="imagesloaded-js"
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min3958.js?ver=0.2.1"
        id="jquery-numerator-js"
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/lib/flatpickr/flatpickr.mineda1.js?ver=4.1.4"
        id="flatpickr-js"
      ></script>
      <script
        src="wp-content/plugins/pro-elements/assets/js/webpack-pro.runtime.min6b60.js?ver=3.16.2"
        id="elementor-pro-webpack-runtime-js"
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/js/webpack.runtime.min225e.js?ver=3.19.0"
        id="elementor-webpack-runtime-js"
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/js/frontend-modules.min225e.js?ver=3.19.0"
        id="elementor-frontend-modules-js"
      ></script>
      <script
        id="elementor-pro-frontend-js-before"
        dangerouslySetInnerHTML={{
          __html: `
          var ElementorProFrontendConfig = {
            ajaxurl: "https:\/\/qinpet.vn\/wp-admin\/admin-ajax.php",
            nonce: "613ac430e6",
            urls: {
              assets:
                "https:\/\/qinpet.vn\/wp-content\/plugins\/pro-elements\/assets\/",
              rest: "https:\/\/qinpet.vn\/wp-json\/",
            },
            shareButtonsNetworks: {
              facebook: { title: "Facebook", has_counter: true },
              twitter: { title: "Twitter" },
              linkedin: { title: "LinkedIn", has_counter: true },
              pinterest: { title: "Pinterest", has_counter: true },
              reddit: { title: "Reddit", has_counter: true },
              vk: { title: "VK", has_counter: true },
              odnoklassniki: { title: "OK", has_counter: true },
              tumblr: { title: "Tumblr" },
              digg: { title: "Digg" },
              skype: { title: "Skype" },
              stumbleupon: { title: "StumbleUpon", has_counter: true },
              mix: { title: "Mix" },
              telegram: { title: "Telegram" },
              pocket: { title: "Pocket", has_counter: true },
              xing: { title: "XING", has_counter: true },
              whatsapp: { title: "WhatsApp" },
              email: { title: "Email" },
              print: { title: "Print" },
            },
            woocommerce: {
              menu_cart: {
                cart_page_url: "https:\/\/qinpet.vn\/thanh-toan\/gio-hang\/",
                checkout_page_url: "https:\/\/qinpet.vn\/thanh-toan\/",
                fragments_nonce: "f57cc8711a",
              },
            },
            facebook_sdk: { lang: "vi", app_id: "" },
            lottie: {
              defaultAnimationUrl:
                "https:\/\/qinpet.vn\/wp-content\/plugins\/pro-elements\/modules\/lottie\/assets\/animations\/default.json",
            },
          };
        `,
        }}
      ></script>
      <script
        src="wp-content/plugins/pro-elements/assets/js/frontend.min6b60.js?ver=3.16.2"
        id="elementor-pro-frontend-js"
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2"
        id="elementor-waypoints-js"
      ></script>
      <script
        src="wp-includes/js/jquery/ui/core.min3f14.js?ver=1.13.2"
        id="jquery-ui-core-js"
      ></script>
      <script
        id="elementor-frontend-js-before"
        dangerouslySetInnerHTML={{
          __html: `
          var elementorFrontendConfig = {
            environmentMode: {
              edit: false,
              wpPreview: false,
              isScriptDebug: false,
            },
            i18n: {
              shareOnFacebook: "Chia s\u1ebb tr\u00ean Facebook",
              shareOnTwitter: "Chia s\u1ebb tr\u00ean Twitter",
              pinIt: "Ghim n\u00f3",
              download: "T\u1ea3i xu\u1ed1ng",
              downloadImage: "T\u1ea3i h\u00ecnh \u1ea3nh",
              fullscreen: "To\u00e0n m\u00e0n h\u00ecnh",
              zoom: "Thu ph\u00f3ng",
              share: "Chia s\u1ebb",
              playVideo: "Ch\u01a1i Video",
              previous: "Previous",
              next: "Next",
              close: "\u0110\u00f3ng",
              a11yCarouselWrapperAriaLabel:
                "Carousel | Horizontal scrolling: Arrow Left & Right",
              a11yCarouselPrevSlideMessage: "Previous slide",
              a11yCarouselNextSlideMessage: "Next slide",
              a11yCarouselFirstSlideMessage: "This is the first slide",
              a11yCarouselLastSlideMessage: "This is the last slide",
              a11yCarouselPaginationBulletMessage: "Go to slide",
            },
            is_rtl: false,
            breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
            responsive: {
              breakpoints: {
                mobile: {
                  label: "Mobile Portrait",
                  value: 767,
                  default_value: 767,
                  direction: "max",
                  is_enabled: true,
                },
                mobile_extra: {
                  label: "Mobile Landscape",
                  value: 880,
                  default_value: 880,
                  direction: "max",
                  is_enabled: false,
                },
                tablet: {
                  label: "Tablet Portrait",
                  value: 1024,
                  default_value: 1024,
                  direction: "max",
                  is_enabled: true,
                },
                tablet_extra: {
                  label: "Tablet Landscape",
                  value: 1200,
                  default_value: 1200,
                  direction: "max",
                  is_enabled: false,
                },
                laptop: {
                  label: "Laptop",
                  value: 1366,
                  default_value: 1366,
                  direction: "max",
                  is_enabled: false,
                },
                widescreen: {
                  label: "Widescreen",
                  value: 2400,
                  default_value: 2400,
                  direction: "min",
                  is_enabled: false,
                },
              },
            },
            version: "3.19.0",
            is_static: false,
            experimentalFeatures: {
              e_optimized_assets_loading: true,
              e_optimized_css_loading: true,
              e_font_icon_svg: true,
              additional_custom_breakpoints: true,
              container: true,
              e_swiper_latest: true,
              container_grid: true,
              theme_builder_v2: true,
              "hello-theme-header-footer": true,
              editor_v2: true,
              block_editor_assets_optimize: true,
              "ai-layout": true,
              "landing-pages": true,
              "nested-elements": true,
              e_lazyload: true,
              e_image_loading_optimization: true,
              e_global_styleguide: true,
              "page-transitions": true,
              notes: true,
              "form-submissions": true,
              e_scroll_snap: true,
              "mega-menu": true,
            },
            urls: {
              assets:
                "https:\/\/qinpet.vn\/wp-content\/plugins\/elementor\/assets\/",
            },
            swiperClass: "swiper",
            settings: { page: [], editorPreferences: [] },
            kit: {
              body_background_background: "gradient",
              active_breakpoints: ["viewport_mobile", "viewport_tablet"],
              global_image_lightbox: "yes",
              lightbox_enable_counter: "yes",
              lightbox_enable_fullscreen: "yes",
              lightbox_enable_zoom: "yes",
              lightbox_enable_share: "yes",
              lightbox_title_src: "title",
              lightbox_description_src: "description",
              woocommerce_notices_elements: [],
              hello_header_logo_type: "logo",
              hello_header_menu_layout: "horizontal",
              hello_footer_logo_type: "logo",
            },
            post: {
              id: 1906,
              title:
                "Ch%C4%83m%20s%C3%B3c%20th%C3%BA%20c%C6%B0ng%20%E2%80%93%20Th%C3%BA%20c%C6%B0ng%20c%E1%BB%A7a%20b%E1%BA%A1n%2C%20ch%C4%83m%20s%C3%B3c%20c%E1%BB%A7a%20ch%C3%BAng%20t%C3%B4i",
              excerpt: "",
              featuredImage: false,
            },
          };
        `,
        }}
      ></script>
      <script
        src="wp-content/plugins/elementor/assets/js/frontend.min225e.js?ver=3.19.0"
        id="elementor-frontend-js"
      ></script>
      <script
        src="wp-content/plugins/pro-elements/assets/js/elements-handlers.min6b60.js?ver=3.16.2"
        id="pro-elements-handlers-js"
      ></script>
    </>
  );
}
