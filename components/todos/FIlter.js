import Button from 'components/shared/Button';
import DownIcon from 'components/shared/DownIcon';

const Filter = () => {
  return (
    <div className='ml-5 flex items-center cursor-pointer'>
      <Button action='filter' />
      <DownIcon />
    </div>
  );
};

export default Filter;
