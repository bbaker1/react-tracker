import React from 'react';
import { Link } from 'react-router-dom';

class TaskHome extends React.Component {
    render() {
        return (
            <div className="ui center aligned message">
                <div className="ui text container">
                    <h1 className="ui header">Welcome to Tracker</h1>
                    <h3>Track your completed tasks.</h3>
                    <h3>Enter in tasks and see how you spend your time.</h3>
                    <p>Created using React.js, Redux, and Victory. Google OAuth integrated. Created by: Ben Baker</p>
                    <Link to="/tasks/new" className="ui button primary">Get Started</Link>
                </div>
            </div>
        );
    };
}

export default TaskHome;