import { TestAbout } from "@/icons";
import TypeWriter from "./TypeWriter";

/**
 * The about section
 * Who I am, what I do, why I do, etc.
 * The elevator pitch
 * @returns <div> element
 */
export default function About(){
    return(
        <div className="flex flex-row items-center h-screen">
            <div className="w-[50vh]">
                <TestAbout/>
            </div>
            <div className="w-[30vw]">
                <TypeWriter 
                text="Bro what is blud\ntalking about bro"
                typeSpeed={50}/>
            </div>
        </div>
    )
}