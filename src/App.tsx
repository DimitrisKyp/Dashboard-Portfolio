import NavigationPanel from "./components/NavigationPanel";
import ProjectionPanel from "./components/ProjectionPanel";
import MainPanel from "./components/MainPanel";
import ParticlesBackground from "./services/providers/ParticlesBackground";

export default function App() {
  return (
    <div className="flex h-screen text-appText">
      {/* Particle Background */}
      <ParticlesBackground />

      <div className="relative flex w-[90%] items-center">
        <div className="flex h-[80%] w-[8%] items-center justify-center rounded-sm bg-firstLayer">
          <NavigationPanel />
        </div>
        <div className="flex h-[90%] w-[30%] items-center justify-center rounded-sm bg-secondLayer">
          <ProjectionPanel />
        </div>
        <div className="flex h-[80%] w-[50%] items-center justify-center rounded-sm bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
