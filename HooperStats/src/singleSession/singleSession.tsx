
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Exercise, Session } from '../components/types';
import TopMenu from '../components/topMenu';
import './SS.css'
import Timer from './SScomps/timer';

function SingleSession() {
  const { sessionId } = useParams<{sessionId:string}>();
  const [session, setSession] = useState<Session | null>(null);
  const [exerciseName, setExerciseName] = useState<string>("");
  const [reps, setReps] = useState<string>("")
  const [makes, setMakes] = useState<string>("")


  useEffect(()=>{
    const savedSessions = JSON.parse(localStorage.getItem("sessions") || "[]");
    const foundSession = savedSessions.find((s:Session) => s.id === sessionId)
    setSession(foundSession || null);
  }, [sessionId])

  function addExercise(){
      if (!session || !exerciseName.trim()) return;

      const newExercise: Exercise = {
        checked: false,
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
      setSession(updateSession);

      setExerciseName("");
      setReps("");
      setMakes("")


  }

  function deleteExercise(sessionId: string, exerciseIndex: number) {
    const savedSessions: Session[] = JSON.parse(localStorage.getItem("sessions") || "[]");

    const updatedSessions = savedSessions.map((session) => {
      if (session.id === sessionId) {
        return {
          ...session,
          exercises: session.exercises.filter((_, index) => index !== exerciseIndex),
        };
      }
      return session;
    });
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
    const foundSession = updatedSessions.find((s) => s.id === sessionId);
    if (foundSession) {
      setSession(foundSession);
    }
  }

  function endExercise(sessionId: string, exerciseIndex: number) {
    const savedSessions: Session[] = JSON.parse(localStorage.getItem("sessions") || "[]");
    const sessionIndex = savedSessions.findIndex(session => session.id === sessionId);
  
    if (sessionIndex === -1) return;

    const exercise = savedSessions[sessionIndex].exercises[exerciseIndex];

    if (!exercise) return;

    const makes = prompt(`De ${exercise.reps} tentativas, quantas você acertou?`);

    if (makes !== null && !isNaN(Number(makes))) {
        exercise.checked = true;
        exercise.makes = Number(makes);
        exercise.percentage = parseFloat(((exercise.makes / exercise.reps) * 100).toFixed(2));
    }

    localStorage.setItem("sessions", JSON.stringify(savedSessions));

    const html = document.querySelector(`.exercise__title[data-exercise-index="${exerciseIndex}"]`);

    if (html) {
        html.textContent = exercise.makes
            ? `${exercise.name} - ${exercise.reps} Reps | ${exercise.makes} Acertos | ${exercise.percentage}%`
            : `${exercise.name} - ${exercise.reps} Reps`;
    }
}


  
  

  if (!session) return <p>Sessão não encontrada</p>

  function toggleForm() {
    const form = document.querySelector(".form__exercise");
    const icon = document.querySelector(".toggleFormBtn");
  
    if (!form || !icon) return;
  
    form.classList.toggle("open");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
  }
  

  return (
    <div>
      <TopMenu />
      <Timer/>
      <h1 className='session_text_title'>{session.name}</h1>
      <div className='toggle-form'>
        <h3>Adicionar Exercício</h3>
        <i className="fa-solid fa-angle-down toggleFormBtn" onClick={toggleForm}></i>
      </div>
      <br />
      <div className='form__exercise'>
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
        <button onClick={addExercise}>Adicionar</button>
      </div>
      <br />
      <br />
      <h2 className='exercises__title'>Exercícios:</h2>
      {session.exercises && session.exercises.length > 0 ? (
        <ul className='exercises__list'>
        {session.exercises.map((exercise, index) => (
          <li className='exercise' key={index}>
            <div className="exercise__title" data-exercise-index={index}>
              {exercise.name} - {exercise.reps} Reps
            </div>

            <label className="custom-checkbox">
              <input 
              checked={exercise?.checked || false}
              onChange={() => endExercise(session.id, index)}
                className='checkbox__exer'
                type="checkbox"
              />
              <span className="checkmark"></span>
              <button className='remove__exer' onClick={() => deleteExercise(session.id, index)}><i className="fa-solid fa-trash-can"></i></button>
              <button className='edit__exer'>
                <i className="fa-solid fa-pen-to-square" ></i>
              </button>
            </label>
          </li>
        ))}
      </ul>
      ) : ''}
      
      
    </div>
  )

  
}


export default SingleSession;

