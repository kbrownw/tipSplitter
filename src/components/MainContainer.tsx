import InputsColumn from "./InputsColumn";
import TotalsColumn from "./TotalsColumn";

const MainContainer = () => {
  return (
    <section className="flex flex-col gap-5 w-full p-5 mx-auto bg-white rounded-[25px] md:flex-row md:max-w-[950px] md:p-8">
      <InputsColumn />
      <TotalsColumn />
    </section>
  );
};

export default MainContainer;
