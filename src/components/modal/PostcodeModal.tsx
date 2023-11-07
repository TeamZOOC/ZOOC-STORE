import DaumPostcodeEmbed from 'react-daum-postcode';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';
import { addressState } from '@/recoil/order/atom';

const PostcodeModal = () => {
  const { closeModal } = useModal();
  const [, setResAddress] = useRecoilState(addressState);

  const handleComplete = (data: any) => {
    const address = {
      postcode: data.zonecode,
      address: data.address,
    };
    console.log(address);
    setResAddress({ address: address.address, postcode: address.postcode });
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
