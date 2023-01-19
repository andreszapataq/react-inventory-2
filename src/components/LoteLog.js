import LogRow from "./LogRow"

const LoteLog = () => {
  return (
    <div className="w-[461px] h-[246px] border border-cadet-blue-crayola rounded-lg p-6 overflow-hidden hover:overflow-auto">
      <LogRow />
      <LogRow />
      <LogRow />
      <LogRow />
      <LogRow />
    </div>
  )
}

export default LoteLog