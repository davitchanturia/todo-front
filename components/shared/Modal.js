import Input from "components/shared/Input";

const Modal = (props) => {
    return (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                    <Input for='title' />
                    <Input for='body' />
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button onClick={props.onAction} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                            Create
                        </button>
                        <button onClick={props.onCancel} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                     </div>
                </div>
            </div>
            
          </div>
        </div>
    )
};

export default Modal;