import { useState } from 'react';
import Grid from 'components/notes/Grid';
import Button from 'components/shared/Button';
import sendRequest from 'lib/sendRequest';
import Modal from 'components/shared/Modal';

const Notes = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' onCreate={showModalHandler}/>
      <Grid for='notes' data={props.data}/>
      {showModal && <Modal onCancel={showModalHandler} todos={props.todos}/>}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await sendRequest(`/api/notes`);

  return {
    props: {
      data: data.allNotes,
      todos: data.allTodos
    },
    revalidate: 10
  }
};

export default Notes;
