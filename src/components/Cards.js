import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imageOneBlurred from "../images/imageOneBlurred.jpg";
import imageTwoBlurred from "../images/imageTwoBlurred.jpg";
import imageThreeBlurred from "../images/imageThreeBlurred.jpg";


import "./cards.css";

const SimpleCard = () => {
  
  const [showCardOne, setShowCardOne] = useState(true);
  const [showCardTwo, setShowCardTwo] = useState(true);
  const [showCardThree, setShowCardThree] = useState(true);


  const useStyles = makeStyles({
    root: {
      backgroundColor: "none",
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
      {/***************** First Card ******************/}
      {showCardOne ? (
        <Card
          onMouseOver={() => setShowCardOne(false)}
         
          setclassName={classes.root}
          variant="outlined"
        >
          <img id="firstImage"
            src="https://sharp-wescoff-20e282.netlify.app/static/media/aOne.0b6d81c7.jpg"
            alt=""
            width="525"
            height="400"
          />
        </Card>
      ) : (
        <img   onMouseOut={() => setShowCardOne(true)} className="blurredImageOne" src={imageOneBlurred} width="525" height="400" alt="blurOne" />
      )}
 {/***************** Second Card ******************/}
{showCardTwo ? (
      <Card onMouseOver={() => setShowCardTwo(false)} className={classes.root} variant="outlined">
        <img
          src="https://sharp-wescoff-20e282.netlify.app/static/media/aTwo.4fad255a.jpg"
          alt=""
          width="525"
          height="400"
        />
      </Card> ) : ( <img onMouseOut={() => setShowCardTwo(true)}  src={imageTwoBlurred} width="525" height="400" alt="blurTwo"  /> )}

 {/***************** Third Card ******************/}
 {showCardThree ? (
      <Card onMouseOver={ () => setShowCardThree(false)} className={classes.root} variant="outlined">
        <img 
          src="https://sharp-wescoff-20e282.netlify.app/static/media/aThree.005f5082.jpg"
          alt=""
          width="525"
          height="400"
        />
      </Card>
 ) : ( <img onMouseOut={ () => setShowCardThree(true)}src={imageThreeBlurred}  width="525" height="400" alt="blurThree" />)}
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
