import { FormProvider, useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

import { ADDRESS_LIST } from '../../../../mocks/addressData';
import ExistingAddress from './ExistingAddress';

const ExistingAddressList = () => {
  const methods = useFormContext();

  return (
    <FormProvider {...methods}>
      <StExistingAddressList>
        {ADDRESS_LIST.map((address) => (
          <ExistingAddress addressId={address.id} />
        ))}
      </StExistingAddressList>
    </FormProvider>
  );
};

export default ExistingAddressList;

const StExistingAddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2rem;
`;
