import React from "react";
import Icon from "./Icons";
import Form from "./Form";
import { Button } from "./Button";

function Wrapper() {
    return (
        <div className="container flex justify-center">
            <div className="main-box flex-col m-10 rounded-2xl justify-center  bg-white ">
                <div className="sm:justify-center">
                    <div className="float-root">
                        <div className="float-left pl-4">
                            <Button label= {"\u00D7"} class_val= {[]} label_class= {["text-3xl"]} id="close" />
                        </div>
                        <div className="">
                            <Icon id= "twitter-icon" type= "icon" class_val= {["fab fa-twitter", "fa-2x", "mt-2", "mr-8", "inset-x-0", "top-0", "flex", "justify-center"]}   />
                        </div>
                    </div>
                </div>
                

                <Form />
            </div>
        </div>
    );
};

export default Wrapper;
