const Button  = ({onClick, content}) => {
    return(
        <button onClick={onClick} data-testid="button" className="btn btn-color">{content}</button>
    )
}

export default Button