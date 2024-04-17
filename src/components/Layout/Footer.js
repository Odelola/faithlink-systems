import Link from "next/link"
function Footer() {
  return (

    <footer className="bg-primary pt-24">

      <div className="relative z-[1]">
        <div className="pt-[50] relative">
          <div className="w-full site-max-width mx-auto px-5">
            <div className="flex justify-between px-24 py-12 border-[24px] border-borderColor bg-white rounded-[3px]">
              <div className="w-[330px] mr-6">
                <Link href="/en" className="footer__brand">
                  <img src="/Content/images/icons/logo.svg" width="411" height="93" alt="CENGİZ Holding" loading="lazy" />
                </Link>
              </div>
              <nav className="grid grid-cols-4 gap-x-16">
                <div className="footer-nav__item">
                  <h3>
                    CORPORATE
                  </h3>
                  <ul>
                    <li>
                      <Link href="/en/corporate/about-us">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/corporate/message-from-the-chairman">
                        MESSAGE FROM THE CHAIRMAN
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/corporate/milestones">
                        MILESTONES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav__item">
                  <h3>
                    ACTIVITY FIELDS
                  </h3>
                  <ul>
                    <li>
                      <Link href="/en/areas-of-activity/industry">
                        INDUSTRY
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/areas-of-activity/energy">
                        ENERGY
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/areas-of-activity/construction">
                        CONSTRUCTION
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/areas-of-activity/other">
                        OTHER
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/areas-of-activity/companies">
                        COMPANIES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav__item">
                  <h3>
                    SUSTAINABILITY
                  </h3>
                  <ul>
                    <li>
                      <Link href="/en/sustainability/for-a-better-future">
                        FOR A BETTER FUTURE
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/sustainability/safe-workplace">
                        SAFE WORKPLACE
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/sustainability/r-d-and-technology">
                        R&amp;D AND TECHNOLOGY
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/sustainability/reports-policies">
                        REPORTS &amp; POLICIES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav__item">
                  <h3>
                    MEDIA CENTER
                  </h3>
                  <ul>
                    <li>
                      <Link href="/en/media-center/press-releases">
                        PRESS RELEASES
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/media-center/press-statements">
                        PRESS STATEMENTS
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/media-center/news">
                        NEWS
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/media-center/corporate-logos">
                        CORPORATE LOGOS
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/media-center/photo-gallery">
                        PHOTO GALLERY
                      </Link>
                    </li>
                    <li>
                      <Link href="/en/media-center/video-gallery">
                        VIDEO GALLERY
                      </Link>
                    </li>
                  </ul>
                </div>

              </nav>
            </div>
            <div className="flex justify-end pb-[50px] px-24 bg-white border ">
              <div className="w-[15%]">
                <div className="flex flex-col">
                  <Link href="/en/career">
                    CAREER
                  </Link>
                  <Link href="/en/contact">
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="w-full site-max-width mx-auto h-auto px-5">
            <div className="flex pl-24 bg-white">
              <div className="flex-1 py-7 border-r border-[rgba(0,75,133,.2)]">
                <h3>İSTANBUL</h3>
                <p>
                  Altunizade Kısıklı Cad. No: 37 34662 Üsküdar, İstanbul / TÜRKİYE
                </p>
                <div className="flex">
                  <div className="mr-7">
                    <span>PHONE</span>
                    +90 (216) 554 53 00 (Pbx)
                  </div>
                  <div className="footer__contact">
                    <span>FAX</span>
                    +90 (216) 474 97 30 - 474 11 22
                  </div>
                </div>
              </div>
              <div className="border-r flex flex-[.5] flex-col justify-between items-center p-7">
                <h3>SOCIAL MEDIA</h3>
                <div className="flex items-center gap-x-2">
                  <div className="social-list__item">
                    <Link href="https://www.facebook.com/CengizHoldingTR/" target="_blank">
                      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.64662V0.000488281H5.68066C4.79851 0.000488281 3.95249 0.354403 3.32871 0.984375C2.70493 1.61435 2.35449 2.46876 2.35449 3.35968V5.78095H0V8.54247H2.35449V15.0005H5.22754V8.50006H7.37598L7.78613 5.75728H5.22754V3.80448C5.22806 3.49721 5.34928 3.20272 5.5646 2.98563C5.77992 2.76854 6.07173 2.64661 6.37598 2.64662H8Z" fill=""></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="social-list__item">
                    <Link href="https://www.instagram.com/holdingcengiz/" target="_blank">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49704 11.3543C6.73474 11.3543 5.98956 11.1282 5.35574 10.7047C4.72193 10.2811 4.22794 9.67908 3.93627 8.97474C3.6446 8.2704 3.56833 7.49539 3.71712 6.7477C3.86591 6.00001 4.23307 5.31324 4.77216 4.77424C5.31126 4.23525 5.99808 3.86825 6.74575 3.71964C7.49343 3.57103 8.26838 3.64749 8.9726 3.93937C9.67682 4.23124 10.2787 4.72541 10.702 5.35938C11.1254 5.99334 11.3513 6.73864 11.3511 7.50099C11.35 8.5228 10.9436 9.50244 10.2211 10.2249C9.49848 10.9473 8.51879 11.3535 7.49704 11.3543ZM7.49704 4.9298C6.98854 4.9298 6.49146 5.0806 6.06866 5.36312C5.64586 5.64565 5.31633 6.04722 5.12174 6.51704C4.92714 6.98686 4.87623 7.50383 4.97543 8.00259C5.07464 8.50135 5.3195 8.95949 5.67906 9.31907C6.03862 9.67866 6.49673 9.92354 6.99546 10.0227C7.49418 10.122 8.01113 10.071 8.48092 9.87643C8.95071 9.68183 9.35225 9.35227 9.63475 8.92945C9.91726 8.50662 10.068 8.00952 10.068 7.50099C10.0673 6.81931 9.79614 6.16577 9.31415 5.68375C8.83217 5.20173 8.17867 4.93059 7.49704 4.9298Z" fill=""></path>
                        <path d="M11.0848 15.0005H3.91618C2.87804 14.9994 1.88269 14.5866 1.14852 13.8526C0.41435 13.1186 0.00130532 12.1233 0 11.085V3.91593C0.00130532 2.87772 0.41435 1.88242 1.14852 1.14839C1.88269 0.414352 2.87804 0.0015322 3.91618 0.000488281H11.0848C12.1228 0.00179317 13.1179 0.414729 13.8518 1.14874C14.5858 1.88274 14.9987 2.87789 15 3.91593V11.085C14.9987 12.1231 14.5858 13.1182 13.8518 13.8522C13.1179 14.5862 12.1228 14.9992 11.0848 15.0005ZM3.91618 1.28361C3.21816 1.28413 2.54886 1.5616 2.05519 2.05511C1.56152 2.54863 1.28382 3.21786 1.28304 3.91593V11.085C1.28382 11.7832 1.56149 12.4525 2.05513 12.9462C2.54877 13.4399 3.21807 13.7176 3.91618 13.7184H11.0848C11.7828 13.7176 12.452 13.4399 12.9455 12.9462C13.439 12.4525 13.7164 11.7831 13.717 11.085V3.91593C13.7162 3.21803 13.4386 2.54895 12.9452 2.05546C12.4517 1.56198 11.7827 1.28439 11.0848 1.28361H3.91618Z" fill=""></path>
                        <path d="M11.4586 4.35975C11.9477 4.35975 12.3442 3.96323 12.3442 3.47409C12.3442 2.98495 11.9477 2.58843 11.4586 2.58843C10.9695 2.58843 10.573 2.98495 10.573 3.47409C10.573 3.96323 10.9695 4.35975 11.4586 4.35975Z" fill=""></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="social-list__item">
                    <Link href="https://www.linkedin.com/company/cengiz-holding/" target="_blank">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.248341 5.11578H3.25065V15.0005H0.248341V5.11578Z" fill="#004B85"></path>
                        <path d="M5.23605 8.17899C5.23605 7.13787 5.23605 5.87788 5.21234 4.96592H8.12176C8.18983 5.44557 8.22876 5.92889 8.23837 6.41323C8.67419 5.56535 9.61304 4.6731 11.8159 4.6731C14.2183 4.6731 15 6.40436 15 9.51588V14.9965H11.9977V9.85898C11.9977 8.35152 11.3929 7.28675 10.4165 7.28675C8.72459 7.28675 8.24232 8.36434 8.24232 10.6014V14.9965H5.24001L5.23605 8.17899Z" fill="#004B85"></path>
                        <path d="M2.41907 3.35823C3.31159 2.98941 3.73542 1.9686 3.36573 1.0782C2.99603 0.187789 1.9728 -0.235038 1.08028 0.13378C0.187756 0.502598 -0.236089 1.5234 0.133607 2.4138C0.503303 3.30421 1.52654 3.72704 2.41907 3.35823Z" fill="#004B85"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="social-list__item">
                    <Link href="https://twitter.com/HoldingCengiz?s=20" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M0.0365715 0L5.8279 7.72183L0 14H1.31163L6.41395 8.50337L10.5365 14H15L8.88282 5.84383L14.3074 0H12.9958L8.29678 5.06229L4.50009 0H0.0365715ZM1.96542 0.963435H4.01597L13.0709 13.0364H11.0203L1.96542 0.963435Z" fill="#004B85"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="social-list__item">
                    <Link href="https://www.youtube.com/@CengizHoldingAS" target="_blank">
                      <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6415 0.000488281H3.3578C2.91679 0.000488272 2.48009 0.0813252 2.07266 0.238373C1.66522 0.395421 1.29503 0.625608 0.98322 0.915788C0.67141 1.20597 0.42409 1.55046 0.255388 1.92958C0.0866857 2.3087 -9.53581e-05 2.71503 7.86312e-08 3.12537V6.87562C-9.53581e-05 7.28595 0.0866857 7.69228 0.255388 8.0714C0.42409 8.45053 0.67141 8.79502 0.98322 9.0852C1.29503 9.37538 1.66522 9.60556 2.07266 9.76261C2.48009 9.91966 2.91679 10.0005 3.3578 10.0005H11.6415C12.5322 10.0005 13.3865 9.67126 14.0163 9.08524C14.6462 8.49921 15 7.70439 15 6.87562V3.12537C15 2.2966 14.6462 1.50177 14.0163 0.915747C13.3865 0.32972 12.5322 0.000488281 11.6415 0.000488281ZM5.92429 7.29141V2.71025L9.99346 5.00083L5.92429 7.29141Z" fill="#004B85"></path>
                      </svg>

                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-[.5] flex-col justify-between items-center p-7 pr-0">
                <h3>ŞABAN CENGİZ FOUNDATION</h3>
                <Link href="https://www.sabancengizvakfi.org/" target="_blank">
                  <h1>SCV</h1>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-end h-20 text-white mt-4">
        <div className="w-full site-max-width mx-auto px-5">
          <div className="flex justify-between px-24">
            <p className="font-bold">
              Copyright © Cengiz Holding. All rights reserved.
            </p>
            <div className="flex">
              <Link href="/en/privacy-notice">PRIVACY NOTICE</Link>
              <Link href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/11623" target="_blank">
                INFORMATION SOCIETY SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer