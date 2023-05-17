import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../public/logo.png"
import Image from 'next/image';
import steveb from "../public/stephen-portrait.png"
import compskills from "../public/designskills.png"
import qaskills from "../public/qaskills.png"
import employ from "../public/employ.png"
import education from "../public/education.png"
import design1 from "../public/Design1.jpg"
import design2 from "../public/Design2.jpg"
import design3 from "../public/Design3.jpg"
import design4 from "../public/Design4.jpg"
import design5 from "../public/Design5.jpg"
import design6 from "../public/Design6.jpg"
import design7 from "../public/Design7.png"
import { useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Stephen Bennett&apos;s Portfolio</title>
          <link rel="icon" href="/icon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className="flex-items-right w-15 h-15">
              <a href="#"><Image src={logo} alt="steviebdesigns logo" /></a>
          </div>
            {/* <h1 className='flex-items-right text-xl font-burtons'>Developer</h1> */}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
            </ul>
            {/* <ul>
              <li><a className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>  
              <li><a className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Profile</a></li>
              <li><a className=" bg-cyan-500  text-white px-4 py-2 rounded-md ml-8" href="#">Work History</a></li>
              <li><a className=" bg-cyan-500  text-white px-4 py-2 rounded-md ml-8" href='#'>Education and Skills</a></li>
              <li><a className=" bg-cyan-500  text-white px-4 py-2 rounded-md ml-8" href='#'>Acievements and Interests</a></li>

            </ul> */}
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Stephen Bennett</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">QA Engineer and Junior Web Developer.</h3>
            <p className="text-md py-5 leading-8 text-grey-800 dark:text-gray-200 md:text-lg max-w-xl mx-auto">I am manual and Automation tester with over 5 years testing experience and 10 years digital, marketing, advertising and technical experience.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 dark:text-gray-400 text-grey-600">
            <a href='https://https://twitter.com/'><AiFillTwitterCircle /></a>
            <a href='https://uk.linkedin.com/pub/stephen-bennett/b5/b87/a81'><AiFillLinkedin /></a>
            <a href='https://https://youtube.com/'><AiFillYoutube /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-20 md:h-96 md:w-96">
            <Image src={steveb} alt="Stephen Thumb" fill={true} object-fit="cover" />
          </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Profile</h3>
              <p className="text-md py-5 leading-8 text-grey-800 dark:text-gray-200">I am a <span className="text-teal-500">manual</span> and <span className="text-teal-500">automation</span> tester with over 5 years testing experience and 10 years <span className="text-teal-500">digital, marketing, advertising</span> and <span className="text-teal-500">technical</span> experience. Creative, effective and hardworking professional who has good communication skills and the ability to handle a variety of tasks effectively with excellent team and project management skills. In addition a good team player who works effectively on own initiative, flexible and adaptable to change and always willing to learn new skills, an ideal candidate who thrives on challenges and diversity. </p>
            </div>
            <div className="lg:flex gap-10">
            <div className="mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={qaskills} alt="Computer Skills" width={100} height={100} style={{margin: "auto",}} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-center">Computer Skills</h3>
              <h4 className="py-4 text-teal-600">Here is a list of computer skills since 2008</h4>
                <ul className="text-md py-5 leading-8 text-grey-800">
                  <li className="text-gray-800 py-1">Experience with computer languages such as <span className="text-teal-500">HTML, CSS, Javascript, React, SQL</span> and <span className="text-teal-500">Swift</span></li>
                  <li className="text-gray-800 py-1">Experiece with design packages such as <span className="text-teal-500">Adobe Suite, Final Cut</span> and <span className="text-teal-500">Figma</span></li>
                  <li className="text-gray-800 py-1">An understanding of digital development, <span className="text-teal-500">Agile</span> and <span className="text-teal-500">Waterfall</span> methodologies, analysis techniques and professional skills</li>
                  <li className="text-gray-800 py-1">Manual, Automation, Functional, Non-functional, Usability and Accessibility testing</li>
                  <li className="text-gray-800 py-1">Competent on such tools as <span className="text-teal-500">Jira, VSTN</span> and associated packages such as <span className="text-teal-500">BitBucket/Zephyr, Git, GitHub, Browserstack, Litmus</span> and <span className="text-teal-500">DoubleClick</span></li>
                  <li className="text-gray-800 py-1">Testing application manually and using <span className="text-teal-500">Cypress</span> and <span className="text-teal-500">Detox</span> automation on Dev, UAT and Staging environments</li>
                  <li className="text-gray-800 py-1">Experience on working in both PC and Mac</li>
                  <li className="text-gray-800 py-1">Testing, pulling and merging branches using <span className="text-teal-500">Github, Gitlab, Bitbucket</span> and <span className="text-teal-500">Azure Devops</span></li>
                </ul>
            </div>
            <div className="mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={employ} alt="Employment History" width={100} height={100} style={{margin: "auto",}} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-center ">Employment History</h3>
              <p className="pt-8 pb-2">Kubrick Group- (August 2022 - Current date) Automation Test Engineer</p>
              <p className="pt-8 pb-2">Curio - (April 2021 - August 2022) Manual/Automation QA Tester - Mobile and Web testing on curio&apos;s native app, automating curio website</p>
              <p className="pt-8 pb-2">Efficio Consulting - (Nov 2020 - April 2021) Manual QA Tester - Web application testing for procurement</p>
              <p className="pt-8 pb-2">Tempcover - (Jan 2020 - June 2020) Mobile QA Tester - Mobile Testing their new native application</p>
              <p className="pt-8 pb-2">BBC - (Dec 2019 - January 2020) Software QA Tester - Contract - Regression and Exploratory Testing during the christmas for their Production Toolkit. Dept - Production Management Application Team</p>
              <p className="pt-8 pb-2">Clarksons Platou - (May 2019 - Aug 2019) Application Test Analyst - Contract - Exploratory testing, creating a manual regression pack and writing automation scripts using cypress for their cloud email parsing system - Sea/Connect Team</p>
            </div>
            <div className="mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={education} alt="Education and Qualification" width={100} height={100} style={{margin: "auto",}} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-center">Education and Qualification</h3>
              <h4 className="py-4 text-teal-600">Higher Education</h4>
              <p><span className="text-teal-500">Institution:</span> Greenwich University</p>
              <p><span className="text-teal-500">Degree:</span> BSc Multimedia and Internet Technology</p>
              <p><span className="text-teal-500">Date:</span> September 2006 - June 2010</p>
              <p><span className="text-teal-500">Result:</span> 2.2</p>

              <h4 className="py-4 text-teal-600">Further Education</h4>
              <p><span className="text-teal-500">Institution:</span> Hackney Community College</p>
              <p><span className="text-teal-500">Creditation:</span> Access to Multimedia</p>
              <p><span className="text-teal-500">Date:</span> September 2005 - June 2006</p>
              <p><span className="text-teal-500">Result:</span> Pass</p>
            </div> 
            </div>
          </section>
          <section>
            <div>
            <h2 className="text-3xl py-1 dark:text-white">Portfolio</h2>
            </div>
            <div>
            <h3 className="text-lg font-medium pt-8 pb-2 text-center text-teal-600">QA Automation</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
            <iframe src="https://player.vimeo.com/video/827256682?h=30db7b3fc1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="416" allow="autoplay; fullscreen; picture-in-picture" title="Automation_Video"></iframe>
            </div>
            </div>
            <div>
            <h3 className="text-lg font-medium pt-8 pb-2 text-center text-teal-600">Designs</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image src={design1} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='TKB Relocations' />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={design2} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt="TKB Relocations 2" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={design3} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='Blackberry Project' />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={design4} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='Flex ur faith 07' />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={design5} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='Head and Shoulders project'/>
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={design7} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='Sharlene - Divine Unity'/>
              </div>
              <div className="basis-1/3 flex-1">
              <Image src={design6} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" alt='Stephen Bennett Final year Project'/>
              </div>
            </div>
          </section>
          <section>
            <div className="pt-8 pb-2 text-center text-teal-600">
              <p>© 2023 Stephen Bennett</p>
            </div>
          </section>
        </main>
      </div>
  );
}
