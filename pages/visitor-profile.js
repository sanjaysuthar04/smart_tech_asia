import InnerPageLayout from "@/Components/InnerPageLayout";

export default function VisitorProfile() {
  return (
    <>
      <InnerPageLayout seotitle="Visitor Profile" title={"Visitor Profile"}>
        <div className="container">
          <h2>Industry</h2>
          <div className="row mb-3">
            <div className="col-12 col-md-4">
              <ul>
                <li>Banking / Finance</li>
                <li>Manufacturing</li>
                <li>Logistic / Transport</li>
                <li>IT/ ITes</li>
                <li>Education Institutes</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul>
                <li>Government / PSU</li>
                <li>Telecom</li>
                <li>Healthcare</li>
                <li>Hospitality</li>
                <li>Online Retail</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul>
                <li>Dealers / Retailers</li>
                <li>Defense / Security</li>
                <li>Infrastructure</li>
                <li>Port Authorities</li>
              </ul>
            </div>
          </div>

          <h2>Job Function</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <ul>
                <li>Management / Business Head</li>
                <li>Design / R &amp; D</li>
                <li>Purchasing / Procuring</li>
                <li>Quality Control / Quality Assurance Testing</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul>
                <li>Hardware Development</li>
                <li>IT Managers/ Sr Managers</li>
                <li>Administration / HR</li>
                <li>Marketing/ Advertising / PR</li>
              </ul>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
