import Grid from 'components/notes/Grid';

const Home = () => {
  return (
    <div>
      <div className='w-full max-w-7xl mx-auto mt-11'>
        <p>Here you can see your the most important todos.</p>
        <Grid />
      </div>
    </div>
  );
};

export default Home;
