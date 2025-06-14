import About from './About';
import Skillssection from './Skillssection'; // Fixed import name
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-purple-700 to-pink-400 text-white text-center p-10 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-lg">
            Hi, I'm Sanduni Lasara
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl">
            Welcome to My Portfolio.<br />
            I’m a passionate developer who loves building beautiful and functional web experiences.
          </p>
          <a
            href="Doc1.docx"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            View My CV
          </a>
        </div>
        {/* Profile Photo */}
        <div className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0">
          <div className="relative group">
            <img
              src="profilephoto3.jpg"
              alt="Sanduni Lasara"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-purple-300 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl z-[-1]"></div>
          </div>
        </div>
      </section>
      <About />
      <Skillssection /> {/* Fixed component name */}
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
