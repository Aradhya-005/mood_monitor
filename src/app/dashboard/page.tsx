"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

interface Mood {
  id: number;
  src: string;
  alt: string;
  label: string;
}

const moods: Mood[] = [
  { id: 1, src: '/images/happy.gif', alt: 'Happy', label: 'Happy' },
  { id: 2, src: '/images/sad.gif', alt: 'Sad', label: 'Sad' },
  { id: 3, src: '/images/angry.gif', alt: 'Angry', label: 'Angry' },
  { id: 4, src: '/images/worried.gif', alt: 'Worried', label: 'Worried' },
  // Add more moods as needed
];

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="flex flex-col items-center mt-32 justify-center">
      <Carousel>
        {moods.map((mood) => (
          <div 
            key={mood.id} 
            className={`relative flex flex-col items-center p-4`}
          >
            <div className="relative flex flex-col items-center">
              <Image className='items-center justify-center ml-6' src={mood.src} alt={mood.alt} width={200} height={200} />
              <div
                className={`mt-28 text-xl inset-0 border-2 border-solid rounded-full flex items-center justify-center w-36 h-12 cursor-pointer ${
                  selectedMood === mood ? 'text-blue-500 border-blue-500' : 'text-white border-neutral-300'
                }`}
                onClick={() => handleMoodSelect(mood)}
              >
                {mood.label}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <h1 className="text-2xl font-bold">How do you feel today?</h1>
      {selectedMood && <p className="text-lg">You selected: {selectedMood.label}</p>}
    </div>
  );
};

export default MoodTracker;
