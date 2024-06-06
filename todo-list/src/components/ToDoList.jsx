import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/solid'

const ToDoList = () => {
    return (
        <div className="mt-5 w-full max-w-lg bg-cyan-200 p-3 rounded-md border border-slate-100 flex flex-row">
            <p className="ml-2 text-md">Task 1</p>
            <div className="flex ml-auto mt-1">
                <PencilSquareIcon className='h-5 w-5 mr-1 text-rose-400'/>
                <TrashIcon className='h-5 w-5 mr-1 text-rose-400' />
            </div>
        </div>
    )

}

export default ToDoList