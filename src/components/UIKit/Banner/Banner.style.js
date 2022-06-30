import styled from "styled-components"

export const BannerStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  border-radius: 12px;
  max-width: 690px;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: 1fr;
  }

  .banner {
    &__text {
      color: ${({ theme }) => theme.colors.outerSpace};
    }

    &__link {
      justify-self: flex-end;
    }
  }
`
