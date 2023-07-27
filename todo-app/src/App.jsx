import './App.css'
import Todo from './components/todo'
import AddTodo from './components/addTodo'

function App() {
  return (
      <div>
        <div style={{
          padding:20,
          display:'flex',
          justifyContent:"center"
        }}>
       
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          <h1 className="text-3xl font-bold " >
           Todo App!
          </h1>
        </span>
       
        </div>
      <div class="grid grid-cols-2 gap-4">
        
        
        <AddTodo/>
        <Todo/>
        
      </div>
      </div>
  )
}

export default App
