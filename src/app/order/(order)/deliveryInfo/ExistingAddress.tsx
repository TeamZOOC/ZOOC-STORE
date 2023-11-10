import { styled } from 'styled-components';

import { Radio } from '@/components/radio';

const ExistingAddress = () => {
  console.log('ExistingAddress');
  return (
    <StExistingAddress>
      <Radio />
    </StExistingAddress>
  );
};

export default ExistingAddress;

const StExistingAddress = styled.div``;
