import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get('https://638da1efaefc455fb2a742a8.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы ;(');
        navigate('/');
      }
    }
    fetchPizzas();
  }, []);
  if (!pizza) {
    return <>Загрузка...</>;
  }
  return (
    <div>
      <img src={pizza.imageUrl} alt="img" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ab magni non dolores
        consequatur adipisci cum provident. Ex, accusantium blanditiis dolorum, expedita quo
        dolores, esse doloribus nihil aut velit minus.
      </p>
      <h4>{pizza.price} $</h4>
      <Link to={'/'}>
      <button className="button button--outline button--add">
        <span>Назад</span>
      </button>
      </Link>
    </div>
  );
};

export default FullPizza;
