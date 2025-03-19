export const fetchData = async (url) => {
  const response = new Promise(resolve => {
    const data = {
      status: 200,
      data: {
        id: 1,
        name: 'test'
      }
    }
    setTimeout(() => {
      resolve(data);
    }, 1000);
  })
  return response;
};

