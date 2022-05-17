import More from "components/shared/More";
import { useState } from "react";

const TodoItem = (props) => {
  const [showActions, setShowActions] = useState(false);

  const showActionsWindowHandler = (e) => {
      setShowActions(!showActions);
  };


  return (
    <li className='bg-gray-100 shadow-md text-black mt-4 cursor-pointer px-5 py-2 rounded-md max-h-10'>
      <div className='flex justify-between items-center relative'>
        <h1 className='truncate w-4/5'>
          {props.title}
        </h1>
        <More onClick={showActionsWindowHandler}/>
        {showActions && <ul className='w-44 bg-gray-400 absolute top-7 right-0 p-2 z-10 '>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Move in Progress</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Move in Done</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Edit Item</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Delete Item</li>
        </ul>}
      </div>
    </li>
  );
};

export default TodoItem;
