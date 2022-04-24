import Button from 'components/shared/Button';
import MainContainer from 'components/todos/MainContainer';

const Todos = () => {
  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' />
      <MainContainer />
    </div>
  );
};

export default Todos;
