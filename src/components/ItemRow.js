const ItemRow = () => {
  return (
    <div className="flex justify-between bg-cultured px-8 py-4 rounded-lg">
      <div>
        <h2 className="text-lg font-semibold">DBM Putty 1.00 CC</h2>
        <p className="text-xs font-light">AT677FD</p>
      </div>
      <div className="flex flex-col items-center border-solid border-l border-light-gray pl-8">
        <p className="text-xl font-semibold">11</p>
        <p className="text-xs font-light">Unidades</p>
      </div>
    </div>
  )
}

export default ItemRow