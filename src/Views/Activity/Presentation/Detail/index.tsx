import React from 'react';
import { useLocation } from 'react-router-dom';
import { AddActivity } from '../../../../Type/component';

function Detail() {
  const { state }: { state: AddActivity } = useLocation();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[500px] bg-gray-300 p-5 rounded">
        <p>
          <span className="font-semibold text-base"> Activity Name </span> : <br />
          <span className="font-medium">{state.activity}</span>
        </p>
        <p>
          {' '}
          <span className="font-semibold text-base">Description :</span> <br />{' '}
          <span className="font-medium">{state.description}</span>
        </p>
      </div>
    </div>
  );
}

export default Detail;
