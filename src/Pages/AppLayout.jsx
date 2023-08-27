import Sidebar from "../components/Sidebar";
import CodeScreen from "../components/CodeScreen";

function AppLayout() {
  return (
    <main className="flex">
      <Sidebar />
      <CodeScreen />
    </main>
  );
}

export default AppLayout;
