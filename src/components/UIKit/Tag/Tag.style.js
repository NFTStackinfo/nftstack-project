import styled from 'styled-components'
import { innerBorder } from "../../../utils/utils"
import { theme } from "../../../styles/theme"

export const TagStyle = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  padding: 4px 12px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.outerSpace};

  .icon {
    margin-right: 4px;
  }

  &.default {
    ${innerBorder({color: theme.colors.cadetBlue})};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &.eth {
    background-color: ${({ theme }) => theme.colors.lavender};
  }
`
