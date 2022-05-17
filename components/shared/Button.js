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
    <div className='mt-10 pl-1'>
      <button
        onClick={props.onCreate}
        type='submit'
        className='w-full bg-orange-500 px-5 capitalize inline-flex justify-center items-center rounded-md border border-transparent shadow-sm  py-2 text-base font-medium text-white  focus:outline-none  focus:ring-offset-2 sm:w-auto sm:text-sm'
      >
        {img}
        {props.action}
      </button>
    </div>
  );
};

export default Button;
