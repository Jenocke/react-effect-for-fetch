import { useEffect, useState } from "react"
import Artwork from "./Artwork.js"

function ArtsSection() {
  const [artworksList, setArtworksList] = useState(null);

  useEffect(() =>{
    fetch("https://api.artic.edu/api/v1/artworks")
      .then(res => res.json())
      .then(data => {
        setArtworksList(data.data)
      });
    }, []
  )
  

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul class="art-list">
          {artworksList.map(item => {
            <>
            <Artwork artwork = {item} />
            </>
          })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
