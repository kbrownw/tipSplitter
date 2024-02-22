import MainContainer from "./components/MainContainer";
import Title from "./components/Title";

function App() {
  return (
    <main className="h-[100vh] bg-light-grayish-cyan font-SpaceMono text-[24px]">
      <div className="flex flex-col h-full gap-10 justify-center py-10 md:items-center md:h-full md:gap-20">
        <Title />
        <MainContainer />
      </div>
    </main>
  );
}

export default App;
