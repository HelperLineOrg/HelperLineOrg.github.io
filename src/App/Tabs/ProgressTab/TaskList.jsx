
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    pinkLink: {
        color: theme.palette.secondary.main
    },
}));


const Link = (props) => {
    const classes = useStyles();

    return (
        <a href={props.url} className={classes.pinkLink}>
            {props.url}
        </a>
    );
};


// possible status values: "released", "done", "in progress", "to do", "outlook"

export const TaskList = [
    {
        name: "Full Stack - Change Email",
        description: (
            <React.Fragment>
                New confirmation email! Keep user logged in and change his login data/cookies
                for server communication.

                <br/><br/>

                We currently only support this when the email has not been confirmed yet!

                <br/><br/>

                Not a top priority to make it work for changing the email afterwards. Security
                question: Doing bad stuff on our platform and changing email afterwards. We need
                some mechanism of storing these permanently - as bad as it sounds ...
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Full Stack - Change Password",
        description: (
            <React.Fragment>
                Popup on account page for changing your password afterwards.
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Frontend - New Landing Page",
        description: (
            <React.Fragment>
                A new landing page, briefly describing what our product is.
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Frontend - New Calls Page #2 (with Stats)",
        description: (
            <React.Fragment>
                Stats for community (local volunteers/callers) and your own account.
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Frontend - Restructure Calls Page #3",
        description: (
            <React.Fragment>
                Restructure the page to be more intuitive. 1. Move Performance Panel, 2. Adjust filter descriptions
            </React.Fragment>
        ),
        status: "to do"
    },


    {
        name: "Backend - Receive Calls",
        description: (
            <React.Fragment>
                Receive calls and store/update the caller profile as well as the call record in our database.
            </React.Fragment>
        ),
        status: "done"
    },

    {
        name: "Backend - Enqueuing of calls",
        description: (
            <React.Fragment>
                Add every - for now - incoming call to the local/global call queue. Actually all three queues (see
                details tab) are in one single collection with clever querying.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Backend - Dequeuing of calls",
        description: (
            <React.Fragment>
                Add method for dequeuing calls from these queues according to the filters.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Connection - \"Accept Call\" Button and Dequeuing",
        description: (
            <React.Fragment>
                Very straight forward.
            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Backend - Add phone number (+ verification)",
        description: (
            <React.Fragment>
                Add all database fields.

                <br/><br/>

                Test out the Twilio SMS API.

                <br/><br/>

                Implement the actual SMS verification trigger.

                <br/><br/>

                Add REST-endpoint to enter phone number/resend verification.

            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Frontend - Add phone number (+ verification)",
        description: (
            <React.Fragment>
                Add phone number and resend verification button to account form
            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Backend - Implement Call Forwarding",
        description: (
            <React.Fragment>
                Add all database fields - without scheduling.

                <br/><br/>

                Test out call forwarding with Twilio.

                <br/><br/>

                Implement the actual forwarding.

                <br/><br/>

                Add REST-endpoint to toggle forwarding.

            </React.Fragment>
        ),
        status: "to do"
    },


    {
        name: "Frontend - Implement Call Forwarding",
        description: (
            <React.Fragment>
                Conceptualize forward toggle panel.

                <br/><br/>

                Add call forwarding panel to calls tab (without time triggered forwarding schedule).
            </React.Fragment>
        ),
        status: "to do"
    },


    {
        name: "Frontend - Landing Page when logged in",
        description: (
            <React.Fragment>
                Add the sidebar to landing page, hide login button, etc.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "Backend - Switching from Flask to Sanic",
        description: (
            <React.Fragment>
                Currently our server side code is synchronous and blocking ...

                <br/><br/>

                Because we are using a lot of communication with our MongoDB Atlas
                Cluster we definitely need to improve our server side code.

                <br/><br/>

                The best option for that would be to switch to Sanic: <Link url="https://sanicframework.org/"/>,&nbsp;
                <Link url="https://github.com/huge-success/sanic"/>.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "Backend - Migrating from Heroku to GCP",
        description: (
            <React.Fragment>
                Currently we are host the whole webapp and the hotline on Heroku.

                <br/><br/>

                However until now Heroku does not offer any Covid-19 related funding,
                whereas GCP does.

                <br/><br/>

                We could easily switch to the <strong>GCP AppEngine</strong>. Deploying
                and scaling seems to be super easy and fast.
            </React.Fragment>
        ),
        status: "outlook"
    },
];