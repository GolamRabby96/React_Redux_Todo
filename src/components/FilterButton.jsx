import React from 'react'

const FilterButton = () => {
  return (
    <div className='flex space-x-4 items-center'>
        <select name="" id="">
            <option value="ALL">Default</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="INCOMPLETED">INCOMPLETED</option>
        </select>
    </div>
  )
}

export default FilterButton