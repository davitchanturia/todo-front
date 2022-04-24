import Grid from 'components/notes/Grid';
import Button from 'components/shared/Button';

const Notes = () => {
  return (
    <div className='w-full max-w-7xl mx-auto '>
      <Button action='create' />
      <Grid />
    </div>
  );
};

export default Notes;
