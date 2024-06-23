import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function SafeWorkplace() {
    return (
        <>
            <section className="">

                <Head>
                    <title>SAFE WORKPLACE - Faith Link Systems Limited</title>
                    <meta name="description" content="SAFE WORKPLACE- Faithlink Systems" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <PageSubheader imgUrl="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SAFE WORKPLACE Image" pageName="safe workplace" leadingRoutes={["homepage", "sustainability"]} greenOverlay={false} />
                    {/* <PageSubheader imgUrl="/pages/_safe-workplace_.jpg" alt="SAFE WORKPLACE Image" pageName="safe workplace" leadingRoutes={["homepage", "sustainability"]} greenOverlay={false} /> */}
                    {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1629196613836-0a7e2541990a?q=80&w=1668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SAFE WORKPLACE Image" pageName="safe workplace" leadingRoutes={["homepage", "sustainability"]} greenOverlay={false} /> */}
                    <section className="pt-24 pb-0">
                        <div className="container container-lg text-justify">
                            <h1>SAFE WORKPLACE</h1>
                            <p className="tracking-[.2em] hidden">
                                This is the Health, Safety, Environment, and Security Policy for FAITHLINK SYSTEM LIMITED. It sets out management’s commitment to ensuring the HSE and welfare of all interested parties (Clients, employees, contractors, customers, and the general public) It sets out FAITHLINK continual improvement and co-ordinates the management of activities relating to actual and potential hazards and risks within her operations. The policy defines responsibilities for Health, Safety, Environment & Security (HSE) and how the company is organized to ensure compliance with legislation and relevant standards. It defines how HSE is implemented, performance measured, audited, and reviewed, and the methods to ensure that objectives are identified; targets are set and performance is monitored.
                                FAITHLINK shall ensure that its operations and activities will be carried out according to the requirements of current relevant legislation. Every measure will be undertaken ‘so far as it is reasonably practicable’ to avoid the risk of injury or damage to the health of employees and others who may be affected by the operations and activities of the Company.

                                All Managers, Supervisors and Staff are responsible for implementing this document and ensuring that all rules, procedures, processes and systems relating to safe working conditions are applied. All FAITHLINK employees, contractors and others working on behalf of the Company must abide by the safety rules at work and their actions must not put themselves, or others, at risk of injury or damage to health. This document is available from the HSE Manager. Please consult him when you are in doubt about any HSE matter

                            </p>

                            <article className="flex justify-between gap-x-14 flex-col md:flex-row">
                                <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                                    <h1 className="text-textGray text-[20px]">Our goal is to achieve zero fatality irrespective of the environment and terrain while performing services to our clients. To achieve this goal, Faithlink has put in place all the necessary safety and risk management structures in place with a room for improvement
                                    </h1>
                                    <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="grid w-full">
                                        <img className="w-full h-[300px]" src="/pages/_safe-workplace_.jpg" alt="SAFE WORKPLACE IMAGE" />
                                    </div>
                                </aside>
                                <aside className="basis-1/2 flex flex-col" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                                    <p>It sets out FAITHLINK continual improvement and co-ordinates the management of activities relating to actual and potential hazards and risks within her operations. The policy defines responsibilities for Health, Safety, Environment & Security (HSE) and how the company is organized to ensure compliance with legislation and relevant standards. It defines how HSE is implemented, performance measured, audited, and reviewed, and the methods to ensure that objectives are identified; targets are set and performance is monitored.</p>
                                    <p>FAITHLINK shall ensure that its operations and activities will be carried out according to the requirements of current relevant legislation. Every measure will be undertaken ‘so far as it is reasonably practicable’ to avoid the risk of injury or damage to the health of employees and others who may be affected by the operations and activities of the Company. All Managers, Supervisors and Staff are responsible for implementing this document and ensuring that all rules, procedures, processes and systems relating to safe working conditions are applied.</p>
                                    <p>All FAITHLINK employees, contractors and others working on behalf of the Company must abide by the safety rules at work and their actions must not put themselves, or others, at risk of injury or damage to health. This document is available from the HSE Manager. Please consult him when you are in doubt about any HSE matter</p>
                                    {/* <ul className="ml-3 mb-3 list-disc text-[12px]">
                                    <li>Innovation Solutions</li>
                                    <li>Expert Product Solutions</li>
                                    <li>Addressing Commercial Challenges</li>
                                    <li>Portfolio Rationalization</li>
                                    <li>Sourcing Unusual items</li>
                                    <li>Flexible Service and Delivery</li>
                                    <li>Competitive Pricing</li>
                                    <li>Performance and Improvement</li>
                                </ul> */}
                                    {/* <p>We help actively shape the future of energy and make it a success story for all
                                    stakeholders.</p> */}
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