export default (user) => {
  return {
    create: () => {
      const _user = Promise.resolve({
        status: "success",
        data: { name: "ashok", id: 123 },
      });
      return _user;
    },
    findOne: () => {
      const _user = Promise.resolve({
        status: "success",
        data: { name: "ashok", id: 123 },
      });

      return _user;
    },
  };
};
