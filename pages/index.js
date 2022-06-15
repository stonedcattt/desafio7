import React from "react";

const Home = () => (
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>
    <body>
      <header>
        <h1 className="logo">Logo</h1>
        <nav>
          <ul>
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Acerca de</a>
            </li>
            <li>
              <a href="">Inicio</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Esto es un título</h1>
          <p>Esto es un párrafo</p>
          <button>Esto es un botón</button>
        </section>

        <section className="cards"></section>
      </main>

      <footer>
        <ul>
          <li>
            <a href="/facebook">Facebook</a>
          </li>
          <li>
            <a href="/instagram">Instagram</a>
          </li>
          <li>
            <a href="/twitter">Twitter</a>
          </li>
        </ul>
      </footer>
    </body>
  </div>
);

export default Home;