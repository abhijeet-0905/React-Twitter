import React from "react";
import Header from "./Header";
import Para from "./Para";
import Input from "./Input";
import Icon from "./Icons";
import {Button, signUpOff, signUpOn} from "./Button";

function Form() {
    return (
        <form className="flex-col space-y-6">   
            <Header header= "Sign in to Twitter" class_val={["flex", "justify-center", "mt-6", "mb-8", "mr-24", "p-2", "text-2xl", "font-bold"]} />
            <Button label= "Sign in with Google" icon= {<Icon type= "icon" class_val= {["fab fa-google", "google-icon", "fa-x", "mr-2"]} />} id="google" class_val={["border-gray-200", "w-1/2", "rounded-3xl", "border-2", "h-10 "]} label_class= {["text-sm", "text-center"]} />
            <Button label= "Sign in with Apple" icon= {<Icon type= "icon" class_val= {["fab fa-apple", "fa-1x", "mr-2"]} />} class_val={["w-1/2", "rounded-3xl", "border-2", "h-10 "]} label_class= {["font-bold", "text-sm", "text-center"]} id="apple" />
            <Para paraText= "or" class_val= {["separator", "w-1/2"]} />
            <div className="flex justify-center">
            <Input label= "Phone, email or username" class_val= {["outline-blue-700", "absolute"]} label_class= {["absolute"]} />
            </div>
            <Button label= "Next" class_val= {["bg-black", "outline-gray-500", "outline-4", "w-1/2", "rounded-3xl", "border-2", "h-10 "]} label_class= {["font-bold", "text-white", "text-sm"]} id="next" />
            <Button label= "Forgot Password?" class_val= {["outline-gray-500", "w-1/2", "h-10", "rounded-3xl", "border-2", "h-10", "mb-6"]} label_class= {["font-bold", "text-sm"]} id="forgot" />
            <div className="flex justify-center space-x-1 mr-20">
                <Para paraText= "Don't have an account?" class_val={["flex-1", "text-stone-500"]} />
                <a id="signup" className="text-cyan-500" onMouseOver={signUpOn} onMouseOut={signUpOff}>Sign Up</a>
            </div>
        </form>
    );
};

export default Form;
