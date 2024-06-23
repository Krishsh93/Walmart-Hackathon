import HomeBelowBody from "../components/HomePage/HomeBelowBody";
import HomePageBody from "../components/HomePage/HomePageBody";
import Navbar from "../components/CommonComponents/Navbar";
import MailTo from "../components/HomePage/MailTo";
import Footer from "../components/CommonComponents/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <HomePageBody />
      <HomeBelowBody />
      <MailTo />
      <Footer />
    </div>
  );
};

export default Home;
