import '../comps_styles/appStyles.css'
import { Session } from './types';
import { useNavigate } from 'react-router-dom';

interface SessionProps{
    sessions: Session[];
    removeSessions: (index:number) => void;
}

function Sessions({sessions, removeSessions}:SessionProps){


  const navigate = useNavigate();

  const showSingleSession = ()=>{
        navigate('/singleSession')
  }

    return (
        <div className='div_sessions'>
            <ul className='sessions__container'>
                {sessions.map((session, index) => (
                    <li key={index} className='session__item'>
                    <p>{session.name}</p>
                    <div className='session__buttons'>
                        <button className='start__session' onClick={showSingleSession}>Visualizar</button>
                        <button className='remove__session' onClick={() => removeSessions(index)}><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </li>
                ))}
                
            </ul>
        </div>
    )
}


export default Sessions;