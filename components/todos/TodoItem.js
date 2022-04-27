const TodoItem = (props) => {
  return (
    <li className='bg-gray-800 text-white mt-4 cursor-pointer px-5 py-2 rounded-md'>
      {props.title}
    </li>
  );
};

export default TodoItem;
