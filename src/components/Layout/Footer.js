import Link from "next/link"
import { getRoute } from '../utils'

function Footer() {

  // const social_list_item = "w-5 h-5 flex justify-center items-center border border-footerBlue p-4 hover:bg-footerBlue"
  function GetFooterLinks({ links }) {
    getRoute
    return (
      links.map(link => (
        <li className="flex gap-x-2 mb-2 items-center" key={link}>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
            <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill="#004B85" />
          </svg>
          <Link href={getRoute[link.toLowerCase()] ?? "/"} className="md:text-nowrap font-semibold">
            {link.toUpperCase()}
          </Link>
        </li>
      ))
    )
  }

  return (

    <footer className="bg-faintWhite mt-12 pt-16">
      <div className="relative z-[1] top-0">
        {/* <div className="relative z-[1] md:top-[35px] top-0"> */}
        <div className="pt-[50] relative">
          <div className="container max-md:px-2">
            <div className="flex lg:flex-row md:justify-between lg:px-24 py-12 border-t-[24px] border-secondary bg-white rounded-[3px] flex-col px-4 gap-x-4 gap-y-3">
              <div className="basis-[20%]">
                <Link href="/" className="footer__brand">
                  {/* <h1>Faith Link Systems</h1> */}
                  <img src="/brandLogo.png" className="w-[200px] max-md:w-[150px]" alt="Brand Logo" />
                </Link>
              </div>
              <nav className="grid sm:grid-cols-2 xxs:grid-cols-1 md:grid-cols-4 md:basis-[80%] gap-y-6">
                {/* <nav className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4"> */}
                <div className="basis-[17%]">
                  <h3 className="text-textGray">
                    CORPORATE
                  </h3>
                  <ul>
                    <GetFooterLinks links={["about us", "our vision and values", "our team", "coo's message", "milestones",]} />
                  </ul>
                </div>
                <div className="basis-[17%]">
                  <h3 className="text-textGray">
                    ACTIVITY FIELDS
                  </h3>
                  <ul>
                    <GetFooterLinks links={["power sector", "engineering services", "paas / eaas", "fibre optics",]} />
                  </ul>
                </div>
                <div className="basis-[17%]">
                  <h3 className="text-textGray">
                    SUSTAINABILITY
                  </h3>
                  <ul>
                    <GetFooterLinks links={["hse policy", "safe workplace"]} />
                  </ul>
                </div>
                <div className="basis-[17%] flex flex-col">
                  <h3 className="text-textGray">
                    MEDIA CENTER
                  </h3>
                  <ul>
                    {/* <GetFooterLinks links={["press releases", "press statements", "news", "photo gallery", "video gallery"]} /> */}
                    <GetFooterLinks links={["press releases", "news", "photo gallery", "video gallery"]} />
                  </ul>
                  <div className="flex flex-col mt-14 gap-y-4 items-end md:items-start">
                    {/* <Link href="career" className="font-semibold text-[14px]">
                      CAREER
                    </Link> */}
                    <Link href="/contact" className="font-semibold text-[14px]">
                      CONTACT
                    </Link>
                  </div>
                </div>

              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="container max-md:px-2">
            {/* <div className="flex pl-24 bg-white xxs:flex-col xxs:pl-4 xxs:sm-max:justify-center"> */}
            <div className="flex md:pl-24 bg-white md:flex-row flex-col xxs:pl-4 xxs:sm-max:justify-center border-t">
              <div className="flex-1 py-7 md:border-r border-b border-[rgba(0,75,133,.2)]">
                <div className="flex flex-col gap-y-1">
                  <div>
                    <h3>HEAD OFFICE</h3>
                    <p className="mb-0">
                      29 Fatai Durusinmi Crescent off Ligali Ayorinde Victoria Island, Lagos, Nigeria
                    </p>

                  </div>
                  <div className="flex gap-x-2">
                    <div className="mr-7">
                      <span className="text-[14px] text-secondary font-bold">PHONE: </span>
                      <a href="tel:+234 818 600 0000">+234 (818) 600 0000</a>
                    </div>
                    <div className="footer__contact">
                      <span className="text-[14px] text-secondary font-bold hover:text-underline">EMAIL: </span>
                      <a href="mailto:info@faithlinkltd.com">info@faithlinkltd.com</a>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-4">
                  <h3 className="text-[11px]">Branch Offices</h3>

                  <p className="text-[9px]">Kano Branch: 3, Mallam Jumbo Road Kano State</p>
                  <p className="text-[9px]">Benin Branch: 4, Atoe Close, GRA Benin, Edo State</p>
                </div> */}
              </div>
              <div className="md:border-r border-b flex flex-[.5] flex-col justify-center md:items-center items-start md:p-7 px-0 py-7 gap-y-4">
                <h3>SOCIAL MEDIA</h3>
                <div className="flex items-center gap-x-4 mt-[-7px]">
                  <Link className="social_list_item" href="https://www.facebook.com" target="_blank">
                    <i >
                      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.64662V0.000488281H5.68066C4.79851 0.000488281 3.95249 0.354403 3.32871 0.984375C2.70493 1.61435 2.35449 2.46876 2.35449 3.35968V5.78095H0V8.54247H2.35449V15.0005H5.22754V8.50006H7.37598L7.78613 5.75728H5.22754V3.80448C5.22806 3.49721 5.34928 3.20272 5.5646 2.98563C5.77992 2.76854 6.07173 2.64661 6.37598 2.64662H8Z" fill="#004B85"></path>
                      </svg>
                    </i>
                  </Link>
                  <Link className="social_list_item" href="https://www.instagram.com" target="_blank">
                    <i >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49704 11.3543C6.73474 11.3543 5.98956 11.1282 5.35574 10.7047C4.72193 10.2811 4.22794 9.67908 3.93627 8.97474C3.6446 8.2704 3.56833 7.49539 3.71712 6.7477C3.86591 6.00001 4.23307 5.31324 4.77216 4.77424C5.31126 4.23525 5.99808 3.86825 6.74575 3.71964C7.49343 3.57103 8.26838 3.64749 8.9726 3.93937C9.67682 4.23124 10.2787 4.72541 10.702 5.35938C11.1254 5.99334 11.3513 6.73864 11.3511 7.50099C11.35 8.5228 10.9436 9.50244 10.2211 10.2249C9.49848 10.9473 8.51879 11.3535 7.49704 11.3543ZM7.49704 4.9298C6.98854 4.9298 6.49146 5.0806 6.06866 5.36312C5.64586 5.64565 5.31633 6.04722 5.12174 6.51704C4.92714 6.98686 4.87623 7.50383 4.97543 8.00259C5.07464 8.50135 5.3195 8.95949 5.67906 9.31907C6.03862 9.67866 6.49673 9.92354 6.99546 10.0227C7.49418 10.122 8.01113 10.071 8.48092 9.87643C8.95071 9.68183 9.35225 9.35227 9.63475 8.92945C9.91726 8.50662 10.068 8.00952 10.068 7.50099C10.0673 6.81931 9.79614 6.16577 9.31415 5.68375C8.83217 5.20173 8.17867 4.93059 7.49704 4.9298Z" fill="#004B85"></path>
                        <path d="M11.0848 15.0005H3.91618C2.87804 14.9994 1.88269 14.5866 1.14852 13.8526C0.41435 13.1186 0.00130532 12.1233 0 11.085V3.91593C0.00130532 2.87772 0.41435 1.88242 1.14852 1.14839C1.88269 0.414352 2.87804 0.0015322 3.91618 0.000488281H11.0848C12.1228 0.00179317 13.1179 0.414729 13.8518 1.14874C14.5858 1.88274 14.9987 2.87789 15 3.91593V11.085C14.9987 12.1231 14.5858 13.1182 13.8518 13.8522C13.1179 14.5862 12.1228 14.9992 11.0848 15.0005ZM3.91618 1.28361C3.21816 1.28413 2.54886 1.5616 2.05519 2.05511C1.56152 2.54863 1.28382 3.21786 1.28304 3.91593V11.085C1.28382 11.7832 1.56149 12.4525 2.05513 12.9462C2.54877 13.4399 3.21807 13.7176 3.91618 13.7184H11.0848C11.7828 13.7176 12.452 13.4399 12.9455 12.9462C13.439 12.4525 13.7164 11.7831 13.717 11.085V3.91593C13.7162 3.21803 13.4386 2.54895 12.9452 2.05546C12.4517 1.56198 11.7827 1.28439 11.0848 1.28361H3.91618Z" fill="#004B85"></path>
                        <path d="M11.4586 4.35975C11.9477 4.35975 12.3442 3.96323 12.3442 3.47409C12.3442 2.98495 11.9477 2.58843 11.4586 2.58843C10.9695 2.58843 10.573 2.98495 10.573 3.47409C10.573 3.96323 10.9695 4.35975 11.4586 4.35975Z" fill="#004B85"></path>
                      </svg>
                    </i>
                  </Link>
                  <Link className="social_list_item" href="https://www.linkedin.com" target="_blank">
                    <i>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.248341 5.11578H3.25065V15.0005H0.248341V5.11578Z" fill="#004B85"></path>
                        <path d="M5.23605 8.17899C5.23605 7.13787 5.23605 5.87788 5.21234 4.96592H8.12176C8.18983 5.44557 8.22876 5.92889 8.23837 6.41323C8.67419 5.56535 9.61304 4.6731 11.8159 4.6731C14.2183 4.6731 15 6.40436 15 9.51588V14.9965H11.9977V9.85898C11.9977 8.35152 11.3929 7.28675 10.4165 7.28675C8.72459 7.28675 8.24232 8.36434 8.24232 10.6014V14.9965H5.24001L5.23605 8.17899Z" fill="#004B85"></path>
                        <path d="M2.41907 3.35823C3.31159 2.98941 3.73542 1.9686 3.36573 1.0782C2.99603 0.187789 1.9728 -0.235038 1.08028 0.13378C0.187756 0.502598 -0.236089 1.5234 0.133607 2.4138C0.503303 3.30421 1.52654 3.72704 2.41907 3.35823Z" fill="#004B85"></path>
                      </svg>
                    </i>
                  </Link>
                  <Link className="social_list_item" href="https://twitter.com/" target="_blank">
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M0.0365715 0L5.8279 7.72183L0 14H1.31163L6.41395 8.50337L10.5365 14H15L8.88282 5.84383L14.3074 0H12.9958L8.29678 5.06229L4.50009 0H0.0365715ZM1.96542 0.963435H4.01597L13.0709 13.0364H11.0203L1.96542 0.963435Z" fill="#004B85"></path>
                      </svg>
                    </i>
                  </Link>
                  <Link className="social_list_item" href="https://www.youtube.com/" target="_blank">
                    <i>
                      <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6415 0.000488281H3.3578C2.91679 0.000488272 2.48009 0.0813252 2.07266 0.238373C1.66522 0.395421 1.29503 0.625608 0.98322 0.915788C0.67141 1.20597 0.42409 1.55046 0.255388 1.92958C0.0866857 2.3087 -9.53581e-05 2.71503 7.86312e-08 3.12537V6.87562C-9.53581e-05 7.28595 0.0866857 7.69228 0.255388 8.0714C0.42409 8.45053 0.67141 8.79502 0.98322 9.0852C1.29503 9.37538 1.66522 9.60556 2.07266 9.76261C2.48009 9.91966 2.91679 10.0005 3.3578 10.0005H11.6415C12.5322 10.0005 13.3865 9.67126 14.0163 9.08524C14.6462 8.49921 15 7.70439 15 6.87562V3.12537C15 2.2966 14.6462 1.50177 14.0163 0.915747C13.3865 0.32972 12.5322 0.000488281 11.6415 0.000488281ZM5.92429 7.29141V2.71025L9.99346 5.00083L5.92429 7.29141Z" fill="#004B85"></path>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
              {/* <div className="flex flex-[.5] flex-col justify-between md:items-center items-start md:p-7 px-0 py-7 pr-0 gap-y-4"> */}

              {/* <div className="grid grid-cols-3 flex-[.5] content-center md:p-7 px-0 py-7 pr-0 gap-y-4 place-content-center place-items-center"> */}
              <div className="flex-[.5] flex flex-col items-center md:p-7 max-md:px-2 py-7 pr-0 gap-y-4 place-content-center place-items-center">
                <div>
                  <h3>AFFLIATES</h3>
                </div>
                <div className="grid grid-cols-5 content-center place-items-center gap-x-4 gap-y-6">
                  <Link href="https://ekedp.com" target="_blank">
                    <img src="/pages/ekedc.jpg" alt="EKEDC LOGO" className="hover:scale-110 w-[1500px]" />
                  </Link>

                  <Link href="https://www.ikejaelectric.com" target="_blank">
                    <img src="/pages/ikeja-electric.png" alt="IKEJA ELECTRIC LOGO" className="hover:scale-110 w-[1500px]" />
                  </Link>
                  <Link href="https://ibedc.com" target="_blank">
                    <img src="/pages/ibedc.png" alt="IBEDC LOGO" className="hover:scale-110 w-[1500px]" />
                  </Link>
                  <Link href="https://kedcoerp.com" target="_blank">
                    <img src="/pages/kedco.jpg" alt="KEDCO LOGO" className="hover:scale-110 w-[1500px] order-2" />
                  </Link>
                  <Link href="https://nemsa.gov.ng" target="_blank">
                    <img src="/pages/nemsa.jpeg" alt="NEMSA LOGO" className="hover:scale-110 w-[1500px]" />
                  </Link>
                </div>
                {/* <h3>EEDC, EKEDC</h3> */}
                {/* <Link href="https://www.sabancengizvakfi.org/" target="_blank">
                  <h1>NEMSA</h1>
                </Link> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="flex items-end text-white md:mt-4 bg-primary py-3"> */}
      <div className="flex items-end text-white bg-primary py-3">
        <div className="container">
          <div className="flex justify-between md:px-24 sm:flex-row flex-col px-4">
            <p className="font-bold xxs:max-md:text-center">
              © {new Date().getFullYear()} FaithLink Systems. All rights reserved.
            </p>
            <div className="flex gap-x-10">
              <Link href="/privacy-notice">PRIVACY NOTICE</Link>
              {/* <Link href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/11623" target="_blank">
                INFORMATION SOCIETY SERVICES
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer