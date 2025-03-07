import NavigationPanel from "./components/NavigationPanel";
import MainPanel from "./components/MainPanel";
import ParticlesBackground from "./utils/ParticlesBackground";

export default function App() {
  return (
    <div className="flex h-screen items-center text-appColor">
      {/* Particle Background */}
      <ParticlesBackground />

      <div className="relative flex h-full w-full items-center justify-center space-x-6">
        <div className="flex h-[70%] w-[5%] items-center justify-center rounded-xl bg-firstLayer">
          <NavigationPanel />
        </div>
        <div className="flex h-full w-[60%] items-center justify-center rounded-sm bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
