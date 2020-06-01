import React from "react";

// Components
import Header from "../../components/Header";
import NavigationList from '../../components/NavigationList'

// Statics
import { CHALLENGE_OPTIONS } from "../../statics/Home";

export default function Home() {
  return (
    <div className="Container">
      <Header title={"Challenger party"} />
      <div className="Content">
        <NavigationList items={CHALLENGE_OPTIONS}/>
      </div>
    </div>
  );
}
