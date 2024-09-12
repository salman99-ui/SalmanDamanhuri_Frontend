import React, { useRef } from 'react';
import { PropsTodoInput } from '../../Type/component';

function TodoInput({ handleAdd }: PropsTodoInput) {
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);

  const handleAddActivity = () => {
    const activity: string = inputRef1.current?.value as string;
    const description: string = inputRef2.current?.value as string;
    handleAdd({
      activity,
      description,
    });
  };

  return (
    <div className="pb-5 border-x-0 border-t-0 border-b border-solid border-gray-200">
      <div className="">
        <div className="mb-2">
          <p className="text-white m-0 mb-3 font-semibold">Title</p>
          <input placeholder="Activity" className="w-full p-1" ref={inputRef1} />
        </div>
        <div className="mb-4">
          <p className="text-white m-0 mb-3 font-semibold">Description</p>
          <input placeholder="Description" className="w-full p-1" ref={inputRef2} />
        </div>
        <div className="">
          <div className="flex items-end h-full">
            <button
              type="button"
              className="block w-full border-none bg-green-300 px-4 py-2 rounded text-white"
              onClick={handleAddActivity}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
