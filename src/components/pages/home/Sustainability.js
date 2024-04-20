import Link from "next/link"

function Sustainability() {
    function GenerateLinks({ links }) {
        return (
            links.map((link, index) => {
                return (
                    <li key={index} className={`py-2 px-4 aos-init aos-animate ${!(links.indexOf(link) == links.length - 1) && "border-r border-r-[rgba(255,255,255,.2)]" }`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <Link href="/sustainability/for-a-better-future" className="text-white tex-[16px] group hover:text-blueLinkColor flex gap-x-2 items-center">
                            <span className="link-item__span">
                                {link}
                            </span>
                            <svg className="fill-white group-hover:fill-blueLinkColor" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill=""></path>
                            </svg>
                        </Link>
                    </li>
                )
            })
        )
    }
    return (
        <section className="bg-[image:url(https://cengizholding.com.tr/Content/images/showcase/1.png)] h-[600px] bg-cover flex items-center">
            {/* <picture className="w-full h-full">
                <img src="https://cengizholding.com.tr/Content/images/showcase/1.png" width={1860} height={660} alt="Sustainability Image" loading="lazy" />
            </picture> */}
            <div class="container relative">
                <div class="px-8 w-1/2">
                    <article class="showcase__article">
                        <h2 class="text-[2.5em] text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            SUSTAINABILITY
                        </h2>
                        <p class="text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            We aim for sustainable development through efficient use of resources. We are committed to programming our future in all its economic, environmental, social and cultural aspects, with a particular focus on people.
                        </p>
                    </article>
                    <div class="flex mt-11">
                        <ul class="flex gap">
                            <GenerateLinks links={["FOR A BETTER FUTURE", "SAFE WORKPLACE", "REPORTS & POLICIES"]} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sustainability