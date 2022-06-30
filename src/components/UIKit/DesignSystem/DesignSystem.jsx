import React from "react"
import { DesignSystemStyle } from "./DesignSystem.style"
import SectionButtons from "./SectionButtons"
import SectionTypography from "./SectionTypography"
import SectionCard from "./SectionCard"
import SectionModal from "./SectionModal"

function DesignSystem(props) {
  return (
    <DesignSystemStyle>
      <SectionTypography />

      <SectionButtons/>

      <SectionCard />

      <SectionModal />
    </DesignSystemStyle>
  )
}

export default DesignSystem
