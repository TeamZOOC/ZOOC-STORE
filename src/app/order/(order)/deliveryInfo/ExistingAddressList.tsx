import { styled } from 'styled-components';

import { ADDRESS_LIST } from '../../../../mocks/addressData';
import ExistingAddress from './ExistingAddress';

const ExistingAddressList = () => (
  <StExistingAddressList>
    {ADDRESS_LIST.map((address) => (
      <ExistingAddress addressId={address.id} />
    ))}
  </StExistingAddressList>
);

export default ExistingAddressList;

const StExistingAddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2rem;
`;
