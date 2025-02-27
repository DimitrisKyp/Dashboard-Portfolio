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
        <div className="flex h-[90%] w-[8%] items-center justify-center rounded-sm bg-firstLayer">
          <NavigationPanel />
        </div>
        <div className="flex h-[90%] w-[20%] items-center justify-center rounded-sm bg-firstLayer">
          <ProfilePanel />
        </div>
        <div className="flex h-[90%] w-[70%] items-center justify-center rounded-sm bg-firstLayer">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
