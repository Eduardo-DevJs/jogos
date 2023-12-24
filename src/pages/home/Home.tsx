import './home.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchGame = async () => {
      await api
        .get('?api=games')
        .then((response) => {
          setJogos(response.data);
          setLoading(false)
        })
        .catch((error) => {
          console.error('Erro: ' + error);
        });
    };

    searchGame();
  }, []);

  return (
    <main className="container">
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className="lista_jogos">
          {jogos.map(({ id, title, image_url, release }) => (
            <li className="item_jogo" key={id}>
              <img src={image_url} alt={title} />
              <h3 className="title_game">{title}</h3>
              <p className="data">
                Data de lançamento: <strong>{release}</strong>
              </p>
              <Link className="link_more" to={`/game/${id}`}>
                Saiba Mais
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
