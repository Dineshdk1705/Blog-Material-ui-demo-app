import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts, sidebar } from "./Data/data";
import PostCard from "./components/PostCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={2}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} style={{ marginTop: 3 }}>
          <Main title="From The Firehose" />
          <Sidebar sidebar={sidebar} />
        </Grid>
        <Footer title="Footer" description="Write something for footer" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
