import DaumPostcodeEmbed from 'react-daum-postcode';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';

const PostcodeModal = () => {
  const { closeModal } = useModal();

  const handleComplete = (data: any) => {
    const address = {
      postcode: data.zonecode,
      address: data.address,
    };
    console.log(data);
    console.log(address);

    closeModal('postcode');
  };

  return (
    <StPostcodeModal>
      <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: 500 }} />
    </StPostcodeModal>
  );
};

export default PostcodeModal;

const StPostcodeModal = styled.div`
  padding: 3rem;

  & > div {
    width: 200%;
    height: 200%;
  }
`;
