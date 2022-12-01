import {FaCaretSquareDown} from 'react-icons/fa'

const DropdownSearch = () => {
  return (
    <div>
      <div className='flex justify-between items-center w-[287px] h-[38px] px-2 py-1 border border-cadet-blue-crayola rounded-lg'>
        <div>
          <p className='text-xs'>Hospital San José</p>
          <p className='text-[9px] font-light'>Megatecnología y Rehabilitación Colombiana - 900094992</p>
        </div>
        <FaCaretSquareDown className='fill-cool-grey' />
      </div>
    </div>
  )
}

export default DropdownSearch