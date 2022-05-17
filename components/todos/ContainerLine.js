import TodoItem from 'components/todos/TodoItem';

const ContainerLine = (props) => {

  return (
    <div className='w-1/3'>
      <div className='w-11/12 border rounded-lg border-black  pt-5'>
        <h1 className='text-center capitalize'>{props.name}</h1>
        <ul className='px-9 pb-5 h-152 overflow-auto'>
          {props.data.map((element) => (
            <TodoItem key={element.id} title={element.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContainerLine;
