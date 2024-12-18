import { ButtonHTMLAttributes } from 'react';

interface MainCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const MainCTA = ({ text = "BUY GAS FOR BASE", className = "", ...props }: MainCTAProps) => {
  return (
    <button
      className={`px-8 py-4 border border-black text-black font-bold text-xl hover:bg-black hover:text-white transition-colors duration-200 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default MainCTA; 