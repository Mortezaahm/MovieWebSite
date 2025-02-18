import { useState } from "react";
import FollowUs from "./FollowUs";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import HeaderSlider from "./HeaderSlider";
import Cinema from "../../assets/images/Cinema.jpg";

export default function Header() {
  const [backgroundImage, setBackgroundImage] = useState(Cinema);

  return (
    <header
      className="py-6 md:py-12 transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 41, 59, 1), rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.2)), url(${backgroundImage})`,
        //transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="container">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider
          setBackgroundImage={setBackgroundImage}
          defaultImage={Cinema}
        />
      </div>
    </header>
  );
}
