import NavigationPanel from "./components/NavigationPanel";
import ProfilePanel from "./components/ProfilePanel";
import MainPanel from "./components/MainPanel";
import ParticlesBackground from "./utils/ParticlesBackground";

export default function App() {
  return (
    <div className="flex h-screen text-appColor">
      {/* Particle Background */}
      <ParticlesBackground />

      <div className="relative flex w-[90%] items-center">
        <div className="flex h-[80%] w-[8%] items-center justify-center rounded-sm bg-firstLayer">
          <NavigationPanel />
        </div>
        <div className="flex h-[90%] w-[30%] items-center justify-center rounded-sm bg-secondLayer">
          <ProfilePanel />
        </div>
        <div className="flex h-[80%] w-[60%] items-center justify-center rounded-sm bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
