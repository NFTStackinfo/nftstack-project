import styled from "styled-components"

export const DashboardPageStyle = styled.div`

`

export const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    column-gap: 16px;
    row-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`
