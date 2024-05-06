import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function HsePolicy() {
    return (
        <section className="">

            <Head>
                <title>Privacy Notice - Faith Link Systems Limited</title>
                <meta name="description" content="Privacy Notice- Faithlink Systems" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <PageSubheader imgUrl="https://cengizholding.com.tr/Content/images/subpage-promo/baskanin-mesaji.jpg" alt="HSE POLICY Image" pageName="hse policy" />
                <section className="pt-24 pb-0">
                    <div className="container container-lg">
                        <h1>HSE POLICY</h1>
                        <p className="tracking-[.2em]">
                            This is the Health, Safety, Environment, and Security Policy for FAITHLINK SYSTEM LIMITED. It sets out management’s commitment to ensuring the HSE and welfare of all interested parties (Clients, employees, contractors, customers, and the general public) It sets out FAITHLINK continual improvement and co-ordinates the management of activities relating to actual and potential hazards and risks within her operations. The policy defines responsibilities for Health, Safety, Environment & Security (HSE) and how the company is organized to ensure compliance with legislation and relevant standards. It defines how HSE is implemented, performance measured, audited, and reviewed, and the methods to ensure that objectives are identified; targets are set and performance is monitored.
                            FAITHLINK shall ensure that its operations and activities will be carried out according to the requirements of current relevant legislation. Every measure will be undertaken ‘so far as it is reasonably practicable’ to avoid the risk of injury or damage to the health of employees and others who may be affected by the operations and activities of the Company.

                            All Managers, Supervisors and Staff are responsible for implementing this document and ensuring that all rules, procedures, processes and systems relating to safe working conditions are applied. All FAITHLINK employees, contractors and others working on behalf of the Company must abide by the safety rules at work and their actions must not put themselves, or others, at risk of injury or damage to health. This document is available from the HSE Manager. Please consult him when you are in doubt about any HSE matter

                        </p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HsePolicy