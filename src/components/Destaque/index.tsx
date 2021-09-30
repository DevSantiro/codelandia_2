import { CardImage } from "./CardImage"

import img1 from '../../assets/img/1.png';
import img2 from '../../assets/img/2.png';
import img3 from '../../assets/img/3.png';
import img4 from '../../assets/img/4.png';
import img5 from '../../assets/img/5.png';
import img6 from '../../assets/img/6.png';
import img7 from '../../assets/img/7.png';
import img8 from '../../assets/img/8.png';

export const Destaque = () => {
  return (
    <main className="container_destaque">
      <h1>Destaques</h1>
      <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo ilimitato.</p>
      <div className="container_destaque_cards">
        <CardImage image={img1} alt={'Tênis Nike'}/>
        <CardImage image={img2} alt={'Tênis Nike'}/>
        <CardImage image={img3} alt={'Tênis Nike'}/>
        <CardImage image={img4} alt={'Tênis Nike'}/>
        <CardImage image={img5} alt={'Tênis Nike'}/>
        <CardImage image={img6} alt={'Tênis Nike'}/>
        <CardImage image={img7} alt={'Tênis Nike'}/>
        <CardImage image={img8} alt={'Tênis Nike'}/>
      </div>
    </main>
  )
}