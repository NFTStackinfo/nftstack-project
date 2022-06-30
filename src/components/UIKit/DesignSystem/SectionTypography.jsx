import React from "react"

function SectionTypography(props) {
  return (
    <section className="section section-typography">
      <div className="container">
        <div className="content">
          <h2>Typography</h2>

          <div className="section-typography__container">
            <div className="typography__variant">
              <h1 className="text-h1 font-regular">H1/ Poppins/ Regular - 28PX</h1>
              <h1 className="text-h1 font-semibold">H1/ Poppins/ Semibold - 28PX</h1>
              <h1 className="text-h1 font-extrabold">H1/ Poppins/ Extrabold - 28PX</h1>
            </div>

            <div className="typography__variant">
              <h2 className="text-h2 font-regular">H2/ Poppins/ Regular - 24PX</h2>
              <h2 className="text-h2 font-semibold">H2/ Poppins/ Semibold - 24PX</h2>
              <h2 className="text-h2 font-extrabold">H2/ Poppins/ Extrabold - 24PX</h2>
            </div>

            <div className="typography__variant">
              <h3 className="text-h3 font-regular">H3/ Poppins/ Regular - 20PX</h3>
              <h3 className="text-h3 font-semibold">H3/ Poppins/ Semibold - 20PX</h3>
              <h3 className="text-h3 font-extrabold">H3/ Poppins/ Extrabold - 20PX</h3>
            </div>

            <div className="typography__variant">
              <p className="text-b1 font-regular">Body1/ Poppins/ Regular - 18PX</p>
              <p className="text-b1 font-semibold">Body1/ Poppins/ Semibold - 18PX</p>
              <p className="text-b1 font-extrabold">Body1/ Poppins/ Extrabold - 18PX</p>
            </div>

            <div className="typography__variant">
              <p className="text-b2 font-regular">Body2/ Poppins/ Regular - 16PX</p>
              <p className="text-b2 font-semibold">Body2/ Poppins/ Semibold - 16PX</p>
              <p className="text-b2 font-extrabold">Body2/ Poppins/ Extrabold - 16PX</p>
            </div>

            <div className="typography__variant">
              <p className="text-b3 font-regular">Body3/ Poppins/ Regular - 14PX</p>
              <p className="text-b3 font-semibold">Body3/ Poppins/ Semibold - 14PX</p>
              <p className="text-b3 font-extrabold">Body3/ Poppins/ Extrabold - 14PX</p>
            </div>

            <div className="typography__variant">
              <p className="text-c font-regular">Caption/ Poppins/ Regular - 12PX</p>
              <p className="text-c font-semibold">Caption/ Poppins/ Semibold - 12PX</p>
              <p className="text-c font-extrabold">Caption/ Poppins/ Extrabold - 12PX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTypography
