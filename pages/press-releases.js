import InnerPageLayout from "@/Components/InnerPageLayout";
import Link from "next/link";

export default function PressReleases() {
  return (
    <>
      <InnerPageLayout seotitle="Press releases" title={"Press releases"}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <Link href="/images/press-release/PR - Post show_STA.pdf" target='_blank' style={{textDecoration : 'none'}}>
                <img src="images/press-release/pr-2023.jpg" className="w-100" />
                <div className="text-center mt-2">
                  <h5>Press Release - Post show 2023</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
