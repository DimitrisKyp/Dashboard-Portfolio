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
        <div className="flex h-[80vh] w-[8%] items-center justify-center rounded-sm bg-firstLayer">
          <NavigationPanel />
        </div>
        <div className="flex h-[90vh] w-[30%] items-center justify-center rounded-sm bg-secondLayer">
          <ProjectionPanel />
        </div>
        <div className="flex h-[80vh] w-[50%] items-center justify-center rounded-sm bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
