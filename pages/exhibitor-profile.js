import InnerPageLayout from "@/Components/InnerPageLayout";

export default function ExhibitorProfile() {
  return (
    <>
      <InnerPageLayout seotitle="Exhibitor Profile" title={"Exhibitor Profile"}>
        <div className="container">
          <h2 className="clr_orange">SmartTech Asia Expo</h2>
          <p>
            SmartTech Asia Expo, a leading trade fair for smart cards, RFID,
            barcodes, biometrics, IoT, AI, and digital payments, has connected
            industry leaders for over 20 years. The latest edition in Bengaluru
            featured pioneering solutions, unmatched networking opportunities,
            and insightful conferences on emerging trends. Highlights included a
            Buyer-Seller forum, participation by tech giants, and a Startup
            Pavilion showcasing cutting-edge innovations.
          </p>

          <h2 className="clr_orange">
            Focus on Identification, Authentication and Digital Payments{" "}
          </h2>

          <div className="row mt-4">
            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/smart card.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Manufacturers</span>
                  <ul>
                    <li>- Smart Cards</li>
                    <li>- Card Readers</li>
                    <li>- Printers</li>
                    <li>- Inks</li>
                    <li>- Chips</li>
                    <li>- System Integrators</li>
                    <li>- System Developers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/rfid.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Manufacturers</span>
                  <ul>
                    <li>- RFID Tags</li>
                    <li>- Scanners</li>
                    <li>- Readers</li>
                    <li>- RFID Solution Providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/biomatric.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Manufacturers</span>
                  <ul>
                    <li>- Biometric Products</li>
                    <li>- Components</li>
                    <li>- Solutions Providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/internet of things.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Manufacturers</span>
                  <ul>
                    <li>- loT devices</li>
                    <li>- Solutions Providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/e-security.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">E-Security</span>
                  <ul>
                    <li>- Solutions Providers</li>
                    <li>- Hardware</li>
                    <li>- Software</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/artificial intelligence.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">
                    Artificial Intelligence
                  </span>
                  <ul>
                    <li>- Solutions Providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/digital payments.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Digital Payment</span>
                  <ul>
                    <li>- Solutions Providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="exprofile_box">
                <div className="exprofile_box__icon">
                  <img src="/images/exhibit-profile/bacode.png" />
                </div>
                <div className="exprofile_box_details">
                  <span className="exprofile_box__title">Barcode Systems</span>
                  <ul>
                    <li>- Printers</li>
                    <li>- Tags</li>
                    <li>- Readers</li>
                    <li>- Scanners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
