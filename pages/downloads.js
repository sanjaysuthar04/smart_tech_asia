import InnerPageLayout from "@/Components/InnerPageLayout";

export default function Downloads() {
  return (
    <>
      <InnerPageLayout seotitle="Downloads" title={"Downloads"}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <a
                href="/images/downloads/SmartTech_2025_Brochure.pdf"
                download={true}
                className="text-decoration-none clr_blue"
              >
                <div className="download_box d-flex">
                  <div>
                    <img
                      src="/images/downloads.png"
                      className="me-3"
                      style={{ width: "48px" }}
                    />
                  </div>
                  <div style={{ fontSize: "24px" }}>Sales Brochure</div>
                </div>
              </a>
            </div>

            <div className="col-12 col-md-4">
              <a
                href="/images/downloads/STA_logo.zip"
                download={true}
                className="text-decoration-none clr_blue"
              >
                <div className="download_box d-flex">
                  <div>
                    <img
                      src="/images/downloads.png"
                      className="me-3"
                      style={{ width: "48px" }}
                    />
                  </div>
                  <div style={{ fontSize: "24px" }}>Downloads STA logo</div>
                </div>
              </a>
            </div>

            <div className="col-12 col-md-4">
              <a
                href="/images/downloads/STA_banners.zip"
                download={true}
                className="text-decoration-none clr_blue"
              >
                <div className="download_box d-flex">
                  <div>
                    <img
                      src="/images/downloads.png"
                      className="me-3"
                      style={{ width: "48px" }}
                    />
                  </div>
                  <div style={{ fontSize: "24px" }}>STA Banners</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
