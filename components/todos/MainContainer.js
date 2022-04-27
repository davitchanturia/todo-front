import ContainerLine from 'components/todos/ContainerLine';

const MainContainer = () => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto flex justify-between mt-11'>
        <ContainerLine name='to do' />
        <ContainerLine name='in progress' />
        <ContainerLine name='done' />
      </div>
    </div>
  );
};

export default MainContainer;
