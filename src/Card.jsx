import React, { useRef } from 'react';
import './styles.css';  

export default function Card() {
  const audioRef = useRef(null);

  // Function to play music when hovering
  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  // Function to pause music when hover stops
  const handleMouseLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Restart the audio when hover is removed
  };

  return (
    <div
      className="birthdayCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Hiếuuuuu :3</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
          <div className="balloonFive" />
          <div className="balloonSix" />
        
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Chúc mừng sinh nhật tuổi 20!</h3>
        <p>Hiếu thân mến,</p>
        <p>
        Time flies, doesn’t it? In just the blink of an eye, you've already turned 20, the age that, for me, is a milestone to reflect on how much I've changed over the past 20 years. I know that you have reached many milestones—there may have been regrets, but also happy achievements during that time—but life is all about choices, right? I hope that as you pass this age of 20, the things you wish for will come to you, the things you haven’t yet accomplished will become a reality, and the things you have done will become beautiful memories in your mind. I hope that on the journey ahead, you will live to the fullest, be joyful, stay healthy, and find happiness. Happy birthday, Nguyễn Đình Hiếu.
        </p>
        <p className="name">Vũ Linh Nga</p>
      </div>
      {/* Add the audio element */}
      <audio ref={audioRef}>
        <source src="/hbd.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
