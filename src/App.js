import './App.css';
import "./assets/styles.css";
import {useCallback, useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";


function App() {

    const [showTaskEdit, setShowTaskEdit] = useState(false);

    const [tasks, setTasks] = useState([
        {desc: "Learn React", id: 1, date: "2021-01-03 10:00", status: "Complete"},
        {desc: "Profit", id: 2, data: "2021-01-05 15:00", status: "Open"},
    ]);

    const wrapperSetShowTaskEditState = useCallback(val => {
        setShowTaskEdit(val);
    }, [setShowTaskEdit]);
    const onTglStatus = (task) => {
        console.log("delete task");
        const newTasks = tasks.filter((item) => item.id !== task.id);
        setTasks(newTasks);
    };
    const onSaveTask = ({desc, date}) => {
        console.log("saving tasks");
        setTasks([
            {desc: desc, date: date, id: Date.now(), complete: false},
            ...tasks,
        ]);
    };


    return (
        <div className="App">
            <Header setShowTaskEdit={wrapperSetShowTaskEditState}></Header>
            <div className="container">
                {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask}/>}
                {tasks.length>0 && <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>}
                {tasks.length <1 && <div style={{fontWeight:'bold'}}>No Tasks To Show</div>}
            </div>
        </div>

    );
}

export default App;
