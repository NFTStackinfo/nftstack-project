import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1152px;
    padding: 0 16px;
  }
`

export const ContainerMd = styled.div`
  max-width: 818px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 770px;
    padding: 0 16px;
  }
`

export const ContainerSm = styled.div`
  max-width: 540px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 490px;
    padding: 0 16px;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.h2.DEFAULT};
  line-height: ${({ theme }) => theme.font.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.h2.letterSpacing};
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.outerSpace};
  text-align: center;
`

export const Content = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
`

export const A = styled.a`
  color: ${({ theme }) => theme.colors.electricUltramarine};
  text-decoration: underline;
  cursor: pointer;
`
