import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./cards.css";

const SimpleCard = () => {
  //cards after hover
  const [showBlurOne, setShowBlurOne] = useState(false);
  const [showBlurTwo, setShowBlurTwo] = useState(false);
  const [showBlurThree,setShowBlurThree] = useState(false);
  // Cards before hover
  const [showCardOne,setShowCardOne]=useState(true);
  const [showCardTwo,setShowCardTwo]=useState(true);
  const [showCardThree,setShowCardThree]=useState(true);

  const showFirstCard = () => {
    setShowBlurOne(true);
    setShowCardOne(false);
  }

  const showSecondCard=()=>{
    setShowBlurTwo(true);
    setShowCardTwo(false);
  }

  const showThirdCard = () => {
    setShowBlurThree(true);
    setShowCardThree(false);
  }

  
  const useStyles = makeStyles({
    root: {
      backgroundColor: "orange",
      height: 400,
      width: 525,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  console.log();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="card-container">
      <Card className={classes.root} variant="outlined">
        <img
          src="https://sharp-wescoff-20e282.netlify.app/static/media/aOne.0b6d81c7.jpg"
          alt=""
          width="525"
          height="400"
        />
      </Card>

      <Card className={classes.root} variant="outlined">
        <img
          src="https://sharp-wescoff-20e282.netlify.app/static/media/aTwo.4fad255a.jpg"
          alt=""
          width="525"
          height="400"
        />
      </Card>

      <Card className={classes.root} variant="outlined">
        <img
          src="https://sharp-wescoff-20e282.netlify.app/static/media/aThree.005f5082.jpg"
          alt=""
          width="525"
          height="400"
        />
      </Card>
    </div>
  );
};

const Cards = () => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  return (
    <div>
      <SimpleCard />
    </div>
  );
};
export default Cards;
