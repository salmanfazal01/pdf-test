// IFRAME NOT WORKING

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import SomeIFrame from "../SomeIFrame";
import SomeApiData from "../SomeApiData";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f5f5f5",
    width: "210mm",
    minHeight: "297mm",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const JsPdf = () => {
  const classes = useStyle();

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <div>
        <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" className={classes.container}>
          <SomeIFrame />
        </div>
      </div>
    </>
  );
};
export default JsPdf;
