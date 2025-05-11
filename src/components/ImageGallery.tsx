import { useState } from 'react';
import photo1 from '../assets/photos/photo1.jpg';
import photo2 from '../assets/photos/photo2.jpg';
import photo3 from '../assets/photos/photo3.jpg';
import photo4 from '../assets/photos/photo4.jpg';
import photo5 from '../assets/photos/photo5.jpg';
import photo6 from '../assets/photos/photo6.jpg';
import photo7 from '../assets/photos/photo7.jpg';
import photo8 from '../assets/photos/photo8.jpg';
import photo9 from '../assets/photos/photo9.jpg';

// Placeholder images. Replace with import from DB function

export default function DefaultGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const data = [
        { imageLink: photo1 },
        { imageLink: photo2 },
        { imageLink: photo3 },
        { imageLink: photo4 },
        { imageLink: photo5 },
        { imageLink: photo6 },
        { imageLink: photo7 },
        { imageLink: photo8 },
        { imageLink: photo9 },
    ];

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data.map(({ imageLink }, index) => (
                    <div key={index} onClick={() => handleImageClick(imageLink)}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
                            src={imageLink}
                            alt={`gallery-photo-${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closePopup}
                >
                    <div className="relative">
                        <img
                            className="max-h-[90vh] max-w-[90vw] rounded-lg"
                            src={selectedImage}
                            alt="Selected"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-xl"
                            onClick={(e) => {
                                e.stopPropagation();
                                closePopup();
                            }}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}