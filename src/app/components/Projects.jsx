export default function Projects(){

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            Projects
            <div className="w-[70vw] h-[70vh] bg-slate-800
            rounded-lg">
                <div className="w-full h-full">
                    <button className="project-tab first:ml-2">
                        Project1
                    </button>
                    <button className="project-tab">
                        Project2
                    </button>
                    <div className={`relative h-[90%] w-full bg-slate-900`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectTab(){
    
}