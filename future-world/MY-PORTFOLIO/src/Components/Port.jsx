import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Port.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import rocket from '../images/rocket.png'
import pus from '../images/pus.png'
import me from '../images/me2.jpg';
import fsd from '../images/fsd.jpg';
import pec from '../images/pec.png';
import vms from '../images/vms.avif';
import mre from '../images/mre.webp';
import vis from '../images/vision.jpeg';
import mis2 from '../images/mission2.jpeg'
import pdf from '../hd-images/HT Resume 2025.pdf'
import certified from '../images/Article Writing Certificate.jpg'
import cf1 from '../images/cf1.png'
import cf2 from '../images/cf2.png'
import cf3 from '../images/cf3.png'
import cf4 from '../images/cf4.png'
import cf5 from '../images/cf5.png'
import cf6 from '../images/cf6.png'
import cf7 from '../images/cf7.png'
import cf8 from '../images/cf8.png'
import cf9 from '../images/cf9.png'
import { FaGraduationCap, FaUniversity, FaBook } from 'react-icons/fa';


function Port() {
  const [rocketAnimation, setRocketAnimation] = useState(false);

 
    const [pdfVisible, setPdfVisible] = useState(false); // State to toggle PDF modal visibility
  
    // Toggle PDF modal visibility
    const handleCertificationsClick = () => {
      setPdfVisible(true);
    };
  
    // Close the PDF modal
    const closePdfModal = () => {
      setPdfVisible(false);
    };

  const handleRocketClick = () => {
    setRocketAnimation(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset animation after it's done
    setTimeout(() => {
      setRocketAnimation(false);
    }, 2000); // Adjust this time to match your animation duration
  };

  return (
    <div className="fullbg">
    <div className="ptbackground">
            {/* Navigation Bar */}
            {/* Navigation Bar */}
<Navbar variant="dark"  expand="lg" style={{ position: 'absolute', top: '1em', right: '7.5em' }}>
  <Navbar.Toggle aria-controls="navbar-nav" />
  <Navbar.Collapse id="navbar-nav">
    <Nav className="ml-auto custom-navbar">
      <Nav.Item>
        <Nav.Link href="#home" className="nav-link" 
  activeClassName="active">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about"  className="nav-link" 
  activeClassName="active">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects" className="nav-link" 
  activeClassName="active">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#skills" className="nav-link" 
  activeClassName="active">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
  <Nav.Link 
    href={pdf} 
    target="_blank" 
    rel="noopener noreferrer"
    className="nav-link"
  >
    Resume
  </Nav.Link>
</Nav.Item>

    </Nav>
  </Navbar.Collapse>
</Navbar>


{/* Rocket */}
<div
        className={`rocket-container ${rocketAnimation ? 'launch' : ''}`}
        onClick={handleRocketClick}
      >
        <img src={rocket} alt="Rocket" className="rocket-image" />
      </div>
  

      <header className="text-center text-white py-5">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div
            style={{
              width: '150px',
              height: '150px',
              border: '5px solid #fff',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={me}
              alt="Harish Thangavel P"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <h1 className="mt-3 font-weight-bold" style={{ fontSize: '2.5rem', color: '#f2f2f2' }}>Harish Thangavel P</h1>
          <h3 className="text-info font-italic">Full Stack Developer</h3>
        </div>
      </header>

      <div className="container mt-5">
        {/* About Section */}
        <section className="bg-dark text-white text-center py-5" id="about">
  <h2 className="font-weight-bold" style={{ fontSize: '2rem', color: '#e0a800' }}>About</h2>
  <div className="row mt-4">
    <div className="col-md-6">
      <p className="mt-3 about-paragraph" style={{ fontSize: '1.2rem', color: '#f0f0f0' }}>
        Hello! I'm Harish Thangavel, a passionate fresher eager to start my career in full stack development. Over the past few months, I've focused on learning technologies like HTML, CSS, JavaScript, and React, which are essential for creating dynamic, user-friendly web applications. I'm excited about full stack development because it allows me to work on both front-end and back-end, ensuring seamless integration.
        <br />
        <br />
        I've worked on personal projects where I developed responsive websites, created interactive user interfaces, and explored backend technologies and databases. My goal is to apply my skills to build functional and visually appealing web applications. I look forward to collaborating with professionals and growing in this ever-evolving field.
      </p>
    </div>
    <div className="col-md-6">
      <img
        src={fsd}
        alt="Harish Thangavel"
        style={{
          width: '525px',
          borderRadius: '8px',
          border: '2px solid black',
          objectFit: 'cover',
          height: '500px', // You can adjust the height as needed
        }}
      />
    </div>
  </div>
</section>


        {/* Education Section */}
       
        <div className="container mt-5">
  {/* Education Section */}
  <section className="bg-dark text-white py-5" id="education" >
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>Education</h2>
    <div className="row mt-4 justify-content-center">
      {/* B.E., ECE */}
      <div className="col-md-12 mb-4">
        <div className="d-flex align-items-center" style={{marginLeft:'30px'}}>
          <FaGraduationCap className="mr-2" style={{ fontSize: '2rem' }} />
          <h5 className="text-warning">B.E., ECE</h5>
        </div>
        <div className="d-flex align-items-center" >
          {/* Image aligned to the left */}
          <img src={pec} alt="Panimalar Engineering College" style={{ width: '100px', height: '83.73px',border: '2px solid black',borderRadius: '10px', marginLeft: '30px' }} />
          <div>
            <p style={{marginLeft:'20px'}}><strong>Panimalar Engineering College</strong> | 2019 - 2023</p>
            <p style={{marginLeft:'20px'}}>Focuses on the design, development, and application of electronic systems, communication technologies, and devices.</p>
          </div>
        </div>
      </div>

      {/* HSC */}
      <div className="col-md-12 mb-4">
        <div className="d-flex align-items-center" style={{marginLeft:'30px'}}>
          <FaUniversity className="mr-2" style={{ fontSize: '2rem' }} />
          <h5 className="text-warning">HSC</h5>
        </div>
        <div className="d-flex align-items-center">
          {/* Image aligned to the left */}
          <img src={vms} alt="Velammal Matriculation School" style={{ width: '100px', height: '83.73px',border: '2px solid black',borderRadius: '10px', marginLeft: '30px' }} />
          <div>
            <p style={{marginLeft:'20px'}}><strong>Velammal Matriculation Higher Secondary School</strong> | 2018 - 2019</p>
            <p style={{marginLeft:'20px'}}>Completed Higher Secondary Certificate in Bio-Maths at Velammal School in 2019.</p>
          </div>
        </div>
      </div>

      {/* SSLC */}
      <div className="col-md-12 mb-4">
        <div className="d-flex align-items-center" style={{marginLeft:'30px'}}>
          <FaBook className="mr-2" style={{ fontSize: '2rem' }} />
          <h5 className="text-warning">SSLC</h5>
        </div>
        <div className="d-flex align-items-center">
          {/* Image aligned to the left */}
          <img src={vms} alt="Velammal Matriculation School" style={{ width: '100px', height: '83.73px',border: '2px solid black',borderRadius: '10px', marginLeft: '30px' }} />
          <div>
            <p style={{marginLeft:'20px'}}><strong>Velammal Matriculation Higher Secondary School</strong> | 2016 - 2017</p>
            <p style={{marginLeft:'20px'}}>Completed Secondary School Leaving Certificate at Velammal School in 2017.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Other sections like Projects, Vision, Skills, etc. */}
</div>



        


{/* Projects Section */}
<div className="container mt-5">
  <section className="bg-dark text-white py-5" id="projects">
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>
      Professional Projects
    </h2>
    <div className="row mt-4 align-items-center">
      {/* Image on the left */}
      <div className="col-md-4">
        <img
          src={mre}
          alt="Marketplace for Rental Equipment"
          style={{
            width: '500px',
            marginLeft: '30px',
            border: '2px solid black',
            marginTop: '-10em',
            borderRadius: '10px',
            objectFit: 'cover',
            height: '300px',
          }}
        />
      </div>
      {/* Project description */}
      <div className="col-md-8">
        <h4
          style={{
            fontSize: '1.5rem',
            color: '#f2f2f2',
            marginLeft: '20px',
            fontWeight: 'bold',
          }}
        >
          Marketplace for Rental Equipment
        </h4>
        <p style={{ fontSize: '1.1rem', marginLeft:'10em', color: '#f0f0f0' }}>
          The Marketplace for Rental Equipment is an innovative web-based platform designed to bridge the
          gap between individuals or businesses looking to rent out equipment and those in need of temporary
          access to high-quality tools and machinery. This platform primarily focuses on catering to stores like
          malls, supermarkets, warehouse retailers, and departmental stores that require specialized equipment for
          short-term operations or projects.
        </p>
        <br />
        <p style={{ fontSize: '1.1rem', marginLeft:'10em',color: '#f0f0f0' }}>
          This project aims to develop a web-based platform that connects every individual who has equipment available
          for rent with those who need to temporarily access high-quality tools, machinery, or other equipment. This
          platform bridges the gap between supply and demand in the rental equipment market, ensuring a seamless and
          efficient user experience.
        </p>
        <br />
        <h4
          style={{
            fontSize: '1.5rem',
            color: '#f2f2f2',
            marginLeft: '20px',
            fontWeight: 'bold',
          }}
        >
          Skills Used
        </h4>
        <ul style={{ fontSize: '1.1rem', color: '#f0f0f0' }}>
          <li style={{ marginLeft: '30px' }}>
            <strong className="text-warning">Frontend:</strong> React, HTML, CSS, Bootstrap
          </li>
          <li style={{ marginLeft: '30px' }}>
            <strong className="text-warning">Backend:</strong> Node.js, Express.js
          </li>
          <li style={{ marginLeft: '30px' }}>
            <strong className="text-warning">Database:</strong> MongoDB
          </li>
        </ul>
        <h4
          style={{
            fontSize: '1.5rem',
            color: '#f2f2f2',
            marginLeft: '20px',
            fontWeight: 'bold',
          }}
        >
          Link
        </h4>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#f0f0f0',
            textDecoration: 'underline',
          }}
        >
          <a
            href="https://jocular-genie-7b8758.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff' }}
          >
            https://jocular-genie-7b8758.netlify.app/
          </a>
        </p>
      </div>
    </div>
  </section>
</div>



        {/* Vision and Mission Section */}
<div className="container mt-5">
  <section className="bg-dark text-white py-5" id="vision">
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>Vision</h2>
    <div className="d-flex align-items-start">
      <img 
        src={vis} 
        alt="Vision Image" 
        style={{ width: '300px',
          marginLeft: '50px',
          marginTop:'-0.5em',
          border: '2px solid black',borderRadius: '10px',
          objectFit: 'cover', height: '180px' }} 
      />
      <p style={{ fontSize: '1.1rem', color: '#f0f0f0' }}>
      My vision is to create innovative, scalable, and user-centric solutions that drive meaningful change across industries, ensuring that every line of code I write brings the vision of the future to life. I aspire to stay at the forefront of emerging technologies, continuously evolving my skills to deliver intuitive, reliable, and high-performance applications that empower businesses and enrich user experiences globally
      </p>
    </div>
  </section>
</div>

<div className="container mt-5">
  <section className="bg-dark text-white py-5" id="mission">
    <h2 className="mt-4 font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>Mission</h2>
    <div className="d-flex align-items-start">
      <img 
        src={mis2} 
        alt="Mission Image" 
        style={{  width: '310px',
          marginLeft: '50px',
          marginTop:'0.5em',
          border: '2px solid black',borderRadius: '10px',
          objectFit: 'cover', height: '250px' }} 
      />
      <p style={{ fontSize: '1.1rem', color: '#f0f0f0' }}>
      My mission is to build robust, efficient, and dynamic applications that bridge the gap between front-end design and back-end functionality. I am committed to delivering end-to-end solutions that not only meet user expectations but exceed them, providing seamless and engaging experiences across platforms. By leveraging my expertise in HTML, CSS, JavaScript, React, and other technologies, I strive to create applications that are both technically sound and user-friendly. I aim to collaborate effectively with teams, understand user needs, and remain adaptable in an ever-evolving tech landscape, ensuring that each project I undertake contributes to meaningful and lasting digital solutions
      </p>
    </div>
  </section>
</div>

       
       

        {/* Skills Section */}
        <div className="container mt-5">
  <section className="bg-dark text-white py-5" id="skills">
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>
      Personal Skills
    </h2>
    <div className="d-flex flex-wrap justify-content-center mt-3">
      {[
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "Express JS", icon: "fas fa-cogs" },
        { name: "Node JS", icon: "fab fa-node" },
        { name: "React JS", icon: "fab fa-react" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Netlify", icon: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" },
        { name: "Postman", icon: "https://w7.pngwing.com/pngs/509/390/png-transparent-postman-macos-bigsur-icon-thumbnail.png" },
        { name: "VS Code", icon: "fas fa-code" },  // VS Code added here
      ].map(skill => (
        <span key={skill.name} className="badge bg-primary text-white m-2 p-3 d-flex align-items-center" style={{ fontSize: '1.1rem' }}>
        {skill.icon.includes('http') ? (
          <img src={skill.icon} alt={skill.name} style={{ width: '1.5rem', height: 'auto', marginRight: '10px' }} />
        ) : (
          <i className={`${skill.icon} me-2`} style={{ fontSize: '1.5rem' }}></i>
        )}
        {skill.name}
      </span>
      ))}
    </div>
  </section>
</div>



        {/* Achievements Section */}
        <div className="container mt-5">
  <section className="bg-dark text-white py-5" id="achievements">
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>Achievements</h2>
    <div className="d-flex align-items-center mt-3">
      <img 
        src={certified} 
        alt="Green Environment Achievement" 
        style={{ width: '300px',
          marginLeft: '50px',
          marginTop:'-0em',
          border: '2px solid black',borderRadius: '10px',
          objectFit: 'cover', height: '180px'}} 
      />
      <p style={{ fontSize: '1.1rem', color: '#f0f0f0' }}>
      I had the honor of winning the 1st prize in the Article Writing Competition titled "GREEN ENVIRONMENT", which was held on October 17, 2021. This competition was organized by the Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE), Rajalakshmi Engineering College Chapter. The competition aimed to raise awareness about the importance of environmental conservation and the challenges of maintaining a sustainable ecosystem in the face of rapid industrialization and climate change
      </p>
    </div>
  </section>
</div>


  {/* Certifications Section */}
<div className="container mt-5">
  <section className="bg-dark text-white py-5" id="certifications">
    <h2 className="font-weight-bold text-center" style={{ fontSize: '2rem', color: '#e0a800' }}>Certifications</h2>
    <div className="d-flex flex-wrap justify-content-center mt-4">
      {/* Image 1 - Full Stack Development */}
      <div className="m-3 text-center">
        <img 
          src={cf5} 
          alt="Full Stack Development"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2 ">Full Stack Development</p>
      </div>

      {/* Image 2 - HTML */}
      <div className="m-3 text-center">
        <img 
          src={cf7}
          alt="HTML"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">HTML</p>
      </div>

      {/* Image 3 - CSS */}
      <div className="m-3 text-center">
        <img 
          src={cf2} 
          alt="CSS"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">CSS</p>
      </div>

      {/* Image 4 - JavaScript */}
      <div className="m-3 text-center">
        <img 
          src={cf1} 
          alt="JavaScript"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">JavaScript</p>
      </div>

      {/* Image 5 - MongoDB */}
      <div className="m-3 text-center">
        <img 
          src={cf3} 
          alt="MongoDB"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">MongoDB</p>
      </div>

      {/* Image 6 - Bootstrap */}
      <div className="m-3 text-center">
        <img 
          src={cf4} 
          alt="Bootstrap"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">Bootstrap</p>
      </div>

      {/* Image 7 - Node JS */}
      <div className="m-3 text-center">
        <img 
          src={cf9}
          alt="Node JS"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">Node JS</p>
      </div>

      {/* Image 8 - React JS */}
      <div className="m-3 text-center">
        <img 
          src={cf8}
          alt="React JS"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">React JS</p>
      </div>

      {/* Image 9 - MySQL */}
      <div className="m-3 text-center">
        <img 
          src={cf6}
          alt="MySQL"
          style={{ width: '150px', height: 'auto',border: '2px solid black', borderRadius: '8px' }}
        />
        <p className="text-warning mt-2">MySQL</p>
      </div>
    </div>
  </section>
</div>
<div className="text-center mt-5">
<Link to="/contact">
  <button className="work-together-btn" style={{ fontSize: '1.2rem' }}>
    Let's Work Together
  </button>
  </Link>
</div>
<br /><br />


<footer style={{ backgroundColor: '#FEBE10', margin:'0em -10em', padding: '120px 0', width: '90em' }}>
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-6">
        <h5 style={{ color: '#2f2f2f',position:'absolute',left:'15em',top:'251.5em' }}>Harish Thangavel P</h5>
        <p style={{ color: '#2f2f2f',position:'absolute',left:'10em',top:'263.5em' }}>Full Stack Developer | Innovator | Problem Solver</p>
      </div>
      <div className="col-md-6 text-right">
        <div className="social-icons">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/harish-thangavel-7285971b1/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={{ fontSize: '2rem', color: '#2f2f2f' ,position:'absolute',left:'35em',top:'157.5em' }}></i>
          </a>
          {/* GitHub */}
          <a href="https://github.com/harishthangavelp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ fontSize: '2rem', color: '#2f2f2f',position:'absolute',left:'33em',top:'157.5em' }}></i>
          </a>

        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
    </div>
    </div>
  );
}

export default Port;
