import React from "react";
const fullyear = new Date().getFullYear();
function Footer() {
  return <footer>Copyright @ {fullyear}</footer>;
}

export default Footer;
