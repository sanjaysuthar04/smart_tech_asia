import InnerPageLayout from "@/Components/InnerPageLayout";

export default function VisitorProfile() {
  return (
    <>
      <InnerPageLayout seotitle="Visitor Profile" title={"Visitor Profile"}>
        <div className="container visitor_profile_page">
          <div className="row">
            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Banking & finance.png"
                className="profile_icon"
              />
              <h3>Banking & Finance</h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Transport & Logistics.png"
                className="profile_icon"
              />
              <h3>Transport & Logistics</h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Healthcare.png"
                className="profile_icon"
              />
              <h3>Healthcare</h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Education.png"
                className="profile_icon"
              />
              <h3>Education </h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Manufacturing.png"
                className="profile_icon"
              />
              <h3>Manufacturing</h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Government - psu - defence.png"
                className="profile_icon"
              />
              <h3>Government / PSU / Defense</h3>
            </div>

            <div className="col-12 col-md-3 text-center">
              <img
                src="/images/visitor-profile/Retail - ecommerce.png"
                className="profile_icon"
              />
              <h3>Retail / E-commerce</h3>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
