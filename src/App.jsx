import './styles/app.sass'
import Avatar from "./img/JOR_8899.jpeg"
import Button from ".././src/components/Button"
import Network from "./components/SocialNetwork"




function App() {
  

  return (
    <main>
      <div className="container ">
        <div>
          <h2>I'm</h2>
          <h1>Anderson Santos</h1>
          <hr/>
          <div>
            <p>
            My goal is create better interfaces and user experiences, making the web, application`s and technology easier for the users.
            </p>
            <Button/>
          </div>
          <Network/>
        </div>
        <div id="box">
         <img src={Avatar} alt="Anderson"/>
        </div>
      </div>
       
    </main>
  )
}

export default App
