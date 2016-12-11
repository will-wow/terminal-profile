import * as React from 'react';
import _ = require('lodash');

interface IProject {
  name: string;
  link: string;
  description: string;
}

const PROJECTS: IProject[] = [
  {
    name: 'knit',
    link: 'https://github.com/whenther/knit',
    description: `An Elixir library that translates string maps to typed struct keys based on a schema.`
  },
  {
    name: 'natural-language-commander',
    link: 'http://whenther.github.io/todo-chat',
    description: `A JavaScript library for connecting natural language commands with callbacks.`
  },
  {
    name: 'chopsticks',
    link: 'https://github.com/whenther/',
    description: `An Elixir Phoenix API that lets users play the chopsticks hand game against a learning algorithm.`
  },
  {
    name: 'buy-sell-buy',
    link: 'http://buysellbuy.whentheresawill.net',
    description: `An Angular game where the user tries to beat the random fluctuations of the stock market in a minute and a half.`
  },
  {
    name: 'semantic-gdocs',
    link: 'http://semantic-gdocs.whentheresawill.net',
    description: `Converts exported Google Docs HTML to semantic HTML. Handy for posting  rich text from Docs to forums.`
  },
  {
    name: 'typed-chai-spies',
    link: 'https://github.com/whenther/typed-chai-spies',
    description: `TypeScript typings definitons for the chai-spies library.`
  },
  {
    name: 'angular-typescript-demo',
    link: 'https://github.com/whenther/angular-typescript-demo',
    description: `A demo Angular 1 TypeScript project for the October 2016 Santa Barbara Angular Meetup.`
  },
  {
    name: 'browserify-skeleton',
    link: 'https://github.com/whenther/browserify-skeleton',
    description: `An Angular project skeleton using browserify, for the 2016-03-03 SoCal Angular JS Meetup.`
  },
  {
    name: 'prompt',
    link: 'http://prompt.whentheresawill.net',
    description: `An app that scrolls text over a period of time, like a teleprompter. Over 1000 downloads on the Google Play Store.`
  },
  {
    name: 'DICE',
    link: 'http://dice.whentheresawill.net',
    description: `A simple dice-rolling app, written in ClojureScript`
  },
  {
    name: 'realtalk',
    link: 'https://github.com/whenther/realtalk',
    description: `A node chat app that sends text one character at a time.`
  },
  {
    name: 'sitePass',
    link: 'http://whenther.github.io/sitePass/',
    description: `A chrome extension that generates a secure, stable password by hashing a url and a master password.`
  },

];

interface IProjectsState {
  
}

class Projects extends React.Component<any, IProjectsState> {
  render() {
    return (
      <div className="projects">
        <p>Here are some of the open-source projects I've put together over the years:</p>
        <table className="projects">
          <tbody>
            {_.map(PROJECTS, this.project)}
          </tbody>
        </table>
      </div>
    );
  }

  project = (project: IProject, index: number) => {
    return (
      <tr key={index}>
        <td>
          <a href={project.link} className="project-link">{project.name}</a>
        </td>
        <td>
          {project.description}
        </td>
      </tr>
    );
  }
}

export default Projects;
