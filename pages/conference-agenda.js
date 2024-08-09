import InnerPageLayout from "@/Components/InnerPageLayout";

export default function ConferenceAgenda() {
  return (
    <>
      <InnerPageLayout seotitle="Conference Agenda" title={"Conference Agenda"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <p>
                SmartTech Asia has been curating high-level content-rich
                conferences to promote awareness of identification,
                authentication, and digital payment technologies in India. We
                have been partnering with credible organizations such as NASSCOM
                Centre of Excellence (CoE) and the ISACA. In the 2023 edition,
                the conferences focused on the crucial topics of identification
                and access management (IAM), cyber security, and digital
                transaction security.
              </p>
              <p>
                <strong>
                  The upcoming edition will deliberate on the below topics:
                </strong>
              </p>
              <p>
                Day 1: Reimagine & Reframing: The Role of Risk. IAM & Cyber
                Security
              </p>
              <p>
                Day 2: Secure Your Digital Interactions And Transactions: The
                Modern-day Imperative of Digital Trust
              </p>
              <img
                src="/images/conference-agenda-day1.jpg"
                className="w-100"
                alt="Conference Agenda Day 1"
              />
              <img
                src="/images/conference-agenda-day2.jpg"
                className="w-100"
                alt="Conference Agenda Day 2"
              />
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
