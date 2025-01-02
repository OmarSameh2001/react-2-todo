import './App.css';
import Todo from './pages/Todo/Todo';
import Users from './pages/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Todo />
        <Users />
    </div>
  );
}

export default App;
