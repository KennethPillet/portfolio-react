export function Header() {
    return (
      <header id="up">
        <nav>
          <a href="index.html"><span>Qui suis je ?</span></a>
          <a href="Portfolio.html">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
}

export function Footer() {
    return (
        <footer id="contact">
            <ul>
                <li><i className="fas fa-user"></i> Kenneth Pillet</li>
                <li><i className="fas fa-phone-square-alt"></i><a href="tel:+33688328195">06 88 32 81 95</a></li>
                <li><i className="fas fa-envelope"></i><a href="mailto:kennethpillet@hotmail.fr"> kennethpillet@hotmail.fr</a></li>
                <li><i className="fab fa-linkedin"></i><a href="http://linkedin.com/in/kenneth-pillet/" target="_blank" rel="noopener noreferrer"> Linkedin</a></li>
            </ul>
        </footer>
    );
}