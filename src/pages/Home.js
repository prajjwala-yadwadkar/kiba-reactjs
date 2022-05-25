import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
                <Link to="features">Features</Link>
              </li>
              <li>
                <Link to="documentation">Documentation</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to
              static websites for individuals. Fill out the form to try a demo
              of our platform.
              <br />
              <a href="features.html" className="btn btn-outline">
                Read More
              </a>
            </p>
          </div>
          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling.
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <i className="fas fa-server fa-3x"></i>
              <h3>10,111,405</h3>
              <p className="text-secondary">Deployments</p>
            </div>
            <div>
              <i className="fas fa-upload fa-3x"></i>
              <h3>973 TB</h3>
              <p className="text-secondary">Published</p>
            </div>
            <div>
              <i className="fas fa-project-diagram fa-3x"></i>
              <h3>2,343,265</h3>
              <p className="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cli">
        <div className="container grid">
          <img src="assets/images/cli.png" alt="" />
          <div className="card">
            <h3>Easy to use, cross-platform CLI.</h3>
          </div>
          <div className="card">
            <h3>Deploy in seconds.</h3>
          </div>
        </div>
      </section>

      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Cloud hosting like you've never seen. Fast, efficient, and
              scalable.
            </p>
            <br />
            <a href="features.html" className="btn btn-dark">
              Read More
            </a>
          </div>
          <img src="assets/images/cloud.png" alt="" />
        </div>
      </section>

      <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
          <div className="card">
            <h4>Python</h4>
            <img src="assets/images/logos/python.png" alt="" />
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <img src="assets/images/logos/ruby.png" alt="" />
          </div>
          <div className="card">
            <h4>Go</h4>
            <img src="assets/images/logos/go.png" alt="" />
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <img src="assets/images/logos/clojure.png" alt="" />
          </div>
          <div className="card">
            <h4>Scala</h4>
            <img src="assets/images/logos/scala.png" alt="" />
          </div>
          <div className="card">
            <h4>C#</h4>
            <img src="assets/images/logos/csharp.png" alt="" />
          </div>
          <div className="card">
            <h4>Node.js</h4>
            <img src="assets/images/logos/node.png" alt="" />
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
