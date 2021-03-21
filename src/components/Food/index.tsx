import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container, SectionBody, SectionFooter, IconContainer, AvailabilityContainer } from './styles';
import api from '../../services/api';

interface Food {
  id: number;
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string
}

interface FoodProps {
  food: Food,
  handleDelete: (id: number) => void;
  handleEditFood: (food: Food) => void;
}

export function Food(props: FoodProps) {
  const { food, handleDelete, handleEditFood } = props;
  const { available } = props.food;
  const [isAvailable, setIsAvailable] = useState(available);

  async function toggleAvailable() {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  }

  function setEditingFood() {
    handleEditFood(food);
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <SectionBody>
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </SectionBody>
      <SectionFooter>
        <IconContainer>
          <button
            type="button"
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </IconContainer>

        <AvailabilityContainer>
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`}>
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span />
          </label>
        </AvailabilityContainer>
      </SectionFooter>
    </Container>
  );
};
