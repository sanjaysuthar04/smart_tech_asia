import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Menu from "@/Components/Menu";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

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
      <Header />

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
                    expansion strategy. It is India&apos;s only trade fair
                    focusing on smart card technologies
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

      <Footer />
    </>
  );
}
