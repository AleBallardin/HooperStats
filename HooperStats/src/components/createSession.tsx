import '../comps_styles/appStyles.css'

function CreateSession(){
    return (
        <div className='register__container'>
            <h1>Sessões</h1>

            <button className='register__btn'>
                Nova Sessão
                <i className="fa-regular fa-square-plus"></i>
            </button>
        </div>
    )
}

export default CreateSession;