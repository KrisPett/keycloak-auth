import React from 'react';
import {Grid, Typography} from "@mui/material";

const Analytics = () => {
    const initialValue = 10;
    const endValue = 100;
    const finalArray = [];

    for (let n = initialValue; n <= endValue; n += 10) {
        finalArray.push({ label: n, value: n });
    }

    return (
        <Grid container justifyContent={"center"} marginTop={15} direction={"column"}>
            {finalArray.map((id, index) => {
                return (
                    <Grid item key={index} ><Typography variant={"h4"}>Analytics</Typography></Grid>
                )
            })}
        </Grid>
    );
};

export default Analytics;