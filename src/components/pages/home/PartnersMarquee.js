import Marquee from "react-fast-marquee";

function PartnersMarquee() {
    function PartnersImageContainer() {
        const PartnersData = [
            {
                imgUrl: "/pages/ihs-logo.png",
                imgAlt: "Image for IHS"
            },
            {
                imgUrl: "/pages/mtn.png",
                imgAlt: "Image for MTN"
            },
            {
                imgUrl: "/pages/glo.png",
                imgAlt: "Image for GLO"
            },
            {
                imgUrl: "/pages/airtel.png",
                imgAlt: "Image for AIRTEL"
            },
            {
                imgUrl: "/pages/itb-nigeria.jpg",
                imgAlt: "Image for ITB"
            },
            {
                imgUrl: "/pages/sacred-sun.jpg",
                imgAlt: "Image for SACRED SUN"
            },
            {
                imgUrl: "/pages/fidelity-bank.jpg",
                imgAlt: "Image for FIDELITY BANK Logo"
            },
            {
                imgUrl: "/pages/heritage-bank.png",
                imgAlt: "Image for HERITAGE BANK Logo"
            },
        ]
        return (
            <div className="flex items-center gap-x-6">
                {PartnersData.map(({ imgUrl, imgAlt }) => (
                    <div className="" key={imgUrl}>
                        <img src={imgUrl} alt={imgAlt} className="w-[200px]" />
                    </div>
                ))}
            </div>

        )
    }
    return (
        <>
            <h1 className="text-center">Our Happy Clients</h1>
            <Marquee className="flex" pauseOnHover={true} gradient={true} autoFill={true}	>
                <PartnersImageContainer />
            </Marquee>
        </>
    )
}

export default PartnersMarquee