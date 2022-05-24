import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container text-center font-bold text-lg'>
            <h2 className='blogs-Ques'>Ques-1: How will you improve the performance of a React Application ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Here are some ways that I can use for improving the performance of a React Application:
                First of all, I would  as much as possible, avoid inline functions.
                To avoid unnecessary re-renders,I will  keep in mind that immutability is the key.
                I will always conditionally render hidden components like Modals and Dropdowns.

                And finally I will always use multiple APIs at once
            </h2>
            <h2 className='blogs-Ques'>Ques-2: What are the different ways to manage a state in a React Application ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> The state in React is an observable object that tracks changes to the state and guides the component's behavior. For example, if we alter the state of any component, the webpage will not re-render since React State will not be able to detect the changes. In my React apps, there are four types of state that I must properly manage:Local state,Global state,Server state,URL state.</h2>
            <h2 className='blogs-Ques'>Ques-3 : Why you do not set the state directly in React .For example,if you have const [products,setProducts]=useState([]) ? Why you do not set products = [...] instead,you set the setProducts.</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Objects in JavaScript inherit properties from prototypes, which are other objects. Prototypal inheritance is the concept. JavaScript searches for inherited properties in the object's prototype, as well as the prototype of the prototype, and so on down the chain of prototypes.</h2>
            <h2 className='blogs-Ques'>Ques-4 : How does prototypical inheritance work ?</h2>
            <h2 className='blogs-Ans'><span>Ans:</span> Objects in JavaScript inherit properties from prototypes, which are other objects. Prototypal inheritance is the concept. JavaScript searches for inherited properties in the object's prototype, as well as the prototype of the prototype, and so on down the chain of prototypes.</h2>
            <h2 className='blogs-Ques'>Ques-5 : You have an array of products.Each object has a name,price,description,etc.How will you implement a search to find products by name ? </h2>
            <h2 className='blogs-Ans'><span>Ans:</span> If i have an array of products and each object has a name,description,price and etc.I will implement distuctering for search to find products by name: Such as: If i want to get name i will use this method products.name,for searching description i will use products.description and for searching price i will use products.price.</h2>
            <h2 className='blogs-Ques'>Ques-6 : What is a unit test ? Why should write unit tests ? </h2>
            <h2 className='blogs-Ans'><span>Ans:</span> The method of writing JavaScript test code for a web page or web application module is known as JavaScript unit testing. It's then combined with HTML as an inline event handler and run in the browser to see if all of the features work as expected. The test suite is then created from these unit tests.
                Before code is deployed, unit testing ensures that it meets quality standards. This ensures a stable engineering environment that prioritizes quality. Unit testing saves time and money during the product development life cycle, and it helps developers write better code faster.
            </h2>
        </div>
    );
};

export default Blogs;