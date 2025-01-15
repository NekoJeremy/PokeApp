import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function PokeCard({ name, classes, image, to, color }) {
  return (
    <Card className={classes.item} style={{ backgroundColor: color }}>
      <Link to={to}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <div className="eldiv">
            <Typography component="p" variant="h4" color="initial">
              {name}
            </Typography>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

PokeCard.defaultProps = {
  color: "yellow"
};

PokeCard.propTypes = {
  color: PropTypes.string
};

export default withStyles({
  item: {
    minWidth: "300px",
    textAlign: "center",
    margin: "2em",
    borderRadius: "60px"
  },
  media: {
    minHeight: "500px",
    minWidth: "500px"
  }
})(PokeCard);
