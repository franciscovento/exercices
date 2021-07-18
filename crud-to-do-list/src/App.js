import { useEffect, useState } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import {read} from "./services/read";
import {useForm} from 'react-hook-form';
import CreateTask from './components/CreateTask';
import { create } from './services/create';
import { deleteTask } from './services/delete';
import { updateTask } from './services/update';



function App() {

const { register, handleSubmit, reset } = useForm();
const [data, setData] = useState([]);



const onCreateTask = (formValues) => {
  const miFunc = async () =>{
    const resp = await create(formValues)
    setData(prevState => [resp.data, ...prevState])
    reset()
  } 
  miFunc()
}

const onDelete = (id) => {
  const miFunc = async () =>{
    const resp = await deleteTask(id)
    console.log(resp)
    setData(prevState => prevState.filter(x => x.id !== id))
  }
miFunc()
}

const onUpdate = (id, isCompleted) => {
  console.log(id, isCompleted)
  // const miFunc = async () =>{
  //   const resp = await updateTask(task)
  // }
}

  useEffect(() => {
    const getTask = async () =>{
      const data = await read()
      setData(data.todos)
      console.log(data.todos)
    
    }
    getTask();
  },[])

const taskList = data.map(x => <TaskContainer key ={x.id} isCompleted={x.isCompleted.toString()} student={x.student} task={x.task} id={x.id} onDelete={onDelete} onUpdate={onUpdate}  />)

  return (
    <div className="App">
        <CreateTask 
        handleSubmit={handleSubmit}
        register={register} 
        onCreateTask={onCreateTask} 
        />
       <br />
      {taskList}
    </div>
  );
}

export default App;
