import SmartContractFormPage
  from "./pages/SmartContractFormPage/SmartContractFormPage"
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Auth/Login"
import DesignSystem from "./components/UIKit/DesignSystem/DesignSystem"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import DeployPage from "./pages/DeployPage/DeployPage"
import OverviewPage from "./pages/OverviewPage/OverviewPage"
import {ProtectedRoute, PublicRoute} from 'helpers/routes/routes';

const App = () => {

  const user = false

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute user={user} children={<Login/>}/> }/>
        {/*<Route path='*' element={<PublicRoute user={user}  children={<Login/>}/> }/>*/}
        <Route   path='smart-contract' element={<ProtectedRoute user={user} children={<SmartContractFormPage/>}/> }/>
        <Route   path='dashboard' element={<ProtectedRoute user={user} children={<DashboardPage/>}/> }/>
        <Route   path='deploy' element={<ProtectedRoute user={user} children={<DeployPage/>}/> }/>
        <Route   path='overview' element={<ProtectedRoute user={user} children={<OverviewPage/>}/> }/>
        <Route   path='*' element={<ProtectedRoute user={user}  children={<SmartContractFormPage/>}/> }/>
        <Route path="design" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App
