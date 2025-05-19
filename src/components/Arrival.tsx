import YouTubeIframe from "./YouTubeIframe";
import pic_outside from '../assets/photos/outside_entry.jpg';
import pic_satelite from '../assets/photos/satelite_photo.jpg';
import pic_lockbox from '../assets/photos/lockbox.jpg';

export default function Arrival() {
    return (
        <div className="flex flex-col items-center px-4 h-full">
          <div className="w-full max-w-4xl" style={{ maxWidth: "70vw" }}>
            <h1 className="text-7xl font-bold text-gray-800 text-center">Arrival Guide</h1>
            <h2 className="text-4xl font-semibold text-gray-700 mt-4 text-center">
              A complete walkthrough to finding the home.
            </h2>
            <p className="text-lg text-gray-600 mt-2 text-center">
              We are happy to welcome you to our Locomotiva Home and wish you a pleasant stay.
              <br /><br />
              Here is all that you need to know for your upcoming stay
              <br /><br />
              Check in 14:00<br />
              Check out 12:00<br /><br />
              WIFI: Erjona<br />
              Password: tiran2023<br /><br />
              Arrival guide:<br />
              At the staircase entrance, extract the key from the RED lockbox (Lever down, pull top of door out)<br />
              Use the elevator, press 1. Exit the elevator to the right. There are three doors, your destination is the leftmost door with the number 7 above it (see also picture).<br />
              Use the key to get through the security door. Enter your apartment by using the digital code ending in # on the left door.<br /><br />
              The passcodes for the red lockbox and the digital doorlock will be given through the messages on the app.
            </p>
            <div className="flex flex-col gap-4 my-6 items-center">
              <img src={pic_outside} alt="Outside Entry" className="w-full max-w-md rounded shadow" />
              <img src={pic_satelite} alt="Satellite Photo" className="w-full max-w-md rounded shadow" />
              <img src={pic_lockbox} alt="Lockbox" className="w-full max-w-md rounded shadow" />
            </div>
            <div className="flex flex-col gap-6 items-center"><h2 className="text-4xl font-semibold text-gray-700 mt-4 text-center">
              Calling the elevator with the keyfob</h2>
              <YouTubeIframe
                src="https://youtube.com/shorts/r_UZr56cXGg?feature=share"
                title="Elevator, outside"
              />
              <h2 className="text-4xl font-semibold text-gray-700 mt-4 text-center">
              Activating the elevator and pressing the correct floor</h2>
              <YouTubeIframe
                src="https://youtube.com/shorts/gLKQBK6CB1I?feature=share"
                title="Elevator, inside"
              />
              <h2 className="text-4xl font-semibold text-gray-700 mt-4 text-center">
              Walking from the elevator to the appartment door.</h2>
              <YouTubeIframe
                src="https://youtube.com/shorts/JKCuFlbKVvg?feature=share"
                title="Walk from elevator to the apartment"
              />
              <h2 className="text-4xl font-semibold text-gray-700 mt-4 text-center">
              How to use the digital door lock</h2>
              <YouTubeIframe
                src="https://youtube.com/shorts/5VheHNrw1dw?feature=share"
                title="Using the digital door lock"
              />
            </div>
          </div>
        </div>
      );
}