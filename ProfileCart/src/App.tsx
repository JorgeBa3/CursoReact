// import { React } from 'react'
import './App.css'

function App() {


  return (
    <>
      <Tarjeta />
    </>
  )
}
export default App;


function Tarjeta() {
  return (
    <>  
    <Image />
    <Name />
    <Description />
    <Skills />
    </>
  );
}

function Image() {
  return (
    <>
      {/* Mi usuario de github es JorgeBa3 */}
      <img src="https://avatars.githubusercontent.com/u/49853820?s=400&u=61a68694e6520d98d5208f5b670951d7ce35f908&v=4" alt="Foto de perfil" />
    </>
  );
}

function Name(){
  return(
    <>
      <h1>Jorge Alejandro De León Batres</h1>
      <h2> Tarjeta de presentación</h2>
    </>
  );
}

function Description(){
  return(
    <>
      <p>Hola, mi nombre es Jorge Alejandro De León Batres, tengo 23 años y soy de Guatemala. Soy estudiante de la carrera de Ingeniería en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala. Me gusta aprender y hacer cursos de udemy a las 2 de la mañana en lo que escucho bachata</p>
    </>
  );
}

function Skills(){
  return(
    <>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((habilidad) => (
          <Skill 
            skill={habilidad.skill}
            level={habilidad.level}
            color={habilidad.color}
          />
        ))
            }
      </ul>
    </>
  );
}

type SkillProps = {
  skill: string;
  level: string;
  color: string;
};

function Skill ({ skill, level, color}: SkillProps) {
  return(
    <>
      <li>
        <span>{skill}</span>
        <div>
          <div style={{ width: level, backgroundColor: color }}></div>
        </div>
        <span>
          {level === "50%" && "😲"}
          {level === "60%" && "🫦"}
          {level === "70%" && "🌛"}
          {level === "80%" && "🤑"}
        </span>
      </li>
    </>
  );
}

const habilidades = [
  { skill: 'HTML', level: '80%', color: 'red' },
  { skill: 'CSS', level: '70%', color: 'blue' },
  { skill: 'JavaScript', level: '60%', color: 'green' },
  { skill: 'React', level: '50%', color: 'yellow' },
];