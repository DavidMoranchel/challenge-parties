import React from "react";

// Components
import NavigationItem from "../NavigationItem";

// CSS
import './NavigationList.css'

export default function NavigationList({ items }) {
  const renderOptions = () => {
    return items.map(({ name, path }, index) => {
      return <NavigationItem key={`${name}${index}`} name={name} path={path} />;
    });
  };

  return (
    <nav className="NavigationList">
      <ul className="List">{renderOptions()}</ul>
    </nav>
  );
}
