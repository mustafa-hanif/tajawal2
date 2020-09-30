import React, { useReducer } from 'react';
import PassengerRow from './PassengerRow';
import reducer from './reducer';
import passengers from './store';

const PaxSelector = () => {
  const [state, dispatch] = useReducer(reducer, passengers);
  const addPassenger = (name) => {
    dispatch({ type: 'inc', name });
  };
  const removePassenger = (name) => {
    dispatch({ type: 'dec', name });
  };

  const items = Object.keys(state.items);
  return (
    <div className="flex flex-col mt-20 mx-auto w-64 pt-4 place-items-center text-xl shadow-2xl rounded-lg">
      {items.map((key) => {
        const item = state.items[key];
        return <PassengerRow
          key={key}
          name={key}
          item={item}
          total={state.total}
          maxTotal={state.maxTotal}
          addPassenger={addPassenger}
          removePassenger={removePassenger}
        />
      })}
    </div>
  );
}

export default PaxSelector;