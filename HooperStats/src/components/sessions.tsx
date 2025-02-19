import '../comps_styles/appStyles.css'

function Sessions(){
    return (
        <div className='div_sessions'>
            <ul className='sessions__container'>
                <li className='session__item'>
                    <p>Treino A</p>
                    <div className='session__buttons'>
                        <button className='start__session'>Iniciar</button>
                        <button className='remove__session'><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sessions;