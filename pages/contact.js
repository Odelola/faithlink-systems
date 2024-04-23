import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../src/components/Breadcrumb'
import PageSubheader from '../src/components/PageSubheader'


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
        <section className='pt-24 pb-16'>
          <div className="container container-lg">
            <div>
              <h3 className="contact-title">CONTACT FORM</h3>
            </div>
            <div className="flex justify-between md:flex-row flex-col gap-y-3">
              <form action="#0" className='md:w-[calc(100%-300px)]'>
                <div className="contact-form-item">
                  <input type="text" placeholder="SUBJECT" id="Subject" name="Subject" required="required" className='contact-input' />
                </div>
                <div className="contact-form-item flex justify-between xs:max-sm:flex-col xs:max-sm:h-24">
                  <input type="text" placeholder="YOUR NAME" id="Name" name="Name" required="required" className='contact-input basis-[45%]' />
                  <input type="text" placeholder="YOUR EMAIL ADDRESS" id="Email" name="Email" required="required" className='contact-input basis-[45%]' />
                </div>
                <div className="contact-form-item h-[150px]">
                  <textarea placeholder="YOUR MESSAGE" id="Message" name="Message" required="required" className='contact-input'></textarea>
                </div>
                <div className="form-item my-5">
                  <label className="cb-container">
                  </label>
                    <div className='text-[12px]'>
                      Your personal data is processed in line with the <Link href="/privacy-notice" className='text-[16px] font-semibold'>Privacy Notice.</Link>
                    <br />

                    By clicking on Send, you confirm that you have read and accept the <Link href="/privacy-notice" className='text-[16px] font-semibold'>Privacy Notice</Link> and <Link href="/cookie-policy" className='text-[16px] font-semibold'>Cookie Policy</Link>
                    </div>
                    <input type="checkbox" id="Kvkk" name="Kvkk" className="kvkk" required="required" />
                    <span className="checkmark"></span>
                </div>
                <div className='w-[250px]'>
                  <button type="submit" className='contact-button'>SEND</button>
                </div>
              </form>
              <div className='md:w-[250px] w-full'>
                <h2 className='text-[20px] leading-8'>Selecting the right subject is essential to have your message delivered to the right person. Please double-check before sending.</h2>
              </div>
            </div>
          </div>
        </section>
      </main>



    </div>
  )
}

export default Contact