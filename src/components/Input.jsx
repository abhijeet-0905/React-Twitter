import React from "react";

function Input(props) {

    // Custom Class

    var custom_class = "";
    props["class_val"].forEach(function(_) {
        custom_class += _ + " ";
    });

     // Label Class

     var labelClass = "";
     props["label_class"].forEach(function(_) {
        labelClass += _ + " ";
     });

     function changeDivBorder() {
        document.getElementById("main-div").classList.add("changeDivColor");
     };

     function changeDivBorderAgain() {
        document.getElementById("main-div").classList.remove("changeDivColor");
     };

    return (
        <div className="relative border-2 rounded-md h-16 w-1/2" id="main-div" onFocus={changeDivBorder} onBlur={changeDivBorderAgain}>
            <input type="text" className ="inputText absolute ml-1 mt-5" required/>
            <span className ="floating-label absolute placeholder-stone-600">{props.label}</span>
        </div>
    );
};

export default Input;