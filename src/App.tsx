import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      <MyComponent
        number={1}
        string={'First'}
        boolean={true}
        object={{ name: 'Stepan' , lastName: 'Dyleuski', age: 18 }}
        functionProp={() => console.log('First')}
        array={[1, 2, 3, 4, 5, 6]}
      >
        ChildreProps
      </MyComponent>
    </>
  )
}

export default App
