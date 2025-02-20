import './comps_styles/appStyles.css';
import TopMenu from './components/topMenu';
import CreateSession from './components/createSession';
import Sessions from './components/sessions';
import CreateGoal from './components/createGoal';
import Goals from './components/goals';
import { useEffect, useState } from 'react';
import { Goal, Session, Exercise } from './components/types';
import { useNavigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate();

  const [sessions, setSessions] = useState<Session[]>(() => {
    const savedSessions = JSON.parse(localStorage.getItem("sessions") || "[]");
    return savedSessions;
  });

  const [goals, setGoals] = useState<Goal[]>(() => {
    const storedGoals = localStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem("sessions") || "[]");
    setSessions(savedSessions);
  }, []);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  function addSession(sessionName: string, exercises: Exercise[], time: number) {
    const newSession: Session = { name: sessionName, exercises, time };
    setSessions([...sessions, newSession]);
}

  function removeSessions(index: number) {
    const newSession = sessions.filter((_, i) => i !== index);
    setSessions(newSession);
  }

  function addGoal(goalName: string, checked: boolean) {
    const newGoal = [...goals, { name: goalName, checked }];
    setGoals(newGoal);
  }

  function removeGoal(index: number) {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  }

  function toggleGoal(index: number) {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, checked: !goal.checked } : goal
    );
    setGoals(updatedGoals);
  }

  function removeCheckedGoals(): void {
    const newGoals = goals.filter(goal => !goal.checked);
    setGoals(newGoals);
  }

  return (
    <>
      <TopMenu />
      <CreateSession addSession={addSession} />
      <Sessions sessions={sessions} removeSessions={removeSessions} />
      <CreateGoal addGoal={addGoal} />
      <Goals goals={goals} removeGoal={removeGoal} toggleGoal={toggleGoal} />
      {goals.length > 0 ? (<div className='limpar-concluidas'>
        <button onClick={removeCheckedGoals}>Limpar Concluídas</button>
      </div>) : null}
      
    </>
  );
}

export default App;
