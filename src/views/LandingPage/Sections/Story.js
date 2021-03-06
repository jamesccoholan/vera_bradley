import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <h1 className={classes.title}>The Collection</h1>
          <br />
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h2>Heritage Pass</h2>
              <h4 className={classes.description}>
                {
                  "Created to introduce loyal Vera Bradley customers to the metaverse, the Heritage Pass will be a standardized token, featuring custom animation of our most iconic travel bag, the Large Travel Duffel. Available for purchase for $82 USD, each Heritage Pass will also come with a coveted Limited Edition Jilly Bag in one of four special archived prints, to be shipped within two weeks of mint. Customers who purchase the Heritage Pass will also receive early access to purchase the 1982 Collection."
                }
              </h4>
              <br />
              <h2>1982 Collection</h2>
              <h4 className={classes.description}>
                {
                  "Carefully crafted and algorithmically generated by our bespoke software, the 1982 Collection celebrates Vera Bradley’s colorful patterns, synonymous with the Vera Bradley name. Available for purchase for $198.20 USD, each hand-drawn work of art shares the same hallmarks: optimism, happiness, charm, energy, and joy. We like to think of our pattern language as our very own design signature, raising the standards for Fashion NFT Collectibles. Most importantly, 100% of the proceeds from the 1982 Collection are to be donated to breast cancer research. It is our hope that everyone in the Veraverse who acquires this very special 1982 NFT will change out their PFP background to show their support for October National Breast Cancer Awareness Month."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2_1__g_R6buc0B.11?ik-sdk-version=javascript-1.4.3&updatedAt=1657058814808"
                }
                alt="Disconaut Scene"
              />
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.34_PM_QDaUcmL8E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058813934"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h2>Launching Fall 2022</h2>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "Available for purchase in the Veraverse in both USD and ETH. Heritage Pass available for Public Sale on September 15th. There is no Presale Mint. 1982 Collection available for Presale on September 29th and 30th and Public Sale on October 1st."
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h2>Which 1982 NFT is the rarest?</h2>
              <h4 className={classes.description}>
                {
                  "Each 1982 Collection NFT has a combination of multiple elements and traits, and is displayed on one of 40 Backgrounds (including 3 rare ones which are mainly pink, to honor of National Breast Cancer Awareness Month)."
                }
              </h4>
              <br />
              <h4 className={classes.description}>
                {
                  "Using 40 unique Vera Bradley patterns and prints, plus 950+ overall elements, and 492,778 ways to generate (including background color, foreground color, stripes, etc.), there are over XXX possible combinations in this collection, making it one of the most unique fashion NFT projects to date."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-05_at_2.58.20_PM_L4c6bKMNc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657058813725"
                }
                alt="Party Scene"
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
