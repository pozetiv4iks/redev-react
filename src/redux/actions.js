export const addTask = (text) => ({ type: "add", payload: text });
export const toggleTask = (id) => ({ type: "toggle", payload: id });
export const editTask = (id, text) => ({ type: "edit", payload: { id, text } });
export const deleteTask = (id) => ({ type: "delete", payload: id });
export const clearCompleted = () => ({ type: "clear" });
export const setFilter = (filter) => ({ type: "filter", payload: filter });
