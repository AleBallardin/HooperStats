import './comps_styles/appStyles.css'
import TopMenu from './components/topMenu';
import CreateSession from './components/createSession';
import Sessions from './components/sessions';
import CreateGoal from './components/createGoal';
import Goals from './components/goals';

function App(){
  return (
    <>
      <TopMenu/>
    
      <CreateSession/>
      <>
        <Sessions/>
        <Sessions/>
        <Sessions/>
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