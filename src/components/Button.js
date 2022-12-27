const Button = ({variant, label, onClick}) => {
  return (
    <button className={`w-[149px] h-[42px] rounded-lg font-medium btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button