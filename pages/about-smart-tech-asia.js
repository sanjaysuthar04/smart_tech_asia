import InnerPageLayout from "@/Components/InnerPageLayout";
import Link from "next/link";

export default function AboutSmartTechAsia() {
  return (
    <>
      <InnerPageLayout
        seotitle="About SmartTech Asia"
        title={"About SmartTech Asia"}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>
                  India's Digital Boom: A Launchpad for Innovation and Inclusion
                </strong>
              </p>
              <p>
                India's digital landscape is brimming with potential for secure
                identity management, seamless authentication, and revolutionary
                payment solutions. Aadhaar, the world's largest biometric ID
                system, serves as a cornerstone for robust identity
                verification, while initiatives like eKYC streamline online
                onboarding processes.
              </p>
              <p>
                The Unified Payments Interface (UPI) has been a game-changer for
                digital transactions, enabling instant, affordable, and
                universally accessible payments, even in remote areas. This
                powerful convergence of technologies fosters a fertile ground
                for innovation, empowering individuals and businesses across the
                spectrum.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/aboutus/1.JPG"
                className="w-100 resize-img-height"
                style={{
                  height: "300px",
                }}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <img
                src="/images/aboutus/2.jpg"
                className="w-100 resize-img-height"
                style={{
                  height: "300px",
                }}
              />
            </div>
            <div className="col-md-6">
              <p>
                <strong>Envision a future:</strong>
              </p>
              <p>
                <ul>
                  <li>
                    Aadhaar-powered authentication grants secure access to
                    online services.
                  </li>
                  <li>
                    Microentrepreneurs are equipped with instant mobile
                    payments.
                  </li>
                  <li>Financial inclusion is a reality for millions.</li>
                </ul>
              </p>
              <p>
                The transformative potential of India's digital identity and
                payments infrastructure is undeniable. It paves the way for a
                more inclusive, efficient, and prosperous future for all.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <p>
                <strong>Key highlights</strong>
              </p>
              <p>
                <ul>
                  <li>
                    A buyer-seller platform facilitating direct business
                    interactions.
                  </li>
                  <li>
                    Participation from tech giants like HID Global and Dell
                    Technologies.
                  </li>
                  <li>
                    The NASSCOM Start-up Pavilion showcases cutting-edge
                    solutions from new market players, propelling their
                    businesses to new heights.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/aboutus/3.jpg"
                className="w-100 resize-img-height"
                style={{
                  height: "200px",
                }}
              />
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
