const Button = ({variant, label, onClick}) => {
  console.log(label)

  return (
    <button className={`w-[149px] h-[42px] rounded-[21px] font-medium btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button