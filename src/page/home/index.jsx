import HeaderHome from "../../components/HeaderHome";
import FooterHome from "../../components/FooterHome";
import Form from "../../components/Form";
import Blog from "../../components/Blog";
import Video from "../../components/Video";
import Seen from "../../components/Seen";
import Course from "../../components/Course";
import "./home.css";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <Course />
      <Seen />
      <Video />
      <Blog />
      <Form />
      <FooterHome />
    </>
  );
};

export default Home;
