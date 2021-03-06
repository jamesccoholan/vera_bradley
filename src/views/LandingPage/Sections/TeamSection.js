import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const team = [
  {
    name: "Jake",
    job: "Creative Director",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.11_PM_tZMZzlmpz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058812848",
  },
  {
    name: "Lauren",
    job: "Artist",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.11_PM_tZMZzlmpz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058812848",
  },
  {
    name: "Dan",
    job: "Engineer",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.11_PM_tZMZzlmpz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058812848",
  },
];

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>The Team</h2>
      <div>
        <GridContainer>
          {team.map(function (member) {
            return (
              <GridItem key={member.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={member.img}
                      alt="Team Member"
                      className={imageClasses}
                    />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.job}</small>
                  </h4>
                  <CardBody></CardBody>
                  <CardFooter className={classes.justifyCenter}></CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
