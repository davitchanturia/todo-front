const NoteCard = (props) => {
  return (
    <div className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'>
      <div className='w-full flex items-center justify-between p-6 space-x-6'>
        <div className='flex-1 truncate'>
          <div className='flex items-center space-x-5'>
            <h3 className='text-gray-900 text-sm font-medium truncate'>
              {props.title}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className='flex'>
          <div className='w-0 flex-1 flex'>
            <button className='relative flex-1 inline-flex items-center justify-center py-2 text-sm bg-white text-gray-700 font-medium rounded-bl-lg hover:text-gray-500'>
              <span className='ml-3'>View</span>
            </button>
          </div>
          <div className='w-0 flex-1 flex'>
            <button className='relative flex-1 inline-flex items-center justify-center py-2 text-sm bg-green-200 text-gray-700 font-medium border-transparent hover:text-gray-500'>
              <span className='ml-3'>Edit</span>
            </button>
          </div>
          <div className='-ml-px w-0 flex-1 flex'>
            <button className='relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm bg-orange-200 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'>
              <span className='ml-3'>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
