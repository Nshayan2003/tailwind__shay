// import React, { useEffect, useState } from 'react'
// import './App.css'

// function App () {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   const operations = ['+', '-', '*', '/']
//   const [firstNumber, setFirstNumber] = useState('')
//   const [secondNumber, setSecondNumber] = useState('')
//   const [operation, setOperation] = useState('')
//   const [result, setResult] = useState(0)

//   useEffect(() => {
//     console.log(result)
//   }, [result])

//   function clickNumbers (val) {
//     if (operation == '') {
//       setFirstNumber(firstNumber + val)
//     } else {
//       setSecondNumber(secondNumber + val)
//     }
//   }

//   function clickOperation (val) {
//     setOperation(val)
//   }

//   function performOperation (val) {
//     switch (operation) {
//       case '+':
//         setResult(Number(firstNumber) + Number(secondNumber))
//         break
//       case '-':
//         setResult(Number(firstNumber) - Number(secondNumber))
//         break
//       case '*':
//         setResult(Number(firstNumber) * Number(secondNumber))
//         break
//       case '/':
//         setResult(Number(firstNumber) / Number(secondNumber))
//         break
//     }
//   }

//   return (
//     <div className='App'>
//       <div className='calculator'>
//         <div className='display'>{result}</div>
//         <div className='buttons'>
//           <div className='leftSide'>
//             <div id='clearBtn' onClick={performOperation}>
//               seeresult
//             </div>
//             <div className='numbers'>
//               {numbers.map((val, key) => {
//                 return (
//                   <div
//                     id='individualNumber'
//                     onClick={() => {
//                       clickNumbers(val)
//                     }}
//                   >
//                     {val}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//           <div className='rightSide'>
//             {operations.map((val, key) => {
//               return (
//                 <div
//                   id='operations'
//                   onClick={() => {
//                     clickOperation(val)
//                   }}
//                 >
//                   {val}
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
// export default function App () {
//   const [products, setProducts] = useState([])
//   const [page, setPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(0)
//   const fetchProducts = async () => {
//     const res = await fetch(
//       ` https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
//     )
//     const data = await res.json()
//     console.log(products)
//     if (data && data.products) {
//       setProducts(data.products)
//       setTotalPages(data.total / 10)
//     }
//   }

//   useEffect(() => {
//     fetchProducts()
//   }, [page])
//   const selectPageHandler = selectedPage => {
//     if (
//       selectedPage >= 1 &&
//       selectedPage <= totalPages &&
//       selectedPage !== page
//     )
//       setPage(selectedPage)
//   }
//   return (
//     <div>
//       {products.length > 0 && (
//         <div className='products'>
//           {/* {products.slice(page * 10 - 10, page * 10).map(prod => { */}
//           {products.map(prod => {
//             return (
//               <span className='products__single'>
//                 <img src={prod.thumbnail} alt={prod.title} />
//                 <span key={prod.id}>{prod.title}</span>
//               </span>
//             )
//           })}
//         </div>
//       )}
//       {products.length > 0 && (
//         <div className='pagination'>
//           <span
//             onClick={() => selectPageHandler(page - 1)}
//             className={page > 1 ? '' : 'pagination__disable'}
//           >
//             ◀️
//           </span>
//           {/* {[...Array(products.length / 10)].map((_, i) => { */}
//           {[...Array(totalPages)].map((_, i) => {
//             return (
//               <span
//                 className={page === i + 1 ? 'pagination__selected' : ' '}
//                 onClick={() => selectPageHandler(i + 1)}
//                 key={i}
//               >
//                 {i + 1}
//               </span>
//             )
//           })}

//           <span
//             onClick={() => selectPageHandler(page + 1)}
//             // className={page < products.length / 10 ? '' : 'pagination__disable'}
//             className={page < totalPages ? '' : 'pagination__disable'}
//           >
//             ▶️
//           </span>
//         </div>
//       )}
//     </div>
//   )
// }
// import Button from '@mui/material/Button'
// import ButtonGroup from '@mui/material/ButtonGroup'
// import SaveIcon from '@material-ui/icons/Save'
// import DeleteIcon from '@material-ui/icons/Delete'
// import CheckBox from '@material-ui/icons/CheckBox'
// import { makeStyles } from '@mui/material'
// function CheckboxExample () {
//   const [checked, setChecked] = useState(true)
//   return (
//     <div>
//       <CheckBox
//         checked={checked}
//         onChage={e => setChecked(e.target.checked)}
//         inputProps={{ 'aria-label': 'secondary checkbox' }}
//       />
//     </div>
//   )
// }
// function App () {
//   return (
//     <div className='App'>
//       <header className='"App-header'>
//         <ButtonGroup>
//           <Button
//             startIcon={<SaveIcon />}
//             size='large'
//             onClick={() => alert('hello')}
//             variant='contained'
//             color='primary'
//             Save
//           >
//             Helllo World
//           </Button>
//           <CheckboxExample />
//           <Button
//             endIcon={<DeleteIcon />}
//             size='large'
//             onClick={() => alert('hello')}
//             variant='contained'
//             color='secondary'
//             Discard
//           >
//             End
//           </Button>
//         </ButtonGroup>
//       </header>
//     </div>
//   )
// }

// function App () {
//   return <div>App</div>
// }

// export default App
