import Script from "next/script";
import React from "react";

const Tier2layot = ({ children }) => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script id="blast_effect">
        {`const duration = 20 * 350,
                animationEnd = Date.now() + duration,
                defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
              
              function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
              }
              
              const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
              
                if (timeLeft <= 0) {
                  return clearInterval(interval);
                }
              
                const particleCount = 50 * (timeLeft / duration);
              
                // since particles fall down, start a bit higher than random
                confetti(
                  Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"], // Google Colors
                    emojis: ["🔥", "🔥", "🔥", "🔥", "🔥", "🎖️", "🎖️", "🎖️"], // Fire Emojis and Medal Emojis
                  })
                );
                confetti(
                  Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    colors: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"], // Google Colors
                    emojis: ["🔥", "🔥", "🔥", "🔥", "🔥", "🎖️", "🎖️", "🎖️"], // Fire Emojis and Medal Emojis
                  })
                );
              }, 250);
                `}
      </Script>
      {children}
    </>
  );
};

export default Tier2layot;
