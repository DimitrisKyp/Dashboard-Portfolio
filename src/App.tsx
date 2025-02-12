import LeftPanel from "./components/LeftPanel";
import MiddlePanel from "./components/MiddlePanel";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className={`flex bg-appBg text-appText`}>
      {/* Left Panel - Personal Info */}
      <aside className={`fixed left-0 top-1/4 flex w-2/6 justify-center p-6`}>
        <LeftPanel />
      </aside>
      {/* Main Content Area */}
      <main className="ml-[33.33%] mr-[16.66%] w-3/6 overflow-y-auto p-6">
        <MiddlePanel />
      </main>
      {/* Right Panel - Navigation Links */}
      <aside className={`fixed right-0 top-1/4 flex w-1/6 justify-center p-6`}>
        <RightPanel />
      </aside>
    </div>
  );
}
