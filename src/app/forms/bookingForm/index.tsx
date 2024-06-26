"use client";

import React from "react";
import { signIn } from "./scripts";
import { redirect, useRouter } from "next/navigation";

interface InputElememt extends Element {
  value?: string;
}
export default function BookingForm() {
  const { push } = useRouter();

  const onSignInClick = React.useCallback((e: any) => {
    const inputEmail: InputElememt | null =
      document.querySelector("#form-field-email");
    if (!inputEmail) return;
    const email = inputEmail.value;
    if (!email) {
      alert("Hãy nhập email");
      return;
    }

    const inputPassword: InputElememt | null = document.querySelector(
      "#form-field-field_62c4c1a"
    );
    if (!inputPassword) return;
    const password = inputPassword.value;
    if (!password) {
      alert("Hãy nhập password");
      return;
    }

    console.log(email, password);
    // signIn(email, password);
    return push('/dashboard');
  }, [push]);
  return (
    <div
      // data-elementor-type="popup"
      data-elementor-id="3247"
      className="elementor elementor-3247 elementor-location-popup"
    >
      <div className="elementor-section-wrap">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-24fff96d elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
          data-id="24fff96d"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-background-overlay"
            suppressHydrationWarning
          ></div>
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-44a13b16"
              data-id="44a13b16"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-14f03956 elementor-widget__width-initial elementor-absolute elementor-widget-mobile__width-initial elementor-widget elementor-widget-spacer"
                  data-id="14f03956"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4404662a elementor-widget__width-initial elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-spacer"
                  data-id="4404662a"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ec0c423 elementor-widget__width-initial elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-spacer"
                  data-id="ec0c423"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-10fcfd20 elementor-widget__width-initial elementor-absolute elementor-invisible elementor-widget elementor-widget-spacer"
                  data-id="10fcfd20"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_animation":"fadeIn","_animation_delay":900}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-30f424b9 elementor-widget__width-initial elementor-absolute e-transform elementor-widget elementor-widget-spacer"
                  data-id="30f424b9"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_transform_flipX_effect":"transform"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-14339823 elementor-widget__width-initial elementor-absolute e-transform elementor-widget elementor-widget-spacer"
                  data-id="14339823"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_transform_flipX_effect":"transform"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-69a9e928 elementor-widget__width-initial elementor-absolute e-transform elementor-widget elementor-widget-spacer"
                  data-id="69a9e928"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_transform_flipX_effect":"transform"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3df377d3 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                  data-id="3df377d3"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-225c9149 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                  data-id="225c9149"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-54532c65 elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-spacer"
                  data-id="54532c65"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2cb70330 elementor-widget__width-initial elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-spacer"
                  data-id="2cb70330"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1d212fe9 elementor-widget__width-initial elementor-absolute elementor-invisible elementor-widget elementor-widget-spacer"
                  data-id="1d212fe9"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_animation":"fadeIn","_animation_delay":900}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5e9ddb25 elementor-widget__width-initial elementor-absolute elementor-invisible elementor-widget elementor-widget-spacer"
                  data-id="5e9ddb25"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","_animation":"fadeIn","_animation_delay":800}'
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-7d1665bf elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="7d1665bf"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40cccfa2 elementor-invisible"
              data-id="40cccfa2"
              data-element_type="column"
              data-settings='{"background_background":"classic","animation":"fadeInUp","animation_delay":400}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-background-overlay"
                  suppressHydrationWarning
                ></div>
                <div
                  className="elementor-element elementor-element-609fc3f0 elementor-widget elementor-widget-icon-box"
                  data-id="609fc3f0"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                ></div>
                <div
                  className="elementor-element elementor-element-34084be6 elementor-button-align-center elementor-widget elementor-widget-form"
                  data-id="34084be6"
                  data-element_type="widget"
                  data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                  data-widget_type="form.default"
                >
                  <div className="elementor-widget-container">
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                          /*! pro-elements - v3.16.0 - 20-09-2023 */
                          .elementor-button.elementor-hidden,
                          .elementor-hidden {
                            display: none;
                          }
                          .e-form__step {
                            width: 100%;
                          }
                          .e-form__step:not(.elementor-hidden) {
                            display: flex;
                            flex-wrap: wrap;
                          }
                          .e-form__buttons {
                            flex-wrap: wrap;
                          }
                          .e-form__buttons,
                          .e-form__buttons__wrapper {
                            display: flex;
                          }
                          .e-form__indicators {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: nowrap;
                            font-size: 13px;
                            margin-bottom: var(--e-form-steps-indicators-spacing);
                          }
                          .e-form__indicators__indicator {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            flex-basis: 0;
                            padding: 0 var(--e-form-steps-divider-gap);
                          }
                          .e-form__indicators__indicator__progress {
                            width: 100%;
                            position: relative;
                            background-color: var(
                              --e-form-steps-indicator-progress-background-color
                            );
                            border-radius: var(
                              --e-form-steps-indicator-progress-border-radius
                            );
                            overflow: hidden;
                          }
                          .e-form__indicators__indicator__progress__meter {
                            width: var(
                              --e-form-steps-indicator-progress-meter-width,
                              0
                            );
                            height: var(--e-form-steps-indicator-progress-height);
                            line-height: var(
                              --e-form-steps-indicator-progress-height
                            );
                            padding-right: 15px;
                            border-radius: var(
                              --e-form-steps-indicator-progress-border-radius
                            );
                            background-color: var(
                              --e-form-steps-indicator-progress-color
                            );
                            color: var(
                              --e-form-steps-indicator-progress-meter-color
                            );
                            text-align: right;
                            transition: width 0.1s linear;
                          }
                          .e-form__indicators__indicator:first-child {
                            padding-left: 0;
                          }
                          .e-form__indicators__indicator:last-child {
                            padding-right: 0;
                          }
                          .e-form__indicators__indicator--state-inactive {
                            color: var(
                              --e-form-steps-indicator-inactive-primary-color,
                              #c2cbd2
                            );
                          }
                          .e-form__indicators__indicator--state-inactive
                            [class*="indicator--shape-"]:not(
                              .e-form__indicators__indicator--shape-none
                            ) {
                            background-color: var(
                              --e-form-steps-indicator-inactive-secondary-color,
                              #fff
                            );
                          }
                          .e-form__indicators__indicator--state-inactive object,
                          .e-form__indicators__indicator--state-inactive svg {
                            fill: var(
                              --e-form-steps-indicator-inactive-primary-color,
                              #c2cbd2
                            );
                          }
                          .e-form__indicators__indicator--state-active {
                            color: var(
                              --e-form-steps-indicator-active-primary-color,
                              #39b54a
                            );
                            border-color: var(
                              --e-form-steps-indicator-active-secondary-color,
                              #fff
                            );
                          }
                          .e-form__indicators__indicator--state-active
                            [class*="indicator--shape-"]:not(
                              .e-form__indicators__indicator--shape-none
                            ) {
                            background-color: var(
                              --e-form-steps-indicator-active-secondary-color,
                              #fff
                            );
                          }
                          .e-form__indicators__indicator--state-active object,
                          .e-form__indicators__indicator--state-active svg {
                            fill: var(
                              --e-form-steps-indicator-active-primary-color,
                              #39b54a
                            );
                          }
                          .e-form__indicators__indicator--state-completed {
                            color: var(
                              --e-form-steps-indicator-completed-secondary-color,
                              #fff
                            );
                          }
                          .e-form__indicators__indicator--state-completed
                            [class*="indicator--shape-"]:not(
                              .e-form__indicators__indicator--shape-none
                            ) {
                            background-color: var(
                              --e-form-steps-indicator-completed-primary-color,
                              #39b54a
                            );
                          }
                          .e-form__indicators__indicator--state-completed
                            .e-form__indicators__indicator__label {
                            color: var(
                              --e-form-steps-indicator-completed-primary-color,
                              #39b54a
                            );
                          }
                          .e-form__indicators__indicator--state-completed
                            .e-form__indicators__indicator--shape-none {
                            color: var(
                              --e-form-steps-indicator-completed-primary-color,
                              #39b54a
                            );
                            background-color: initial;
                          }
                          .e-form__indicators__indicator--state-completed object,
                          .e-form__indicators__indicator--state-completed svg {
                            fill: var(
                              --e-form-steps-indicator-completed-secondary-color,
                              #fff
                            );
                          }
                          .e-form__indicators__indicator__icon {
                            width: var(--e-form-steps-indicator-padding, 30px);
                            height: var(--e-form-steps-indicator-padding, 30px);
                            font-size: var(--e-form-steps-indicator-icon-size);
                            border-width: 1px;
                            border-style: solid;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;
                            margin-bottom: 10px;
                          }
                          .e-form__indicators__indicator__icon img,
                          .e-form__indicators__indicator__icon object,
                          .e-form__indicators__indicator__icon svg {
                            width: var(--e-form-steps-indicator-icon-size);
                            height: auto;
                          }
                          .e-form__indicators__indicator__icon .e-font-icon-svg {
                            height: 1em;
                          }
                          .e-form__indicators__indicator__number {
                            width: var(--e-form-steps-indicator-padding, 30px);
                            height: var(--e-form-steps-indicator-padding, 30px);
                            border-width: 1px;
                            border-style: solid;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-bottom: 10px;
                          }
                          .e-form__indicators__indicator--shape-circle {
                            border-radius: 50%;
                          }
                          .e-form__indicators__indicator--shape-square {
                            border-radius: 0;
                          }
                          .e-form__indicators__indicator--shape-rounded {
                            border-radius: 5px;
                          }
                          .e-form__indicators__indicator--shape-none {
                            border: 0;
                          }
                          .e-form__indicators__indicator__label {
                            text-align: center;
                          }
                          .e-form__indicators__indicator__separator {
                            width: 100%;
                            height: var(--e-form-steps-divider-width);
                            background-color: #babfc5;
                          }
                          .e-form__indicators--type-icon,
                          .e-form__indicators--type-icon_text,
                          .e-form__indicators--type-number,
                          .e-form__indicators--type-number_text {
                            align-items: flex-start;
                          }
                          .e-form__indicators--type-icon
                            .e-form__indicators__indicator__separator,
                          .e-form__indicators--type-icon_text
                            .e-form__indicators__indicator__separator,
                          .e-form__indicators--type-number
                            .e-form__indicators__indicator__separator,
                          .e-form__indicators--type-number_text
                            .e-form__indicators__indicator__separator {
                            margin-top: calc(
                              var(--e-form-steps-indicator-padding, 30px) / 2 -
                                var(--e-form-steps-divider-width, 1px) / 2
                            );
                          }
                          .elementor-field-type-hidden {
                            display: none;
                          }
                          .elementor-field-type-html {
                            display: inline-block;
                          }
                          .elementor-login .elementor-lost-password,
                          .elementor-login .elementor-remember-me {
                            font-size: 0.85em;
                          }
                          .elementor-field-type-recaptcha_v3
                            .elementor-field-label {
                            display: none;
                          }
                          .elementor-field-type-recaptcha_v3 .grecaptcha-badge {
                            z-index: 1;
                          }
                          .elementor-button .elementor-form-spinner {
                            order: 3;
                          }
                          .elementor-form .elementor-button > span {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          }
                          .elementor-form .elementor-button .elementor-button-text {
                            white-space: normal;
                            flex-grow: 0;
                          }
                          .elementor-form .elementor-button svg {
                            height: auto;
                          }
                          .elementor-form .elementor-button .e-font-icon-svg {
                            height: 1em;
                          }
                          .elementor-select-wrapper .select-caret-down-wrapper {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            inset-inline-end: 10px;
                            pointer-events: none;
                            font-size: 11px;
                          }
                          .elementor-select-wrapper .select-caret-down-wrapper svg {
                            display: unset;
                            width: 1em;
                            aspect-ratio: unset;
                            fill: currentColor;
                          }
                          .elementor-select-wrapper .select-caret-down-wrapper i {
                            font-size: 19px;
                            line-height: 2;
                          }
                          .elementor-select-wrapper.remove-before:before {
                            content: "" !important;
                          }
                        
                        `,
                      }}
                    ></style>
                    <form className="elementor-form">
                      <div className="elementor-form-fields-wrapper elementor-labels-">
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                          <input
                            size={1}
                            type="email"
                            name="form_fields[email]"
                            id="form-field-email"
                            className="elementor-field elementor-size-lg elementor-field-textual"
                            placeholder="Địa chỉ Email"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_62c4c1a elementor-col-100 elementor-field-required">
                          <input
                            size={1}
                            type="password"
                            name="form_fields[field_62c4c1a]"
                            id="form-field-field_62c4c1a"
                            className="elementor-field elementor-size-lg elementor-field-textual"
                            placeholder="Mật khẩu"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                          <div
                            className="elementor-button elementor-size-sm"
                            onClick={onSignInClick}
                            style={{ cursor: "pointer" }}
                          >
                            <span>
                              <span className="elementor-align-icon-right elementor-button-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-far-paper-plane"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
                                </svg>
                              </span>
                              <span className="elementor-button-text">
                                Đăng nhập
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
