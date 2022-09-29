import React from 'react';

const Footer = () => {
    return (
        <div>
            <li>
                <ul>
                    <h3>How does React works?</h3>
                    <h6>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h6>
                </ul>
                <ul>
                    <h3>What is Difference between Props and State?</h3>
                    <h6>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</h6>
                </ul>
                <ul>
                    <h3>Benifits of useEffect() except data-load?</h3>
                    <h6>Using useEffect is probably the best part of React Hooks. It helps reduce the clutter of the component lifecycle methods and, most importantly, it helps separate different logic that can appear in the lifecycle methods.</h6>
                </ul>
            </li>
        </div>
    );
};

export default Footer;