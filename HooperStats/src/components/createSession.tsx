import '../comps_styles/appStyles.css'
import { useState } from 'react'
import { Exercise } from './types';

interface CreateSessionProps {
    addSession: (sessionName: string, exercises: Exercise[], time: number) => void;
}

function CreateSession({ addSession }: CreateSessionProps){

    const [sessionName, setSessionName] = useState<string>("");

    function criaTreino() {
        if (!sessionName.trim()) return;
    
        addSession(sessionName, [], 0);
        setSessionName("");
    }

    return (
        <div className='register__container'>
            <h1>Sessões</h1>
            <div className='createDiv'>
                <input 
                    className='input__session'
                    type="text" 
                    placeholder="Nome do treino"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                />
                <button className='register__btn' onClick={criaTreino}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            

        </div>
    )
}

export default CreateSession;