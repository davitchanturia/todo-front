import Button from 'components/shared/Button';
import Filter from 'components/todos/FIlter';

const ActionBar = () => {
  return (
    <div className='bg-orange-500'>
      <div className='w-full max-w-7xl mx-auto flex'>
        <Button action='create' />
        <Filter />
      </div>
    </div>
  );
};

export default ActionBar;
