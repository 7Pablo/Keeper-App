import React from "react";

function Footer() {

    var dateYear = new Date().getFullYear();

    return(
        <footer>
            <p> Pablo Armendariz © {dateYear} </p>
        </footer>
    );
}

export default Footer;