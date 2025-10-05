import Warn from '../../assets/warn.svg'

import './UnderConstruct.scss'

export default function UnderConstruct(){
    return (
        <div className='underConstruct'>
            <img src={Warn} alt="Ícone de uma pessoa com uma placa de aviso, um triângulo com uma exclamação dentro."/>
            <h1>Atenção!</h1>
            <h2>Esta seção ainda está em construção!</h2>
        </div>
    )
}