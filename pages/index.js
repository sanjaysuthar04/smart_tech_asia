import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Menu from "@/Components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Tech Asia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <div className="d-flex py-3">
            <div className="me-3">
              <Image
                src={"/images/logo.png"}
                width={214}
                height={124}
                alt="Logo"
              />
            </div>
            <div className="w-100">
              <div className="d-flex">
                <div className="fs_24  ">
                  <div className="show_info d-flex">
                    <span className="date">13-15</span>{" "}
                    <span className="month_year">
                      September
                      <br />
                      2023
                    </span>
                  </div>
                  <div className="venue">
                    India Expo Mart (IEML), <strong>Greater Noida</strong>
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

      <main>
        {/* banner section */}
        <section className="banner_section">
          <div className="bg_banner">
            <Image src={"/images/bg-bw-blur.png"} fill={true} alt="Banner" />
          </div>
          <div className="container pt_40">
            <div className="slider">
              <Image src={"/images/banner1.png"} fill={true} alt="Banner" />
            </div>
          </div>
        </section>

        <section className="highlight_section">
          <div className="container">
            <div className="bg_orange_light"></div>
            <div className="highlight_section_content">
              <h2 className="title">
                <strong className="clr_orange">Highlights</strong> of SmartTech
                Asia 2023
              </h2>

              <div className="d-flex justify-content-around mt_60">
                <div className="hg_box">
                  <span className="hg_count">100+</span>
                  <span className="hg_desc">
                    Top Solution <br />
                    Providers
                  </span>
                </div>
                <div className="hg_box">
                  <span className="hg_count">100+</span>
                  <span className="hg_desc">
                    Top Solution <br />
                    Providers
                  </span>
                </div>
                <div className="hg_box">
                  <span className="hg_count">100+</span>
                  <span className="hg_desc">
                    Top Solution <br />
                    Providers
                  </span>
                </div>
                <div className="hg_box">
                  <span className="hg_count">100+</span>
                  <span className="hg_desc">
                    Top Solution <br />
                    Providers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about_section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="about_box">
                  <h3>SmartTech Asia 2023</h3>
                  <p>
                    Launched in 1999, SmartCards Expo was acquired by Messe
                    Muenchen India in April 2018 as a part of its international
                    expansion strategy. It is India's only trade fair focusing
                    on smart card technologies
                    <span className="read_more">Read More</span>
                  </p>
                </div>
                <span className="divider"></span>

                <div className="about_box mt-4">
                  <h3>Accompanying Programs</h3>
                  <p>
                    Smart Cards Expo host various programs with an aim to bring
                    together and inspire solution provider, practitioners and
                    decision makers and to share knowledge and experience that
                    pertains to proven and innovative environment.
                    <span className="read_more">Read More</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h2 className="title">
                  <strong className="clr_blue">Exhibition</strong> Video
                </h2>

                <div className="video_frame">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/0EYgInNm0Sw?si=qqOc4gUxfS4CDhN1&amp;controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partner_section">
          <div className="container">
            <h2 className="title">
              <strong className="clr_blue">Partners</strong>
            </h2>
            <div className="row pt_40">
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
              <div className="col-12 col-md-2">
                <picture>
                  <img
                    src={"/images/placeholder1.png"}
                    className="w-100"
                    alt="Partner Logo"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
      </main>

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
              <Image
                src={"/images/mm.png"}
                width={110}
                height={45}
                alt="Logo"
              />
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
    </>
  );
}
