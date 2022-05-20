const Input = ({ forInput, register, required}) => {
    const input = <input type='text' name={forInput} id={forInput} className="shadow-sm border block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none p-2" {...register('title', { required })} />
    const textarea = <textarea name={forInput} id={forInput} className="shadow-sm border block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none p-2" {...register('body', { required })}></textarea>

    const inputType = forInput === 'title' ? input : textarea
    return (
        <div className='mt-1'>
            <label htmlFor={forInput} className="block text-sm font-medium text-gray-700">{forInput}</label>
            <div className="mt-1">
                {inputType}
            </div>
        </div>
    )
};

export default Input;