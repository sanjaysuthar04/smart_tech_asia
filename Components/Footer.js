import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              Unit No. 1271, Solitaire Corporate Park, 7th Floor, <br />
              Building No.12, 167, Guru Hargovindji Marg, <br />
              Andheri - Ghatkopar Link Road, <br />
              Andheri (East), Mumbai - 400 093
            </div>
            <div className="company_other_details mt-2">
              <strong>Tel:</strong> +91 22 42554700
              <br />
              <strong>Direct Line:</strong> +91 22 42554740
              <br />
              <strong>Fax:</strong> +91 22 42554799
            </div>
            <div className="social_media_icons mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100094350080894"
                className="me-2"
              >
                <FaFacebook />
              </a>
              <a href="https://twitter.com/SmartTech_Asia" className="me-2">
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/asia.smarttech"
                className="me-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/smarttechasia"
                className="me-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCzPlaunIUioxj6Rlf6ktzMw"
                className="me-2"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="company_name mt-2">AN EVENT ORGANISED BY</div>
            <Image src={"/images/mm.png"} width={110} height={45} alt="Logo" />
          </div>
          <div className="col-12 col-md-8 ps-0 ps-md-5 mt-5 mt-md-0">
            <h4>Meet the Team</h4>
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Brijesh Nair</div>
                  <div className="contact_details">
                    Group Exhibition Director
                    <br />
                    +91 22 4255 4707 | brijesh.nair@mm-india.in
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Shweta Ojha</div>
                  <div className="contact_details">
                    Project Director
                    <br />
                    +91 9167934930 | shweta.ojha@mm-india.in
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">West - Ajay Gore</div>
                  <div className="contact_details">
                    Business Manager
                    <br />
                    +91 7977576762 | ajay.gore@mm-india.in
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">West - Pranit Vichare</div>
                  <div className="contact_details">
                    Business Manager
                    <br />
                    +91 9892316678 | pranit.vichare@mm-india.in
                  </div>
                </div>
              </div> */}

              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">South - Saravana Anand</div>
                  <div className="contact_details">
                    Director Business Alliance
                    <br />
                    +91 9916390422 | saravana.anand@mm-india.in
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 col-md-12 mb-3">
                <h4>
                  For inquiries about the conference speakers and agenda, please
                  contact:
                </h4>
              </div>
              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Sonal Desai</div>
                  <div className="contact_details">
                    Director, Strategy, WriteCanvas, <br />
                    Managing Editor, ESGnews.earth
                    <br />
                    +91 9869049045 <br /> sonal@writecanvas.in |
                    sonal.prakriti@gmail.com
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="contact_card">
                  <div className="contact_name">Priti D. Mistry</div>
                  <div className="contact_details">
                    Chief Marketing Officer, WriteCanvas &amp; ESGnews.earth
                    <br />
                    +91 9769358017
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
