import NoteCard from 'components/notes/NoteCard';

const Grid = (props) => {

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 pb-3 pr-8 pl-2 mt-10 max-h-152 overflow-y-auto'>
      {props.data.map((element) => (
        <NoteCard key={element.id} title={element.title}/> 
      ))}

    </div>
  );
};

export default Grid;
