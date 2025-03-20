import NavigationPanel from "./components/NavigationPanel";
import MainPanel from "./components/MainPanel";
import ParticlesBackground from "./utils/ParticlesBackground";

export default function App() {
  return (
    <div className="flex h-screen items-center text-appColor">
      {/* Particle Background */}
      <ParticlesBackground />

      <div className="md:flex-row md:space-x-6 md:overflow-auto relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <div className="md:h-[70%] md:w-[10%] lg:w-[90px] md:pt-0 md:rounded-xl flex h-[10%] w-[100%] items-center justify-center bg-firstLayer pt-6">
          <NavigationPanel />
        </div>
        <div className="md:w-[80%] md:h-full md:rounded-xl flex h-[90%] w-[100%] items-center justify-center bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
