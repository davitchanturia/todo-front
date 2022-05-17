import { useRouter } from 'next/router'
import { useState } from "react";
import More from "components/shared/More";

const TodoItem = (props) => {
  const [showActions, setShowActions] = useState(false);

  const router = useRouter()

  const showActionsWindowHandler = (e) => {
      setShowActions(!showActions);
  };

  const redirectToTodoPageHandler = () => {
    router.push(`todos/${props.id}`);
  };

  return (
    <li className='bg-gray-100 shadow-md text-black mt-4 cursor-pointer px-5 py-2 rounded-md max-h-10 relative'>
      <div >
        <div className='flex justify-between items-center'>
          <h1 onClick={redirectToTodoPageHandler} className='truncate w-4/5'>
            {props.title}
          </h1>
          <More onClick={showActionsWindowHandler}/>
        </div>
      </div>
      {showActions && <ul className='w-44 bg-gray-400 absolute top-8 right-8 p-2 z-10 '>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Move in Progress</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Move in Done</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Edit Item</li>
              <li  className='hover:bg-gray-600 hover:text-white transition-all'>Delete Item</li>
        </ul>}
    </li>
  );
};

export default TodoItem;
