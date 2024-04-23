import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, alt, pageName, leadingRoutes }) {
  return (
    <article className='relative h-[400px] xs:max-md:h-[200px] md:max-lg:h-[300px] w-full '>
    <div className="container h-full xs:max-md:p-0">
      <picture className="flex h-full">
        <img src={imgUrl} alt={alt} className="w-full" />
      </picture>
      <div className="absolute h-full top-0 left-0 w-full">
        <div className="container container-lg relative h-full">
          <div className="absolute top-1/2 text-white max-w-[65%] -translate-y-1/2 px-5 lg:px-0">
            <h1 className='lg:text-[50px]'>
              {pageName.toUpperCase()}
            </h1>
          </div>
          <Breadcrumb leadingRoutes={leadingRoutes} />
        </div>
      </div>
    </div>
  </article>
  )
}

export default PageSubheader