import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import './infoGame.css';

const InfoGame = () => {
  interface GameInfo {
    id: string;
    title: string;
    description: string;
    image_url: string;
    platforms: string[];
    categories: string[];
  }

  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState<GameInfo>();

  useEffect(() => {
    const searachGameId = async () => {
      try {
        const response = await api.get(`/?api=game&id=${id}`);
        setGameInfo(response.data);
      } catch (error) {
        console.log('Erro am mostrar game por ID');
      }
    };

    searachGameId();
  }, [id]);

  if (!gameInfo) {
    return (
      <div className='container'>
        <h1>Carregando...</h1>
      </div>
    )
  }

  const { title, description, image_url, platforms, categories } = gameInfo;

  return (
    <div className="container">
      <div className="info_game">
        <img src={image_url} alt={title} />
        <div>
          <h1 className='title'>{title}</h1>
          <p id="description">{description}</p>
          <ul className="list_plataforms">
            {platforms.map((plataform) => (
              <li key={plataform}>{plataform}</li>
            ))}
          </ul>
          <ul className="list_categories">
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link id='link_home' to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default InfoGame;
