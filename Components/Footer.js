import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 br_divider">
            <h4>Contact Us</h4>
            <div className="company_name mt-3">
              Messe Muenchen India Pvt Ltd
            </div>
            <div className="company_address mt-2">
              762/862, Solitaire Corporate Park, Building No. 7, <br />
              6th Floor, Andheri East, Mumbai, 400093
            </div>
            <div className="company_other_details mt-2">
              <strong>Tel:</strong> +91 22 42554700
              <br />
              <strong>Direct Line:</strong> +91 22 42554740
              <br />
              <strong>Fax:</strong> +91 22 42554799
            </div>

            <div className="company_name mt-2">AN EVENT ORGANISED BY</div>
            <Image src={"/images/mm.png"} width={110} height={45} alt="Logo" />
          </div>
          <div className="col-12 col-md-8 ps-5">
            <h4>Meet the Team</h4>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Brijesh Nair</div>
                  <div className="contact_details">
                    Group Exhibition Director
                    <br />
                    +91 8080844022 | brijesh.nair@mm-india.in
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Brijesh Nair</div>
                  <div className="contact_details">
                    Group Exhibition Director
                    <br />
                    +91 8080844022 | brijesh.nair@mm-india.in
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Brijesh Nair</div>
                  <div className="contact_details">
                    Group Exhibition Director
                    <br />
                    +91 8080844022 | brijesh.nair@mm-india.in
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Brijesh Nair</div>
                  <div className="contact_details">
                    Group Exhibition Director
                    <br />
                    +91 8080844022 | brijesh.nair@mm-india.in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
