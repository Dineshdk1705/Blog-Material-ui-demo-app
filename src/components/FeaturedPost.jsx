import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const FeaturedPost = () => {
  return (
    <Card
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1451342695181-17c97b85aab4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundPosition: "center",
        padding: "35px 25px",
      }}
    >
      <CardContent>
        <Typography style={{ fontSize: 40 }} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
        <CardActions>
          <Button variant="text">Continue reading…</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FeaturedPost;
