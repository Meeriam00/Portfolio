import React, { useEffect, useRef, useState } from "react";
import personalImg from "../src/assets/img/personal.png";
import pdf from "../src/assets/img/CV.pdf";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDownload,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaLinkedin,
  FaPhone,
  FaReact,
  FaRegLightbulb,
  FaSass,
  FaTrello,
} from "react-icons/fa6";
import {
  SiClickup,
  SiCodemagic,
  SiCplusplus,
  SiJirasoftware,
  SiNotion,
  SiPostman,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "aos/dist/aos.css";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TbApi } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { IoLanguage, IoLogoJavascript, IoMailUnread } from "react-icons/io5";
import { MdEmail, MdOutlineDashboard } from "react-icons/md";
import { BiSolidComponent } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);


  // Navbar
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Navbar


  // EducationData
  const educationData = [
    {
      type: "Bachelor",
      institution: "Academy of the State Customs Committee, ASCCA",
      field: "Information Technology (teaching in English)",
      from: "September 2022",
      to: "June 2026",
    },
    {
      type: "Course",
      institution: "Girls Code Azerbaijan, Matrix Academy",
      field: "Front-End Programming",
      from: "June 2024",
      to: "January 2025",
    },
    {
      type: "Course",
      institution: "Xploit Academy, Baku, BA, Azerbaijan",
      field: "QA Manual",
      from: "February 2025",
      to: "June 2025",
    },
  ];
  // EducationData



  // Experience
  const jobs = [
    {
      title: "Front-End Instructor",
      company: "Matrix Academy, Azerbaijan, Baku",
      description:
        "Teaching Front-End Development, including HTML, CSS, Bootstrap, JavaScript, React, and Redux Toolkit. Mentoring students in building real-world, production-style projects and guiding them through practical lessons, debugging, and project structuring. Reviewing code and providing architectural and performance feedback while explaining state management, component architecture, clean code principles, and API integration best practices. Introducing Git workflows and collaboration standards to prepare students for professional development environments.",
      from: "August 2025",
      to: "Present",
      duration: "7 month",
    },
    {
      title: "Front-End Developer",
      company: "Webluna Software, Azerbaijan, Baku",
      description:
        "Developed scalable and responsive web applications using React and TypeScript, implemented advanced state management with Redux Toolkit and RTK Query, integrated RESTful APIs with efficient asynchronous data handling, optimized performance through memoization and lazy loading (React.lazy, Suspense), improved UI responsiveness across mobile and tablet devices, collaborated with backend developers and designers in Agile environments, and managed version control using Git and GitHub in a team setting",
      from: "March 2025",
      to: "February 2026",
      duration: "11 month",
    }
  ];
  // Experience




  // SpecialData
  const specialData = [
    {
      icon: <RiComputerLine />,
      title: "Responsive Web Development",
    },
    {
      icon: <FaReact />,
      title: "Component-based architecture with React.js",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Dark/Light mode switching",
    },
    {
      icon: <IoLanguage />,
      title: "Language switching (EN/AZ/TR)",
    },
    {
      icon: <MdOutlineDashboard />,
      title: "Dashboard Panel Design and Construction",
    },
    {
      icon: <IoLogoJavascript />,
      title: "Interactivity with JavaScript",
    },
    {
      icon: <FaLaptopCode />,
      title: "Code testing and debugging",
    },
    {
      icon: <FaGithub />,
      title: "Version control with Git",
    },
    {
      icon: <BiSolidComponent />,
      title: "Creating a Reusable Component",
    },
    {
      icon: <GrIntegration />,
      title: "UI/UX Design Integration",
    },
    {
      icon: <TbApi />,
      title: "REST API Integration",
    },
  ];
  // SpecialData

  const [showAll, setShowall] = useState(false);

  const visibleData = showAll ? specialData : specialData.slice(0, 8);

  // Contact Me
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_bvrb8mp",
        "template_xo6egu8",
        form.current,
        "34Fd6ZenmSzGBOZf3"
      );

      setSuccess(true);
      form.current.reset();

      Swal.fire({
        icon: "success",
        title: "Sent successfully!",
        text: "Your message has been sent successfully. You will be contacted shortly.",
        confirmButtonColor: "#0077b5",
      });
    } catch (error) {
      setSuccess(false);
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "An error occurred!",
        text: "The message could not be sent. Please check again.",
        confirmButtonColor: "#d33",
      });
    }
  };
  // Contact Me

  // SkillsIcon
  const skillIcons = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaSass />, name: "SCSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJirasoftware />, name: "Jira" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaTrello />, name: "Trello" },
  ];
  // SkillsIcon

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* Header */}
       <section id="home">
         <nav className={`navbar ${isFixed ? "fixed" : ""} navbar navbar-expand-lg p-0 overflow-hidden`}>
          <p>
            CODE <span>WITH PURPOSE</span>
          </p>

          <ul>
            <li className="item">
              <a className="linktext" href="#home">
                HOME
              </a>
            </li>
            <li className="item">
              <a className="linktext" href="#about">
                ABOUT
              </a>
            </li>
            <li className="item">
              <a className="linktext" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="item contact">
              <a className="linktext" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
      </nav>
       </section>
      {/* Header */}

      {/* Section Hero */}
      <section className="hero">
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 text-container">
              <h1 className="typing-text">
                Hi, I’m <span>Meryem Abdullayeva</span>
              </h1>
              <p className="fade-in delay-1">
                Front-End Developer with 1+ year of commercial experience building scalable and responsive web applications using React and TypeScript. Experienced in state management with Redux Toolkit and RTK Query, API integration, and performance optimization. Currently working as a Front-End Instructor, mentoring students in modern frontend technologies. Passionate about clean code, reusable component architecture, and user-centered design.....🚀
              </p>
              <a href={pdf} download className="hero-button">
                Download CV <FaDownload />
              </a>
            </div>

            <div data-aos="fade-left" className="col-lg-6 image-container ">
              <img
                src={personalImg}
                alt="Meryem Abdullayeva"
                className="floating "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section Hero */}

      {/* Scrolling Text*/}
      <div className="scrolling-text">
        <p>
          <span>
            <SiCodemagic className="icon" />
            Responsive Web Design
          </span>
          <span>
            <SiCodemagic className="icon" />
            Landing Page Development
          </span>
          <span>
            <SiCodemagic className="icon" />
            Dashboard UI & CRUD Operations
          </span>
          <span>
            <SiCodemagic className="icon" />
            Dark & Light Theme Switching
          </span>
          <span>
            <SiCodemagic className="icon" />
            Language Toggle (Multi-language Support)
          </span>
          <span>
            <SiCodemagic className="icon" />
            Component-Based Architecture (React)
          </span>
          <span>
            <SiCodemagic className="icon" />
            Form Validation
          </span>
          <span>
            <SiCodemagic className="icon" />
            Responsive Web Design
          </span>
          <span>
            <SiCodemagic className="icon" />
            Git Version Control{" "}
          </span>
          <span>
            <SiCodemagic className="icon" />
            Performance Optimization & Lazy Loading
          </span>
        </p>
      </div>
      {/* Scrolling Text*/}

      {/* About Me Section */}
      <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-12">
             <div data-aos="fade-up" className="list">
                <h2>Experience</h2>
                {jobs.map((job, index) => (
                  <div
                    data-aos="fade-up"
                    className="education-card"
                    key={index}
                  >
                    <h3 className="type">{job.title}</h3>
                    <p className="institution">{job.company}</p>
                    <p className="field">{job.description}</p>
                    <p className="duration">
                      {job.from} – {job.to} ({job.duration})
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div data-aos="fade-up" className="list">
                <h2>Education</h2>
                {educationData.map((edu, index) => (
                  <div
                    className="education-card"
                    key={index}
                    data-aos="fade-up"
                  >
                    <span className="type">{edu.type}</span>
                    <h3 className="institution">{edu.institution}</h3>
                    <p className="field">{edu.field}</p>
                    <p className="duration">
                      {edu.from} – {edu.to}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}

      {/*Specialization section */}
      <section data-aos="fade-up" className="special">
        <h2>My Specialization</h2>
        <div className="container-fluid">
          <div className="row">
            {visibleData.map((special, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="col-12 col-lg-3 col-md-3 col-sm-12 col-xs-12"
              >
                <div className="special-card">
                  <div className="icons">{special.icon}</div>
                  <p>{special.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!showAll && specialData.length > 4 && (
          <button onClick={() => setShowall(true)} className="more">
            View More
          </button>
        )}
      </section>
      {/*Specialization section */}

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <Slider {...settings}>
          {skillIcons.map((skill, index) => (
            <div className="skill-icon" key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </Slider>
      </section>
      {/* Skills Section */}

      {/* Scrolling Text*/}
      <div className="scrolling-text">
        <p>
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}>CONTACT ME</span>
          ))}
        </p>
      </div>
      {/* Scrolling Text*/}

      {/* Contact Me */}
      <section  data-aos="flip-left" id="contact">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="text" name="surname" placeholder="Surname" required />
          </div>
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Messages"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      {/* Contact Me */}

      {/* Footer */}
      <footer>
        <div className="container-fluid">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-4  border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                aria-label="Bootstrap"
              >
                <svg className="bi" width={30} height={24} aria-hidden="true">
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">
                © {new Date().getFullYear()} Meryem Abdullayeva, Personal
                Portfolio
              </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a href="www.linkedin.com/in/meryem-abdullayeva-552748254">
                  <FaLinkedin />
                </a>
              </li>
              <li className="ms-3">
                <a href="https://github.com/Meeriam00">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </footer>

      {/* Footer */}
    </>
  );
};

export default App;
