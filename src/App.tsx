import NavigationPanel from "./components/NavigationPanel";
import ProjectionPanel from "./components/ProjectionPanel";
import MainPanel from "./components/MainPanel";

export default function App() {
  return (
    <div className="flex h-screen items-center bg-appBg text-appText">
      {/* Navigation Links */}
      <div className="flex h-[80vh] w-[10%] items-center justify-center rounded-sm bg-firstLayer">
        <NavigationPanel />
      </div>
      {/* Display details (slightly bigger height) */}
      <div className="flex h-[90vh] w-[30%] items-center justify-center rounded-sm bg-secondLayer">
        <ProjectionPanel />
      </div>
      {/* Main Content Area */}
      <div className="flex h-[80vh] w-[50%] items-center justify-center rounded-sm bg-firstLayer">
        <MainPanel />
      </div>
    </div>
  );
}
