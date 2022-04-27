import Grid from 'components/notes/Grid';
import Button from 'components/shared/Button';
import sendRequest from 'lib/sendRequest';

const Notes = (props) => {

  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' />
      <Grid data={props.data}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await sendRequest();

  return {
    props: {
      data: data
    }
  }
};

export default Notes;
