import { useState } from "react";
import DefaultGallery from "./components/ImageGallery";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import FullscreenBackground from "./components/FullscreenBackground";
import photo6 from "./assets/photos/photo6.jpg";
import Arrival from "./components/Arrival";
import Information from "./components/Information";

function App() {
  const [activeSection, setActiveSection] = useState("Welcome");

  const renderContent = () => {
    switch (activeSection) {
      case "Welcome":
        return (
          <FullscreenBackground image={photo6}>
            <Welcome />
          </FullscreenBackground>
        );
      case "Gallery":
        return <DefaultGallery />;
      case "Arrival":
        return <Arrival />;
      case "Information":
        return <Information />;
      default:
        return (
          <FullscreenBackground image={photo6}>
            <Welcome />
          </FullscreenBackground>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Sticky Header */}
      <Header onNavigate={setActiveSection} />
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
