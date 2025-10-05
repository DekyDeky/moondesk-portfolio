interface ProjectItemProp {
    link: string
    imgURL: string,
    alt: string,
    name: string,
    id: string,
    setHover: React.Dispatch<React.SetStateAction<string>>
}

export default function ProjectItem({link, imgURL, name, alt, id, setHover}: ProjectItemProp){
    return(
        <a href={link} className='projects-itens-icon' id={id} 
            onMouseEnter={() => setHover(name)}
            onMouseLeave={() => setHover('')}
        >
            <img className='project-icon' src={imgURL} alt={alt} />
            <h2>{name}</h2>
        </a>
    )
}