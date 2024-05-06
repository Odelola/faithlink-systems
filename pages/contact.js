import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../src/components/Breadcrumb'
import PageSubheader from '../src/components/PageSubheader'
import { CompanyMap } from '../src/components/pages'


function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Faith Link Systems</title>
        <meta name="description" content="CONTACT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative'>
        <PageSubheader imgUrl="/pages/contact_us.jpg" alt="Contact Image" pageName="contact" leadingRoutes={["homepage"]} />
        <section className='pt-24'>
          <div className="container container-lg">
            <div>
              <h3 className="text-center text-textGray text-[22px]">CONTACT</h3>
            </div>

            <div className='hidden'>
              <div>
                <h2>Phone</h2>
                <a href="tel:+234 818 600 0000">+234 (818) 600 0000</a>
              </div>
              <div>
                <h2>Email</h2>
                <a href="mailto:info@faithlinkltd.com">info@faithlinkltd.com</a>
                </div>
                <div>

                <h2>Social Media</h2>
                <div>
                <Link href="https://www.facebook.com" target="_blank"> 
                      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.64662V0.000488281H5.68066C4.79851 0.000488281 3.95249 0.354403 3.32871 0.984375C2.70493 1.61435 2.35449 2.46876 2.35449 3.35968V5.78095H0V8.54247H2.35449V15.0005H5.22754V8.50006H7.37598L7.78613 5.75728H5.22754V3.80448C5.22806 3.49721 5.34928 3.20272 5.5646 2.98563C5.77992 2.76854 6.07173 2.64661 6.37598 2.64662H8Z" fill="#004B85"></path>
                      </svg>
                    </Link>
                </div>
                  </div>
            </div>


            {/* <div className="flex justify-between md:flex-col flex-col gap-y-3"> */}
            <div className="grid grid-cols-2 gap-10 mt-8 max-md:grid-cols-1 mt-12">
              <div className='md:w-[250px] w-full hidden'>
                {/* <h2 className='text-[20px] leading-8'>Selecting the right subject is essential to have your message delivered to the right person. Please double-check before sending.</h2> */}
                <h2 className='text-[20px] leading-8 hidden'>Selecting the right subject is essential to have your message delivered to the right person. Please double-check before sending.</h2>
              </div>
              <CompanyMap />
              {/* <form action="#0" className='md:w-[calc(100%-300px)]'> */}
              <form action="#0" className=''>
                <div className="contact-form-item">
                  <label for="Subject">Subject</label>
                  <input type="text" placeholder="Subject" id="Subject" name="Subject" required="required" className='contact-input' />
                </div>
                {/* <div className="contact-form-item flex justify-between xs:max-sm:flex-col xs:max-sm:h-24"> */}
                <div className="contact-form-item">
                  <label for="Name">Name</label>
                  <input type="text" placeholder="John Doe" id="Name" name="Name" required="required" className='contact-input basis-[45%]' />
                </div>
                <div className="contact-form-item">
                  <label for="Email">Email</label>
                  <input type="text" placeholder="Enter your email address" id="Email" name="Email" required="required" className='contact-input basis-[45%]' />
                </div>
                <div className="contact-form-item">
                  <label for="Message">Your Message</label>
                  <textarea placeholder="Type your message" id="Message" name="Message" required="required" className='contact-input !h-[150px] pt-4'></textarea>
                </div>
                <div className="form-item">
                  <input type="checkbox" id="confirm" name="confirm" className="hidden" required="required" />
                  <label className="cb-container flex gap-x-2" for="confirm">
                  <span className="relative border w-5 h-5 flex-shrink-0"></span>

                  <div className='text-[10px]'>
                    Your personal data is processed in line with the <Link href="/privacy-notice" className='text-[11px] font-semibold'>Privacy Notice.</Link>
                    <br />

                    By clicking on Send, you confirm that you have read and accept the <Link href="/privacy-policy" className='text-[11px] font-semibold'>Privacy Notice</Link> and <Link href="/cookie-policy" className='text-[11px] font-semibold'>Cookie Policy</Link>
                  </div>
                  </label>
                </div>
                <div className='w-[250px] mt-2'>
                  <button type="submit" className='contact-button'>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>



    </div>
  )
}

export default Contact