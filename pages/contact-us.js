import InnerPageLayout from "@/Components/InnerPageLayout";

export default function ContactUs() {
  return (
    <>
      <InnerPageLayout seotitle="Contact Us" title={"Contact Us"}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <form>
                <div class="mb-3">
                  <label for="label1" class="form-label">
                    Your Name (Required)
                  </label>
                  <input type="text" class="form-control" id="label1" />
                </div>
                <div class="mb-3">
                  <label for="label2" class="form-label">
                    Your Email (Required)
                  </label>
                  <input type="email" class="form-control" id="label2" />
                </div>
                
                <div class="mb-3">
                  <label for="label3" class="form-label">
                    Subject
                  </label>
                  <input type="text" class="form-control" id="label3" />
                </div>

                <div class="mb-3">
                  <label for="label3" class="form-label">
                    Subject
                  </label>
                  <textarea class="form-control"  />
                  
                </div>
                
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <button type="reset" class="btn btn-primary ms-3">
                  Reset
                </button>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.87938699099!2d72.85689781490171!3d19.11294648706667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83138f89dad%3A0x99762b00e399e54d!2sMesse+Munchen+India!5e0!3m2!1sen!2sin!4v1530952186432"
                width="100%"
                height="450"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
