import { useEffect, useState } from 'react';
import { getTodos } from '../service/api.todo';
import '../assets/style/homepageTodo.css'
// getTodos est une fonction asynchrone qui va récupérer les todos depuis l'API

export default function HomepageTodo() {
  // useState permet de garder en mémoire l'état de todos
  const [todos, setTodos] = useState([]);
  //todos = la valeur actuelle (ce que tu utilises pour afficher)
  //setTodos = la fonction pour modifier cette valeur

  // on utilise useEffect car on fait l'appel à l'API pour récupérer les todos et donc tout ce qui est api c'est useEffect
  useEffect(() => {
    // le ".then" permet d'attendre la réponse de l'api
    // on met "setTodos" dans le le ".then" pour mettre à jour l'état de todos avec les données récupérées
    getTodos().then(setTodos);
  }, []);
  console.log(todos);


  // On ne peut pas utiliser directement une fonction asynchrone dans le JSX.
  // donc on utilise useEffect pour appeler la fonction asynchrone getTodos

  // Calcul du nombre de todos complétés
  const completedCount = todos.filter((todo: any) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="homepage-todo">
      <h1>Todo List</h1>
      {/* Affichage du compteur de progression */}
      <div className="todo-stats">
        <p>Progression: {completedCount}/{totalCount} todos complétés</p>
        {totalCount > 0 && (
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        )}
      </div>
      <ul>
        {/* boucle car c'est une liste */}
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}