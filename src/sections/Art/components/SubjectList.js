export default function SubjectList (props)
{
    return (
        <ul>
        {
          props.itemArray.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>)
}