import Link from "next/link"
import { getRoute } from "../../utils"
import { PrimaryButton, SecondaryButton } from "../../Button"


function OtherDetails() {
        return (
            <section className="pt-20">
                <div className="container grid grid-cols-3 max-md:grid-cols-1 gap-x-16 max-md:gap-x-0 max-md:gap-y-16">
                    <div className="max-md:order-1">
                        <picture className="w-full relative pt-[300px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <img src="/pages/safe-workplace.jpg" width="670" height="477" alt="SAFE WORKPLACE" loading="lazy" />
                        </picture>
                        <article className="pt-8 pl-8 max-md:pl-0 max-md:pt-2">
                            <h2 className="text-textGray aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                SAFE WORKPLACE
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="aos-init aos-animate">
                                Our top priority is the health and safety of our colleagues in all facilities and offices in our group companies and subsidiaries.
                            </p>
                            <div className="cta aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <SecondaryButton href="/safety-mission/safe-workplace" buttonText="DETAIL" />
                            </div>
                        </article>
                    </div>
                    <div className="col-span-2 relative ">
                        <picture className="pt-[65%] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            {/* <img src="https://cengizholding.com.tr/content/images/uploads/SON,1466_big.jpg" width="1130" height="628" alt="HSE POLICY" loading="lazy" /> */}
                            <img src="pages/hse-policy.jpg" width="1130" height="628" alt="HSE POLICY" loading="lazy" />
                        </picture>
                        <article className="w-[60%] p-12 absolute left-0 bottom-0 max-md:relative max-md:w-full text-white max-md:text-inherit max-md:px-0 max-md:py-2">
                            <h2 className="title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                HSE POLICY
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="aos-init aos-animate">
                                We optimize resource use by supporting the latest technologies with R&amp;D projects for continuous and sustainable development.
                            </p>
                            <div className="cta aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <PrimaryButton href="/safety-mission/safe-workplace" buttonText="DETAIL" />
                            </div>
                        </article>
                    </div>
                </div>

            </section>
        )
    }

export default OtherDetails