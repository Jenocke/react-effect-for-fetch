import { useEffect, useState } from "react"
import ArtList from "./components/ArtList.js"

function ArtsSection() {
  

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList/>
      </div>
    </section>
  )
}

export default ArtsSection
