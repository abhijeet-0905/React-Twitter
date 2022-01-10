import React from "react";

function Para(props) {

        // Custom Class

        var custom_class = "";
        props["class_val"].forEach(function(_) {
            custom_class += _ + " ";
        });

        const default_class = "flex justify-center";

        // custom_class += default_class;

    return (
        <div className= {default_class}>
            <div className= {custom_class}>{props.paraText}</div>
        </div>
    );
};

export default Para;