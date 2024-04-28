import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link'
import { PrimaryButton, SecondaryButton } from '../../Button';
import { getRoute } from "../../utils"




export default function HomeCarousel() {
    const about_gallery_item = "grid gap-[20px]"
    const carouselText = [
        {
            title: "WE KEEP INVESTING IN FAITH LINK",
            text: "Wind power plants (WPPs), resembling a wind rose with their aesthetic appearance, are an environmentally friendly and sustainable option as they produce energy from renewable resources but can be quite challenging to build."
        },
        {
            title: "GREAT POWER TRANSFORMATION",
            text: "We believe in the power of eenergy for all and renewable energy for all household. We believe in the power of eenergy for all and renewable energy for all household. We believe in the power of eenergy for all and renewable energy for all household."
        },
        {
            title: "GREAT POWER TRANSFORMATION",
            text: "We believe in the power of eenergy for all and renewable energy for all household. We believe in the power of eenergy for all and renewable energy for all household. We believe in the power of eenergy for all and renewable energy for all household."
        },
    ]
    function HomeCarouselText({ textItem }) {
        return (
            <article className="px-8 py-20 w-[60%] absolute left-0 bottom-0 select-none text-white max-md:w-full max-sm:py-6 ">
                <h1 className="text-[2em] mb-4 max-md:text-[1em] max-sm:text-[1.4em]" data-swiper-animation="animate__fadeInLeft" data-duration=".9s" data-delay=".3s">
                    {textItem.title}
                </h1>
                <p className='my-6 max-sm:my-2'>
                    {textItem.text}
                </p>
                <PrimaryButton href='/' />
            </article>
        )
    }

    return (
        <>
            <section className='h-[calc(100vh-90px)] max-h-[800px] pb-0 mb-20 w-full'>
                <div className="container h-full max-md:px-0">
                    <Swiper navigation={true} modules={[Navigation]} loop autoplay={{ delay: 3000}} className="cursor-grab">
                        <SwiperSlide>
                            <video playsInline="playsinline" muted="muted" loop="loop" autoPlay="autoPlay" className=''>
                                <source type="video/mp4" src="/video.mp4" />
                            </video>
                            <HomeCarouselText textItem={carouselText[0]} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cengizholding.com.tr/content/images/uploads/3,1350_big.jpg" alt="" />
                            <HomeCarouselText textItem={carouselText[1]} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"https://media.istockphoto.com/id/121084625/photo/powerlines-at-sunset.jpg?s=2048x2048&w=is&k=20&c=NGVdGNCDE8UcLe4ZVUt35Zu6P8VkMDJRHkNbjx-N5Nw="} alt="" />
                            <HomeCarouselText textItem={carouselText[2]} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section>
                <div className="container">
                    <article className='grid grid-cols-[2.2fr_1fr] gap-[45px] pr-[200px] pb-[180px] pl-8 max-md:p-0 max-md:grid-cols-1'>
                        <aside className='max-md:flex max-md:flex-col-reverse'>
                            <blockquote className='ml-20 mb-8 max-md:m-0'>At Faithlink Systems, we pride ourselves on being a team of industry specialists
                                operating within a privately owned company, effectively serving a global market
                                while maintaining a local presence. We understand the unique needs of your
                                projects, and that&apos;s why we tailor our business and supply solutions to precisely
                                meet those requirements. </blockquote>
                            <div className="grid grid-cols-5 gap-5 w-auto relative max-md:pb-[20%]">
                                <div className={`${about_gallery_item} place-items-center`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/1.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>

                                </div>
                                <div className={`${about_gallery_item}`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/3.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/6.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item} relative top-[25%]`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/5.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/8.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item}`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/4.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/7.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                                <div className={`${about_gallery_item} place-items-end`}>
                                    <figure data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src="https://cengizholding.com.tr/Content/images/small/2.png" width="186" height="188" alt="" loading="lazy" />
                                    </figure>
                                </div>
                            </div>
                        </aside>
                        <aside className='text-justify'>
                            <p>Since 2006, Faithlink Systems continues to  be a leading Power Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects. </p>
                            <p>
                                Specializing in Power, Telecoms and Infrastructure Development, Faithlink is capable of delivering exceptional services delivery to customers that is infused with high level of professionalism, safety and operational efficiency.
                            </p>
                            <p>
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here
                                more content to add here


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
