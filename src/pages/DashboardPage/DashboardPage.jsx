import React  from "react"
import {
  DashboardContent,
  DashboardPageStyle
} from "./DashboardPage.style"
import { Container } from "../../styles/components"
import { dashboardPageData } from "./dashboard-page-data"
import { Link } from "react-router-dom"
import { MainLayout } from "components/layouts"
import { Card } from "components/UIKit"
import {useDashboard} from '../../fetchHooks/useDashboard';
import {useContractById} from '../../fetchHooks/useContractById';


const DashboardPage = ({}) => {
  const {data, isLoading} = useDashboard()

  const contracts = data?.contracts
  return (
    <MainLayout>
      <DashboardPageStyle className={['dashboard']}>
        <Container inner>
          <DashboardContent>
            <Link to="/smart-contract">
              <Card variant="create"/>
            </Link>

            {contracts?.map((data, idx) => (
              <Link to={`/smart-contract/${data.id}`} key={`card_${idx}`}>
              <Card {...data} />
              </Link>
            ))}
          </DashboardContent>
        </Container>
      </DashboardPageStyle>
    </MainLayout>
  )
}

export default DashboardPage
