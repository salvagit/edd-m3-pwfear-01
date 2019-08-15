import React, { memo } from "react";
import "./styles.css";

const Menu = memo(() => {
  return (
    <div>
      <ul>
        <li>el1</li>
        <li>el2</li>
        <li>el3</li>
      </ul>
    </div>
  );
});

export default Menu;
