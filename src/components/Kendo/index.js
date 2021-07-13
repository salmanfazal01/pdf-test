import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import SomeApiData from "../SomeApiData";
import SomeIFrame from "../SomeIFrame";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  pdfContainer: {
    height: "100%",
    width: 612,
    padding: 10,
    backgroundColor: "white",
    margin: "auto",
  },
}));

const KendoPdf = () => {
  const classes = useStyle();
  const container = useRef(null);
  const pdfExportComponent = useRef(null);

  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "A4",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} container justify="center">
        <Button variant="outlined" onClick={exportPDFWithComponent}>
          Export with component
        </Button>
        <Button variant="outlined" onClick={exportPDFWithMethod}>
          Export with method
        </Button>
      </Grid>

      <Grid item xs={12}>
        <PDFExport
          ref={pdfExportComponent}
          paperSize="auto"
          margin={40}
          fileName={`Report for ${new Date().getFullYear()}`}
          author="KendoReact Team"
        >
          <Paper elevation={3} ref={container} className={classes.pdfContainer}>
            {/* <SomeApiData /> */}
            <SomeIFrame />
          </Paper>
        </PDFExport>
      </Grid>
    </Grid>
  );
};

export default KendoPdf;
