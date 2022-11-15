export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, my name is Johnny Bui</h1>
          </div>

          <p className='description'>
            I am a computer science major and is planning on getting a bachelors degree from CU Boulder, 
            and I have experienced engineering for the past 5 years -- such as Aerospace and Mechanical.
            Despite that I've experienced within these fields, I prefer computer science more than the paths -- I've mentioned above --
            is because being able to stay at home while doing work at the same time is my prefered style of work environment, and I'm more of a computery guy than
            a physical working guy. But enough about my engineering experience, Lets talk about me!. I love playing games, and my personal favorite is Sekiro -- made 
            by FromSoftware games. There's so many things I want to say about this game, but I rather not talk about that, or else this whole bio would be filled of me 
            talking the game, so I'll just say that I love the game is because I love its combat mechanics and difficulty.
            A fun fact about me is that I've lately enjoyed listening to K-RnB for a while now, and my personal favorite artist is Gemini,
            who made "Know Me" & "Broken Love". One last thing I want to let you guys know is that I'm a quiet guy. But once I get to know you, then I show my colors.
            Anyways, that's pretty much all I got to say about myself. Goodbye!
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}