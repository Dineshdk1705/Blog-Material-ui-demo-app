import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1">{post.description}</Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden mdDown>
            <CardMedia style={{ width: 160 }} image={post.image} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
