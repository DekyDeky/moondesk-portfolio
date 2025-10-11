import TC19 from './TC19.ogg';

import './friend.scss'

export default function Friend(){
    return (
        <main className='friend'>
            <section className='friend-content'>

                <div className="friend-content-header">
                    <h1 className='title'>Fábio</h1>
                    <h4 className='author'>Por: Ricardo Hideki</h4>
                    <h4>11 de Outubro de 2025</h4>
                </div>

                <p>Um dos meus jogos favoritos de todos os tempos se chama The Talos Principle, é um jogo de puzzle que discute diversos temas que possuem ligação com o mundo da filosofia e da ficção científica, dentre eles a mortalidade humana e sua insignificância em relação ao vasto universo.   
    Nesse jogo podemos encontrar áudios denomiados capsulas do tempo, os quais foram gravados pelo que aparenta ser uma cientista chefe de um projeto. Um desses áudios entitulado "Cápsula do Tempo - 19" é encontrado nos primeiros andares da temida torre e lê-se:  </p>

                <p className='citation'>"Meu melhor amigo morreu hoje. Em abstrato, uma morte humana é nada, é claro. Um pontinho insignificante num mar de bilhões. Mas o mundo não é abstrato. A realidade é sempre… específica. Dolorosamente. E aquele específico ser humano , que existiu apenas uma vez em toda a infinidade de tempo e espaço… aquele ser humano… era meu amigo. Mas ele não vai voltar, não importa o quanto eu queira. Então.. tudo que posso fazer, no final, é continuar trabalhando. Porque aquela especificidade, aquela singularidade de pessoas - de pessoas reais - é digno de se preservar."   </p>

                <audio controls>
                    <source src={TC19} type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>

                <p>O momento em que estava jogando esse jogo eu estava com medo. Medo de não ser útil o suficiente, medo de decepcionar, medo de morrer e nada ter válido a pena.    
    Esse trecho em específico me marcou muito, por ser um dos primeiros áudios que você encontra no jogo você não entende muito bem o que ele significa, mas ainda sim ele bateu de uma forma esquisita.   
    Ao encontrar grande parte dos áudios você entende o que está acontecendo até esse ponto, mas não irei me prolongar muito mais pois esse texto não é sobre The Talos Principle.</p>

                <p>O ponto que quero chegar é: Cada ser humano, do mais miserável ao mais brilhante de nós, se trata de um **indivíduo**  complexo. O que nos diferencia dos outros animais é a complexidade do nosso individualismo, por mais que sejamos de uma mesma espécie, cada um de nós possuímos características tão distintas…</p>

                <p>E esse ser humano que dedico este texto era o exemplo perfeito disso. Creio que o fábio seja a pessoa mais "alternativa" que conheci, não por que ele seguia um padrão estético exótico ou *underground* e sim por que, de certa forma, ele se destacava dos outros humanos por conta da sua incrível individualidade.  </p>

                <p>É de certa forma deprimente falar isso, mas é muito difícil encontrar pessoas tão queridas e carinhosas como o Fábio. Ele ainda era um ser humano, coberto de erros e defeitos, mas que nunca fez com que algum desses problemas descreve-se quem ele era. Seus conselhos e opniões fortes me ajudaram a moldar a pessoa que sou hoje e eu sou muito grato a ele por isso.   </p>

                <p>Por mais que ele não fosse influente em relação aos poderosos do mundo ou a vastidão do infinito tempo e espaço, ele com certeza não era só mais um entre o mar de bilhões. </p>

                <p>Eu tenho muitas coisas que me arrependo, lembro-me dele me chamar para jogar um modpack de minecraft que ele havia achado e eu fazia corpo mole, pois eu não estava com "vibe" para minecraft. Por mais que eu realmente não quisesse jogar, me partia o coração ver ele todo xoxô por não conseguir o que queria.</p>

                <p>A última vez que tive contato com ele, ele havia me chamado, estava se sentido sozinho após o Nathaniel ter voltado de sua estadia em sua casa. Seu avô estava próximo de viajar para outro estado com uma ótima oportunidade de emprego. Eu troquei algumas mensagens e ficamos em call por um tempo. Ele saiu e me mandou mensagem falando que estava no hospital, achei que estava apenas tomando soro, uma coisa relativamente comum por conta do seu histórico de ansiedade, então não dei muita bola. </p>

                <p>Ao decorrer de alguns dias, comecei a sentir falta de sua presença, porém, não tomei a decisão de enviar alguma mensagem para ele, enviando apenas ontem (10/10), em relação ao dia que escrevo esse texto, 24 horas após sua partida.</p>

                <p>Fiquei levemente preocupado e comentei com Nate e Rafael sobre, estavamos achando que se tratava apenas de falta de internet, pois ele nem ao menos recebia mensagem.</p>

                <p>Foi hoje (11/10) em que Nathaniel me ligou e me deixou com essa notícia deprimente.</p>

                <p>Ele não vai voltar… Eu não vou poder mais jogar os modpacks que ele encontrava, não vou mais receber mensagens do tipo "Deky seu linduu, vamos jogar lol??", não vou mais ser ameçado de receber presentes, não vou mais ver o símbolo de online em seu perfil, não vou mais vê-lo em alguma chamada no o Nate, não vou mais ouvir a sua voz…</p>

                <p>Não vou mais poder ir te vistar em janeiro…</p>

                <p>Por mais que seja doloroso, o que me resta agora é continuar. Seguir com o que me sobrou dele, suas lições, seus presentes, e suas incríveis memórias. Continuar trabalhando e me tornar a pessoa que traria orgulho a ele. Pois como foi dito pela cientista Alexandra Drennan em sua cápsula do tempo: </p>

                <p className='citation'>É algo digno de se preservar.</p>

                <p>Independente onde esteja, caro amigo, saiba que eu te amo eu farei meu máximo para te dar orgulho.</p>

                <p>Eu escrevo esse texto sem apagar nenhuma linha, quero que ele seja o mais autêntico sobre o que sinto sobre ele, então não irei perder meu tempo corrigindo erros de português.</p>

                <p className='warning-citation'>Essa página será melhorada futuramente, eu apenas gostaria de deixar essa homenagem ao meu querido amigo.</p>
            </section>

        </main>
    )
}