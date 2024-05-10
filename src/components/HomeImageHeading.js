function HomeImageHeading({ image = '/brandLogoHalf.png', headingTitle, headingText }) {
  return (
    <div className="flex gap-x-3">
      <div className="max-md:w-[44px] max-md:h-[44px] flex-shrink-0">
        <img src={image} className="w-11 h-11 max-md:w-full max-md:h-full aos-init aos-animate" alt="Brand Logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"/>
      </div>
      <div>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-textGray aos-init aos-animate mb-0">{headingTitle.toUpperCase()}</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="aos-init aos-animate">{headingText}</p>
      </div>
    </div>
  )
}

export default HomeImageHeading