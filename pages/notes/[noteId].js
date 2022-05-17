import sendRequest from 'lib/sendRequest';

const TodoDetailPage = (props) => {

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className='mt-10'>
                <h1>{props.note.title}</h1>
            </div>
            <div className='mt-8'>
                <p>{props.note.body}</p>
            </div>
            <div className='mt-6'>
                related notes
            </div>
        </div>
    )
};

export async function getStaticProps(context) {
    const { params } = context;
    const { noteId } = params;

    const path = `/api/note/${noteId}`;

    const noteData = await sendRequest(path);
    const item = noteData.note;
    
    return {
        props: {
            note: item
        },
        revalidate: 600
    }
};

export async function getStaticPaths() {
    const notes = await sendRequest(`/api/notes`);

    const ids = notes.allNotes.map((item) => item = item.id);
    const stringIds = ids.map((item) => item.toString());

    return {
        paths: stringIds.map((id) => ({ params: { noteId: id } })),
        fallback: false
    }
};

export default TodoDetailPage;