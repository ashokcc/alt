import React from "react";
import { Grid, Typography } from "@material-ui/core";
export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(-180deg, #fbfbfb, #e5e5e5)",
        width: "100%",
        paddingTop: 15,
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "15px 0 25px 0",
          textAlign: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="caption" className="copyright">
              Copyright &copy; 2020-2021 Altimetrik. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
