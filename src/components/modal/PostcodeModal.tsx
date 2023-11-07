import DaumPostcodeEmbed from 'react-daum-postcode';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';
import { addressState } from '@/recoil/order/atom';

import { IcExit } from '../../../public/icons';

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
      <StExitWrapper>
        <IcExit onClick={() => closeModal('postcode')} />
      </StExitWrapper>
      <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: 500 }} />
    </StPostcodeModal>
  );
};

export default PostcodeModal;

const StPostcodeModal = styled.div`
  padding: 1.5rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.zw_white};
`;

const StExitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 1.5rem;
`;
