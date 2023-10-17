"use client";

import { useEffect, useRef, useState } from "react";


/**
 * TypeWriter gives the effect of text being typed out character by character.
 * Uses 
 * @param {*} text The text to be displayed
 * @param {*} typeSpeed The time, in milliseconds, it takes to type one character
 * @returns A 'p' element that types out characters sequentially
 */
export default function TypeWriter({text="Default", typeSpeed=100}){
    // Counts the current index in 'text' parameter
    const charIndex = useRef(0);

    // Used to display the current substring of 'text'
    const [currentText, setCurrentText] = useState("");

    // The last character of string used to imitate the command prompt look
    const textEnd1 = '▌';
    const textEnd2 = '_';

    // State to track if characters have finished printing
    const [finishedTyping, setFinishedTyping] = useState(false);

    // Used to "animate" the cursor
    const [textEnd, setTextEnd] = useState(textEnd1);

    useEffect(() => {
        setTimeout(() => {
            let index = charIndex.current;

            // Stores the next iteration of the text which includes the subsequent character
            let newText = currentText;

            // Checks for any control characters
            if(text.charAt(index) == '\\'){
                console.log("Found backslash at index: " + index);
                if(index + 1 != text.length){
                    newText += getControlCode(text.charAt(index + 1));
                    charIndex.current += 2;
                }
            }
            // Resumes adding characters normally
            else{
                newText += text.charAt(index);
                charIndex.current += 1;
            }
            setCurrentText(newText);
        }, typeSpeed);
    }, [currentText])

    // Determines when TypeWriter finishes typing
    setTimeout(() => {
        setFinishedTyping(true);
    }, typeSpeed * (text.length + 5));

    // Alternates 'textEnd' between characters after typing has completed
    if(finishedTyping){
        setTimeout(() => {
            if(textEnd == '_'){
                setTextEnd(textEnd1);
            }
            else{
                setTextEnd(textEnd2);
            }
        }, typeSpeed * 10);
    }
    
    return(
        <p className="whitespace-pre-wrap">{currentText + textEnd}</p>
    )
}

function getControlCode(character){
    switch(character){
        case 'n':
            return "\n";
        case 't':
            return "\t";
    }
}