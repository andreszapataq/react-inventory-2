const Button = ({variant, label}) => {
  return (
    <button className={`w-[149px] h-[42px] rounded-lg font-medium btn-${variant}`}>
      {label}
    </button>
  )
}

export default Button