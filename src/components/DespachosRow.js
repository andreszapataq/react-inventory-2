import {FaFilePdf} from 'react-icons/fa'
import {BsCloudUpload} from 'react-icons/bs'
import {HiEye} from 'react-icons/hi'

const DespachosRow = () => {
  return (
    <div className="grid grid-cols-5 justify-items-center">
      <p className="text-sm">11 Nov. 2023</p>
      <p className="text-sm">11323</p>
      <p className="text-sm">Clínica del Café</p>
      <p className="text-sm text-carrot-orange">En transito</p>
      <div className='flex w-2/5 justify-between'>
        <FaFilePdf className='cursor-pointer' />
        <BsCloudUpload className='cursor-pointer' />
        <HiEye className='cursor-pointer' />
      </div>
    </div>
  )
}

export default DespachosRow