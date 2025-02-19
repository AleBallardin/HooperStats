import '../comps_styles/appStyles.css'

function Goals({goal}){
    return (
        <div className='div_goals'>
            <ul className='list-goals__container'>
                <li className='goals__item'>
                    <p>{goal}</p>
                    <input type="checkbox" className='goal__input'/>
                </li>
            </ul>
        </div>
    )
}

export default Goals;