function HomeImageHeading({ image = '/brandLogoHalf.png', headingTitle, headingText }) {
  return (
    <div className="flex gap-x-3">
      <div>
        <img src={image} className="w-11 h-11 max-md:w-20 max-md:h-14 aos-init aos-animate" alt="Brand Logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"/>
      </div>
      <div>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-textGray aos-init aos-animate">{headingTitle.toUpperCase()}</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="aos-init aos-animate">{headingText}</p>
      </div>
    </div>
  )
}

export default HomeImageHeading