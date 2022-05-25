import React from "react";
import { Link } from "react-router-dom";
import server from "./images/server.png";
import server2 from "./images/server2.png";

export default function Features() {
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

      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">
              Check out the features of Kiba that separate us from the
              competition
            </p>
          </div>
          <img src={server} alt="" />
        </div>
      </section>

      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="md">The Kiba Platform</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
              consectetur ea consequatur, doloribus repellendus quasi, aut
              corporis nam alias culpa. Nostrum, inventore accusantium!
            </p>
          </div>
          <img src={server2} alt="" />
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <i className="fas fa-server fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nemo saepe corrupti et dolorem voluptate at, nostrum rem
              voluptatem ab alias quia molestiae ea, libero nihil deserunt.
              Molestias, eum? Necessitatibus!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-network-wired fa-3x"></i>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              recusandae perferendis culpa, reiciendis a itaque debitis qui vel
              dignissimos ipsum!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-laptop-code fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-database fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-power-off fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-upload fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
          <div>
            <h1>Kiba</h1>
            <p>Copyright &copy; 2020</p>
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
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
