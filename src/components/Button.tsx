const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const { className, ...otherProps } = props;
  
    return (
      <span
        {...otherProps}
        className={`bg-darkGrey border-green border-b-2 text-white desktop:text-sm hover:text-green ${className}`}
        style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0' }}
      >
        {props.children}
      </span>
    );
  };
  
  export default Button;
  