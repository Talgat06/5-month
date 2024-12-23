
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from "./pages/mainPage/MainPage";
import PostsPage from "./pages/postsPage/PostsPage";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

    return (
        <div className="App">
            <h1>Task Planner</h1>
            <TaskForm/>
            <TaskList/>
        </div>
    );
}

export default App;