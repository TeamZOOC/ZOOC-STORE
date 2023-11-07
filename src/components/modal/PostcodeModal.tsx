import DaumPostcodeEmbed from 'react-daum-postcode';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';

const PostcodeModal = () => {
  const { closeModal } = useModal();

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(fullAddress);

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
