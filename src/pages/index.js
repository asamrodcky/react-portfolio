import Head from 'next/head';
import { BsFillMoonStarsFill , BsFillSunFill } from 'react-icons/bs';
import { 
  AiFillLinkedin, 
  AiFillGithub
} from 'react-icons/ai';
import Image from "next/image";
import bitSam from '../../public/8bitSR.png';
import reactToDo from '../../public/reactToDosnip.png';
import oneadayPacMan from '../../public/oneadayPacMan.png';
import chatSockets from '../../public/chatSockets.png';
import keyMapping from '../../public/desmosKeymapping.png';
import { useState } from "react";

export default function Home() {
  const [ darkMode, setDarkMode ] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Sam Rodriguez Portfolio</title>
        <meta name="description" content="Sam Rod's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">SR</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:hidden"/>
                <BsFillSunFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-white hidden dark:flex"/> 
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://smrportfolio.s3.us-east-2.amazonaws.com/2023+Sam+Rodriguez+Resume.pdf">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Sam Rodriguez</h2>
            <h3 className="text-xl py-2 md:text-2xl dark:text-white">(he/him/his)</h3>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Scientist and artist</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              A trained scientist, turned software developer, who makes art in his free time :P.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/srodriguez6/"><AiFillLinkedin/></a>
            <a href="https://github.com/asamrodcky"><AiFillGithub/></a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={bitSam} alt="bitSam"   objectFit='cover' layout='fill' />
          </div>
        </section>
        <section>
          <div className="pt-20">
            <h3 className="text-center text-3xl py-10 dark:text-white"> Portfolio </h3>
            <p className="text-md leading-8 text-gray-600 dark:text-white indent-8">
              Much of my day-to-day work takes place in a platform called Desmos Actvity Builder. 
              The underlying engine for the Activity Builder is the Desmos graphing calculator, an online graphing calculator
              software that provides me the resources and functionality to build animations, games, and interactives that students 
              use in the math classroom. Outside of Desmos, I have experience building full stack web applications with the help of back-end
              relational (SQL) and non-relational databases (MongoDB), front-end frameworks such as React.js and Tailwind.css within Node.js server environments.
              My dream would be to be able to join my technical skills with my creative itch and create elegant, easy-to-use applications
              that make users lives better while they are navigating and exploring the endless connections of science, math, and art. 
            </p>
          </div>
          {/* flex flex-wrap gap-10 py-10 lg:flex-row md:flex-col md:flex-wrap */}
          <div className="lg:grid lg:grid-cols-2 gap-10 py-10 md:flex md:flex-col">
            <div className="basis-1/3 flex-1">
              <h4 className="dark:text-white text-center pb-5">ToDo app</h4>
              <a href ="https://reacttodoapp.herokuapp.com/"><Image src={reactToDo} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"
              alt="reactToDo"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h4 className="dark:text-white text-center pb-5">One-a-day creations on Desmos</h4>
              <a href="https://teacher.desmos.com/activitybuilder/custom/633fa91e594ff0e4f21c3062"><Image src={oneadayPacMan} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"
              alt="oneADay"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h4 className="dark:text-white text-center pb-5">Chat Sockets</h4>
              <a href="https://srchat-websockets.herokuapp.com/"><Image src={chatSockets} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"
              alt="chatSockets"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <h4 className="dark:text-white text-center pb-5">Desmos Keymapping</h4>
              <a href="https://asamrodcky.github.io/desmos-keymap/"><Image src={keyMapping} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"
              alt="chatSockets"/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
