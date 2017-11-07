const SimpleStore = (initialValues = {}) => {
  const subscriptions = [];
  let values = Object.assign({}, initialValues);

  return {
    set: (key, value) => {
      values = Object.assign({}, values, {[key]: value});

      subscriptions.forEach((subscription) => {
        subscription(values);
      });
    },
    subscribe: (callback) => {
      if (typeof callback === 'function' && subscriptions.indexOf(callback) < 0) {
        subscriptions.push(callback);
      }

      return () => {
        const index = subscriptions.indexOf(callback);

        if (index >= 0) {
          subscriptions.splice(index, 1);
        }
      };
    }
  };
};

export default SimpleStore;
