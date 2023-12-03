function StudentList(props) {
  const { changeText } = props;

  return (
    <div>
      <h4>StudentList</h4>
      {changeText ? <p>The number in this class is 15</p> : null}
    </div>
  );
}

function StudentList2() {
  const list = ["Bola", "Idrees", "Tolani", "Abdullah"];

  return (
    <div>
      <h3> Student List</h3>
      <ul>
        {list.map((listItem, index) => (
          <li key={`${listItem} - ${index}`}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}


export default StudentList2;
