import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttp from './Hooks/use-http';

function App() {
  console.log("start app")

  const [tasks, setTasks] = useState([]);



 const {error,isLoading,sendRequest:fetchTasks} = useHttp()


  useEffect(() => {
    const transformData = dataObj =>{
      console.log(dataObj)
      const loadedTasks = [];
      for (const taskKey in dataObj) {
        loadedTasks.push({ id: taskKey, text: dataObj[taskKey].text });
      }
      console.log("set data")
      setTasks(loadedTasks);
    }
    fetchTasks({url:'https://react-custom-hook-c1f14-default-rtdb.firebaseio.com/tasks.json'},transformData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  console.log("data",tasks,"working")
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
