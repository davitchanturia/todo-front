import sendRequest from 'lib/sendRequest';

const TodoDetailPage = (props) => {

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className='mt-10'>
                <h1>{props.todo.title}</h1>
            </div>
            <div className='mt-8'>
                <p>{props.todo.body}</p>
            </div>
            <div className='mt-6'>
                related notes
            </div>
        </div>
    )
};

export async function getStaticProps(context) {
    const { params } = context;
    const { todoId } = params;

    const path = `/api/todo/${todoId}`;

    const todoData = await sendRequest(path);
    const item = todoData.todo
    
    return {
        props: {
            todo: item
        },
        revalidate: 600
    }
};

export async function getStaticPaths() {
    const todos = await sendRequest(`/api/todos`);

    const ids = todos.all.map((item) => item = item.id);
    const stringIds = ids.map((item) => item.toString());

    return {
        paths: stringIds.map((id) => ({ params: { todoId: id } })),
        fallback: false
    }
};

export default TodoDetailPage;