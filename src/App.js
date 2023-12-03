import Buttonclick from "./components/Click"
import StudentList2 from "./components/propsConcept/Students"
import Student from "./components/propsConcept/Students"
import TeacherList from "./components/propsConcept/Teacher"

function App(){
  return(
    <div>

      <h1>Welcome Home</h1>
      <Buttonclick />
      <TeacherList />
      {/* <StudentList2 /> */}


    </div>
    
  )
}


export default App