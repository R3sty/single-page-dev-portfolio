const Button = (
    props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
    return (
        <span
            {...props}
            className={
                `bg-darkGrey border-b-2 border-green hover:text-green" + ${props.className}`}
        >{props.children}</span>
    )
}

export default Button;