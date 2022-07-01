import React from "react"
import { DesignSystemStyle } from "./DesignSystem.style"
import SectionButtons from "./SectionButtons"
import SectionTypography from "./SectionTypography"
import SectionCard from "./SectionCard"
import SectionModal from "./SectionModal"
import SectionBanner from "./SectionBanner"
import SectionHeader from "./SectionHeader"
import SectionFooter from "./SectionFooter"
import SectionTextFields from "./SectionTextFields"

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

      <SectionTextFields />
    </DesignSystemStyle>
  )
}

export default DesignSystem
