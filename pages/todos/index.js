import { useState } from 'react';
import Button from 'components/shared/Button';
import Modal from 'components/shared/Modal';
import MainContainer from 'components/todos/MainContainer';
import sendRequest from 'lib/sendRequest';

const Todos = (props) => {
  const [showModal, setShowModal] = useState(false);

  const { done, inProgress, todo } = props;

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' onCreate={showModalHandler}/>
      <MainContainer done={done} inProgress={inProgress} todo={todo} />
      {showModal && <Modal onCancel={showModalHandler} />}
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
