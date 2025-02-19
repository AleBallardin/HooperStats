import '../comps_styles/appStyles.css'
import { useState } from 'react'

interface CreateSessionProps {
    addSession: (sessionName: string) => void
}

function CreateSession({ addSession }: CreateSessionProps){

    const [sessionName, setSessionName] = useState<string>("");

    function criaTreino(){
        if (!sessionName.trim()) return;

        addSession(sessionName)
        setSessionName("")

    }


    return (
        <div className='register__container'>
            <h1>Sessões</h1>

            
            <button className='register__btn' onClick={criaTreino}>
                Nova Sessão
                <i className="fa-regular fa-square-plus"></i>
            </button>
            <input 
                className='input__session'
                type="text" 
                placeholder="Nome do treino"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
            />

        </div>
    )
}

export default CreateSession;