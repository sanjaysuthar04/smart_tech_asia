import InnerPageLayout from "@/Components/InnerPageLayout";

export default function ConferenceAgenda() {
  return (
    <>
      <InnerPageLayout seotitle="Conference Agenda" title={"Conference Agenda"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <img src="/images/conference-agenda-day1.jpg" className="w-100" alt="Conference Agenda Day 1"/>
              <img src="/images/conference-agenda-day2.jpg" className="w-100" alt="Conference Agenda Day 2"/>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
