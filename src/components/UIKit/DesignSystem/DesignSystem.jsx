import React from "react"
import { DesignSystemStyle } from "./DesignSystem.style"
import SectionButtons from "./SectionButtons"
import SectionTypography from "./SectionTypography"
import SectionCard from "./SectionCard"
import SectionModal from "./SectionModal"
import SectionBanner from "./SectionBanner"

function DesignSystem(props) {
  return (
    <DesignSystemStyle>
      <SectionTypography />

      <SectionButtons/>

      <SectionCard />

      <SectionModal />

      <SectionBanner />
    </DesignSystemStyle>
  )
}

export default DesignSystem
