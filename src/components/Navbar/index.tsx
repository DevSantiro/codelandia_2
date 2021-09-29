import background from '../../assets/img/wallpaper.jpeg';
import './style.scss';

export const Navbar = () => {
  return (
    <header className="navbar">
      <p className="navbar_paragraf">Ganhe R$ 10,00 de desconto no frete</p>
      <h1 className="navbar_tittle">JordanShoes</h1>
      <div className="navbar_info">
        <div className="navbar_info_site">
          <h1>A melhor loja de Jordan</h1>
          <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
        </div>
      </div>
    </header>
  )
}