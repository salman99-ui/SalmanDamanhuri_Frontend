import React, { useState } from 'react';
import './App.css';
import TodoInput from './Component/TodoInput';
import { AddActivity } from './Type/component';
import Activity from './Component/Activity';

const App = () => {
  const [activity, setActivity] = useState<AddActivity[] | []>([]);
  const handleAdd = (val: AddActivity) => {
    setActivity((prev) => {
      const dataPrev = [...prev, val];
      return dataPrev;
    });
  };

  const handleDelete = (indexKey: number) => {
    setActivity((prev) => {
      const dataDup = [...prev];
      return dataDup.filter((item, index) => index !== indexKey);
    });
  };

  const handleEdit = (indexKey: number, itemData: AddActivity) => {
    setActivity((prev) => {
      const dataDup = [...prev];
      return dataDup.map((item, index) => {
        if (index === indexKey) return itemData;
        return item;
      });
    });
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#111] p-5">
      <div className="p-5 bg-gray-500 w-[500px] rounded h-fit">
        <p className="text-center text-white m-0 mb-3 font-bold text-base">My Activity</p>
        <div className="mb-5">
          <TodoInput handleAdd={handleAdd} />
        </div>
        <div className="max-h-72 overflow-y-scroll">
          <p className="text-white text-center font-bold text-base">TO DO</p>
          {activity?.map((item, index) => (
            <div key={index} className="p-4 bg-[#9c9c9c] rounded mb-3">
              <Activity
                item={item}
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
