import React, { useEffect } from 'react';

interface useOutSideClickProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}
const useOutSideClick = ({ ref, callback }: useOutSideClickProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
export default useOutSideClick;
