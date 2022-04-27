import Grid from 'components/notes/Grid';
import sendRequest from 'lib/sendRequest';

const Home = (props) => {
  return (
    <div>
      <div className='w-full max-w-7xl mx-auto mt-11'>
        <p>Here you can see your the most important todos.</p>
        <Grid data={props.importantTodos} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await sendRequest(`/api/todos/importants`);

  return {
    props: {
      importantTodos: data.importantTodos,
    },
    revalidate: 10
  }
};

export default Home;
