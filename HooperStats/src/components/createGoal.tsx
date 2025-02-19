import '../comps_styles/appStyles.css'

function CreateGoal(){
    return (
        <div className='goals__container'>
            <h1>Metas</h1>

            <button className='goals__btn'>
                Nova Meta
                <i className="fa-regular fa-square-plus"></i>
            </button>
        </div>
    )
}

export default CreateGoal;