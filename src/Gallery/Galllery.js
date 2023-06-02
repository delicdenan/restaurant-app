import React from "react";
import Grid from "@mui/material/Grid";
import gallery1 from "./GalleryImages/gallery1.jpeg";
import gallery2 from "./GalleryImages/gallery2.jpeg";
import gallery3 from "./GalleryImages/gallery3.jpeg";
import gallery4 from "./GalleryImages/gallery4.jpeg";
import gallery5 from "./GalleryImages/gallery5.jpeg";
import gallery6 from "./GalleryImages/gallery6.jpeg";
import classes from "./Gallery.module.css";

export function Gallery() {
  return (
    <Grid container spacing={0} className={classes.cont}>
      <Grid item xs={12} sm={6} md={2} className={classes.grid1}>
        <img src={gallery1} alt="img1" />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.grid2}>
        <img src={gallery2} alt="img2" />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.grid3}>
        <img src={gallery3} alt="img3" />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.grid4}>
        <img src={gallery4} alt="img4" />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.grid5}>
        <img src={gallery5} alt="img5" />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.grid6}>
        <img src={gallery6} alt="img6" />
      </Grid>
    </Grid>
  );
}
