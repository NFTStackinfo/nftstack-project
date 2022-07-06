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


const DashboardPage = ({}) => {
  const {data, isLoading} = useDashboard()
  console.log(data);
  console.log(isLoading);
  return (
    <MainLayout>
      <DashboardPageStyle className={['dashboard']}>
        <Container inner>
          <DashboardContent>
            <Link to="/smart-contract">
              <Card variant="create"/>
            </Link>

            {dashboardPageData.map((data, idx) => (
              <Card {...data} key={`card_${idx}`}/>
            ))}
          </DashboardContent>
        </Container>
      </DashboardPageStyle>
    </MainLayout>
  )
}

export default DashboardPage
