import React  from "react"
import {
  DashboardContent,
  DashboardPageStyle
} from "./DashboardPage.style"
import { Container } from "styles/components"
import { Link } from "react-router-dom"
import { MainLayout } from "components/layouts"
import { Card } from "components/UIKit"
import {useDashboard} from 'fetchHooks/useDashboard';
import Preloader from "components/UIKit/Preloader/Preloader"


const DashboardPage = ({}) => {
  const {data, isLoading, isFetching} = useDashboard()

  const contracts = data?.contracts
  const contractAddress = (data) => {
    return !!(data?.mainnetAddress || data?.rinkebyAddress)
  }

  const redirectTo = (data) => {
    if(data?.rinkebyAddress) {
      return `/overview/${data.id}`
    }
    return `/smart-contract/${data.id}`
  }
  return (
    <MainLayout>
      {
        (isLoading || isFetching) ? <Preloader /> :
          <DashboardPageStyle className={['dashboard']}>
            <Container inner>
              <DashboardContent>
                <Link to="/smart-contract">
                  <Card variant="create"/>
                </Link>

                {contracts?.map((data, idx) => (
                  <Link to={redirectTo(data)} key={`card_${idx}`}>
                    <Card draft={!contractAddress(data)} {...data} />
                  </Link>
                ))}
              </DashboardContent>
            </Container>
          </DashboardPageStyle>
      }

    </MainLayout>
  )
}

export default DashboardPage
