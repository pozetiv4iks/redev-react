const getData = async () => {
  try {
    const response = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.name);
  }
};

export default getData