import InnerPageLayout from "@/Components/InnerPageLayout";

export default function WhyVisit() {
  return (
    <>
      <InnerPageLayout
        seotitle="Good Reason to Visit"
        title={"Good Reason to Visit"}
      >
        <div className="container why_visit_page">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 d-flex visit_row">
              <div className="img_box">
                <img src="/images/why-visit/synergy.png" />
              </div>
              <div className="text_desc">
                <strong>Synergy</strong> - By partnering with IBEX India, we
                have achieved a powerful synergy that positions us as a leader
                in trade fairs for the banking and fintech sectors. This
                collaboration grants us access to a substantial buyer base of
                over 5,000 leading BFSI and fintech companies.
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 d-flex visit_row">
              <div className="text_desc">
                <strong>Mumbai</strong> - Known as India&apos;s commercial and
                financial hub, Mumbai hosts the headquarters of numerous
                companies across retail, logistics, telecommunications, and
                e-commerce. It houses key decision-makers, such as CEOs, CIOs,
                CTOs, CISOs, marketing heads and procurement heads.
              </div>
              <div className="img_box">
                <img src="/images/why-visit/mumbai.png" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 d-flex visit_row">
              <div className="img_box">
                <img src="/images/why-visit/location.png" />
              </div>
              <div className="text_desc">
                <strong>Location</strong> - Thriving in the heart of Mumbai,
                Bandra Kurla Complex (BKC) is a hub for major banks, financial
                institutions, and prominent companies across diverse sectors.
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 d-flex visit_row">
              <div className="text_desc">
                <strong>Venue</strong> - Jio World Trade Centre's cutting-edge
                facility, provides an ideal setting for meaningful engagements
                among decision - makers, facilitating the unlocking of business
                opportunities.
              </div>
              <div className="img_box">
                <img src="/images/why-visit/venue.png" />
              </div>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
