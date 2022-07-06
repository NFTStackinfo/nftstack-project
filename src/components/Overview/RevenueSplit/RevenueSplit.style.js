import styled from "styled-components"

export const RevenueSplitStyle = styled.div``

export const RevenueSplitContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gainsboro};
  border-radius: 12px;
  padding: 16px;
`

export const RevenueSplitCount = styled.div`
  > span {
    letter-spacing: normal;

    > span {
      color: ${({ theme }) => theme.colors.sonicSilver};
    }
  }
`

export const RecipientsAddresses = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.colors.sonicSilver};
  margin-top: 4px;
  flex-wrap: wrap;
`

export const RevenueSplitHeader = styled.div`
  display: flex;
`

export const RevenueSplitHeaderContent = styled.div`
  width: 100%;
`

export const RevenueSplitHeaderControl = styled.div`
  flex-shrink: 0;
  margin-left: 4px;
`

export const RevenueSplitBody = styled.div`
  @keyframes body-open {
    from {
      max-height: 0;
    }
    to {
      max-height: ${({ recipientsCount }) => recipientsCount * 44 + 33}px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    @keyframes body-open {
      from {
        max-height: 0;
      }
      to {
        max-height: ${({ recipientsCount }) => recipientsCount * 64 + 33}px;
      }
    }
  }



  overflow: hidden;
  height: 100%;
  max-height: 0;

  &.entering {
    animation: body-open 0.5s ease-in-out;
  }

  &.entered {
    max-height: ${({ recipientsCount }) => recipientsCount * 44 + 33}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-height: ${({ recipientsCount }) => recipientsCount * 64 + 33}px;
    }
  }

  &.exiting {
    animation: body-open 0.5s ease-in-out reverse;
  }

  &.exited {
    max-height: 0;
  }
`

export const RevenueSplitList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: fit-content;
  border-top: 1px solid ${({ theme }) => theme.colors.gainsboro};
  padding-top: 16px;
  margin-top: 16px;

  > li {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.outerSpace};
    overflow-wrap: break-word;

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`

export const RevenueSplitListPercent = styled.span`
  color: ${({ theme }) => theme.colors.electricUltramarine};
`
