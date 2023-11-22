'use client';

import { styled } from 'styled-components';
import { OptionInfo, selectedOptionsState } from '@/recoil/option/atom';
import { useRecoilState } from 'recoil';
import {
  IcMinus,
  IcPlus,
  IcProductDelete,
} from '../../../../../../public/icons';

interface OptionSelectItemProps {
  selected: OptionInfo[];
  selectedIndex: number;
}

const OptionSelectItem = ({
  selected,
  selectedIndex,
}: OptionSelectItemProps) => {
  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsState);

  const handleDeleteSelectedOption = () => {
    setSelectedOptions(
      selectedOptions.filter((_, index) => index !== selectedIndex),
    );
  };

  const handleIncreaseQuantity = () => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((optionPair, index) =>
        index === selectedIndex
          ? [
              { ...optionPair[0], quantity: optionPair[0].quantity + 1 },
              ...optionPair.slice(1),
            ]
          : optionPair,
      ),
    );
  };

  const handleDecreaseQuantity = () => {
    if (selectedOptions[selectedIndex][0].quantity === 1) return;
    setSelectedOptions((prevOptions) =>
      prevOptions.map((optionPair, index) =>
        index === selectedIndex
          ? [
              { ...optionPair[0], quantity: optionPair[0].quantity - 1 },
              ...optionPair.slice(1),
            ]
          : optionPair,
      ),
    );
  };

  return (
    <StOptionSelectItem>
      <StOptionSelectItemLeft>
        <IcProductDelete onClick={handleDeleteSelectedOption} />
        <div>
          {selected.map(({ id, name }) => (
            <StOptionSelectItemText key={id}>{name}</StOptionSelectItemText>
          ))}
        </div>
      </StOptionSelectItemLeft>
      <StOptionSelectItemRight>
        <StOptionItemQuantityControlButton
          type="button"
          onClick={handleDecreaseQuantity}
        >
          <IcMinus />
        </StOptionItemQuantityControlButton>
        <span>{selectedOptions[selectedIndex][0].quantity}</span>
        <StOptionItemQuantityControlButton
          type="button"
          onClick={handleIncreaseQuantity}
        >
          <IcPlus />
        </StOptionItemQuantityControlButton>
      </StOptionSelectItemRight>
    </StOptionSelectItem>
  );
};
export default OptionSelectItem;

const StOptionSelectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  & + & {
    margin-top: 2.4rem;
  }
`;
const StOptionSelectItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const StOptionSelectItemRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 12rem;

  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
`;

const StOptionSelectItemText = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};

  &::after {
    content: '/';
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`;
const StOptionItemQuantityControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_background};
`;
