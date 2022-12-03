const Button = ({variant, label}) => {
  return (
    <button className={`btn-${variant}`}>
      {label}
    </button>
  )
}

export default Button