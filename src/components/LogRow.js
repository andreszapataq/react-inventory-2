const LogRow = () => {
  return (
    <div className="flex items-center gap-8 mb-6">
        <div>
            <p className="text-xs font-medium text-cool-grey">02 mayo 2022</p>
        </div>
        <div className="w-10 h-px border-t-[0.9px] border-dashed border-cool-grey"></div>
        <div>
            <p className="text-xs">Principal</p>
            <p className="text-[9px] font-light">Vive Solutions - 900274934</p>
        </div>
    </div>
  )
}

export default LogRow