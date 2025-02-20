
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Exercise, Session } from '../components/types';
import TopMenu from '../components/topMenu';
import './SS.css'

function SingleSession() {
  const { sessionId } = useParams<{sessionId:string}>();
  const [session, setSessions] = useState<Session | null>(null);
  const [exerciseName, setExerciseName] = useState<string>("");
  const [reps, setReps] = useState<string>("")
  const [makes, setMakes] = useState<string>("")


  useEffect(()=>{
    const savedSessions = JSON.parse(localStorage.getItem("sessions") || "[]");
    const foundSession = savedSessions.find((s:Session) => s.id === sessionId)
    setSessions(foundSession || null);
  }, [sessionId])

  function addExercise(){
      if (!session || !exerciseName.trim()) return;

      const newExercise: Exercise = {
        name: exerciseName,
        reps: Number(reps),
        makes: Number(makes),
        percentage: reps && makes ? Math.round((Number(makes) / Number(reps)) * 100) : 0
      }

      const updateSession: Session = {
        ...session,
        exercises: [...session.exercises, newExercise]
      }

      const savedSessions: Session[] = JSON.parse(localStorage.getItem("sessions") || "[]");
      const updatedSessions = savedSessions.map((s) =>
        s.id === sessionId ? updateSession : s
      );

      localStorage.setItem("sessions", JSON.stringify(updatedSessions));
      setSessions(updateSession);

      setExerciseName("");
      setReps("");
      setMakes("")


  }

  if (!session) return <p>Sessão não encontrada</p>

  return (
    <div>
      <TopMenu />
      <h1 className='session_title'>{session.name}</h1>
      <div className='form__exercise'>
        <h3>Adicionar Exercício</h3>
        <input
          type="text"
          placeholder="Nome do exercício"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Repetições"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Acertos"
          value={makes}
          onChange={(e) => setMakes(Number(e.target.value))}
        />
        <button onClick={addExercise}>Adicionar</button>
      </div>
      <br />
      <br />
      <h2 className='exercises__title'>Exercícios:</h2>
      <ul className='exercises__list'>
        {session.exercises.map((exercise, index) => (
          <li className='exercise' key={index}>
            {exercise.name} - {exercise.reps} repetições
            <label className="custom-checkbox">
              <input 
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
          </li>
        ))}
      </ul>
      
    </div>
  )

  
}


export default SingleSession;

