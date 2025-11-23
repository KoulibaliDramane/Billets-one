import Image from "next/image";

export default function Home() {
  return (
      <div className="navbar">
          <nav className="navbar">
              <ul className="navBar__list">
                  <li>Accueil</li>
                  <li>Contact</li>
                  <li>A propos de nous</li>
              </ul>
          </nav>

          <div className="buttons">
              <button>Se connecter</button>
              <button className="register">Creer un compt</button>
          </div>
      </div>
  );
}