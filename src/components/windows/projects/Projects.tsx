import ProjectItem from './project-item/project-item'
import ProjectDesc from './project-description/projectDescription'

import Harvey from '../../../assets/projects/Harvey.svg'
import IFMais from '../../../assets/projects/ifmais.png'

import './Projects.scss'
import { useState } from 'react'

const HarveyContent = `Harvey tools se trata de um protótipo que pretendo dar vida. Algum dia...

Se trata de um conjunto de ferramentas que busca auxiliar jogadores e mestres de RPG de Mesa, não suportando um sistema específico e buscando ser genérico para atender todos os públicos.

Esse projeto está engavetado a algum tempo, há muitas coisas que desejo mudar e muita coisa para fazer ainda. Que sabe eu não faça um "dev-log" no blog.
`

const IFMaisContent = `O Portal: IF Mais é um sistema que busca auxiliar estudantes a entrarem no mercado de trabalho e pequenos empreendedores em dificuldades que possam ter.

É um projeto que participo enquanto faço minha graduação em TADS no IFPR.

Como dito anteriormente, ele está ligado ao projeto IF +Empreendedor que visa impulsionar o desenvolvimento econômico e social de Telêmaco Borba, fortalecendo Microempreendedores Individuais (MEIs) e autônomos, especialmente aqueles em estágio inicial.
`

export default function Projects(){
    const [project, setProject] = useState<string>('');

    return (
        <div className='projects'>
            <div className='projects-itens'>
                <ProjectItem 
                    link='https://www.figma.com/design/UjFhxYxZ1VTgxVdy1EAvqg/Harvey-Tools?node-id=0-1&t=j4RgzX7jt9OU7Qyh-1'
                    imgURL={Harvey} 
                    alt="O símbolo de um passáro coberto por um Dado de 20 lados"
                    name='Harvey Tools'
                    id="Harvey"
                    setHover={setProject}
                />

                <ProjectItem 
                    link='https://github.com/ProjetoIFMAIS2025/Portal-IFMais/tree/main'
                    imgURL={IFMais} 
                    alt="A logo do Projeto IFMais, se trata de dois quebra-cabeças um do lado do outro, o da esquerda é azul e possui o F como logo do IF, já o da direita é verde e possui um símbolo de adição nele. Abaixo dos quebra-cabeças há escrito IF Mais Campus Telêmaco Borba."
                    name='Portal: IFMais'
                    id="IFmais"
                    setHover={setProject}
                />
            </div>
            <div className='projects-description'>
                {project == "Harvey Tools" && 
                    <ProjectDesc
                    imgURL={Harvey}
                    alt="O símbolo de um passáro coberto por um Dado de 20 lados"
                    name="Harvey Tools"
                    content={HarveyContent}
                    creationDate='Não lançado'
                    languages='Indefinido'
                    libraries='Indefinido'
                    />
                }
                {project == "Portal: IFMais" && 
                    <ProjectDesc
                    imgURL={IFMais}
                    alt="A logo do Projeto IFMais, se trata de dois quebra-cabeças um do lado do outro, o da esquerda é azul e possui o F como logo do IF, já o da direita é verde e possui um símbolo de adição nele. Abaixo dos quebra-cabeças há escrito IF Mais Campus Telêmaco Borba."
                    name="Portal: IFMais"
                    content={IFMaisContent}
                    creationDate='15 de Agosto de 2025'
                    languages='PHP, javaScript'
                    libraries='React'
                    />
                }
            </div>
        </div>
    )
}