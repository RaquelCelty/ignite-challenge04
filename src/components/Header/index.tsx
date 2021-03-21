import { FiPlusSquare } from 'react-icons/fi';

import { Container, TextContainer, IconContainer } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <TextContainer>Novo Prato</TextContainer>
              <IconContainer>
                <FiPlusSquare size={24} />
              </IconContainer>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};
