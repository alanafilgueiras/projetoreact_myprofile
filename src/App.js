//import logo from './logo.svg';
import './App.css';


const getUserFromDB = (user) => ({
  "Alana Filgueiras": "https://avatars.githubusercontent.com/u/75276526?s=400&u=e5b61b3ad2e8b18a377302ce3950627a8d0a5b3a&v=4"
})[user]

function Profile(props) {
  const id = props.id;
  const conteudo = props.children;
  
  const url = getUserFromDB(id);

  return <div>
      <picture>
      <img id="imgperfil" src={url} alt={id} />
      <h2>{id}</h2>
      {conteudo}
      </picture>
      </div>

}
function Description(props){
  return <span id="descricao"> {props.desc}</span>;
}

function ProfileLinks(props){  
  const twitterUser = getUserFromUrl(props.twitter);
  const linkedinUser = getUserFromUrl(props.linkedin);

  return <ul class="linksprofile">
     <li>
      Linkedin: <a href={props.linkedin}>@{linkedinUser}</a>
    </li>
    <li>
        Twitter: <a href={props.twitter}>@{twitterUser}</a>
    </li>
  </ul>
}

function getUserFromUrl(url) {
   const words = url.split('/');
   const last = words[words.length-1];
   return last
}

function MyProfileSkills(props){
  
  return(
    <div>
      <h3 id="profileskills">Profile Skills</h3>
    <div class="skills">
      
      <img src="https://camo.githubusercontent.com/226b7091f273b59ae060037d0d939aaac27a22962dbc2f20b0ab9451f973a45a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176617363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145" alt="escudojs" />
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="escudohtml5" />
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="escudocss3" />
      <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="escudonode" />
      </div>
      </div>)
}


function App() {
  return (<div>
    <Profile id="Alana Filgueiras">
      <Description desc="Aprendendo React na força do ódio"/>
      <ProfileLinks 
        twitter="https://twitter.com/trechobones" 
        linkedin="https://www.linkedin.com/in/alana-filgueiras-215b81253"
      />
      <MyProfileSkills/>
    </Profile>
  </div>);
}
//ReactDOM.render(<App />, document.getElementById('app'));




// function App() {
//   return (
//     <div className="App">
//       header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reloadddddd.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
