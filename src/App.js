import { useState } from 'react'
import Validator from './components/Validator'

const App = () => {
  return <Validator />
  // return (
  //   <div>
  //     <Cell />
  //     <Cell />
  //     <Cell />
  //   </div>
  // )
}

export default App

// const Cell = () => {
//   const arr = [1]
//   const [value, setValue] = useState(arr)
//   const onClick = () => {
//     arr[0] = 2
//     console.log(arr[0])
//     console.log(arr === value)
//   }
//   return <button onClick={onClick}>{value[0]}</button>

//   // const [value] = useState(1)
//   // return <button>{value}</button>
// }

// const a = [1,2,3,4,5]

// const one = a[0]
// const two = a[1]
// const three = a[2]
// const four = a[3]
// const five = a[4]

// //
// const [one, two, three, four, five] = a;
