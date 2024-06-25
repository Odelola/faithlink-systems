import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { PrimaryButton, SecondaryButton } from '../../Button';
import { getRoute } from "../../utils"
import { useRef } from 'react';


export default function HomeCarousel() {
    // const pagination = {
    //     clickable: true,

    // }
    const h1Ref = useRef();
    const about_gallery_item = "grid gap-[20px]"
    console.log(h1Ref)
    const _animateH1 = () => {
        h1Ref.current.style.display = "none"
    }
    const carouselText = [
        {
            title: "WE ARE FAITHLINK SYSTEMS",
            text: "Specializing in Telcoms, Renewable Energy, Power Sector for 18 years, FaithLink is guaranteed to get large engineering projects done. At Faithlink Systems, we pride ourselves on being a team specialists operating on these services professionally",
            linkText: "ABOUT US"
        },
        {
            title: "TELECOMMUNICATIONS SECTOR",
            text: "FAITHLINK Telecommunications Sector  is primarily focused on the construction, installation, management and maintenance of High Tension Cable and Radio Frequency Towers. We run RF drive tets on networks, pre-optimization and post-optimization analysis of its results",
            linkText: "TELECOMS SECTOR"
        },
        {
            title: "GENERATION & TRANSMISSION",
            text: "Our Power Sector Services include transmission over 330KV and 132KV lines, embedded and captive power, Step Up and Step Down Transformer soil test and technical site survey, Energy Management and Energy Optimization.",
            linkText: "POWER SECTOR"
        },
        {
            title: "INFRASTRUCTURE DEVELOPMENT",
            text: "We deal with Road Construction And Maintenance and Building construction and maintenance. Our Infrastructure development strategy involves the planning, design, and construction of essential facilities and systems that support economic growth and quality of life.",
            linkText: "INFRA DEVELOPMENT"
        },
    ]
    function HomeCarouselText({ textItem, index=3 }) {
        return (
            <article className="px-8 py-20 w-[60%] absolute left-0 bottom-0 select-none text-white max-md:w-full max-sm:py-6 font-termina" data-aos="fade-up" data-duration=".9s">
                <h1 className="text-[2em] mb-4 max-md:text-[1.4em] max-sm:text-[1.1em]" data-aos="fade-up" data-duration=".9s" data-aos-delay={`${index*5000}`} ref={h1Ref}>
                    {textItem.title}
                </h1>
                <p className='my-6 max-sm:my-2 max-sm:text-[9px]'>
                    {textItem.text}
                </p>
                <PrimaryButton href={getRoute[textItem.linkText.toLowerCase()]} buttonText={textItem.linkText} />
            </article>
        )
    }

    const swiperRef = useRef();
    return (
        <>
            <section className='h-[calc(100vh-90px)] max-h-[800px] pb-0 mb-20 w-full'>
                <div className="container h-full max-md:px-0">
                    <Swiper pagination={true}  modules={[Navigation, Autoplay, EffectFade, Pagination]} loop={true} speed={5000} autoplay={{ delay: 1000 }} effect='fade' grabCursor className="cursor-grab" onSwiper={(swiper) => { swiperRef.current = swiper; }} onChange={() => _animateH1()} >
                        <SwiperSlide>
                            <video
                                playsInline="playsinline" muted="true" loop="loop" autoPlay="autoPlay" disablePictureInPicture poster='https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                                <source type="video/mp4" src="/solar-panel-video.mp4" 
                                controlsList="nodownload" />
                            </video>
                            <HomeCarouselText textItem={carouselText[0]} index={1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <video
                                playsInline="playsinline" muted="true" loop="loop" autoPlay="autoPlay" disablePictureInPicture poster='/pages/banner-1.jpg'>
                                <source type="video/mp4" src="/telecommunications-video.mp4" 
                                controlsList="nodownload" />
                            </video> */}
                            <img src="/pages/_telecommunications-sector_.jpg" alt="Banner Image 1 - Telecommunications Sector" />
                            <HomeCarouselText textItem={carouselText[1]} index={2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <video
                                playsInline="playsinline" muted="true" loop="loop" autoPlay="autoPlay" disablePictureInPicture poster='https://images.unsplash.com/photo-1554050546-c125a25df013?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                                <source type="video/mp4" src="/generation-video.mp4" 
                                controlsList="nodownload"  />
                            </video> */}
                            <img src="/pages/_generation-and-transmission_.jpg" alt="Banner Image 2 - Generation and Transmission" />
                            <HomeCarouselText textItem={carouselText[2]} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/pages/_infra development_.jpg" alt="Banner Image 3 - GENERATION AND TRANSMISSION" />
                            <HomeCarouselText textItem={carouselText[3]} />
                        </SwiperSlide>
                        <nav className="flex items-center absolute bottom-20 right-20 z-10">
                            <a className="flex justify-center items-center min-w-[50px] min-h-[50px] -rotate-180 hover:bg-primary hover:border-primary border border-[rgba(2555,255,255,.5)] border-l-0" onClick={() => swiperRef.current.slidePrev()} tabIndex="0" role="button" aria-label="Previous slide">
                                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill="white"></path>
                                </svg>
                            </a>
                            <a className="flex justify-center items-center min-w-[50px] min-h-[50px] hover:bg-primary hover:border-primary border border-[rgba(2555,255,255,.5)] border-l-0" onClick={() => swiperRef.current.slideNext()} tabIndex="0" role="button" aria-label="Next slide">
                                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill="white"></path>
                                </svg>
                            </a>
                        </nav>
                    </Swiper>
                </div>
            </section>
            <section className="hidden">
                <div className="container">
                    <article className='grid grid-cols-[2.2fr_1fr] gap-[45px] pr-[200px] pb-[180px] pl-8 max-md:p-0 max-md:grid-cols-1'>
                        <aside className='max-md:flex max-md:flex-col-reverse'>
                            <blockquote className='text-justify mb-8 max-md:m-0'>At Faithlink Systems, we pride ourselves on being a team of industry specialists
                                operating within a privately owned company, effectively serving a global market
                                while maintaining a local presence. We understand the unique needs of your
                                projects, and that&apos;s why we tailor our business and supply solutions to precisely
                                meet those requirements. </blockquote>
                            <div className="grid grid-cols-5 gap-5 max-md:gap-2 w-auto relative max-md:pb-[20%]">
                                <div className={`${about_gallery_item} place-items-center`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-7.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>

                                </div>
                                <div className={`${about_gallery_item}`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-1.jpg" width="186" height="188" alt="" loading="lazy" />
                                        {/* <img src="/pages/elect-image-1.jpg72.png" width="186" height="188" alt="" loading="lazy" /> */}
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-2.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item} relative top-[25%]`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-3.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-1.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item}`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-4.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-5.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item} place-items-end`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="/pages/elect-image-6.jpg" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                            </div>
                        </aside>
                        <aside className='text-justify'>
                            <p>Since 2006, Faithlink Systems continues to  be a leading Power Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects. </p>
                            <p>
                                Specializing in Power, Telecoms and Infrastructure Development, Faithlink is capable of delivering exceptional services delivery to customers that is infused with high level of professionalism, safety and operational efficiency.
                            </p>
                            <div className="mt-7">
                                <SecondaryButton href="/corporate/about-us" />
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
        </>
    );
}
