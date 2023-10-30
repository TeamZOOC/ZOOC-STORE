import styled from 'styled-components';

interface ToastProps {
  message: string | null;
}

const Toast = ({ message }: ToastProps) =>
  message ? <StyledToast>{message}</StyledToast> : null;

const StyledToast = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.2rem 2.4rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
  backdrop-filter: blur(0.2rem);
`;

export default Toast;
