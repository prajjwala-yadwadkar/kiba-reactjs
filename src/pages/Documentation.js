import React from "react";
import { Link } from "react-router-dom";

export default function Documentation() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Kiba</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/documentation">Documentation</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Docs</h1>
            <p className="lead">Learn how to work with the Kiba platform</p>
          </div>
          <img src="images/docs.png" alt="" />
        </div>
      </section>

      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a className="text-primary" href="#">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#">About Kiba</a>
                </li>
                <li>
                  <a href="#">Installation</a>
                </li>
              </ul>
            </nav>

            <h3 className="my-2">Deployment</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">Setting up a container</a>
                </li>
                <li>
                  <a href="#">Using the CLI</a>
                </li>
                <li>
                  <a href="#">Managing resources</a>
                </li>
                <li>
                  <a href="#">Upgrade & downgrade</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio illo facere perferendis laborum? Similique recusandae
              incidunt eos dolorum aliquam ipsam unde perspiciatis laudantium
              totam quam laborum velit, at maxime minus?
            </p>

            <div className="alert alert-success">
              <i className="fas fa-info"></i> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae, animi?
            </div>

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              totam magni eius vitae velit id, atque veritatis! At, vero porro.
            </p>
            <a href="#" className="btn btn-primary">
              Install CLI
            </a>

            <h3>Requirements</h3>
            <ul>
              <li>Windows 10, Mac OSX, Linux</li>
              <li>Node.js v12 or higher</li>
            </ul>

            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre>
              <code>$ brew install kiba-cli</code>
            </pre>
            <p>NPM</p>
            <pre>
              <code>$ npm install kiba-cli</code>
            </pre>
            <p>Yarn</p>
            <pre>
              <code>$ yarn install kiba-cli</code>
            </pre>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
          <div>
            <h1>kiba</h1>
            <p>Copyrights &copy; 2022</p>
          </div>
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="features.html">Features</a>
              </li>
              <li>
                <a href="docs.html">Docs</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <a href="#">
              {" "}
              <i className="fab fa-github fa-2x"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-facebook fa-2x"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram fa-2x"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter fa-2x"></i>{" "}
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
