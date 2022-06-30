import React from "react"
import { DesignSystemStyle } from "./DesignSystem.style"
import SectionButtons from "./SectionButtons"
import SectionTypography from "./SectionTypography"
import SectionCard from "./SectionCard"
import SectionModal from "./SectionModal"
import SectionBanner from "./SectionBanner"
import SectionHeader from "./SectionHeader"
import SectionFooter from "./SectionFooter"

function DesignSystem(props) {
  return (
    <DesignSystemStyle>
      <SectionTypography />

      <SectionButtons/>

      <SectionCard />

      <SectionModal />

      <SectionBanner />

      <SectionHeader />

      <SectionFooter />
    </DesignSystemStyle>
  )
}

export default DesignSystem
