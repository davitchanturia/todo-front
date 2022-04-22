import AddIcon from 'components/shared/AddIcon';
import FilterImg from 'components/shared/FilterImg';

const Button = (props) => {
  let img;

  if (props.action === 'create') {
    img = <AddIcon />;
  }
  if (props.action === 'filter') {
    img = <FilterImg />;
  }

  return (
    <button
      type='submit'
      className='w-full capitalize inline-flex justify-center items-center rounded-md border border-transparent shadow-sm  py-2 text-base font-medium text-white  focus:outline-none  focus:ring-offset-2 sm:w-auto sm:text-sm'
    >
      {img}
      {props.action}
    </button>
  );
};

export default Button;
