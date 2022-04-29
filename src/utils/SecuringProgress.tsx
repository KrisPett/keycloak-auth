import React from 'react';
import {CircularProgress, Fab} from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';
import {blue, green} from "@mui/material/colors";

export default function SecuringProgress() {
    return (
        <>
            <Fab
                aria-label="save"
                color="primary"
            >
                <SecurityIcon/>
            </Fab>
            <CircularProgress
                size={70}
                sx={{
                    color: blue[500],
                    position: 'relative',
                    top: -7,
                    left: -63,
                    zIndex: 1,
                }}
            />
        </>
    )
}
