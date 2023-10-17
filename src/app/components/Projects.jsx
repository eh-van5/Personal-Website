export default function Projects(){
    // const tabHeight = 6; // Percentage of container height

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            Projects
            <div className="w-[70vw] h-[70vh] bg-slate-800
            rounded-xl">
                <div className="w-full h-full group">
                    <div className="project-tab">
                        Project1
                    </div>
                    <div className="project-tab">
                        Project2
                    </div>
                    <div className={`relative h-[90%] w-full bg-slate-900`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectTab(){
    
}