import Container from "./components/Container";
import Header from "./components/Header";
import Payments from "./pages/Payments";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
      <Container>
        <Header/>
        <div className="w-full flex py-1 gap-1">
          {/* <Sidebar/> */}
          <div className="flex-1 flex-col  flex border m1 h-[300vh]">
            <Payments/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
