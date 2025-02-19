import './comps_styles/appStyles.css'
import TopMenu from './components/topMenu';
import CreateSession from './components/createSession';
import Sessions from './components/sessions';
import CreateGoal from './components/createGoal';
import Goals from './components/goals';
import { useEffect, useState } from 'react';



function App(){
  const [sessions, setSessions] = useState<string[]>([]);

  useEffect(()=>{
    const savedSessions = JSON.parse(localStorage.getItem("sessions") || "[]")
    setSessions(savedSessions);
  }, [])

  function addSession(sessionName: string) {
    const newSession = [...sessions, sessionName]
    setSessions(newSession)
    localStorage.setItem("sessions", JSON.stringify(newSession))
  }

  function removeSessions(index: number){
    const newSession = sessions.filter((_, i) => i !== index)
    setSessions(newSession)
    localStorage.setItem("sessions", JSON.stringify(newSession))
  }

  return (
    <>
      <TopMenu/>
      <CreateSession addSession={addSession}/>
      <>
        <Sessions sessions={sessions} removeSessions={removeSessions}/>
      </>
      <CreateGoal/>
      <>
        <Goals goal="50% FG"/>
        <Goals goal="Dunkar"/>
        <Goals goal="10 de 3 seguidas"/>
      </>
      <div className='limpar-concluidas'>
        <button >limpar Concluídas</button>
      </div>
    </>
  );
}

export default App;