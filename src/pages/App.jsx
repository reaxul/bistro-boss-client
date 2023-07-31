import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// import './App.css';

const App = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Your Name</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-indigo-400">About</a></li>
                <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
              </ul>
            </nav>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Hire Me</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <img src="your-profile-picture.jpg" alt="Profile" className="rounded-full w-64 h-64 mx-auto" />
            </div>
            <div className="w-1/2">
              <CSSTransition
                in={showAbout}
                timeout={500}
                classNames="fade"
                unmountOnExit
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-lg leading-relaxed">
                    Hello, I'm Your Name, a MERN stack developer. I have a strong understanding of JavaScript and hands-on experience in building projects using the MERN stack (MongoDB, Express.js, React.js, Node.js). I'm passionate about problem-solving and creating clean, efficient code for seamless user experiences. Currently, I'm seeking opportunities to contribute to impactful projects and expand my skills through internships or freelance work. Let's connect and discuss how I can bring value to your projects as a motivated MERN stack developer!
                  </p>
                </div>
              </CSSTransition>
              <button onClick={handleShowAbout} className="btn transition duration-300 mt-4">
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Add your skills with icons or progress bars here */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Showcase your projects here */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* ... (Projects section code) ... */}

      {/* Contact Section */}
          {/* ... (Contact section code) ... */}
           <section id="contact" className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            {/* Add contact form fields here */}
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center justify-center mt-4">
            {/* Add social media icons and links here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
