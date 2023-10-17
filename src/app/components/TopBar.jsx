import { HomeIcon, AboutIcon, ProjectsIcon, SkillsIcon, ContactIcon } from "@/icons"

export default function TopBar(){
    return(
        <nav className="sticky flex items-center justify-between">
            <Icon icon={<HomeIcon/>} tooltip="Home"/>
            <div className="flex space-x-10">
                <Icon icon={<AboutIcon/>} tooltip="About"/>
                <Icon icon={<ProjectsIcon/>} tooltip="Projects"/>
                <Icon icon={<SkillsIcon/>} tooltip="Skills"/>
                <Icon icon={<ContactIcon/>} tooltip="Contact"/>
            </div>
        </nav>
    )
}

/**
 * An icon with a tooltip that displays when hovered
 * @param {*} icon A react element that contains an icon
 * @param {*} tooltip The text to display when icon is hovered
 * @returns <div>
 */
function Icon({icon, tooltip="Tooltip"}){
    return(
        <div className="navbar-component group">
            {icon}
            <span className="navbar-tooltip group-hover:scale-100">
                {tooltip}
            </span>
        </div>
    )
}