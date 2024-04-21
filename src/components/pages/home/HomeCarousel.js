import { useState } from 'react';
// import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link'




export default function HomeCarousel() {
    const about_gallery_item = "grid gap-[20px]"
    const carouselText = [
        {
            title: "WE KEEEP INVESTING IN FAITH LINK",
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

            <article className="px-8 py-20 w-[60%] absolute left-0 bottom-0 select-none text-white justify-end">
                <h1 className="text-[2em] mb-4" data-swiper-animation="animate__fadeInLeft" data-duration=".9s" data-delay=".3s">
                    {textItem.title}
                </h1>
                <p>
                    {textItem.text}
                </p>
                <Link href="/" target="_blank" className="button">
                    SHOW MORE
                </Link>
            </article>
        )
    }

    return (
        <>
            <section className='h-[calc(100vh-90px)] max-h-[800px] pb-0 mb-20'>
                <div className="container h-full">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <video playsInline="playsinline" muted="muted" loop="loop" autoplay="autoplay">
                                <source type="video/mp4" src="/video.mp4" />
                            </video>
                            <HomeCarouselText textItem={carouselText[0]} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://cengizholding.com.tr/content/images/uploads/3,1350_big.jpg" alt="" />
                            <HomeCarouselText textItem={carouselText[1]} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"https://media.istockphoto.com/id/121084625/photo/powerlines-at-sunset.jpg?s=2048x2048&w=is&k=20&c=NGVdGNCDE8UcLe4ZVUt35Zu6P8VkMDJRHkNbjx-N5Nw="}alt="" />
                            <HomeCarouselText textItem={carouselText[2]} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section>
                <div className="container">
                    <article className='grid grid-cols-[2.2fr_1fr] gap-[45px] pr-[200px] pb-[180px] pl-8'>
                        <aside>
                            <blockquote className='ml-20 mb-8'>Cengiz Holding, one of Türkiye's largest industrial companies, is a pioneer in all its activity fields thanks to nonstop R&D and technology investments. We are aware of our responsibility towards the world and the environment. The production activities in all our plants are carried out with sustainable environmental awareness.</blockquote>
                            <div className="grid grid-cols-5 gap-5 w-auto relative">
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
                        <aside className=''>
                            <p>As a family of 43K people, Cengiz Holding continues to invest in energy, mining, construction, tourism, and service industries and plays a key role in closing Türkiye's current account deficit through sustainable production.

                                Cengiz Holding has undertaken several important projects and continues to break new ground both in Türkiye and around the world with its group companies Eti Bakır, Eti Alüminyum, Cengiz Enerji, Cengiz İnşaat, Ahen Madencilik, Cengiz Turizm and its subsidiaries Kalehan Enerji, CK Enerji, and Cenal Elektrik. Cengiz Holding is the investor and operator of Istanbul Airport, Türkiye's largest single-point private sector investment, and the constructor of Türkiye's first and Europe's largest hybrid power plant in Bingöl, and at the same time the only company in Türkiye with plants capable of producing copper and aluminum from mine to end-product. The R&D activities conducted by the Cengiz Holding play a key role in the production of strategic products in Türkiye.</p>
                            <div className="mt-7">
                                <a href="#0">ABOUT FAITHLINK SYSTEMS</a>
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
        </>
    );
}
