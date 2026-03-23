
import HookForm from './components/HookForm'
import HookWithZod from './components/HookWithZod'
import SimpleForm from './components/SimpleForm'

function App() {

  return (
    <>
      <h1>React Form Demo Examples</h1>
      <SimpleForm/>
      <h1>Hook Form</h1>
      <HookForm/>
      <h1>Hook with Zod</h1>
      <HookWithZod/>
    </>
  )
}

export default App
