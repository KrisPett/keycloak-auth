import {motion} from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Box, Button, CircularProgress, Container, Grid, Typography} from '@mui/material';
import {MotionContainer, varBounceIn} from '../assets/themes/utils/animate';
import Page from '../root/components/Page';
import illustration404 from "../assets/images/illustrations/illustration_404.svg";
import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import DownloadingRounded from "@mui/icons-material/DownloadingRounded";

const RootStyle = styled(Page)(({theme}) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

export default function Page404NotFound() {
    const {keycloak, initialized} = useKeycloak();

    const hasRole = (roles: string[]) => roles.some(role => keycloak.hasResourceRole(role));

    return (
        <RootStyle title="404 Page Not Found | Minimal-UI">
            {initialized ?
                <Container>
                    <MotionContainer open>
                        <Box sx={{maxWidth: 480, margin: 'auto', textAlign: 'center'}}>
                            {keycloak.authenticated && !hasRole(["admin"]) ?
                                <>
                                    <motion.div variants={varBounceIn}>
                                        <Typography variant={"h4"}>Access is not allowed! ⛔️</Typography>
                                    </motion.div>
                                </>
                                :
                                <>
                                    <motion.div variants={varBounceIn}>
                                        <Typography variant="h3" paragraph>
                                            Sorry, page not found!
                                        </Typography>
                                        <Typography sx={{color: 'text.secondary'}}>
                                            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped
                                            the
                                            URL?
                                            Be sure to check your spelling.
                                        </Typography>
                                    </motion.div>
                                </>

                            }
                            <motion.div variants={varBounceIn}>
                                <Box
                                    component="img"
                                    src={illustration404}
                                    sx={{height: 260, mx: 'auto', my: {xs: 5, sm: 10}}}
                                />
                            </motion.div>
                            <Button to="/" size="large" variant="contained" component={RouterLink}>
                                Go to Home
                            </Button>
                        </Box>
                    </MotionContainer>
                </Container> : <Grid container justifyContent={"center"} mt={10}><CircularProgress/></Grid>
            }
        </RootStyle>
    );
}
