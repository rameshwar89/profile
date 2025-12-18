import React, { useState, useRef } from 'react';

// Import assets
import bgImage from '../assets/otp_forgotpass/bg.png';
import boxImage from '../assets/otp_forgotpass/box.png';
import enterButton from '../assets/otp_forgotpass/Enter-button.png';
import otpBg from '../assets/otp_forgotpass/EnterOtp-bg.png';
import forgotPassBg from '../assets/otp_forgotpass/ForgotPass-bg.png';

const Otp_forgotpass = () => {
  const [activeSection, setActiveSection] = useState('otp'); // 'otp' or 'forgotpass'
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Enter button click
  const handleEnter = () => {
    if (activeSection === 'otp') {
      const otpCode = otpValues.join('');
      console.log('OTP Entered:', otpCode);
      // Add your OTP verification logic here
    } else {
      console.log('New Password:', newPassword);
      // Add your password reset logic here
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Temporary Toggle buttons for testing */}
      <div className="flex gap-3 mb-6 absolute top-5 left-5 w-40 h-10">
        <button
          className={`px-4 py-1.5 text-xs font-semibold border border-white rounded-full transition-all duration-300 hover:scale-105 ${
            activeSection === 'otp'
              ? 'bg-white text-indigo-600 scale-105'
              : 'bg-transparent text-white'
          }`}
          onClick={() => setActiveSection('otp')}
        >
          Enter OTP
        </button>
        <button
          className={`px-4 py-1.5 text-xs font-semibold border border-white rounded-full transition-all duration-300 hover:scale-105 ${
            activeSection === 'forgotpass'
              ? 'bg-white text-indigo-600 scale-105'
              : 'bg-transparent text-white'
          }`}
          onClick={() => setActiveSection('forgotpass')}
        >
          Forgot Password
        </button>
      </div>

      {/* Main content */}
      <div className="flex justify-center items-center w-full px-4">
        {activeSection === 'otp' ? (
          <div className="flex justify-center items-center w-full">
            <div
              className="relative bg-contain bg-no-repeat bg-center flex flex-col gap-[16%] items-center justify-center 
                         py-[4%] px-[5%]
                         w-[95vw] sm:w-[85vw] md:w-[70vw] lg:w-[55vw] max-w-125"
              style={{ 
                backgroundImage: `url(${otpBg})`,
                backgroundSize: '100% 100%',
                aspectRatio: '1 / 0.75'
              }}
            >
              {/* OTP Input boxes */}
              <div className="flex gap-[1.5%] lg:gap-[3%] justify-center items-center mt-[35%]">
                {otpValues.map((value, index) => (
                  <div key={index} className="relative w-[12%] lg:w-[14%] aspect-square flex justify-center items-center shrink-0">
                    <img src={boxImage} alt="box" className="absolute w-full h-full object-contain pointer-events-none" />
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="relative z-10 w-[65%] h-[65%] bg-transparent border-none outline-none text-center font-bold text-gray-800"
                      style={{ 
                        caretColor: '#667eea',
                        fontSize: 'clamp(14px, 4vw, 28px)'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Enter button */}
              <div className="flex justify-center items-center">
                <img
                  src={enterButton}
                  alt="Enter"
                  className="cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 
                           w-[60%] lg:w-[80%] h-auto"
                  onClick={handleEnter}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full">
            <div
              className="relative bg-contain bg-no-repeat bg-center flex flex-col gap-[16%] items-center justify-center 
                         py-[4%] px-[5%]
                         w-[95vw] sm:w-[85vw] md:w-[70vw] lg:w-[55vw] max-w-125"
              style={{ 
                backgroundImage: `url(${forgotPassBg})`,
                backgroundSize: '100% 100%',
                aspectRatio: '1 / 0.75'
              }}
            >
              {/* Forgot Password Input boxes */}
              <div className="flex justify-center items-center mt-[35%] w-[75%] lg:w-[90%] relative">
                <input
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="NEW PASSWORD"
                  className="w-full bg-transparent border-0 border-b-4 border-yellow-400 outline-none text-left text-yellow-200 placeholder:text-yellow-500/60 placeholder:text-left font-bold tracking-[0.3em] text-base sm:text-lg md:text-xl lg:text-2xl"
                  style={{ 
                    fontFamily: 'JustFontime',
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 pointer-events-none"
                  style={{
                    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>

              {/* Enter button */}
              <div className="flex justify-center items-center">
                <img
                  src={enterButton}
                  alt="Enter"
                  className="cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 
                           w-[65%] lg:w-[80%] h-auto"
                  onClick={handleEnter}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Otp_forgotpass;
