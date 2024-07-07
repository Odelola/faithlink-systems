import Head from 'next/head'
import Link from 'next/link'
import PageSubheader from '../src/components/PageSubheader'
import { useFormik } from 'formik';
import { contactFormSchema } from '../src/schema/contact-schema';

function Contact() {

  const onSubmit = async (values, actions) => {
    console.log(values, "values");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };


  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm
  } = useFormik({
    initialValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit
  })

  console.log(errors)
  return (
    <div>
      <Head>
        <title>CONTACT - Faith Link Systems</title>
        <meta name="description" content="CONTACT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative'>
        <PageSubheader imgUrl="/pages/contact_us.jpg" alt="Contact Image" pageName="contact" leadingRoutes={["homepage"]} />
        <section className='pt-24'>
          <div className="container container-lg">
            <div className="grid grid-cols-[1fr_2fr] slg:gap-12 gap-36 max-slg:grid-cols-1 mt-12 max-md:mt-4 aos-init aos-animate" data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300">
              <form className='order-4' autoComplete='off' onSubmit={handleSubmit}>
                <h1 className="text-textGray aos-init aos-animate" data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300">CONTACT FORM</h1>
                <div className="contact-form-item">
                  <input type="text" placeholder="Subject" id="Subject" name="subject" value={values.subject}
                    className={`contact-input ${errors.subject && touched.subject ? "!border-red-600" : ""}`} onBlur={handleBlur} onChange={handleChange} />
                  {errors.subject && touched.subject && (<small className="text-red-600">{errors.subject}</small>)}

                </div>

                <div className="contact-form-item flex justify-between gap-x-4 max-md:flex-col max-md:gap-y-4">
                  <div className='basis-[50%]'>
                    <input type="text" placeholder="Your Name" id="Name" name="name" className={`contact-input ${errors.name && touched.name ? "!border-red-600" : ""}`} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name && (<small className="text-red-600">{errors.name}</small>)}
                  </div>
                  <div className='basis-[50%]'>
                    <input type="email" placeholder="Enter your email address" id="Email" name="email" className={`contact-input ${errors.email && touched.email ? "!border-red-600" : ""}`} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email && (<small className="text-red-600">{errors.email}</small>)}
                  </div>
                </div>

                <div className="contact-form-item">
                  <textarea placeholder="Type your message" id="Message" name="message" className={`contact-input !h-[150px] pt-4 ${errors.message && touched.message ? "!border-red-600" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.message} ></textarea>
                  {errors.message && touched.message && (<small className="text-red-600">{errors.message}</small>)}

                </div>

                {/* <div className="form-item">
                  <input type="checkbox" id="confirm" name="confirm" className="hidden" />
                  <label className="cb-container flex items-center gap-x-2" for="confirm">
                    <span className="relative border w-5 h-5 flex-shrink-0"></span>
                    <div className='text-[10px]'>
                      Your personal data is processed in line with the <Link href="/privacy-notice" className='text-[11px] font-semibold'>Privacy Notice.</Link>
                      <br />
                      By clicking on Send, you confirm that you have read and accept the <Link href="/privacy-policy" className='text-[11px] font-semibold'>Privacy Notice</Link> and <Link href="/cookie-policy" className='text-[11px] font-semibold'>Cookie Policy</Link>
                    </div>
                  </label>
                </div> */}
                <div className='w-[250px] mt-2'>
                  <button type="submit" disabled={isSubmitting} className='contact-button'>SEND</button>
                </div>
              </form>
              <div className='bg-[rgba(245,245,245,.91)]'>
                <div className='py-8 px-12 max-md:p-6'>
                  <h2 className='text-textGray text-[1em]'>CONTACT DETAILS</h2>
                  <div className='flex flex-col gap-y-12'>

                    <div>
                      <h3 className='text-primary'>HEAD OFFICE</h3>
                      <p className="mb-0">
                        29 Fatai Durusinmi Crescent off Ligali Ayorinde Victoria Island, Lagos, Nigeria
                      </p>
                      <a href="mailto:info@faithlinkltd.com" className='hover:underline text-primary'>info@faithlinkltd.com</a>
                    </div>
                    <div>
                      <h3 className='text-primary'>BRANCH OFFICES</h3>
                      <p className="">Kano Branch: 3, Mallam Jumbo Road Kano State</p>
                      <p className="">Benin Branch: 4, Atoe Close, GRA Benin, Edo State</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>



    </div>
  )
}

export default Contact