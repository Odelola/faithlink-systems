import HomeImageHeading from "../../HomeImageHeading"
import { PrimaryButton } from '../../Button';
import { getRoute } from "../../utils";

function ActivityFields({ data, darkText = false, headingTitle, headingText }) {

  const activityData = [
    {
      image: "/pages/generation.jpg",
      title: "POWER SECTOR",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "/pages/transmission.jpg",
      title: "ENGINEERING SERVICES",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "/pages/distribution.jpg",
      title: "PAAS/EAAS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "/pages/automation.jpg",
      title: "FIBRE OPTICS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
  ]

  function ActivityCarousel({ carouseldata }) {
    return (
      carouseldata.map(({ text, introText, title, image }, index) => {
        return (
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={300 * index} className="aos-init aos-animate md:basis-[23%] max-md:basis-[70%]  max-md:flex-shrink-0 group ease-in" key={index} role="group" aria-label={`${index + 1} / 4`}>
            <div className="card-item aos-init aos-animate relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <figure className="w-full h-full relative">
                <img src={image} className="rounded-md h-[400px]" loading="lazy" />
              </figure>
              <article className="absolute left-0 w-full flex flex-col justify-end max-md:items-center p-3 text-white bottom-0 transition-[translate] duration-300 max-md:p-2  bg-gradient-to-t from-[rgb(0,0,0)] to-[rgba(255,255,255,.8)">
                <div className="translate-y-[calc(100%-35px)] group-hover:translate-y-[0] max-md:translate-y-[calc(100%-40px)]">
                  {/* <h2 className="text-[20px] max-md:text-[17px] mb-0 text-nowrap"> */}
                  <h2 className="text-[16px] max-md:text-[13px] mb-0 text-nowrap font-semibold">
                    {title}
                  </h2>

                  <p className="group-hover:hidden text-[10px] max-md:text-[8px] mb-0">{introText}</p>
                  {/* <p className="mb-4 max-md:text-[10px]"></p> */}
                  {/* <p className="hidden group-hover:block  text-[10px] max-md:text-[8px]">

{text}
</p> */}
                  <div>
                    <p className="text-[10px] max-md:text-[8px] mb-0">{introText}</p>
                    <ul className="ml-3 mb-3 list-disc text-[11px]">
                      {text.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                  </div>
                  <div>
                    {/* <PrimaryButton href={getRoute[title.toLowerCase()] ?? "/"} buttonText="VIEW DETAIL" /> */}
                  </div>
                </div>
              </article>
            </div>
          </div>
        )
      })

    )
  }

  return (
    <section className={`${darkText && "text-textGray"}`}>
      {/* <div className="container"> */}
      <div className="">
        <HomeImageHeading headingTitle={headingTitle ?? "service offering"} headingText={headingText ?? "Take a look at the service offerings offered by Faithlink in the power sector"} />
        <article className="max-md:overflow-x-scroll flex">
          {/* <div className="flex justify-between mt-8 gap-x-6 max-md:overflow-x-scroll max-md:cursor-grab select-none max-md:h-[calc(100vh-25%)]"> */}
          <div className="flex justify-between mt-4 gap-x-6 max-md:overflow-x-scroll max-md:cursor-grab select-none max-md:h-[calc(100vh-25%)] ]">
            <ActivityCarousel carouseldata={data ?? activityData} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default ActivityFields