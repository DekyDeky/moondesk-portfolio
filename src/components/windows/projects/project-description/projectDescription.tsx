import './projectDescription.scss'

interface ProjectDescProps {
    imgURL: string,
    alt: string,
    name: string,
    content: string,
    creationDate: string,
    languages: string,
    libraries: string
}

export default function ProjectDesc({imgURL, alt, name, content, creationDate, languages, libraries}: ProjectDescProps){
    return(
        <div className='ProjectDesc'>
            <header>
                <img className='ProjectDesc-Photo' src={imgURL} alt={alt} />
                <h1 className='ProjectDesc-Title'>{name}</h1>
            </header>
            <main>
                <h2>Sobre</h2>
                <pre>{content}</pre>
            </main>
            <footer>
                <div className="ProjectDesc-CreationDate">
                    <h4>Criado em: </h4>
                    <p>{creationDate}</p>
                </div>
                <div className="ProjectDesc-Languages">
                    <h4>Linguagens: </h4>
                    <p>{languages}</p>
                </div>
                <div className="ProjectDesc-libraries">
                    <h4>Bibliotecas: </h4>
                    <p>{libraries}</p>
                </div>
            </footer>
        </div>
    )
}