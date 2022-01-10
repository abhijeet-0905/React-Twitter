import React from "react";

function Icon(props) {

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

    if (props.type === "link") {
        return (
            <link rel="icon" href={props.path} />
        );
    } else if (props.type === "icon") {
        return (
            <i id= {props.id} className={custom_class} styles={custom_style}></i>
        );
    }
};

export default Icon;