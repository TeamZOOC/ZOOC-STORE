import { styled } from 'styled-components';
import { IcLoadingLogo } from '../../../../../public/icons';

const ProductLoadingContainer = () => (
  <>
    <StProductLoadingItem>
      <IcLoadingLogo />
    </StProductLoadingItem>
    <StProductLoadingItem>
      <IcLoadingLogo />
    </StProductLoadingItem>
    <StProductLoadingItem>
      <IcLoadingLogo />
    </StProductLoadingItem>
    <StProductLoadingItem>
      <IcLoadingLogo />
    </StProductLoadingItem>
  </>
);

export default ProductLoadingContainer;

const StProductLoadingItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  aspect-ratio: 1/1.35;

  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
