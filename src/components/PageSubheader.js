import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, alt, pageName, pageText = "", leadingRoutes, greenOverlay = false }) {
  // const greenOverlayStyles = "after:content-[''] after:bg-primary after:opacity-80 after:absolute after:left-0 after:top-0 after:w-full after:h-full"
  const greenOverlayStyles = "after:content-[''] after:bg-gradient-to-l after:-[rgb(53,82,63)] after:to-[rgb(14,113,68)]   after:to-[rgb(14,113,68)] after:to-[rgb(32,138,74)]  after:via-[rgb(14,113,68)]   after:via-[rgb(14,113,68)] after:via-[rgb(32,138,74)]                  after:from-[rgb(14,113,68)] after:from-[rgb(32,138,74)] after:via-[rgb(14,113,68)] after:opacity-90 after:absolute after:left-0 after:top-0 after:w-full after:h-full"
  // bg-gradient-to-t [rgb(0,0,0)] to-[rgba(255,255,255,.8)
  return (
    <article className='relative h-[400px] max-sm:h-[200px] max-md:h-[300px] max-slg:h-[350px] w-full '>
      <div className="container h-full max-md:p-0">
        <picture className={`flex h-full relative ${greenOverlay && greenOverlayStyles}`}>
          <img src={imgUrl} alt={alt} className="w-full relative" />
        </picture>
        <div className="absolute h-full top-0 left-0 w-full">
          <div className="container container-lg relative h-full">
            <div className="absolute top-1/2 text-white max-w-[65%] -translate-y-1/2 px-5 lg:px-0">
              <h1 data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300" className="aos-init aos-animate md:max-lg:text-[40px] lg:text-[50px] slg:max-sxl:ml-2 mb-0 font-termina">
                {pageName.toUpperCase()}
              </h1>
              {!(pageText == "") && <p data-aos-duration="1000" data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">{pageText}</p>}
            </div>
            <Breadcrumb leadingRoutes={leadingRoutes} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default PageSubheader