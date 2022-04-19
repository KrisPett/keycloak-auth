import React, {FC} from 'react';
import {CardActionArea, Grid, Paper, Tooltip, tooltipClasses, TooltipProps, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import {styled} from "@mui/material/styles";
import {useKeycloak} from "@react-keycloak/web";

interface ITableRowField {
    rowTitle: string | undefined;
    rowValue: string | undefined;
}

const CustomWidthTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 1000,
    },
});

const TableRowField: FC<ITableRowField> = ({rowTitle, rowValue}) => {
    const theme = useTheme();
    if (!rowValue) rowValue = "..."
    const [open, setOpen] = React.useState(false);

    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    return (
        <CustomWidthTooltip title={rowValue} open={open}>
            <CardActionArea
                onClick={handleTooltipOpen}
                sx={{
                    cursor: "pointer",
                    transition: theme.transitions.create(["background-color", "transform"], {duration: theme.transitions.duration.standard}),
                    "&:hover": {
                        transform: "scale(1.1)"
                    }
                }}>
                <Grid container
                      justifyContent={"space-between"}
                      p={3}
                      boxShadow={10}>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={"bold"} variant={"h6"}>{rowTitle}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography noWrap variant={"h6"}>{rowValue}</Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </CustomWidthTooltip>
    )
}

const Dashboard = () => {
    const {keycloak, initialized} = useKeycloak();

    const theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Paper>
                <Grid container p={isMobileSize ? 5 : 10} direction={"column"} rowGap={5}>
                    <TableRowField rowTitle={"Username"} rowValue={keycloak.tokenParsed?.preferred_username}/>
                    <TableRowField rowTitle={"ID Token"} rowValue={keycloak.token}/>
                    <Grid item alignSelf={"end"}>
                        <Button size={"large"} onClick={() => keycloak.logout()}>logout</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
};

export default Dashboard;