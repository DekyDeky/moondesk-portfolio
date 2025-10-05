import ThisPCIcon from '../../../assets/this_pc/this-pc.svg'
import Mail from '../../../assets/this_pc/mail.svg'
import X from '../../../assets/this_pc/x.svg'

import './ThisPC.scss'

export default function ThisPC(){
    return (
        <div className='ThisPC'>
            <header className='ThisPC-header'>
                <img className='ThisPC-Icon' src={ThisPCIcon} alt="Ícone de um computador com uma lua dentro do monitor" />
                <div className='ThisPC-header-text'>
                    <h4>Deky's</h4>
                    <h1>MoonDesk Systems</h1>
                    <h3>Almost definitive Edition</h3>
                    <p>Copyright © pls don't copy it :(</p>
                </div>
            </header>
            <main className='ThisPC-main'>
                <div className="ThisPC-main-text">
                    <p>Olá! Este pequeno site que foi criado por mim se trata de um Portifólio/Blog onde eu escrevo algumas coisas quando sinto necessidade. Sinta-se livre para explorar meus projetos, jogar os joguinhos que fiz ou interagir comigo, seja enviando uma crítica, ideia ou apenas um oi.</p>
                    <p>Este site está ligado a um tipo de hub que estou desenvolvendo com alguns amigos, o qual é chamado de “Full of 9 Hours” (Cheio das nove horas). Eu ainda não entendi o significado do nome, mas achei legal. </p>
                    <p>Procuro atualizar esse site sempre que possível, ainda não sei se irei manter essa “estética” de sistema operacional de 2000/2010. (Me baseei no design do windows xp e o mac os 8).</p>
                    <p>Caso tenha interesse em me contatar ou apenas me conhecer melhor, você pode me achar no antigo twitter ou no meu email de contato que são:</p>
                </div>
                <div className="ThisPC-main-media">
                    <div className="ThisPC-main-media-item">
                        <img src={X} alt="Logo do X, antigo twitter" />
                        <h3>@DekyDekyDoo</h3>
                    </div>
                    <div className="ThisPC-main-media-item">
                        <img src={Mail} alt="Ícone de uma carta referenciando e-mail" />
                        <h3>dekydeky.contato@gmail.com</h3>
                    </div>
                </div>
                <div className='ThisPC-main-conclusion'>
                    <p>E por fim... Aproveite sua estádia por aqui!!</p>    
                </div>
            </main>
            <footer className='ThisPC-footer'>
                <div className='ThisPC-footer-Icon'>
                    <p> Ícones utilizados no site: </p>
                    <a href="https://www.svgrepo.com/">https://www.svgrepo.com/</a>
                </div>
                <div className='ThisPC-footer-Icon'>
                    <p> Fonte Principal: </p>
                    <a href="https://fonts.google.com/specimen/League+Spartan">League Spartan</a>
                </div>
            </footer>
        </div>
    )
}