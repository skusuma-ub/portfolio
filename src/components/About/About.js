import pic from "../../assets/mypic.png";
import './About.css'

const About = () => {


    return (
        <section  id="about">
            <div className="about">
                <p>I'm <span>Suresh Krishna Kusuma</span> <br />
                    Software Engineer | Full Stack Developer | Java, AWS, Kubernetes, Apache Kafka Certified
                </p>
                <br />
                <a href="#contact">Contact me</a>
            </div>
            <div className="aboutimg">
                <img src={pic} alt=""></img>
            </div>
        </section>
    )
}

export default About