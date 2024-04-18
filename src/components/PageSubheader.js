import Breadcrumb from "./Breadcrumb"

function PageSubheader({ imgUrl, pageName, leadingRoutes }) {
  return (
    <section className='relative h-[400px]'>
    <div className="container h-full">
      <picture className="flex h-full">
        <img src={imgUrl} alt="Contact Image" />
      </picture>
      <div className="absolute h-full top-0 left-0 w-full">
        <div className="container container-lg relative h-full">
          <div className="absolute top-1/2 text-white max-w-[65%] -translate-y-1/2">
            <h1 className='text-[50px]'>
              {pageName.toUpperCase()}
            </h1>
          </div>
          <Breadcrumb leadingRoutes={leadingRoutes} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default PageSubheader