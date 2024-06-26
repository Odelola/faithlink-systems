import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, alt, pageName, pageText = "", leadingRoutes, }) {
  return (
    <article className='relative h-[400px] max-sm:h-[200px] max-md:h-[300px] max-slg:h-[350px] w-full '>
      <div className="container h-full max-md:p-0">
        <picture className={`flex h-full relative`}>
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