const Button  = ({onClick, content}) => {
    return(
        <button onClick={onClick} data-testid="button" className="button">{content}</button>
    )
}

export default Button