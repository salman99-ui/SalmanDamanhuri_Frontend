import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PropsActivity } from '../../Type/component';

function Activity({ index, item, isShow, handleEdit, handleDelete }: PropsActivity) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState<boolean>(false);
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);

  const handleUpdate = () => {
    const activity: string = inputRef1.current?.value as string;
    const description: string = inputRef2.current?.value as string;

    handleEdit(index, { activity, description });
    setEdit(false);
  };

  return edit ? (
    <div className="">
      <div className="mb-2">
        <p className="text-white m-0 mb-3 font-semibold">Title</p>
        <input
          defaultValue={item.activity}
          placeholder="Activity"
          className="w-full p-1"
          ref={inputRef1}
        />
      </div>
      <div className="mb-4">
        <p className="text-white m-0 mb-3 font-semibold">Description</p>
        <input
          defaultValue={item.description}
          placeholder="Description"
          className="w-full p-1"
          ref={inputRef2}
        />
      </div>
      <div className="">
        <div className="flex items-end h-full">
          <button
            type="button"
            className="block w-full border-none bg-green-300 px-4 py-2 rounded text-white"
            onClick={handleUpdate}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-between">
      <div>
        <p className="text-green-300 font-semibold m-0 mb-2">{item.activity}</p>
        <p className="text-xs m-0 text-[#f1f1f1]">{item.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="border border-solid border-red-400 rounded">
          <button
            type="button"
            className="border-none bg-transparent px-2 py-1 cursor-pointer"
            onClick={() => handleDelete(index)}
          >
            <DeleteOutlined style={{ color: 'white' }} />
          </button>
        </div>
        <div className="border border-solid border-green-300 rounded">
          <button
            type="button"
            className="border-none bg-transparent px-2 py-1 cursaor-pointer"
            onClick={() => setEdit(true)}
          >
            <EditOutlined style={{ color: 'white' }} />
          </button>
        </div>
        {isShow && (
          <div className="border border-solid border-green-300 rounded">
            <button
              type="button"
              className="border-none bg-transparent px-2 py-1 cursaor-pointer"
              onClick={() =>
                navigate('/detail', {
                  state: item,
                })
              }
            >
              <EyeOutlined style={{ color: 'white' }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Activity;
