import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, alt, pageName, pageText = "", leadingRoutes, greenOverlay = false }) {
  const greenOverlayStyles = "after:content-[''] after:bg-primary after:opacity-80 after:absolute after:left-0 after:top-0 after:w-full after:h-full"
  return (
    <article className='relative h-[400px] xs:max-md:h-[200px] md:max-lg:h-[300px] w-full '>
      <div className="container h-full xs:max-md:p-0">
        <picture className={`flex h-full relative ${greenOverlay && greenOverlayStyles}`}>
          <img src={imgUrl} alt={alt} className="w-full relative" />
        </picture>
        <div className="absolute h-full top-0 left-0 w-full">
          <div className="container container-lg relative h-full">
            <div className="absolute top-1/2 text-white max-w-[65%] -translate-y-1/2 px-5 lg:px-0">
              <h1 data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300" class="aos-init aos-animate" className='lg:text-[50px] mb-0'>
                {pageName.toUpperCase()}
              </h1>
              {!(pageText == "") && <p data-aos-duration="1000" data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">{pageText}</p>}
            </div>
            <Breadcrumb leadingRoutes={leadingRoutes} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default PageSubheader