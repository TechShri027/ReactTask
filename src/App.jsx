import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'








// =====================================================Task 1=================================================================
// function App() {
//   const [count, setCount] = useState(0)

//   const addBtn=()=>{
//     setCount(count+1)
//   }

//   const subtractbtn=()=>{
//   if(count>0) setCount(count-1)
//   }

//   return (
//     <>
//     <h1>Counter App</h1>
//     <p>{count}</p>
//     <button onClick={addBtn}>Add</button>
//     <button onClick={subtractbtn}>subtract</button>
//     </>
//   )
// }

// export default App











 
// ====================================================Task 2=============================================================

// const App = () => {

// const[isDark, setDark]=useState(false)
 

// const Togglebtn=()=>{
// setDark(!isDark)
// console.log(isDark)
// }


//   return (
//     <div style={{backgroundColor: isDark? "#000" : "#fff"}}>
//       <h1  style={{color: isDark? "#fff" : "#000"}}>Theme App</h1>
//       <button onClick={Togglebtn}>Toggle</button>
//     </div>
//   )
// }

// export default App









// ========================================Task3==============================================================================
// condition rendering

// import React from 'react'


// const App = () => {

//     const[islogin, setIsLogin]=useState(false)
//     const[isloading, setIsloading]=useState(false)
     
//     const handlerclick=()=>{
//         setIsloading(true)
//         setTimeout(()=>{
//           setIsLogin(!islogin)
//           setIsloading(false)
//         },1500)
//     }

//   return (
//     <div>
//       {isloading?(<p>loading....</p>) : islogin ? (
//     <>   <h1>welcome user</h1>
//         <button  onClick={handlerclick}>LOGOUT</button>
//         </> ):(  <><h1>login</h1>
//         <button onClick={handlerclick}>LOGIN</button></>
//       )}
//     </div>
//   )
// }

// export default App




// ================================================Task4======================================================================

// import React from 'react'

// const App = () => {
// const[valuename, setValuename]=useState("")
// const[valueemail, setValueemail]=useState("")

// const[submitname, setSubmitname]=useState("")
// const[submitemail, setsubmitemail]=useState("")
//     const handlerclick=(e)=>{
//         e.preventDefault()
//         setSubmitname(valuename)
//         setsubmitemail(valueemail)
      
//     }
//   return (
//     <div>
//         <form action="" onSubmit={(e)=>{handlerclick(e)}}>
//         <label htmlFor="">name:</label>
//             <input type="text" placeholder='enter name here'  onChange={e=>{setValuename(e.target.value)}} value={valuename}/><br />
//             <label htmlFor="">email:</label>
//             <input type="email" name="" id="" placeholder='enter email here' onChange={e=>{setValueemail(e.target.value)}} value={valueemail} />
//             <button type='submit'>submit</button>
//         </form>
          

          

//             <h1>name:{submitname}</h1>
//             <p>email:{submitemail}</p>
        
//     </div>
//   )
// }

// export default App



// =====================================================Task5===============================================================
// import React from 'react'
// import Buton from '../Buton'

// const App = () => {

//     const[count, setcount]=useState(0)



//     const handlerclick=()=>{
//         setcount(count+1)


//     }
//     const handledecr=()=>{
//        if(count>0) setcount(count-1)
//     }
   
//   return (
//     <div><Buton func1={handlerclick} func2={handledecr} count={count} /></div>
//   )
// }

// export default App





// =========================================Task6=======================================================================

// import React from 'react'
// import Counter from './Counter'


// const App = () => {

//   const [count, setCount]=useState(0)

//   const increase=()=>{
//     setCount(count+1)
//   }
//   const decrease=()=>{
//   if(count>0)  setCount(count-1)
//   }
//   return (
//     <div>
//       <Counter increase={increase} decrease={decrease} count={count}/>
//     </div>
//   )
// }

// export default App













// =====================================Task7==============================================================================

// 2. Login Form with Controlled Inputs
// Fields: Email and Password

// Show errors if fields are empty or invalid

// On submit, show a welcome message


import React from 'react'

const App = () => {

  const[input, setInput]=useState("")
  const[email, setEmail]=useState("")
const [msg, setMsg]=useState("")
  const [submitname, setsubmitname]=useState('')
  const[submitemail, setsubmitemail]=useState('')
  
  
  const submit=(e)=>{
e.preventDefault()
 setMsg("Welcome")
     setsubmitname(input)
     setsubmitemail(email)
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{submit(e)}}>
        <label htmlFor="">name</label>
        <input type="text" placeholder='name'  value={input} onChange={e=>{setInput(e.target.value)}} />

        <label htmlFor="">email</label>
        <input type="email" placeholder='email' value={email} onChange={e=>{setEmail(e.target.value)}} />

        <button type='submit'>click me</button>


      
      </form>
        <h1>{msg}</h1>
        <p>{submitname}</p>
        <p>{submitemail}</p>
    </div>
  )
}

export default App