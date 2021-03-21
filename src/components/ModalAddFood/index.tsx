import { useRef } from 'react';

import { Modal } from '../Modal';
import { Input } from '../Input';
import { Foods } from '../../types';

import { FormHandles } from '@unform/core';

import { FiCheckSquare } from 'react-icons/fi';

import { Form, IconContainer } from '../../styles/modalGlobal';

interface ModalAddFoodProps {
  isOpen: boolean,
  setIsOpen: () => void,
  handleAddFood: (food: Foods) => void
}

export function ModalAddFood(props: ModalAddFoodProps) {
  const { isOpen, setIsOpen, handleAddFood } = props;
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: Foods) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <IconContainer>
            <FiCheckSquare size={24} />
          </IconContainer>
        </button>
      </Form>
    </Modal>
  );
};