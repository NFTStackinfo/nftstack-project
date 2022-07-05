import React  from "react"
import {
  DashboardContent,
  DashboardPageStyle
} from "./DashboardPage.style"
import MainLayout from "../../components/layouts/MainLayout/MainLayout"
import { Container } from "../../styles/components"
import Card from "../../components/UIKit/Card/Card"
import { dashboardPageData } from "./dashboard-page-data"
import { Link } from "react-router-dom"

const DashboardPage = ({}) => {
  return (
    <MainLayout
      headerAddress="0x0E086Bfb73Dd4F52a42753C0848f426FA079A76e"
    >
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
