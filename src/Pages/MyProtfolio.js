import React from 'react';
import image from '../Images/1627405470870.jpg';
import './MyProtfolio.css';
const MyProtfolio = () => {
    return (
        <div className='container-badsha'>
            <h1>Name:Foysal Ahamed Badsha Bepari</h1>
            <h1>Email:foysalahamedbadsha@gmail.com</h1>
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src={image} height="550" alt='' />
                </div>
            </section>
            <h3 className='background'>I am MD:BADSHA but my full name is Foysal Ahamed Badsha Bepari.I am a university student.I study in Nanjing University of Post and Tellecommunication.Which is located at Nanjing city in China.My majhor is Computer Science and Technology(CST).I want to be a world best programmer.I want to reach my goal by working hard to try my best.Now i learn web development.I think it is related to my major for this reason with in next 3 months i want to be a remote job of junior web development.And it will help me problem solveing.In this way one time i will be a senior programmer.</h3>
            <ul className='skill'>I have some skill as a web developer:
                <li>HTML,</li>
                <li>Raw CSS,</li>
                <li>Teilwind,Bootstrap</li>
                <li>React,React Route,React Bootstrap</li>
                <li>E6 of Javascript</li>
                <li>Node Js</li>
                <li>Mongodb</li>
                <li>Git</li>
                <li>Netlyfy</li>
                <li>Firebase</li>
            </ul>
            <p className='Link'>I did 20+ projectas as a developer</p>
            <p className='Link'>Such as:</p>
            <a className='Link' href=" https://laptop-werehouse-website.web.app">Link-1</a>
            <br />
            <a className='Link' href=" https://mellifluous-bavarois-b6b810.netlify.app/">Link-2</a>
            <br />
            <a className='Link' href=" https://mdbadsha7.github.io/assignment-two/">Link-2</a>
        </div >
    );
};

export default MyProtfolio;