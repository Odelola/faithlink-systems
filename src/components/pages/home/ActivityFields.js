import HomeImageHeading from "./HomeImageHeading"

function ActivityFields() {

  const activityData = [
    {
      image: "	https://cengizholding.com.tr/content/images/uploads/1,135_big,1374_big.png",
      title: "INDUSTRY",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "https://cengizholding.com.tr/content/images/uploads/enerji,137_big,1381_big.png",
      title: "ENERGY",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "https://cengizholding.com.tr/content/images/uploads/insaat,136_big,1385_big.png",
      title: "CONSTRUCTION",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
    {
      image: "https://cengizholding.com.tr/content/images/uploads/1,135_big,211_big,1390_big.png",
      title: "OTHER",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, rem."
    },
  ]

  function ActivityCarousel({ data }) {
    return (
      data.map((item, index) => {
        return (
          <div className="basis-[23%] group" role="group" ariaLabel={`${index + 1} / 4`}>
            <div className="card-item aos-init aos-animate relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <figure className="w-full h-full relative">
                <img src={item.image} width="430" height="700" className="rounded-md" loading="lazy" />
              </figure>
              <article class="absolute bottom-[-22.5%] left-0 w-full flex flex-col justify-end p-8 text-white group-hover:bottom-0 transition-[bottom] duration-300">
                <div class="card-item__content">
                  <h2 class="text-[25px]">
                    {item.title}
                  </h2>
                  <p class="mb-4">
                    {item.text}
                    {item.text}
                    {item.text}
                  </p>
                  <div class="card-item__cta">
                    <a href="/en/areas-of-activity/industry" class="button">VIEW DETAIL</a>
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
        <HomeImageHeading headingTitle="activity fields" headingText="Here you can take a closer look at the business lines that FaithLink systems operates in." />
        <article>
          <div className="flex justify-between mt-8">
            <ActivityCarousel data={activityData} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default ActivityFields