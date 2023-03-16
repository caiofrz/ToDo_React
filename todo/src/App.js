import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // carregando os dados da API
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);
      setTodos(res);
    };
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      //definindo o objeto
      id: Math.random(),
      title,
      time,
      done: false,
    };
    console.log(todo);

    await fetch(
      API + "/todos", //enviando para a api
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setTodos((prevState) => [...prevState, todo]); // att a lista sem precisar de reload

    setTime("");
    setTitle("");
  };

  const handleDelete = async (id) => {
    //excluindo tarefa da API
    await fetch(API + "/todos/" + id, 
      {
        method: "DELETE",
      });

      setTodos((prevState) => prevState.filter((todo) => todo.id !== id)); // removendo da lista sem precisar de reload
  };

  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, 
      {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t=data) : t)));
       // removendo da lista sem precisar de reload
  };
  

  if (loading) {
    return <h3>Carregando aplicação...</h3>;
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>ToDo</h1>
      </div>

      <div className="todo-form">
        <h4>Insira a tarefa:</h4>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Qual tarefa você vai fazer? </label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração: </label>
            <input
              type="number"
              name="time"
              placeholder="Tempo da tarefa"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
            <input type="submit" value="Criar tarefa" />
          </div>
        </form>
      </div>

      <div className="todo-list">
        <h4>Tarefas:</h4>
        {todos.length === 0 && <p>Sem tarefas</p>}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time} hora(s)</p>
            <div className="actions">
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
