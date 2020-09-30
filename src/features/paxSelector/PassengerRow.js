import React from 'react';

const PassengerRow = ({ name, total, maxTotal, item, addPassenger, removePassenger }) => {
  const { count } = item;
  return (
    <div className="flex items-center mb-4"
      data-testid={`pax-${name.toLowerCase()}`}>
      <div className="w-20">{name}</div>
      <Button 
        datatestid={`pax-${name.toLowerCase()}-remove-btn`}
        onClick={() => removePassenger(name)}
        disabled={count === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </Button>
      <div 
        className="mx-4 w-4"
        data-testid={`pax-${name.toLowerCase()}-count`}
      >{count}</div>
      <Button 
        datatestid={`pax-${name.toLowerCase()}-add-btn`}
        onClick={() => addPassenger(name)}
        disabled={total === maxTotal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </Button>
    </div>
  );
};

const Button = ({ datatestid, onClick, disabled, children }) => {
  const color = 'purple';
  let className = `bg-${color}-200 w-10 hover:bg-${color}-300 text-${color}-800 font py-1 px-2 rounded shadow-lg hover:shadow-sm transition-shadow duration-100`;
  if (disabled) {
    className = `bg-grey-200 w-10 hover:bg-grey-300 text-grey-800 font py-1 px-2 rounded cursor-not-allowed`;
  }
  
  return <button 
    data-testid={datatestid}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>;
}

export default PassengerRow;