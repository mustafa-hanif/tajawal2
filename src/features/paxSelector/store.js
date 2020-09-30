const passengers = {
  maxTotal: 10,
  total: 0,
  items: {
    Adult: {
      count: 0,
      limits: 'Infant',
    },
    Child: {
      count: 0,
    },
    Infant: {
      count: 0,
      limitedBy: 'Adult'
    }
  }
};

export default passengers;