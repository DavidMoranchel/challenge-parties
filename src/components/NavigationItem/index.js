import React from "react";

// External dependencies
import { Link } from "react-router-dom";

// CSS
import './NavigationItem.css'

export default function NavigationItem({ name, path }) {
  return (
    <>
      <li>
        <Link className="Link" to={path}>{name}</Link>
      </li>
    </>
  );
}
