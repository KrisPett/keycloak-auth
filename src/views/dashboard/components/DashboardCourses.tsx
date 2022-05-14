import React, {useContext, useState} from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import LinearProgress from "@mui/material/LinearProgress";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {useNavigate} from 'react-router-dom';
import Slider, {SwipeDirection} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Paper} from "@mui/material";
import Typography from '@mui/material/Typography';
import useTheme from "@mui/material/styles/useTheme";


export default function DashboardCourses() {
    let navigate = useNavigate();
    let theme = useTheme();
    const [isSwiped, setIsSwiped] = useState(false);
    const isMobileSizeScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const onSwipe = (swipeDirection: SwipeDirection) => {
        if (swipeDirection) {
            setIsSwiped(true)
            setTimeout(() => {
                setIsSwiped(false)
            }, 500)
        }
    }

    const onClickCardHandler = (id: number) => {
        if (!isSwiped) {
           console.log("link")
        }
    }

    const arrowColor = theme.palette.success.dark

    return (
        <Card sx={{
            paddingLeft: isMobileSizeScreen ? 1 : 15,
            paddingRight: isMobileSizeScreen ? 1 : 15,
            '& .slick-prev': {marginLeft: isMobileSizeScreen ? 4 : 0},
            '& .slick-next': {marginRight: isMobileSizeScreen ? 8 : 4},
            '& .slick-prev:before': {
                color: arrowColor,
                fontSize: "50px",
            },
            '& .slick-next:before': {
                color: arrowColor,
                fontSize: "50px",
            },
            '& .slick-slider': {
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                '& ul': {
                    marginBottom: 5,
                    position: "relative"
                }
            },
            '& .slick-slide': {
                paddingLeft: isMobileSizeScreen ? 0 : 1,
                paddingRight: isMobileSizeScreen ? 0 : 1,
                paddingTop: isMobileSizeScreen ? 0 : 5,
                paddingBottom: isMobileSizeScreen ? 0 : 5,
            },
        }}
        >
            <Slider
                onSwipe={(swipeDirection: any) => onSwipe(swipeDirection)}
                speed={500}
                arrows={true}
                slidesToShow={isMobileSizeScreen ? 1 : 3}
                slidesToScroll={isMobileSizeScreen ? 1 : 3}
                infinite={false}
                dots={!isMobileSizeScreen}
            >
                {
                    [1,2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => {
                        return (
                            <Card onClick={() => onClickCardHandler(id)}
                                  key={id}
                                  sx={{
                                      cursor: "pointer",
                                      border: `2px solid ${theme.palette.primary.main}`,
                                      padding: "5px",
                                      transition: theme.transitions.create(["background-color", "transform"], {duration: theme.transitions.duration.standard}),
                                      "&:hover": {
                                          transform: "scale(0.95)"
                                      },
                                  }}
                            >
                                <CardActionArea>
                                    <CardMedia component="img" alt="green iguana" height="140"
                                               image="https://picsum.photos/301/200"/>
                                    <CardContent>
                                        <Typography gutterBottom>{id}</Typography>
                                        <Typography>{id}</Typography>
                                        <LinearProgress variant="determinate" value={50} sx={{marginTop: "30%"}}/>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })
                }
            </Slider>
        </Card>
    )
}


/*  <Grid container spacing={5} direction={"row"} border={"solid red"} sx={{
      overflow: "hidden",
      overflowX: "scroll",
  }}>
      <Grid item>
          <ListItem>
              <CourseCards
                  id={"courseName.id"}
                  name={"courseName.name"}
                  description={"courseName.description"}
                  events={1}
                  units={[]}
              />
          </ListItem>
      </Grid>
      <Grid item>
          <ListItem>
              <CourseCards
                  id={"courseName.id"}
                  name={"courseName.name"}
                  description={"courseName.description"}
                  events={1}
                  units={[]}
              />
          </ListItem>
      </Grid>
      <Grid item>
          <ListItem>
              <CourseCards
                  id={"courseName.id"}
                  name={"courseName.name"}
                  description={"courseName.description"}
                  events={1}
                  units={[]}
              />
          </ListItem>
      </Grid>

          <List className={classes.lists}>
              {
                  dashboardViewModel.courses.map((courseName) => {
                      return (
                          <ListItem
                              className={classes.list}
                              component={RouterLink}
                              to={LinkToCourseView(courseName.id)}
                              key={courseName.id}
                          >
                              <CourseCards
                                  id={courseName.id}
                                  name={courseName.name}
                                  description={courseName.description}
                                  events={courseName.events}
                                  units={courseName.units}
                              />
                          </ListItem>
                      )
                  })
              }
          </List>
</Grid>*/

/*const useStyles = makeStyles(() => ({
    list: {
        justifyContent: "space-around",
        margin: "40px",
    },
    lists: {
        /!*    display: 'flex',
            justifyContent: "space-around",*!/
        /!*   flexDirection: "row",
           margin: "10px",*!/
        /!* overflow: "hidden",
         overflowX: "scroll",*!/
        /!*     "&::-webkit-scrollbar": {
                 width: 10
             },
             "&::-webkit-scrollbar-track": {
                 boxShadow: `inset 0 0 9px #c7d8c6`
             },
             "&::-webkit-scrollbar-thumb": {
                 backgroundColor: "#3d6a66"
             }*!/
    },
    root1: {
        /!*        display: "flex",
                margin: "10px",
                border: "2px solid",
                borderColor: "#3d6a66",
                padding: "5px",
                /!*backgroundColor: "#dcdcdd",*!/
                color: "#2e3939",
                textAlign: "center"*!/
    },
}));*/


/*function CourseCards(courseName: Course) {
    const classes = useStyles();

    return (
        <Card onClick={() => console.log(3)}>
            <div className={classes.root1}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://picsum.photos/301/200"
                    />
                    <CardContent>
                        <Typography gutterBottom>
                            {courseName.name}
                        </Typography>
                        <Typography>
                            {courseName.description}
                        </Typography>
                        <LinearProgress variant="determinate" value={50} style={{marginTop: "30%"}}/>
                    </CardContent>
                </CardActionArea>
            </div>
        </Card>
    )
}*/
