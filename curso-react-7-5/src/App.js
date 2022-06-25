import React, {useState} from 'react';
import './App.css';
import ResourceList from "./components/ResourceList";
import UserList from "./components/UserList";

const App = () => {
  const [resource, setResource] = useState('posts');
   return (
        <div className="ui container">
            <UserList/>
          <div>
          <button className="ui button" onClick={()=> setResource('posts')}>Posts</button>
          <button className="ui button" onClick={()=> setResource('todos')}>Todos</button>
          </div>

          <ResourceList resource={resource}></ResourceList>
        </div>
    );
}

export default App;
