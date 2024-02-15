import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { posts } from "../Data/data";
import Markdown from "markdown-to-jsx";

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Typography>{title}</Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.title}>{post.body}</Markdown>
      ))}
    </Grid>
  );
};

export default Main;
