import { useRef } from 'react';

import { Modal } from '../Modal';
import { Input } from '../Input';
import { Foods } from '../../types';

import { FormHandles } from '@unform/core';

import { FiCheckSquare } from 'react-icons/fi';

import { Form, IconContainer } from '../../styles/modalGlobal';

interface ModalEditFoodProps {
  isOpen: boolean,
  setIsOpen: () => void,
  handleUpdateFood: (food: Foods) => void
  editingFood: Foods
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const { isOpen, setIsOpen, handleUpdateFood, editingFood } = props;
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: Foods) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <IconContainer>
            <FiCheckSquare size={24} />
          </IconContainer>
        </button>
      </Form>
    </Modal>
  );
};
