const DespachoRow = () => {
  return (
    <div className="flex justify-between items-center bg-cultured rounded-lg lg:w-1/2 px-8 py-4 mb-4">
      <div>
        <h2 className="text-lg font-semibold">MORA210189-054</h2>
        <p className="text-xs font-light">DBM Putty 5.00 CC - AT679FD</p>
      </div>
      <div className="flex justify-end items-center">
        <div className="h-12 w-px bg-green-300 mr-8"></div>
        <div className="flex flex-col items-center w-16">
          <p className="text-xl font-semibold"></p>
          <p className="text-xs font-light">23/03/2025</p>
        </div>
      </div>
    </div>
  )
}

export default DespachoRow