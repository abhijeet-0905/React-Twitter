import React from "react";

function Header(props) {

    // Custom Styles

    var custom_style = "";
    for(var s in props["cstyle"]) {
        custom_style += s + ":" + props.cstyle[s] + ";";
    }

    // Custom Class

    var custom_class = "";
   
    props["class_val"].forEach(function(_) {
        custom_class += _ + " ";
    });


    //
    
    return (
        <div>
            <h2 className={custom_class} styles={custom_style}>{props.header}</h2>
        </div>
    )
};

export default Header;