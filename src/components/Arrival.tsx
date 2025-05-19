import YouTubeIframe from "./YouTubeIframe";

export default function Arrival() {
    return (
        <div className="flex flex-col items-center text-center px-4 h-full">
          <h1 className="text-7xl font-bold text-gray-800">Arrival Guide</h1>
          <h2 className="text-4xl font-semibold text-gray-700 mt-4">
            A complete walkthrough to finding the home.
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Welcome to the application! Explore the gallery or check out other sections.
          </p>
          <YouTubeIframe
            src="https://youtube.com/shorts/r_UZr56cXGg?feature=share"
            title="Elevator, outside"
          />
          <YouTubeIframe
            src="https://youtube.com/shorts/gLKQBK6CB1I?feature=share"
            title="Elevator, inside"
          />
          <YouTubeIframe
            src="https://youtube.com/shorts/JKCuFlbKVvg?feature=share"
            title="Walk from elevator to the apartment"
          />
          <YouTubeIframe
            src="https://youtube.com/shorts/5VheHNrw1dw?feature=share"
            title="Using the digital door lock"
          />
        </div>
      );
    }