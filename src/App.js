import './App.css';
import './/components/Header/Header.css'
import ".//components/Comment/Comment.css"
import ".//components/Footer/Footer.css"
import { Header } from './components/Header/Header';
import { Comment } from './components/Comment/Comment';
import { Footer } from './components/Footer/Footer';

function App() {

const ANAKIN_IMAGE = "https://kartinki.pics/uploads/posts/2022-09/1662459070_1-kartinkin-net-p-enakin-skaiuoker-art-pinterest-1.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  
  return (
    <div className='App'>
      <Header autor ={{
        name :"Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
      image={RAY_IMAGE}
      date={"26 лют."}
      />

<Comment content = {"WTF? Who is Ray? Why she is Skywalker? Luke...?"}/>

<img className='ray__img' src = {RAY_IMAGE} alt = 'RAY'/>
<div> 
  <Footer contents = {{
    com : '&#128172 482',
    rep : '&#128257 146',
    like : '&#9829 887',
    downld : '&#128190',
  }}/>  
</div>    
</div>
  );
}
export default App;

