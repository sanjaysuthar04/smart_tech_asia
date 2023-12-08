import InnerPageLayout from "@/Components/InnerPageLayout";

export default function ExhibitorProfile() {
  return (
    <>
      <InnerPageLayout seotitle="Exhibitor Profile" title={"Exhibitor Profile"}>
        <div className="container">
          <ul>
            <li>
              Smart card manufacturers, manufacturers of card readers, printers,
              inks, chips, system integrators, developers
            </li>
            <li>
              Manufacturers of RFID tags, scanners and readers, RFID solution
              providers
            </li>
            <li>
              Manufacturers of Biometric products, its components and solutions
              providers
            </li>
            <li>Manufacturers of IoT devices and solution providers</li>
            <li>e-Security solution providers (hardware &amp; software)</li>
            <li>Artificial intelligence solution providers</li>
            <li>Digital payment solution providers</li>
            <li>
              Barcode systems / Barcode printers / Barcode Tags / Barcode
              readers and scanners
            </li>
          </ul>
        </div>
      </InnerPageLayout>
    </>
  );
}
