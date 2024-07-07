import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function SafeWorkplace() {
    return (
        <>
            <section>
                <Head>
                    <title>SAFE WORKPLACE - Faith Link Systems Limited</title>
                    <meta name="description" content="SAFE WORKPLACE- Faithlink Systems" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <PageSubheader imgUrl="/pages/_safe workplace_.jpg" alt="SAFE WORKPLACE Image" pageName="safe workplace" leadingRoutes={["homepage", "sustainability"]} />
                    <section className="pt-24 pb-0">
                        <div className="container container-lg text-justify">
                            <h1>SAFE WORKPLACE</h1>
                            <article className="flex justify-between gap-x-14 flex-col md:flex-row">
                                <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                                    <h1 className="text-textGray text-[20px]">Our goal is to achieve zero fatality irrespective of the environment and terrain while performing services to our clients. To achieve this goal, Faithlink has put in place all the necessary safety and risk management structures in place with a room for improvement
                                    </h1>
                                    <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="grid w-full">
                                        <img className="w-full h-[300px]" src="/pages/safe-workplace-image.jpg" alt="SAFE WORKPLACE IMAGE" />
                                    </div>
                                </aside>
                                <aside className="basis-1/2 flex flex-col" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                                    <p>It sets out FAITHLINK continual improvement and co-ordinates the management of activities relating to actual and potential hazards and risks within her operations. The policy defines responsibilities for Health, Safety, Environment & Security (HSE) and how the company is organized to ensure compliance with legislation and relevant standards. It defines how HSE is implemented, performance measured, audited, and reviewed, and the methods to ensure that objectives are identified; targets are set and performance is monitored.</p>
                                    <p>FAITHLINK shall ensure that its operations and activities will be carried out according to the requirements of current relevant legislation. Every measure will be undertaken ‘so far as it is reasonably practicable’ to avoid the risk of injury or damage to the health of employees and others who may be affected by the operations and activities of the Company. All Managers, Supervisors and Staff are responsible for implementing this document and ensuring that all rules, procedures, processes and systems relating to safe working conditions are applied.</p>
                                    <p>All FAITHLINK employees, contractors and others working on behalf of the Company must abide by the safety rules at work and their actions must not put themselves, or others, at risk of injury or damage to health. This document is available from the HSE Manager. Please consult him when you are in doubt about any HSE matter</p>
                                </aside>
                            </article>
                        </div>
                    </section>
                </div>
            </section>
            <SubPageNavigator leftLink="safe workplace" rightLink="integrated management system" />

        </>
    )
}

export default SafeWorkplace