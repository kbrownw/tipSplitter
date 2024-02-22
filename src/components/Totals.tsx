interface Props {
  text: string;
  amount: string;
}

const Totals = ({ text, amount }: Props) => {
  return (
    <div className="flex justify-between items-center overflow-x-scroll">
      <div className="flex flex-col">
        <p className="text-white text-[16px]">{text}</p>
        <p className="text-[14px] text-dark-grayish-cyan">/ person</p>
      </div>
      <p className="text-[32px] text-strong-cyan md:text-[48px]">${amount}</p>
    </div>
  );
};

export default Totals;
