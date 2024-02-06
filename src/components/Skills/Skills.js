import './Skills.css';
import javascript from "../../assets/javascript_logo.png";
import angular_logo from "../../assets/angular_logo.png";
import aws_logo from "../../assets/aws_logo.jpg";
import docker_logo from "../../assets/docker_logo.png";
import kubernetes_logo from "../../assets/kubernetes_logo.png";
import java_logo from "../../assets/java_logo.png";
import mongodb_logo from "../../assets/mongodb_logo.png";
import react_logo from "../../assets/react_logo.png";
import html_logo from "../../assets/html_logo.jpg";
import jenkins_logo from "../../assets/Jenkins_logo.png";
import spring_logo from "../../assets/spring_logo.jpg";
import MySQL_logo from "../../assets/MySQL_logo.jpg";



const Skills = () => {


    return(
        <section id='skills'>
            <h2>Skills</h2>
            <div className={"skills-container"}>
                <div className="skill-box"><img src={html_logo} alt =""/><br/><span>HTML & CSS</span></div>
                <div className="skill-box"><img src={javascript} alt =""/><br/><span>Javascript</span></div>
                <div className="skill-box"><img src={angular_logo} alt =""/><br/><span>Angular</span></div>
                <div className="skill-box"><img src={react_logo} alt =""/><br/><span>React</span></div>
                <div className="skill-box"><img src={java_logo} alt =""/><br/><span>Java</span></div>
                <div className="skill-box"><img src={spring_logo} alt =""/><br/><span>Spring</span></div>
                <div className="skill-box"><img src={MySQL_logo} alt =""/><br/><span>MySQL</span></div>
                <div className="skill-box"><img src={mongodb_logo} alt =""/><br/><span>Mongo DB</span></div>
                <div className="skill-box"><img src={aws_logo} alt =""/><br/><span>AWS</span></div>
                <div className="skill-box"><img src={jenkins_logo} alt =""/><br/><span>Jenkins</span></div>
                <div className="skill-box"><img src={kubernetes_logo} alt =""/><br/><span>Kubernetes</span></div>
                <div className="skill-box"><img src={docker_logo} alt =""/><br/><span>Docker</span></div>
            </div>
        </section>
    )
}

export default Skills