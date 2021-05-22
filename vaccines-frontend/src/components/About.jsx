import React from "react";
import Link from "@material-ui/core/Link";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>About</h1>
      <h2 style={{ marginBottom: "20px" }}>
        Live on <Link href="http://">Heroku</Link>
      </h2>
      <h2 style={{ marginBottom: "20px" }}>
        Source Code on <Link href="http://">GitHub</Link>
      </h2>

      <h2>Made with:</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p>
          <Link href="https://reactjs.org/">React</Link>
        </p>
        <p>
          <Link href="https://nodejs.org/en/">Node.js</Link>
        </p>
        <p>
          <Link href="https://vitejs.dev/">Vite</Link>
        </p>
        <p>
          <Link href="https://reactrouter.com/">React Router</Link>
        </p>
        <p>
          <Link href="https://material-ui.com/">Material UI</Link>
        </p>
        <p>
          <Link href="https://recharts.org/en-US/">Recharts</Link>
        </p>
        <p>
          <Link href="https://heroku.com/">Heroku</Link>
        </p>
        <p>
          <Link href="https://axios-http.com/">Axios</Link>
        </p>
      </div>
    </div>
  );
};

export default About;
