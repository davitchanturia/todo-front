import Button from 'components/shared/Button';
import MainContainer from 'components/todos/MainContainer';
import sendRequest from 'lib/sendRequest';

const test = async() => {
  const path = `/api/todo/1`;

  const todoData = await sendRequest(path);

  console.log(todoData);
};

const Todos = (props) => {
  const { done, inProgress, todo } = props;

  test();

  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' />
      <MainContainer done={done} inProgress={inProgress} todo={todo} />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await sendRequest(`/api/todos`);

  return {
    props: {
      todo: data.todo,
      inProgress: data.inProgress,
      done: data.done
    },
    revalidate: 10
  }
};


export default Todos;
