import Link from "next/link"

function OtherDetails() {
    return (
        <section className="pt-20">
            <div className="container grid grid-cols-3 gap-16">
                <div className="">
                    <picture className="w-full relative pt-[300px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <img src="https://cengizholding.com.tr/content/images/uploads/cevre-big,93_big,186_big,1460_big.png" width="670" height="477" alt="SAFE WORKPLACE" loading="lazy" />
                    </picture>
                    <article className="pt-8 pl-8">
                        <h2 className="text-textGray aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            SAFE WORKPLACE
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="aos-init aos-animate">
                            Our top priority is the health and safety of our colleagues in all facilities and offices in our group companies and subsidiaries.
                        </p>
                        <div className="cta aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            <Link href="/en/sustainability/safe-workplace" className="">DETAIL</Link>
                        </div>
                    </article>
                </div>
                <div className="col-span-2 relative">
                    <picture class="pt-[65%] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <img src="https://cengizholding.com.tr/content/images/uploads/SON,1466_big.jpg" width="1130" height="628" alt="R&amp;D AND TECHNOLOGY" loading="lazy" />
                    </picture>
                    <article class="w-[60%] p-12 absolute left-0 bottom-0 text-white">
                        <h2 class="title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            R&amp;D AND TECHNOLOGY
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" class="aos-init aos-animate">
                            We optimize resource use by supporting the latest technologies with R&amp;D projects for continuous and sustainable development.
                        </p>
                        <div class="cta aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            <a href="/en/sustainability/r-d-and-technology" class="button">DETAIL</a>
                        </div>
                    </article>
                </div>
            </div>

        </section>
    )
}

export default OtherDetails