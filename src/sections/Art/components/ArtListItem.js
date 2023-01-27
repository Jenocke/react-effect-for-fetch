import SubjectList from "./SubjectList.js"
export default function ArtListItem (props){
    
    return (
        <li>
        <div class="frame">
          <img
            src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
          />
        </div>
        <h3>{props.item.title}</h3>
        <p>Artist: {props.item.artist_title}</p>
        <h4>Artistic Subjects:</h4>
        <SubjectList itemArray={props.item.subject_titles}/>
      </li>)
}