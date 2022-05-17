const Input = (props) => {
    const input = <input type='text' name={props.for} id={props.for} className="shadow-sm border block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none p-2"  />
    const textarea = <textarea name={props.for} id={props.for} className="shadow-sm border block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none p-2"></textarea>

    const inputType = props.for === 'title' ? input : textarea
    return (
        <div className='mt-1'>
            <label for={props.for} className="block text-sm font-medium text-gray-700">{props.for}</label>
            <div className="mt-1">
                {inputType}
            </div>
        </div>
    )
};

export default Input;