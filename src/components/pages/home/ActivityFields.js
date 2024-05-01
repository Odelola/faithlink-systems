import HomeImageHeading from "./HomeImageHeading"
import { PrimaryButton } from '../../Button';
import { getRoute } from "../../utils";

function ActivityFields() {

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

  function ActivityCarousel({ data }) {
    return (
      data.map(({ text, title, image }, index) => {
        return (
          <div className="md:basis-[23%] max-md:basis-[70%]  max-md:flex-shrink-0 group transition-[transform]" key={index} role="group" aria-label={`${index + 1} / 4`}>
            <div className="card-item aos-init aos-animate relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <figure className="w-full h-full relative">
                <img src={image} width="430" height="700" className="rounded-md" loading="lazy" />
              </figure>
              <article className="absolute left-0 w-full flex flex-col justify-end max-md:items-center p-3 text-white bottom-0 transition-[translate] duration-300 max-md:p-2 ">
                <div className="translate-y-[calc(100%-35px)] group-hover:translate-y-[0] max-md:translate-y-[calc(100%-40px)]">
                  <h2 className="text-[20px] max-md:text-[17px] mb-0 text-nowrap">
                    {title}
                  </h2>

                  <p className="group-hover:hidden max-md:text-[8px]">{text}</p>
                  {/* <p className="mb-4 max-md:text-[10px]"></p> */}
                  <p>

                    {text}
                    {text}
                    {text}
                  </p>
                  <div>
                    <PrimaryButton href={getRoute[title.toLowerCase()]} buttonText="VIEW DETAIL" />
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
    <section>
      <div className="container">
        <HomeImageHeading headingTitle="service offering" headingText="These are the core business competence FaithLink systems operates in." />
        <article className="max-md:overflow-x-scroll flex">
          {/* <div className="flex justify-between mt-8 gap-x-6 max-md:overflow-x-scroll max-md:cursor-grab select-none max-md:h-[calc(100vh-25%)]"> */}
          <div className="flex justify-between mt-8 gap-x-6 max-md:overflow-x-scroll max-md:cursor-grab select-none max-md:h-[calc(100vh-25%)]">
            <ActivityCarousel data={activityData} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default ActivityFields