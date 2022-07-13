import SmartContractFormPage
  from "./pages/SmartContractFormPage/SmartContractFormPage"
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Auth/Login"
import DesignSystem from "./components/UIKit/DesignSystem/DesignSystem"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import DeployPage from "./pages/DeployPage/DeployPage"
import OverviewPage from "./pages/OverviewPage/OverviewPage"
import {ProtectedRoute, PublicRoute} from 'helpers/validations/routes/routes';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useRef} from 'react';
import { ReactQueryDevtools } from 'react-query/devtools'
import {useUserState} from './context/UserContext';
import LocalStorage from './services/localStorage';

const App = () => {

  const {isLoggedIn: user} = useUserState()
  const storedHash = LocalStorage.getItem('hash')



  const queryClientRef = useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          keepPreviousData: true,
          retry: 0,
          refetchOnWindowFocus: false,
          retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
      },
    });
  }
  return (

    <QueryClientProvider client={queryClientRef.current}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PublicRoute user={user || storedHash} children={<Login/>}/> }/>
            <Route   path='smart-contract' element={<ProtectedRoute user={user || storedHash} children={<SmartContractFormPage/>}/> }/>
            <Route   path='smart-contract/:contract_id' element={<ProtectedRoute user={user || storedHash} children={<SmartContractFormPage/>}/> }/>
            <Route   path='dashboard' element={<ProtectedRoute user={user || storedHash} children={<DashboardPage/>}/> }/>
            <Route   path='deploy' element={<ProtectedRoute user={user || storedHash} children={<DeployPage/>}/> }/>
            <Route   path='overview' element={<ProtectedRoute user={user || storedHash} children={<OverviewPage/>}/> }/>
            <Route   path='*' element={<ProtectedRoute user={user || storedHash}  children={<SmartContractFormPage/>}/> }/>
            <Route path="design" element={<DesignSystem />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App
