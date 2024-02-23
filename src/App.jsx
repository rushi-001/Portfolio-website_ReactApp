import './App.css'
import TypeWritter from './TypeWritter';

function App() {

  // >> function for typewriter
  // function typeWriter({text, delay}){
  //   const [currentText, setCurrentText] = useState('');
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(()=>{
  //     let timeout;
  //     if(currentIndex <= text.length){
  //       timeout = setTimeout(() => {
  //         setCurrentText(prevText => prevText+text[currentIndex]);
  //         setCurrentIndex(prevIndex => prevIndex+1);
  //       }, delay);

  //       return ()=>clearTimeout(timeout);
  //     }else if (infinite) { 
  //       setCurrentIndex(0);
  //       setCurrentText('');
  //     }
  //   }, [currentIndex, delay, infinite, text]);

  //   return <span>{currentText}</span>
  // }



  return (
    <>
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='#'>
            <img src="fav-icon.png" alt="logo" className='size-11' />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white " href='#section-01'>about me</a>
            <a className="mr-5 hover:text-white " href='#section-02'>Projects</a>
            <a className="mr-5 hover:text-white " href='#section-03'>Contact</a>
          </nav>
        </div>
      </header>
      <div id="body">
        <div id="section-00" className='bg-red-500 h-screen'>

        </div>
        <div id="section-01" className=' h-screen flex items-center'>
          {/* <div className="AboutMe flex flex-row items-center ml-auto mr-auto">

            <img src="src/assets/gif-0.gif" alt="photo-gif" className='rounded-full size-80 mr-72'/>
            
            <div id='para' className='absolute right-96 mt-32 text-wrap size-96'>
            
              <h1 className='text-wrap text-white ml-3'>
                - <TypeWritter text="I've been coding for a year now and have gained knowledge in HTML, CSS, JavaScript, React.js, Bootstrap, and R3F." delay={100} />
              </h1>
              
              <br />
              <h1 className='text-wrap text-white ml-3'>
                - <TypeWritter text="I want to learn more about R3F websites & Software Development(C++, Js)." delay={100}/>
              </h1>
              
              <br />
              <h1 className='text-wrap text-white ml-3'>
                - <TypeWritter text="I enjoy playing and video games [Chess](https://www.chess.com/member/panchalrushi) in my free time." delay={100}/>
              </h1>
              
            </div>
          </div> */}

          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <div class="lg:flex lg:flex-col lg:items-center">
                <img class="object-cover object-center rounded-full lg:w-80 lg:h-80 w-full h-auto mb-4" alt="hero" src="src/assets/gif-0.gif" />

                <div id="icons" class="flex flex-wrap justify-center">
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/html-icon.png" />
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/css-icon.png" />
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/js-icon.png" />
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/react-icon.png" />
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/tailwind-icon.png" />
                  <img alt="testimonial" class="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out" src="src/assets/bootstrap-icon.png" />
                </div>
              </div>
            </div>


            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

              <h1 className="title-font text-2xl mb-4 font-medium text-white">
                - <TypeWritter text="I've been coding for a year now and have gained knowledge in HTML, CSS, JavaScript, React.js, Bootstrap, and R3F." delay={100} />
                <br className="hidden lg:inline-block" />
              </h1>
              <h1 className="title-font text-2xl mb-4 font-medium text-white">
                - <TypeWritter text="I want to learn more about R3F websites & Software Development(C++, Js)." delay={100} />
                <br className="hidden lg:inline-block" />
              </h1>
              <h1 className="title-font text-2xl mb-4 font-medium text-white">
                - <TypeWritter text="I enjoy playing and video games [Chess](https://www.chess.com/member/panchalrushi) in my free time." delay={100} />
                <br className="hidden lg:inline-block" />
              </h1>

            </div>

          </div>

        </div>

        <div id="section-02" className='bg-blue-500 h-screen'>
          <h1>blue</h1>

        </div>
        <div id="section-03" className='bg-green-500 h-screen'>
          <h1>blue</h1>

        </div>
      </div>
    </>
  )
}

export default App
