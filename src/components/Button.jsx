import React from "react";

function Button(props) {

    // Custom Styles

    // var custom_style = "";
    // for(var s in props["cstyle"]) {
    //     custom_style += s + ":" + props.cstyle[s] + ";";
    // }

    // Custom Class

    var custom_class = "";
    props["class_val"].forEach(function(_) {
        custom_class += _ + " ";
    });


    //Label Class
    var lClass = "";
    props["label_class"].forEach(function(_) {
        lClass += _ + " ";
    });

    
    function mouseOver() {
        if (props.id === "google") {
            document.getElementById(props.id).classList.add("google-btn");
        } else if (props.id === "apple") {
            document.getElementById(props.id).classList.add("apple-btn");
        } else if (props.id === "next") {
            document.getElementById(props.id).classList.add("next-btn");
        } else if (props.id === "forgot") {
            document.getElementById(props.id).classList.add("forgot-btn");
        } else if (props.id === "close") {
            document.getElementById(props.id).classList.add("close-btn");
        }
    };
    
    function mouseOut() {
        if (props.id === "google") {
            document.getElementById(props.id).classList.remove("google-btn");
        } else if (props.id === "apple") {
            document.getElementById(props.id).classList.remove("apple-btn");
        } else if (props.id === "next") {
            document.getElementById(props.id).classList.remove("next-btn");
        } else if (props.id === "forgot") {
            document.getElementById(props.id).classList.remove("forgot-btn");
        } else if (props.id === "close") {
            document.getElementById(props.id).classList.remove("close-btn");
        }
    };

    return (
        <div className= "flex justify-center text-center">
            <button className={custom_class} id= {props.id} onMouseOver= {mouseOver} onMouseOut= {mouseOut}>
                <span>{props.icon}</span>
                <span className= {lClass}>{props.label}</span>
            </button>
        </div>
    );
};

//Sign Up Link
function signUpOn() {
    document.getElementById("signup").style.textDecoration = "underline";
};

function signUpOff() {
    document.getElementById("signup").style.textDecoration = "none";
};

// Close Button
function closeOn() {
    document.getElementById("close").style.backgroundColor = "#E7E7DE";
};

function closeOff() {
    document.getElementById("close").style.backgroundColor = "";
};

export {Button, signUpOn, signUpOff, closeOn, closeOff};