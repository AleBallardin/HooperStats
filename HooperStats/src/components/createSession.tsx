import '../comps_styles/appStyles.css'

function CreateSession(){
    return (
        <div className='register__container'>
            <button className='register__btn'>
                Nova Sessão
                <i className="fa-regular fa-square-plus"></i>
            </button>
        </div>
    )
}

export default CreateSession;