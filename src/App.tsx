import NavigationPanel from "./components/NavigationPanel";
import ProjectionPanel from "./components/ProjectionPanel";
import MainPanel from "./components/MainPanel";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    <div className="flex h-screen text-appText">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative flex w-[90%] items-center">
        <div className="flex h-[80vh] w-[10%] items-center justify-center rounded-sm bg-firstLayer shadow-md">
          <NavigationPanel />
        </div>
        <div className="flex h-[90vh] w-[30%] items-center justify-center rounded-sm bg-secondLayer shadow-md">
          <ProjectionPanel />
        </div>
        <div className="flex h-[80vh] w-[50%] items-center justify-center rounded-sm bg-firstLayer shadow-md">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
