import { useMoralis } from "react-moralis"
import SmartContractFormPage
  from "./pages/SmartContractFormPage/SmartContractFormPage"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import DesignSystem from "./components/UIKit/DesignSystem/DesignSystem"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import OverviewPage from "./pages/OverviewPage/OverviewPage"

function App() {
  // const { refetchUserData, isUserUpdating, authenticate, isAuthenticated, user, logout, web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, onAccountsChanged } = useMoralis();
  // console.log(user?.id);

  // useEffect( () => {
  //
  //   if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
  //     console.log('asd');
  //      enableWeb3();
  // }, [isAuthenticated, isWeb3Enabled]);
  // console.log(web3);
  // console.log(isAuthenticated);
  //
  //
  // useEffect( () => {
  //   onAccountsChanged(() =>{
  //
  //     console.log("x", 'asdasd');
  //
  //   });
  //
  // }, [])
  // return (
  //     <>
  //
  //       {
  //         isAuthenticated ? <div><SmartContractForm /> <button onClick={() => logout()}>logout</button> <button onClick={() => enableWeb3()} disabled={isUserUpdating}>
  //           Refetch user data
  //         </button></div> : <div>
  //           <button onClick={() =>authenticate()}>login</button></div>
  //       }
  //     </>
  //
  // );

  return (

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route index path="/smart-contract"
               element={<SmartContractFormPage />} />
        <Route index path="/dashboard" element={<DashboardPage />} />
        <Route index path="/overview" element={<OverviewPage />} />
        <Route path="design" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App
