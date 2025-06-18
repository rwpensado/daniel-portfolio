import React, { useState } from 'react'; // Fixed import statement
import "tailwindcss";
import purple_tux from './assets/purple_tux.jpg';
import school from './assets/school.jpg';
import u_of_h from './assets/u_of_h.jpg';
import nhs from './assets/nhs.jpg';
import jlb from './assets/jlb.jpg';
import soccer from './assets/soccer.jpg'
import powder_puff from './assets/powder_puff.jpg'
import cooking from './assets/cooking.jpg'

// Main App component
const App = () => {
  // State for current active section within the portfolio, defaulting to 'about'
  const [activeSection, setActiveSection] = useState('about'); // Changed default to 'about'
  // New state to control if the landing page is shown
  const [showLandingPage, setShowLandingPage] = useState(true);

  // Helper component for a section title
  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>{children}</h2>
  );

  // About Me Section (New Component)
  const AboutMe = () => (
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <SectionTitle>Who I Am</SectionTitle>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={school} // Placeholder for your photo
            alt="school"
            className="rounded-full shadow-md border-4 border-purple-300 w-52 h-52 object-cover"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm <span className="font-bold text-purple-700">Daniel Gonzalez</span>, a passionate individual with a strong drive for learning and creating. My journey as a high school student has been an exciting one, filled with continuous growth and innovative projects. I thrive on solving complex challenges and turning ideas into tangible solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am interested in <span className="font-bold text-purple-700">architecture</span>, <span className="font-bold text-purple-700">physics</span>, and <span className="font-bold text-purple-700">health</span>, and I am always eager to expand my horizons in education. I believe in the power of collaboration and enjoy working with diverse teams to achieve common goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Outside of my scholarly pursuits, I am deeply interested in <span className="font-bold text-purple-700">sports</span>, <span className="font-bold text-purple-700">cooking</span>, and <span className="font-bold text-purple-700">community service</span>, which help me stay creative and balanced.
          </p>
        </div>
      </div>
    </div>
  );


  // Achievements Section
  const Achievements = () => (
    <div className="p-8">
      <SectionTitle>Achievements</SectionTitle>
      <div className="flex flex-col space-y-12"> {/* Use flex-col for vertical stacking */}
        {/* Achievement Entry 1 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-8">
            <img
              src={u_of_h}
              alt="u_of_h"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-violet-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Exceptional Student</h3>
            <p className="text-gray-700 leading-relaxed">Excels in all academic areas, with paricular interest in <span className="font-bold text-violet-700">math</span> and <span className="font-bold text-violet-700">science</span>. Currently exploring applications for knowledge base and interests to determine degree and career paths, including <span className="font-bold text-violet-700">architecture</span>, <span className="font-bold text-violet-700">sports medicine</span>, and <span className="font-bold text-violet-700">physics</span>. </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1">
              <li>Achieved a <span className="font-bold text-violet-700">4.2 GPA</span> as of completion of junior year of highschool.</li>
              <li>Completed <span className="font-bold text-violet-700">7 AP courses</span> as of completion of junior year of highschool.</li>
              <li>Received <span className="font-bold text-violet-700">positive feedback</span> from teachers and fellow classmates regarding academic performance.</li>
            </ul>
          </div>
        </div>

        {/* Achievement Entry 2 (Image Right, Text Left) */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:ml-8">
            <img
              src={nhs}
              alt="nhs"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-right">
            <h3 className="text-2xl font-semibold text-violet-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Distinguished Service Organizations</h3>
            <p className="text-gray-700 leading-relaxed">Active member of  <span className="font-bold text-violet-700">National Honor Society</span> and<span className="font-bold text-violet-700"> Student Council</span>. Currently focused on expanding service opportunities and involvement within these groups.</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 md:pr-4"> {/* Adjusted padding for right-aligned text */}
              <li>Serving as <span className="font-bold text-violet-700">Environment and Energy Chair</span> for the upcoming school year in Student Council.</li>
              <li>Actively working with <span className="font-bold text-violet-700">leadership</span> in these groups to expand opportunities.</li>
              <li>Completed <span className="font-bold text-violet-700">100+ service hours</span> in the various organizations mentioned.</li>
            </ul>
          </div>
        </div>

        {/* Achievement Entry 3 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-8">
            <img
              src={jlb}
              alt="jlb"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-violet-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Junior Leadership Brazos Membership</h3>
            <p className="text-gray-700 leading-relaxed">Obtained membership to <span className="font-bold text-violet-700">Junior Leadership Brazos</span>, a local organization that recognizes students who have excelled in contribution to their school and community. This program allows members to explore how local government operates.</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1">
              <li>Acheived membership of 2025 class, being <span className="font-bold text-violet-700">1 of 36 students </span> chosen from the surrounding area.</li>
              <li>Enhanced knowledge of local goverment involvement, including <span className="font-bold text-violet-700">leadership</span>, <span className="font-bold text-violet-700">local economy</span>, and <span className="font-bold text-violet-700">medical services</span>.</li>
              <li>Successfully completed all activites assigned and grew local community network.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Interests Section
  const Interests = () => (
    <div className="p-8">
      <SectionTitle>Interests</SectionTitle>
      <div className="flex flex-col space-y-12"> {/* Use flex-col for vertical stacking */}
        {/* Interest Entry 1 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-8">
            <img
              src={soccer}
              alt="soccer"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Fútbol</h3>
            <p className="text-gray-700 leading-relaxed">I am a proud team member for the <span className="font-bold text-purple-700">CSHS Cougars Soccer Team</span>. I enjoy learning more about the game and the physical fitness that I am able to achieve by participating.</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1">
              <li>Plays <span className="font-bold text-purple-700">right defender</span> for junior varsity A.</li>
              <li>Enjoys being a <span className="font-bold text-purple-700">team player</span>, making his team stronger and more successful.</li>
              <li>Always looking forward to playing against <span className="font-bold text-purple-700">challenging</span> opponents.</li>
            </ul>
          </div>
        </div>

        {/* Interest Entry 2 (Image Right, Text Left) */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:ml-8">
            <img
              src={powder_puff}
              alt="powder_puff"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-right">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Clubs and Activities</h3>
            <p className="text-gray-700 leading-relaxed">I am passionate about <span className="font-bold text-purple-700">extracurricular participation</span>, which I express by involving myself in various clubs and activities.</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 md:pr-4">
              <li>Supported the junior class in the school's annual <span className="font-bold text-purple-700">Powder Puff Game</span> as a <span className="font-bold text-purple-700">cheerleader</span>.</li>
              <li>Annual member of the school's <span className="font-bold text-purple-700">Homecoming Dance Planning Committee</span>.</li>
              <li>Always looking to serve through <span className="font-bold text-purple-700">Student Council's service opportunities</span>.</li>
            </ul>
          </div>
        </div>

        {/* Interest Entry 3 (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-8">
            <img
              src={cooking}
              alt="Cooking Placeholder"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-purple-500 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Cooking</h3>
            <p className="text-gray-700 leading-relaxed">I am lifelong <span className="font-bold text-purple-700">cooking enthusiast</span>, who enjoys the time I get to spend with <span className="font-bold text-purple-700">family and friends</span> through sharing a simple, comforting home cooked meal.</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1">
              <li>Help my family every year with <span className="font-bold text-purple-700">Thanksgiving dinner</span> preperation.</li>
              <li>An avid <span className="font-bold text-purple-700">salsa </span>enjoyer.</li>
              <li>Loves baking <span className="font-bold text-purple-700">pies</span>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Section
  const Contact = () => (
    <div className="p-8 max-w-8xl mx-auto bg-white rounded-lg">
      <SectionTitle>Contact Information</SectionTitle>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4 text-center">I am always looking to hear more about new opportunites, both education and professional. Feel free to reach out!</p>
        <div className="flex flex-col items-center space-y-4">
          {/* Email */}
          <div className="flex items-center text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 0a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8z" />
            </svg>
            <a href="mailto:daniel.israel.gonzalez778@gmail.com" className="text-purple-600 hover:underline">daniel.israel.gonzalez778@gmail.com</a>
          </div>
          {/* Phone (Optional) */}
          <div className="flex items-center text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-600">+1 (979) 574-5801</span>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* LinkedIn icon path - simplified for example */}
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </div>
  );

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-6xl w-full">
        {/* Left Section - Image and Design Elements */}
        <div className="md:w-1/2 bg-gradient-to-tl from-pink-400 to-violet-600 flex items-center justify-center p-8 relative">
          {/* Abstract design elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white bg-opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          {/* Placeholder Image */}
          <img
            src={purple_tux}
            alt="purple_tux"
            className="rounded-full shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right Section - Welcome Message and Button */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-down" style={{ fontFamily: 'Playfair Display, serif' }}>
            Daniel Gonzalez's Portfolio
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-in">
            Discover my achievements, explore my interests, and find out how to connect with me.
          </p>
          <button
            onClick={() => setShowLandingPage(false)}
            className="px-8 py-4 bg-violet-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300 animate-bounce-in"
          >
            Enter Portfolio
          </button>
        </div>
      </div>
    </div>
  );

  // Render the appropriate section based on activeSection state for the main portfolio
  const renderPortfolioSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'achievements':
        return <Achievements />;
      case 'interests':
        return <Interests />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe />; // Default to About Me
    }
  };

  return (
    // Conditional rendering based on showLandingPage state
    <>
      {/* Global font styles imported from Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

          body {
            font-family: 'Lato', sans-serif;
          }
        `}
      </style>

      {showLandingPage ? (
        <LandingPage />
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
          {/* Header/Navigation */}
          <header className="bg-gradient-to-r from-purple-600 to-violet-700 text-white p-6 shadow-md rounded-b-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-4xl font-extrabold mb-4 md:mb-0" style={{ fontFamily: 'Playfair Display, serif' }}>Daniel Gonzalez</h1>
              <nav className="space-x-3"> {/* Reduced space-x to 3 */}
                {/* New About Me button */}
                <button
                  onClick={() => setActiveSection('about')}
                  className={`px-3 py-1 rounded-full text-base font-medium transition-all duration-300
                    ${activeSection === 'about' ? 'bg-white text-purple-700 shadow-md' : 'text-white hover:bg-white hover:text-purple-700 hover:shadow-md'}`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveSection('achievements')}
                  className={`px-3 py-1 rounded-full text-base font-medium transition-all duration-300
                    ${activeSection === 'achievements' ? 'bg-white text-purple-700 shadow-md' : 'text-white hover:bg-white hover:text-purple-700 hover:shadow-md'}`}
                >
                  Achievements
                </button>
                <button
                  onClick={() => setActiveSection('interests')}
                  className={`px-3 py-1 rounded-full text-base font-medium transition-all duration-300
                    ${activeSection === 'interests' ? 'bg-white text-purple-700 shadow-md' : 'text-white hover:bg-white hover:text-purple-700 hover:shadow-md'}`}
                >
                  Interests
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className={`px-3 py-1 rounded-full text-base font-medium transition-all duration-300
                    ${activeSection === 'contact' ? 'bg-white text-purple-700 shadow-md' : 'text-white hover:bg-white hover:text-purple-700 hover:shadow-md'}`}
                >
                  Contact
                </button>
              </nav>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-grow container mx-auto my-8 p-4 bg-white rounded-lg shadow-xl">
            {renderPortfolioSection()}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 text-center mt-8 rounded-t-lg">
            <p>&copy; {new Date().getFullYear()} Daniel Gonzalez. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default App;