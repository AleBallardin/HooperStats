import '../comps_styles/appStyles.css'

interface SessionProps{
    sessions: string[];
    removeSessions: (index:number) => void;
}

function Sessions({sessions, removeSessions}:SessionProps){
    return (
        <div className='div_sessions'>
            <ul className='sessions__container'>
                {sessions.map((session, index) => (
                    <li key={index} className='session__item'>
                    <p>{session}</p>
                    <div className='session__buttons'>
                        <button className='start__session'>Iniciar</button>
                        <button className='remove__session' onClick={() => removeSessions(index)}><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Sessions;