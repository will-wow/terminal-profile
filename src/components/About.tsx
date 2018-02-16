import * as React from "react";

interface IAboutState {}

class About extends React.Component<any, IAboutState> {
  render() {
    return (
      <div>
        <p>
          They say that "Where there's a Will, there's a way." As a Will, I've
          always liked that phrase. But it does seem a little out-dated. I mean,
          where? This is the internet. Where isn't really that important.
          (Though, FYI, I'm in Los Angeles.)
        </p>
        <p>
          I'm currently a full-stack Software Engineer at AssetAvenue, a fintech
          startup in LA. I’ve worked in early stage startups to help people
          create complicated real estate loan applications online, and to share,
          view, and manage permissions on files. I particularly enjoy functional
          programming languages, and languages off the beaten path in general,
          like Elixir and Clojure.
        </p>
        <p>
          At AssetAvenue, I’ve worked on the full stack for a Ruby/Sinatra and
          TypeScript/Angular site that lets people apply for real estate loans,
          calculates eligibility and interest rates, and then lets them fill out
          a full loan application online. Recently though, I’ve been spending
          most of my time working on our loan origination system, an admin
          system written in the functional Elixir language. Elixir is new, and
          the libraries are still a little light, but I’ve enjoyed the ease of
          reasoning in its pure functional controllers and models, and we have
          the chance to add to the open source Elixir community with a data
          conversion library called knit.
        </p>
        <p>
          A few years ago, after spending time working with databases and
          automation, I transferred from accounting to programming. Since then,
          I've worked on the full stack at two startups, mentored junior
          developers, built the company chatbot with Hubot, gave talks at
          AngularJS meetups on Browserify and TypeScript, and contributed to the
          open source Typings and VSCode-Vim projects.
        </p>
      </div>
    );
  }
}

export default About;
