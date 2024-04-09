import './App.css'
import AddEmp from './container/AddEmp'
import FooterComponent from './container/FooterComponent'
import HeaderComponent from './container/HeaderComponent'
import ListEmployee from './container/ListEmployee'
import {BrowserRouter, Route,  Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
       <Routes>
        <Route path='/' element={<ListEmployee/>}></Route>
        <Route path='/employees' element={<ListEmployee/>}></Route>
        <Route path='/add-emp' element={<AddEmp/>}></Route>
        <Route path='/update-emp/:id' element={<AddEmp/>}></Route> 
       </Routes>  
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
