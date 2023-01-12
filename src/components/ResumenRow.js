import { FaTimes } from "react-icons/fa"

const ResumenRow = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xs font-medium">DBM Putty 5.00 CC - AT679FD</p>
        <p className="text-[9px] font-light">23/03/2025</p>
      </div>
      <p className="text-[9px]">MORA210189-056</p>
      <FaTimes size={12} className="fill-cool-grey cursor-pointer" />
    </div>
  )
}

export default ResumenRow