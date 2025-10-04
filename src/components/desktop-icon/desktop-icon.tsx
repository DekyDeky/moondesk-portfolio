import './desktop-icon.scss'

interface DesktopTypes {
    icon: string;
    name: string;
    alt: string
}

export default function DesktopIcon({icon, name, alt}: DesktopTypes){
    return(
        <div className="desktop-item">
            <img className="desktop-item-icon" src={icon} alt={alt} />
            <h4 className="dekstop-item-name">{name}</h4>
        </div>
    )
}