import Button from 'components/shared/Button';

const ActionBar = () => {
  return (
    <div className='bg-orange-500'>
      <div className='w-full max-w-7xl mx-auto flex'>
        <div className='flex mx-auto'>
          <Button action='create' />
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
