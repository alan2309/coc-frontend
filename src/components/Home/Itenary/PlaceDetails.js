import React, { Fragment } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./PlaceDetails.styles";

const PlaceDetails = ({
  place,
  selected,
  refProp,
  set_selected_place,
  selected_place,
  currentDay,
}) => {
  const {
    name,
    photo,
    price_level,
    ranking,
    latitude,
    longitude,
    awards,
    cuisine,
    location_id,
    address,
    phone,
    distance_string,
    web_url,
    website,
    rating,
    num_reviews,
  } = place;
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Fragment>
      {name && (
        <Card elevation={6} style={{ margin: "12px" }}>
          <CardMedia
            style={{ height: 250 }}
            image={
              photo
                ? photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {name} ({distance_string || `<0km`})
            </Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Rating name="read-only" value={Number(rating)} readOnly />
              <Typography component="legend">
                {num_reviews} review{num_reviews > 1 && "s"}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {ranking}
              </Typography>
            </Box>
            {awards
              ?.filter((item, index) => index < 3)
              .map((award) => (
                <Box
                  my={1}
                  display="flex"
                  justifyContent="space-between"
                  key={award.display_name}
                >
                  <img src={award.images.small} alt={award.display_name} />
                  <Typography variant="subtitle2" color="textSecondary">
                    {award.display_name}
                  </Typography>
                </Box>
              ))}
            {cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                className={classes.chip}
              />
            ))}
            {address && (
              <Typography
                gutterBottom
                variant="subtitle2"
                color="textSecondary"
                className={classes.subtitle}
              >
                <LocationOnIcon /> {address}
              </Typography>
            )}
            {phone && (
              <Typography
                gutterBottom
                variant="subtitle2"
                color="textSecondary"
                className={classes.spacing}
              >
                <PhoneIcon /> {phone}
              </Typography>
            )}

            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={(e) => {
                  let items = [...selected_place];
                  // 2. Make a shallow copy of the item you want to mutate
                  console.log(items);
                  let item = items[currentDay - 1];
                  console.log(item);
                  // 3. Replace the property you're intested in
                  item.push({
                    location_id: location_id,
                    latitude: latitude,
                    longitude: longitude,
                    name: name,
                    photo:
                      photo?.images.large.url ||
                      "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",
                  });
                  // 4. Put it back into our array. N.B. we *are* mutating the array here,
                  //    but that's why we made a copy first
                  items[currentDay - 1] = item;
                  set_selected_place(items);
                }}
              >
                Add
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
};

export default PlaceDetails;
