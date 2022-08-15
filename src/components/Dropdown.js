const Dropdown = ({title, options}) => {
    return (
        <div className='dropdown'>
            <h1 className='dd-title'>{title}</h1>
            <ul className = 'dd-menu'>
                {options.map(option => 
                <li className = 'dd-menu-item'>{option}</li>
                )}
            </ul>
        </div>
    )
}

export default Dropdown