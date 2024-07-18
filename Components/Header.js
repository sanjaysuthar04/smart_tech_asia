import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
const Header = () => {
  return (
    <header className="header_mobile">
      {/* <div className="container"> */}
      <div className="px-3">
        <div className="header_main py-3">
          <div className="me-3 logo">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={214}
                height={124}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="w-100">
            <div className="d-block d-md-flex ">
              <div className="fs_24  dtvenue_block">
                <div className="show_info d-block d-md-flex ">
                  <span className="date">13-14</span>{" "}
                  <span className="month_year">
                    February <br />
                    2025
                  </span>
                </div>
                <div className="venue">
                  Jio World Convention Centre, Bandra Kurla Complex,{" "}
                  <strong>Mumbai</strong>
                </div>
              </div>

              <div className="d-flex flex-fill justify-content-end hide_mobile">
                <div>
                  <a
                    href="https://mmiconnect.in/sta-2025/enquiry?source=website"
                    target="_blank"
                    className="btn btn-secondary btn-sm me-3"
                  >
                    Book Your Booth
                  </a>
                  <a
                    href="https://mmiconnect.in/sta-2025/visitor/registration?source=website"
                    target="_blank"
                    className="btn btn-secondary btn-sm"
                  >
                    Visitor Registration
                  </a>
                </div>
                <div className="text-center ms-3">
                  <small className="d-block mb-1">ORGANISER</small>
                  <Image
                    src={"/images/mm.png"}
                    width={110}
                    height={45}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
