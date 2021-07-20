import LogoC from './LogoC.svg';



function Logo() {
    return(
        <div className='rod-logo'>
            <div className='logo-item'>
                <img src={LogoC} alt='logo'/>
                <div className='ounter'>ounter</div>
            </div>  
        </div>
    )
}

export default Logo;