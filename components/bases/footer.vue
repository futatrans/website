<template>
  <div class="relative">

    <div id="contact" class="-top-[100px] absolute"></div>
    
    <footer class="footer-section position-relative bg-[#0A3A3C]">
      <div class="footer-widgets-wrapper style1 fix">
        <div class="shape1">
          <img src="/vendors/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div class="shape2">
          <img src="/vendors/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div class="shape3">
          <img src="/vendors/images/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
              style="
                visibility: visible;
                animation-delay: 0.2s;
                animation-name: fadeInUp;
              "
            >
              <div class="single-footer-widget">
                <div class="widget-head">
                  <a href="#">
                    <img
                      src="/img/logo/logo.png"
                      class="w-[120px]"
                      alt="logo-img"
                    />
                  </a>
                </div>
                <div class="footer-content">
                  <p>
                    {{ t('footer.description') }}
                  </p> 
                  <div
                      class="flex justify-center sm:justify-start space-y-4 sm:space-y-0 mt-8 sm:flex-row flex-col"
                    >
                      <a class="playstore" href="#"
                        ><img
                          src="/vendors/images/cta/ctaplayStore1_1.png"
                          alt="img"
                          class="w-[150px]"
                      /></a>
                      <a class="playstore" href="https://www.apple.com/store"
                        ><img
                          src="/vendors/images/cta/ctaAppleStore1_1.png"
                          alt="img"
                          class="w-[150px]"

                      /></a>
                    </div>
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
              style="
                visibility: visible;
                animation-delay: 0.4s;
                animation-name: fadeInUp;
              "
            >
              <div class="single-footer-widget">
                <div class="widget-head">
                  <h3>

                    <span class="text-lg">
                      {{ t('footer.navigation.title') }}
                    </span>
                  </h3>
                </div>

                <ul class="text-gray-600 space-y-4 text-sm">
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.navigation.usagers') }}</a>
                  </li>
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.navigation.conducteurs') }}</a>
                  </li>
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.navigation.planete') }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
              style="
                visibility: visible;
                animation-delay: 0.8s;
                animation-name: fadeInUp;
              "
            >
              <div class="single-footer-widget">
                <div class="widget-head">
                  <h3 style="text-transform: none !important;">


                  <span class="text-lg">
                      {{ t('footer.usefulLinks.title') }}
                    </span>
                  </h3>

                </div>
                <ul class="text-gray-600 space-y-4 text-sm">
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.usefulLinks.about') }}</a>
                  </li>
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.usefulLinks.faq') }}</a>
                  </li>
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.usefulLinks.legal') }}</a>
                  </li>
                  <li>
                    <a href="#" style="text-transform: none !important;">{{ t('footer.usefulLinks.privacy') }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="single-footer-widget">
                <div class="contact-box">
                  <div class="widget-head" style="text-transform: none !important;">
                    {{ t('footer.contact.title') }}
                  </div>
                  
                  <div class="info">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199 20.1667 6.00033V17.0003C20.1667 18.0087 19.3417 18.8337 18.3334 18.8337H3.66671C2.65837 18.8337 1.83337 18.0087 1.83337 17.0003V6.00033C1.83337 4.99199 2.65837 4.16699 3.66671 4.16699Z"
                          stroke="#01B180"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.1667 6L11 12.4167L1.83337 6"
                          stroke="#01B180"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="link">
                      <a href="mailto:hello@futatrans.com">hello@futatrans.com</a>
                    </div>
                  </div>
                  <div class="info">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2011_91)">
                          <path
                            d="M13.7959 5.08366C14.6912 5.25834 15.514 5.69623 16.1591 6.34127C16.8041 6.9863 17.242 7.80915 17.4167 8.70449L13.7959 5.08366ZM13.7959 1.41699C15.656 1.62364 17.3906 2.45665 18.7149 3.77925C20.0392 5.10185 20.8744 6.83542 21.0834 8.69533L13.7959 1.41699ZM20.1667 16.0103V18.7603C20.1677 19.0156 20.1154 19.2683 20.0132 19.5022C19.9109 19.7361 19.7609 19.9461 19.5728 20.1187C19.3846 20.2913 19.1625 20.4227 18.9207 20.5045C18.6789 20.5863 18.4226 20.6166 18.1684 20.5937C15.3476 20.2872 12.6381 19.3233 10.2575 17.7795C8.0427 16.3721 6.16491 14.4943 4.75752 12.2795C3.20833 9.8881 2.24424 7.1654 1.94335 4.33199C1.92045 4.0785 1.95057 3.82302 2.03181 3.58181C2.11305 3.34061 2.24363 3.11896 2.41522 2.93098C2.58682 2.743 2.79567 2.59281 3.0285 2.48997C3.26132 2.38713 3.513 2.3339 3.76752 2.33366H6.51752C6.96238 2.32928 7.39366 2.48681 7.73097 2.7769C8.06827 3.06698 8.28859 3.46982 8.35085 3.91033C8.46692 4.79039 8.68218 5.65449 8.99252 6.48616C9.11585 6.81426 9.14254 7.17083 9.06943 7.51363C8.99632 7.85643 8.82648 8.17109 8.58002 8.42033L7.41585 9.58449C8.72078 11.8794 10.6209 13.7796 12.9159 15.0845L14.08 13.9203C14.3293 13.6739 14.6439 13.504 14.9867 13.4309C15.3295 13.3578 15.6861 13.3845 16.0142 13.5078C16.8459 13.8182 17.71 14.0334 18.59 14.1495C19.0353 14.2123 19.442 14.4366 19.7327 14.7797C20.0234 15.1228 20.1778 15.5608 20.1667 16.0103Z"
                            stroke="#01B180"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2011_91">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(0 0.5)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="link">
                      <a href="tel:+243817039144">+243 817 039 144</a>
                      <br />
                      <span>{{ t('footer.contact.location') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom style1">
        <div class="container">
          <div
            class="footer-wrapper d-flex align-items-center justify-content-between"
          >
            <p
              class="wow fadeInLeft"
              data-wow-delay=".3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInLeft;
              "
            >
              {{ t('footer.copyright') }}
            </p>
            <ul class="social-links" data-wow-delay=".5s">
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Import du composable i18n avec vérification de sécurité
const { t } = useI18n()

// Vérification de sécurité pour les traductions
const safeTranslate = (key) => {
  try {
    return t(key) || key
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error)
    return key
  }
}
</script>

<style scoped></style>
