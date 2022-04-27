import ContainerLine from 'components/todos/ContainerLine';

const MainContainer = (props) => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto flex justify-between mt-11'>
        <ContainerLine name='to do' data={props.todo} />
        <ContainerLine name='in progress' data={props.inProgress} />
        <ContainerLine name='done' data={props.done} />
      </div>
    </div>
  );
};

export default MainContainer;
