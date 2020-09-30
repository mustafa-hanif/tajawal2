const reducer = (state, action) => {
  const { name, type } = action;
  
  // Copy the state for modications
  const modState = JSON.parse(JSON.stringify(state));
  let { items, total, maxTotal } = modState;
  
  // Select the current object to be modified
  const selectedObj = items[name];

  // If this object has a mapping, select its dependant item
  const limitedBy = selectedObj.limitedBy && items[selectedObj.limitedBy];
  
  // If this object controls another object select that item
  const limits = selectedObj.limits && items[selectedObj.limits];

  switch (type) {
    case 'inc': {
      // Stopping Condition: If max pax limit reached, return the current state
      if (total >= maxTotal) {
        return modState;
      }
      
      // If this pax depends on another, only increase if there are more dependants
      if (limitedBy && limitedBy.count > selectedObj.count) {
        selectedObj.count += 1;
      }

      // If this pax is not limited by anyone, increase
      if (!limitedBy) {
        selectedObj.count += 1;
      }

      // Increase the total count
      modState.total += 1;
      return modState;
    }
    case 'dec': {
      // Stopping Condition: Cannot go below zero
      if (total <= 0) {
        return modState;
      }

      // If there is a dependant item, decrease them with this
      if (limits && limits.count >= selectedObj.count) {
        limits.count -= 1;
        modState.total -= 1;
      }

      // Also decrease the selected item
      selectedObj.count -= 1;
      modState.total -= 1;
      return modState;
    }
    default: {
      return modState;
    }
  }
};

export default reducer;