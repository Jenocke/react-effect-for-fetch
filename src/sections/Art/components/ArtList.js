import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem.js"

export default function ArtList () {
    const [artworksList, setArtworksList] = useState([]);

  useEffect(() =>{
    fetch("https://api.artic.edu/api/v1/artworks")
      .then(res => res.json())
      .then(data => {
        setArtworksList(data.data);
      });
    }, []
    )

    return (
        <ul class="art-list">
        {artworksList.map((item) => (
          <ArtListItem item={item}/>
          ))}
        </ul>
    )
}