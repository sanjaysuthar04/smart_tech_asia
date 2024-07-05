import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex py-3">
          <div className="me-3">
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
            <div className="d-flex">
              <div className="fs_24  ">
                <div className="show_info d-flex">
                  <span className="date">13-14</span>{" "}
                  <span className="month_year">
                    February
                    <br />
                    2025
                  </span>
                </div>
                <div className="venue">
                Jio World Convention Centre, Bandra Kurla Complex, <strong>Mumbai</strong>
                </div>
              </div>

              <div className="d-flex flex-fill justify-content-end">
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
