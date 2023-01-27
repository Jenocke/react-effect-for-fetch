export default function UsersListItem (props) {
    console.log(props.item);

    return (
        <>
        <li class=  {(props.item.gender === 'male') ? "bg-blue" : "bg-pink"}>
        <img
          src={props.item.picture.thumbnail}
          alt={props.item.name.first + " " + props.item.name.last}
        />
        <h3>{props.item.name.title + " " + props.item.name.first + " " + props.item.name.last}</h3>
        <p>Email: {props.item.email}</p>
      </li>
      </>
      )
}