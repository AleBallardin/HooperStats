import '../comps_styles/appStyles.css'


function TopMenu(){
    return (
        <div className="top-menu">
            <div className="logo__menu">
            <i className="fa-solid fa-basketball"></i>
            <p>HooperStats</p>
            </div>
            <div className='btn-toggle'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default TopMenu;