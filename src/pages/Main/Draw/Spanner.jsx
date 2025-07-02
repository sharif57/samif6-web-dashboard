// // import React from 'react'

// // export default function Spanner() {
// //   return (
// //     <div>Spanner</div>
// //   )
// // }

// import { SpinWheel } from "spin-wheel-game";

// const segments = [
//   { segmentText: "10FDH40J6", segColor:'#534590'},
//   { segmentText: "10FDH40J6", segColor:'#534590'},
//   { segmentText: "10FDH40J61", segColor:'#534590'},
//   { segmentText: "10FDH40J62", segColor:'#534590'},
//   { segmentText: "10FDH40J3", segColor:'#534590'},
//   { segmentText: "10FDH40J4", segColor:'#534590'},
//   { segmentText: "10FDH40J5", segColor:'#534590'},
//   { segmentText: "10FDH40J6", segColor:'#534590'},
//   { segmentText: "10FDH40J7", segColor:'#534590'},
//   { segmentText: "10FDH40J8", segColor:'#534590'},
//   { segmentText: "10FDH40J9", segColor:'#534590'},
//   { segmentText: "10FDH40J10", segColor:'#534590'},
//   { segmentText: "10FDH40J1", segColor:'#534590'},
//   { segmentText: "10FDH40J13", segColor:'#534590'},
//   { segmentText: "10FDH40J6sd", segColor:'#534590'},
//   { segmentText: "10FDH40J6hj", segColor:'#534590'},

//   // Add more segments as needed
// ];

// const Spanner = () => {
//   const handleSpinFinish = (result) => {
//     console.log(`Spun to: ${result}`);
//     // Handle the result as needed
//   };

//   const spinWheelProps = {
// segments,
// onFinished: handleSpinFinish,
// primaryColor: "black",
// contrastColor: "white",
// buttonText: "Spin",
// textColor: "red",
// isOnlyOnce: false,
// size: 290,
// upDuration: 100,
// downDuration: 600,
// fontFamily: "Arial",
// arrowLocation: "top",
// showTextOnSpin: true,
// isSpinSound: true,
//   };

//   return <SpinWheel {...spinWheelProps} />;
// };

// export default Spanner;

// "use client"

// import { useState, useRef } from "react"
// import { Settings, Trophy, X } from "lucide-react"

// const segments = [
//   { segmentText: "10FDH40J6", segColor: "#534590" },
//   { segmentText: "10FDH40J6", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J61", segColor: "#534590" },
//   { segmentText: "10FDH40J62", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J3", segColor: "#534590" },
//   { segmentText: "10FDH40J4", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J5", segColor: "#534590" },
//   { segmentText: "10FDH40J6", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J7", segColor: "#534590" },
//   { segmentText: "10FDH40J8", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J9", segColor: "#534590" },
//   { segmentText: "10FDH40J10", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J1", segColor: "#534590" },
//   { segmentText: "10FDH40J13", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J6sd", segColor: "#534590" },
//   { segmentText: "10FDH40J6hj", segColor: "#6B5B95" },
// ]

// const spinCounts = [5, 10, 15, 20, 25]

// export default function SpinWheel() {
//   const [isSpinning, setIsSpinning] = useState(false)
//   const [rotation, setRotation] = useState(0)
//   const [selectedSpinCount, setSelectedSpinCount] = useState(10)
//   const [remainingSpins, setRemainingSpins] = useState(10)
//   const [winner, setWinner] = useState(null)
//   const [showWinnerModal, setShowWinnerModal] = useState(false)
//   const [spinHistory, setSpinHistory] = useState([])
//   const wheelRef = useRef(null)

//   const segmentAngle = 360 / segments.length

//   const handleSpin = () => {
//     if (isSpinning || remainingSpins <= 0) return

//     setIsSpinning(true)

//     // Generate random rotation (multiple full rotations + random segment)
//     const minRotation = 1440 // 4 full rotations
//     const maxRotation = 2160 // 6 full rotations
//     const randomRotation = Math.random() * (maxRotation - minRotation) + minRotation
//     const finalRotation = rotation + randomRotation

//     setRotation(finalRotation)

//     // Calculate winner after animation
//     setTimeout(() => {
//       const normalizedRotation = (360 - (finalRotation % 360)) % 360
//       const winnerIndex = Math.floor(normalizedRotation / segmentAngle)
//       const winnerSegment = segments[winnerIndex]

//       setWinner(winnerSegment.segmentText)
//       setSpinHistory((prev) => [...prev, winnerSegment.segmentText])
//       setRemainingSpins((prev) => prev - 1)
//       setShowWinnerModal(true)
//       setIsSpinning(false)
//     }, 3000)
//   }

//   const resetSpins = (count) => {
//     setSelectedSpinCount(count)
//     setRemainingSpins(count)
//     setSpinHistory([])
//   }

//   const closeWinnerModal = () => {
//     setShowWinnerModal(false)
//     setWinner(null)
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
//       <div className="max-w-2xl w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-2xl md:text-3xl font-bold mb-6">How Many Times Do You Want To Spin?</h1>

//           {/* Spin Count Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-4">
//             {spinCounts.map((count) => (
//               <button
//                 key={count}
//                 onClick={() => resetSpins(count)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                   selectedSpinCount === count
//                     ? "bg-purple-600 text-white"
//                     : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 {count} Spin
//               </button>
//             ))}
//             <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
//               <Settings className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Remaining Spins */}
//           <p className="text-lg text-gray-300">
//             Remaining Spins: <span className="font-bold text-purple-400">{remainingSpins}</span>
//           </p>
//         </div>

//         {/* Spin Wheel */}
//         <div className="relative flex justify-center">
//           <div className="relative">
//             {/* Wheel Container */}
//             <div
//               ref={wheelRef}
//               className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-[3000ms] ease-out"
//               style={{ transform: `rotate(${rotation}deg)` }}
//             >
//               {/* SVG Wheel */}
//               <svg width="100%" height="100%" viewBox="0 0 400 400" className="drop-shadow-2xl">
//                 {segments.map((segment, index) => {
//                   const startAngle = (index * segmentAngle - 90) * (Math.PI / 180)
//                   const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180)

//                   const x1 = 200 + 180 * Math.cos(startAngle)
//                   const y1 = 200 + 180 * Math.sin(startAngle)
//                   const x2 = 200 + 180 * Math.cos(endAngle)
//                   const y2 = 200 + 180 * Math.sin(endAngle)

//                   const largeArcFlag = segmentAngle > 180 ? 1 : 0

//                   const pathData = [
//                     `M 200 200`,
//                     `L ${x1} ${y1}`,
//                     `A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2}`,
//                     "Z",
//                   ].join(" ")

//                   const textAngle = index * segmentAngle + segmentAngle / 2 - 90
//                   const textRadius = 130
//                   const textX = 200 + textRadius * Math.cos(textAngle * (Math.PI / 180))
//                   const textY = 200 + textRadius * Math.sin(textAngle * (Math.PI / 180))

//                   return (
//                     <g key={index}>
//                       <path d={pathData} fill={segment.segColor} stroke="#ffffff" strokeWidth="2" />
//                       <text
//                         x={textX}
//                         y={textY}
//                         fill="white"
//                         fontSize="11"
//                         fontWeight="bold"
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                         transform={`rotate(${textAngle}, ${textX}, ${textY})`}
//                       >
//                         {segment.segmentText}
//                       </text>
//                     </g>
//                   )
//                 })}

//                 {/* Center Circle */}
//                 <circle cx="200" cy="200" r="40" fill="#1f2937" stroke="#ffffff" strokeWidth="3" />
//               </svg>
//             </div>

//             {/* Pointer */}
//             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
//               <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
//             </div>

//             {/* Spin Button */}
//             <button
//               onClick={handleSpin}
//               disabled={isSpinning || remainingSpins <= 0}
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                 w-20 h-20 rounded-full font-bold text-lg transition-all duration-200 ${
//                   isSpinning || remainingSpins <= 0
//                     ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                     : "bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 active:scale-95"
//                 }`}
//             >
//               {isSpinning ? "Spinning..." : "SPIN"}
//             </button>
//           </div>
//         </div>

//         {/* Spin History */}
//         {spinHistory.length > 0 && (
//           <div className="text-center">
//             <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               {spinHistory.slice(-5).map((result, index) => (
//                 <span key={index} className="px-3 py-1 bg-purple-600 rounded-full text-sm">
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Winner Modal */}
//       {showWinnerModal && winner && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md w-full text-center relative animate-pulse">
//             <button onClick={closeWinnerModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//               <X className="w-6 h-6" />
//             </button>

//             <div className="mb-6">
//               <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Trophy className="w-10 h-10 text-yellow-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-purple-600 mb-2">Congratulations!</h2>
//               <p className="text-gray-600 mb-4">You won:</p>
//               <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">
//                 <p className="text-2xl font-bold text-purple-700">{winner}</p>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={closeWinnerModal}
//                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//               >
//                 Continue Playing
//               </button>
//               <p className="text-sm text-gray-500">Spins remaining: {remainingSpins}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// import { useState, useRef, useEffect } from "react";
// import { Settings, Trophy, X } from "lucide-react";
// import { SpinWheel as SpinWheelGame } from "spin-wheel-game";

// const segments = [
//   {
//     segmentText: "10FDH40J6",
//     image: "/user2.png",
//     name: "John Doe",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J6",
//     image: "/user2.png",
//     name: "Smith",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J61",
//     image: "/user2.png",
//     name: "Harry",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J62",
//     image: "/user2.png",
//     name: "Doe",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J3",
//     image: "/user2.png",
//     name: "John",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J4",
//     image: "/user2.png",
//     name: "david",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J5",
//     image: "/user2.png",
//     name: "messi",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J6",
//     image: "/user2.png",
//     name: "ronaldo",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J7",
//     image: "/user2.png",
//     name: "cr7",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J8",
//     image: "/user2.png",
//     name: "neymar",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J9",
//     image: "/user2.png",
//     name: "kane",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J10",
//     image: "/user2.png",
//     name: "lukaku",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J1",
//     image: "/user2.png",
//     name: "degea",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J13",
//     image: "/user2.png",
//     name: "lampo",
//     segColor: "#6B5B95",
//   },
//   {
//     segmentText: "10FDH40J6sd",
//     image: "/user2.png",
//     name: "jamal",
//     segColor: "#534590",
//   },
//   {
//     segmentText: "10FDH40J6hj",
//     image: "/user2.png",
//     name: "mohamed",
//     segColor: "#6B5B95",
//   },
// ];

// const spinCounts = [5, 10, 15, 20, 25];

// export default function SpinWheel() {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [selectedSpinCount, setSelectedSpinCount] = useState(10);
//   const [remainingSpins, setRemainingSpins] = useState(10);
//   const [winner, setWinner] = useState(null);
//   const [showWinnerModal, setShowWinnerModal] = useState(false);
//   const [spinHistory, setSpinHistory] = useState([]);
//   const [isClient, setIsClient] = useState(false);

//   const spinSoundRef = useRef(null);
//   const winSoundRef = useRef(null);

//   useEffect(() => {
//     setIsClient(true);

//     // Create audio elements
//     if (typeof window !== "undefined") {
//       // Spin sound (using a simple tone generator)
//       const audioContext = new (window.AudioContext ||
//         window.webkitAudioContext)();

//       const createSpinSound = () => {
//         const oscillator = audioContext.createOscillator();
//         const gainNode = audioContext.createGain();

//         oscillator.connect(gainNode);
//         gainNode.connect(audioContext.destination);

//         oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
//         oscillator.frequency.exponentialRampToValueAtTime(
//           100,
//           audioContext.currentTime + 2
//         );

//         gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(
//           0.01,
//           audioContext.currentTime + 2
//         );

//         oscillator.start(audioContext.currentTime);
//         oscillator.stop(audioContext.currentTime + 2);
//       };

//       const createWinSound = () => {
//         const oscillator = audioContext.createOscillator();
//         const gainNode = audioContext.createGain();

//         oscillator.connect(gainNode);
//         gainNode.connect(audioContext.destination);

//         oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C5
//         oscillator.frequency.setValueAtTime(
//           659,
//           audioContext.currentTime + 0.2
//         ); // E5
//         oscillator.frequency.setValueAtTime(
//           784,
//           audioContext.currentTime + 0.4
//         ); // G5

//         gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(
//           0.01,
//           audioContext.currentTime + 0.6
//         );

//         oscillator.start(audioContext.currentTime);
//         oscillator.stop(audioContext.currentTime + 0.6);
//       };

//       spinSoundRef.current = { play: createSpinSound };
//       winSoundRef.current = { play: createWinSound };
//     }
//   }, []);

//   const playSpinSound = () => {
//     if (spinSoundRef.current) {
//       try {
//         spinSoundRef.current.play();
//       } catch (error) {
//         console.log("Could not play spin sound:", error);
//       }
//     }
//   };

//   const playWinSound = () => {
//     if (winSoundRef.current) {
//       try {
//         winSoundRef.current.play();
//       } catch (error) {
//         console.log("Could not play win sound:", error);
//       }
//     }
//   };

//   const handleSpinFinish = (result) => {
//     setWinner(result);
//     setSpinHistory((prev) => [...prev, result]);
//     setRemainingSpins((prev) => prev - 1);
//     setShowWinnerModal(true);
//     setIsSpinning(false);
//     playWinSound();
//   };

//   const handleSpinStart = () => {
//     if (remainingSpins <= 0) return;
//     setIsSpinning(true);
//     playSpinSound();
//   };

//   const resetSpins = (count) => {
//     setSelectedSpinCount(count);
//     setRemainingSpins(count);
//     setSpinHistory([]);
//   };

//   const closeWinnerModal = () => {
//     setShowWinnerModal(false);
//     setWinner(null);
//   };

//   const spinWheelProps = {
//     // segments,
//     // onFinished: handleSpinFinish,
//     // primaryColor: "#1f2937",
//     // contrastColor: "white",
//     // buttonText: isSpinning ? "Spinning..." : "SPIN",
//     // textColor: "white",
//     // isOnlyOnce: false,
//     // size: 320,
//     // upDuration: 100,
//     // // downDuration: 1000,
//     // fontFamily: "Arial",
//     // arrowLocation: "top" ,
//     // showTextOnSpin: true,
//     // isSpinSound: false, // We'll handle sound manually
//     segments,
//     onFinished: handleSpinFinish,
//     primaryColor: "black",
//     contrastColor: "white",
//     buttonText: "Spin",
//     textColor: "red",
//     isOnlyOnce: false,
//     size: 290,
//     upDuration: 100,
//     downDuration: 2000,
//     fontFamily: "Arial",
//     arrowLocation: "top",
//     showTextOnSpin: true,
//     isSpinSound: true,
//   };

//   if (!isClient) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//         <div className="text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="  text-white flex flex-col items-center justify-center p-4">
//       <div className="max-w-2xl w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-2xl md:text-[36px] font-semibold mb-6">
//             How many times do you want to spin?
//           </h1>

//           {/* Spin Count Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-4">
//             {spinCounts.map((count) => (
//               <button
//                 key={count}
//                 onClick={() => resetSpins(count)}
//                 className={`px-4 py-2 rounded-full font-medium transition-all ${
//                   selectedSpinCount === count
//                     ? "bg-purple-600 text-white"
//                     : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 {count} Spin
//               </button>
//             ))}

//             <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
//               <Settings className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Remaining Spins */}
//           <p className="text-lg text-gray-300">
//             Remaining Spins:{" "}
//             <span className="font-bold text-purple-400">{remainingSpins}</span>
//           </p>
//         </div>

//         {/* Spin Wheel */}
//         <div className="relative flex justify-center">
//           <div className="relative">
//             {/* Custom wrapper to handle spin start */}
//             <div
//               onClick={handleSpinStart}
//               className="cursor-pointer"
//               style={{
//                 pointerEvents:
//                   remainingSpins <= 0 || isSpinning ? "none" : "auto",
//               }}
//             >
//               <SpinWheelGame {...spinWheelProps} />
//             </div>

//             {/* Overlay for disabled state */}
//             {/* {(remainingSpins <= 0 || isSpinning) && (
//               <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">
//                   {remainingSpins <= 0 ? "No Spins Left" : "Spinning..."}
//                 </span>
//               </div>
//             )} */}
//           </div>
//         </div>

//         {/* Spin History */}
//         {spinHistory.length > 0 && (
//           <div className="text-center">
//             <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               {spinHistory.slice(-5).map((result, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-purple-600 rounded-full text-sm"
//                 >
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Winner Modal */}
//       {showWinnerModal && winner && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md w-full text-center relative ">
//             <button
//               onClick={closeWinnerModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             <div className="mb-6">
//               <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
//                 <Trophy className="w-10 h-10 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-purple-600 mb-2">
//                 🎉 Congratulations! 🎉
//               </h2>
//               <p className="text-gray-600 mb-4">You won:</p>
//               <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-300 rounded-lg p-4 shadow-lg">
//                 <p className="text-2xl font-bold text-purple-700">{winner}</p>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={closeWinnerModal}
//                 className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
//               >
//                 Continue Playing
//               </button>
//               <p className="text-sm text-gray-500">
//                 Spins remaining: {remainingSpins}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState, useRef, useEffect } from "react"
// import { Settings, X } from "lucide-react"
// import { SpinWheel as SpinWheelGame } from "spin-wheel-game"

// const segments = [
//   { segmentText: "10FDH40J6", image: "/user2.png", name: "John Doe", segColor: "#534590" },
//   { segmentText: "10FDH40J6", image: "/user2.png", name: "Smith", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J61", image: "/user2.png", name: "Harry", segColor: "#534590" },
//   { segmentText: "10FDH40J62", image: "/user2.png", name: "Doe", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J3", image: "/user2.png", name: "John", segColor: "#534590" },
//   { segmentText: "10FDH40J4", image: "/user2.png", name: "david", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J5", image: "/user2.png", name: "messi", segColor: "#534590" },
//   { segmentText: "10FDH40J6", image: "/user2.png", name: "ronaldo", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J7", image: "/user2.png", name: "cr7", segColor: "#534590" },
//   { segmentText: "10FDH40J8", image: "/user2.png", name: "neymar", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J9", image: "/user2.png", name: "kane", segColor: "#534590" },
//   { segmentText: "10FDH40J10", image: "/user2.png", name: "lukaku", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J1", image: "/user2.png", name: "degea", segColor: "#534590" },
//   { segmentText: "10FDH40J13", image: "/user2.png", name: "lampo", segColor: "#6B5B95" },
//   { segmentText: "10FDH40J6sd", image: "/user2.png", name: "jamal", segColor: "#534590" },
//   { segmentText: "10FDH40J6hj", image: "/user2.png", name: "mohamed", segColor: "#6B5B95" },
// ]

// const spinCounts = [5, 10, 15, 20, 25]

// export default function SpinWheel() {
//   const [isSpinning, setIsSpinning] = useState(false)
//   const [selectedSpinCount, setSelectedSpinCount] = useState(10)
//   const [remainingSpins, setRemainingSpins] = useState(10)
//   const [winner, setWinner] = useState(null)
//   const [showWinnerModal, setShowWinnerModal] = useState(false)
//   const [spinHistory, setSpinHistory] = useState([])
//   const [isClient, setIsClient] = useState(false)

//   const spinSoundRef = useRef(null)
//   const winSoundRef = useRef(null)

//   useEffect(() => {
//     setIsClient(true)

//     // Create audio elements
//     if (typeof window !== "undefined") {
//       // Spin sound (using a simple tone generator)
//       const audioContext = new (window.AudioContext || window.webkitAudioContext)()

//       const createSpinSound = () => {
//         const oscillator = audioContext.createOscillator()
//         const gainNode = audioContext.createGain()

//         oscillator.connect(gainNode)
//         gainNode.connect(audioContext.destination)

//         oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
//         oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 2)

//         gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
//         gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2)

//         oscillator.start(audioContext.currentTime)
//         oscillator.stop(audioContext.currentTime + 2)
//       }

//       const createWinSound = () => {
//         const oscillator = audioContext.createOscillator()
//         const gainNode = audioContext.createGain()

//         oscillator.connect(gainNode)
//         gainNode.connect(audioContext.destination)

//         oscillator.frequency.setValueAtTime(523, audioContext.currentTime) // C5
//         oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2) // E5
//         oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.4) // G5

//         gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
//         gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6)

//         oscillator.start(audioContext.currentTime)
//         oscillator.stop(audioContext.currentTime + 0.6)
//       }

//       spinSoundRef.current = { play: createSpinSound }
//       winSoundRef.current = { play: createWinSound }
//     }
//   }, [])

//   const playSpinSound = () => {
//     if (spinSoundRef.current) {
//       try {
//         spinSoundRef.current.play()
//       } catch (error) {
//         console.log("Could not play spin sound:", error)
//       }
//     }
//   }

//   const playWinSound = () => {
//     if (winSoundRef.current) {
//       try {
//         winSoundRef.current.play()
//       } catch (error) {
//         console.log("Could not play win sound:", error)
//       }
//     }
//   }

//   const handleSpinFinish = (result) => {
//     // Find the winner data from segments
//     const winnerData = segments.find((segment) => segment.segmentText === result)
//     setWinner(winnerData || { segmentText: result, name: "Unknown", image: "/user2.png" })
//     setSpinHistory((prev) => [...prev, result])
//     setRemainingSpins((prev) => prev - 1)
//     setShowWinnerModal(true)
//     setIsSpinning(false)
//     playWinSound()
//   }

//   const handleSpinStart = () => {
//     if (remainingSpins <= 0) return
//     setIsSpinning(true)
//     playSpinSound()
//   }

//   const resetSpins = (count) => {
//     setSelectedSpinCount(count)
//     setRemainingSpins(count)
//     setSpinHistory([])
//   }

//   const closeWinnerModal = () => {
//     setShowWinnerModal(false)
//     setWinner(null)
//   }

//   // Get recent winners for the modal display
//   const getRecentWinners = () => {
//     const recentSpins = spinHistory.slice(-5)
//     return recentSpins.map((spin) => {
//       const winnerData = segments.find((segment) => segment.segmentText === spin)
//       return winnerData || { segmentText: spin, name: "Unknown", image: "/user2.png" }
//     })
//   }

//   const spinWheelProps = {
//     segments,
//     onFinished: handleSpinFinish,
//     primaryColor: "black",
//     contrastColor: "white",
//     buttonText: "Spin",
//     textColor: "red",
//     isOnlyOnce: false,
//     size: 290,
//     upDuration: 100,
//     downDuration: 2000,
//     fontFamily: "Arial",
//     arrowLocation: "top",
//     showTextOnSpin: true,
//     isSpinSound: true,
//   }

//   if (!isClient) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//         <div className="text-xl">Loading...</div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen  text-white flex flex-col items-center justify-center p-4">
//       <div className="max-w-2xl w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-2xl md:text-[36px] font-semibold mb-6">How many times do you want to spin?</h1>

//           {/* Spin Count Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-4">
//             {spinCounts.map((count) => (
//               <button
//                 key={count}
//                 onClick={() => resetSpins(count)}
//                 className={`px-4 py-2 rounded-full font-medium transition-all ${
//                   selectedSpinCount === count
//                     ? "bg-purple-600 text-white"
//                     : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 {count} Spin
//               </button>
//             ))}

//             <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
//               <Settings className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Remaining Spins */}
//           <p className="text-lg text-gray-300">
//             Remaining Spins: <span className="font-bold text-purple-400">{remainingSpins}</span>
//           </p>
//         </div>

//         {/* Spin Wheel */}
//         <div className="relative flex justify-center">
//           <div className="relative">
//             {/* Custom wrapper to handle spin start */}
//             <div
//               onClick={handleSpinStart}
//               className="cursor-pointer"
//               style={{
//                 pointerEvents: remainingSpins <= 0 || isSpinning ? "none" : "auto",
//               }}
//             >
//               <SpinWheelGame {...spinWheelProps} />
//             </div>
//           </div>
//         </div>

//         {/* Spin History */}
//         {spinHistory.length > 0 && (
//           <div className="text-center">
//             <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               {spinHistory.slice(-5).map((result, index) => (
//                 <span key={index} className="px-3 py-1 bg-purple-600 rounded-full text-sm">
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Giveaway Winner Modal */}
//       {showWinnerModal && winner && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 overflow-hidden">
//             {/* Background confetti pattern */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-4 left-8 w-8 h-12 bg-yellow-400 transform rotate-45 rounded-sm"></div>
//               <div className="absolute top-12 right-12 w-6 h-10 bg-yellow-500 transform -rotate-12 rounded-sm"></div>
//               <div className="absolute top-20 left-4 w-4 h-8 bg-yellow-300 transform rotate-75 rounded-sm"></div>
//               <div className="absolute bottom-16 right-8 w-6 h-10 bg-yellow-400 transform rotate-12 rounded-sm"></div>
//               <div className="absolute bottom-8 left-12 w-5 h-8 bg-yellow-500 transform -rotate-45 rounded-sm"></div>
//               <div className="absolute top-32 right-4 w-4 h-6 bg-yellow-300 transform rotate-90 rounded-sm"></div>
//               <div className="absolute bottom-32 left-8 w-3 h-6 bg-yellow-400 transform -rotate-30 rounded-sm"></div>
//             </div>

//             {/* Close button */}
//             <button
//               onClick={closeWinnerModal}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* Content */}
//             <div className="relative z-10 text-center">
//               {/* Main heading */}
//               <h1 className="text-white text-3xl font-bold mb-4">Spin Winner!</h1>

//               {/* Congratulations text */}
//               <div className="mb-2">
//                 <span className="text-2xl">🎉</span>
//                 <span className="text-white text-lg font-semibold mx-2">Congratulations!</span>
//                 <span className="text-2xl">🎉</span>
//               </div>

//               {/* Current Winner Display */}
//               <div className="mb-6">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 mb-4 mx-auto overflow-hidden flex items-center justify-center">
//                   <img
//                     src={winner.image || "/placeholder.svg?height=80&width=80"}
//                     alt="Winner profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <p className="text-white text-xl font-bold mb-1">{winner.name}</p>
//                 <p className="text-purple-400 text-lg font-semibold">Ticket: {winner.segmentText}</p>
//               </div>

//               {/* Recent Winners Grid */}
//               {getRecentWinners().length > 0 && (
//                 <>
//                   <p className="text-gray-300 text-sm mb-4">Recent Winners</p>
//                   <div className="space-y-4">
//                     {/* Display recent winners in rows */}
//                     <div className="flex justify-center space-x-6">
//                       {getRecentWinners()
//                         .slice(0, 3)
//                         .map((recentWinner, index) => (
//                           <div key={index} className="text-center">
//                             <div className="w-10 h-10 rounded-full bg-purple-600 mb-1 mx-auto overflow-hidden">
//                               <img
//                                 src={recentWinner.image || "/placeholder.svg?height=40&width=40"}
//                                 alt="Recent winner"
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <p className="text-white text-xs font-medium">{recentWinner.name}</p>
//                             <p className="text-gray-400 text-xs">{recentWinner.segmentText}</p>
//                           </div>
//                         ))}
//                     </div>

//                     {getRecentWinners().length > 3 && (
//                       <div className="flex justify-center space-x-12">
//                         {getRecentWinners()
//                           .slice(3, 5)
//                           .map((recentWinner, index) => (
//                             <div key={index + 3} className="text-center">
//                               <div className="w-10 h-10 rounded-full bg-purple-600 mb-1 mx-auto overflow-hidden">
//                                 <img
//                                   src={recentWinner.image || "/placeholder.svg?height=40&width=40"}
//                                   alt="Recent winner"
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <p className="text-white text-xs font-medium">{recentWinner.name}</p>
//                               <p className="text-gray-400 text-xs">{recentWinner.segmentText}</p>
//                             </div>
//                           ))}
//                       </div>
//                     )}
//                   </div>
//                 </>
//               )}

//               {/* Continue Button */}
//               <div className="mt-6">
//                 <button
//                   onClick={closeWinnerModal}
//                   className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
//                 >
//                   Continue Playing
//                 </button>
//                 <p className="text-sm text-gray-400 mt-2">Spins remaining: {remainingSpins}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { SpinWheel as SpinWheelGame } from "spin-wheel-game";

const segments = [
  { segmentText: "10FDH40J6", image: "/user2.png", name: "John Doe", segColor: "#534590" },
  { segmentText: "10FDH40J6", image: "/user2.png", name: "Smith", segColor: "#6B5B95" },
  { segmentText: "10FDH40J61", image: "/user2.png", name: "Harry", segColor: "#534590" },
  { segmentText: "10FDH40J62", image: "/user2.png", name: "Doe", segColor: "#6B5B95" },
  { segmentText: "10FDH40J3", image: "/user2.png", name: "John", segColor: "#534590" },
  { segmentText: "10FDH40J4", image: "/user2.png", name: "david", segColor: "#6B5B95" },
  { segmentText: "10FDH40J5", image: "/user2.png", name: "messi", segColor: "#534590" },
  { segmentText: "10FDH40J6", image: "/user2.png", name: "ronaldo", segColor: "#6B5B95" },
  { segmentText: "10FDH40J7", image: "/user2.png", name: "cr7", segColor: "#534590" },
  { segmentText: "10FDH40J8", image: "/user2.png", name: "neymar", segColor: "#6B5B95" },
  { segmentText: "10FDH40J9", image: "/user2.png", name: "kane", segColor: "#534590" },
  { segmentText: "10FDH40J10", image: "/user2.png", name: "lukaku", segColor: "#6B5B95" },
  { segmentText: "10FDH40J1", image: "/user2.png", name: "degea", segColor: "#534590" },
  { segmentText: "10FDH40J13", image: "/user2.png", name: "lampo", segColor: "#6B5B95" },
  { segmentText: "10FDH40J6sd", image: "/user2.png", name: "jamal", segColor: "#534590" },
  { segmentText: "10FDH40J6hj", image: "/user2.png", name: "mohamed", segColor: "#6B5B95" },
];


export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [remainingSpins, setRemainingSpins] = useState(10);
  const [winner, setWinner] = useState(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [spinHistory, setSpinHistory] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const spinSoundRef = useRef(null);
  const winSoundRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      const createSpinSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 2);

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 2);
      };

      const createWinSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.4);

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
      };

      spinSoundRef.current = { play: createSpinSound };
      winSoundRef.current = { play: createWinSound };
    }
  }, []);

  const playSpinSound = () => {
    if (spinSoundRef.current) {
      try {
        spinSoundRef.current.play();
      } catch (error) {
        console.log("Could not play spin sound:", error);
      }
    }
  };

  const playWinSound = () => {
    if (winSoundRef.current) {
      try {
        winSoundRef.current.play();
      } catch (error) {
        console.log("Could not play win sound:", error);
      }
    }
  };

  const handleSpinFinish = (result) => {
    const winnerData = segments.find((segment) => segment.segmentText === result);
    setWinner(winnerData || { segmentText: result, name: "Unknown", image: "/user2.png" });
    setSpinHistory((prev) => [...prev, result]);
    setRemainingSpins((prev) => prev - 1);
    setShowWinnerModal(true);
    setIsSpinning(false);
    playWinSound();
  };

  const handleSpinStart = () => {
    if (remainingSpins <= 0) return;
    setIsSpinning(true);
    playSpinSound();
  };

  const closeWinnerModal = () => {
    setShowWinnerModal(false);
    setWinner(null);
  };

  const getRecentWinners = () => {
    const recentSpins = spinHistory.slice(-5);
    return recentSpins.map((spin) => {
      const winnerData = segments.find((segment) => segment.segmentText === spin);
      return winnerData || { segmentText: spin, name: "Unknown", image: "/user2.png" };
    });
  };

  // New function to calculate leaderboard
  const getLeaderboard = () => {
    const winnerCounts = {};
    spinHistory.forEach((spin) => {
      const winnerData = segments.find((segment) => segment.segmentText === spin);
      const name = winnerData ? winnerData.name : "Unknown";
      winnerCounts[name] = (winnerCounts[name] || 0) + 1;
    });

    const leaderboard = Object.entries(winnerCounts)
      .map(([name, count]) => {
        const winnerData = segments.find((segment) => segment.name === name);
        return {
          name,
          count,
          image: winnerData ? winnerData.image : "/user2.png",
        };
      })
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
      .slice(0, 5);

    return leaderboard;
  };

  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: "Spin",
    textColor: "red",
    isOnlyOnce: false,
    size: 290,
    upDuration: 100,
    downDuration: 2000,
    fontFamily: "Arial",
    arrowLocation: "top",
    showTextOnSpin: true,
    isSpinSound: true,
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-[36px] font-semibold mb-6">How many times do you want to spin?</h1>
        </div>

        {/* Spin Wheel */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div
              onClick={handleSpinStart}
              className="cursor-pointer"
              style={{
                pointerEvents: remainingSpins <= 0 || isSpinning ? "none" : "auto",
              }}
            >
              <SpinWheelGame {...spinWheelProps} />
            </div>
          </div>
        </div>

        {/* Spin History */}
        {spinHistory.length > 0 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Recent Results</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {spinHistory.slice(-5).map((result, index) => (
                <span key={index} className="px-3 py-1 bg-purple-600 rounded-full text-sm">
                  {result}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Leaderboard */}
        {spinHistory.length > 0 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Leaderboard</h3>
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {getLeaderboard().map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 font-bold">{index + 1}.</span>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={entry.image || "/placeholder.svg?height=32&width=32"}
                        alt={entry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white font-medium">{entry.name}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{entry.count} wins</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Giveaway Winner Modal */}
      {showWinnerModal && winner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-8 w-8 h-12 bg-yellow-400 transform rotate-45 rounded-sm"></div>
              <div className="absolute top-12 right-12 w-6 h-10 bg-yellow-500 transform -rotate-12 rounded-sm"></div>
              <div className="absolute top-20 left-4 w-4 h-8 bg-yellow-300 transform rotate-75 rounded-sm"></div>
              <div className="absolute bottom-16 right-8 w-6 h-10 bg-yellow-400 transform rotate-12 rounded-sm"></div>
              <div className="absolute bottom-8 left-12 w-5 h-8 bg-yellow-500 transform -rotate-45 rounded-sm"></div>
              <div className="absolute top-32 right-4 w-4 h-6 bg-yellow-300 transform rotate-90 rounded-sm"></div>
              <div className="absolute bottom-32 left-8 w-3 h-6 bg-yellow-400 transform -rotate-30 rounded-sm"></div>
            </div>

            <button
              onClick={closeWinnerModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <h1 className="text-white text-3xl font-bold mb-4">Spin Winner!</h1>
              <div className="mb-2">
                <span className="text-2xl">🎉</span>
                <span className="text-white text-lg font-semibold mx-2">Congratulations!</span>
                <span className="text-2xl">🎉</span>
              </div>
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 mb-4 mx-auto overflow-hidden flex items-center justify-center">
                  <img
                    src={winner.image || "/placeholder.svg?height=80&width=80"}
                    alt="Winner profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xl font-bold mb-1">{winner.name}</p>
                <p className="text-purple-400 text-lg font-semibold">Ticket: {winner.segmentText}</p>
              </div>
              {getRecentWinners().length > 0 && (
                <>
                  <p className="text-gray-300 text-sm mb-4">Recent Winners</p>
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-6">
                      {getRecentWinners()
                        .slice(0, 3)
                        .map((recentWinner, index) => (
                          <div key={index} className="text-center">
                            <div className="w-10 h-10 rounded-full bg-purple-600 mb-1 mx-auto overflow-hidden">
                              <img
                                src={recentWinner.image || "/placeholder.svg?height=40&width=40"}
                                alt="Recent winner"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-white text-xs font-medium">{recentWinner.name}</p>
                            <p className="text-gray-400 text-xs">{recentWinner.segmentText}</p>
                          </div>
                        ))}
                    </div>
                    {getRecentWinners().length > 3 && (
                      <div className="flex justify-center space-x-12">
                        {getRecentWinners()
                          .slice(3, 5)
                          .map((recentWinner, index) => (
                            <div key={index + 3} className="text-center">
                              <div className="w-10 h-10 rounded-full bg-purple-600 mb-1 mx-auto overflow-hidden">
                                <img
                                  src={recentWinner.image || "/placeholder.svg?height=40&width=40"}
                                  alt="Recent winner"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-white text-xs font-medium">{recentWinner.name}</p>
                              <p className="text-gray-400 text-xs">{recentWinner.segmentText}</p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </>
              )}
              <div className="mt-6">
                <button
                  onClick={closeWinnerModal}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Continue Playing
                </button>
                <p className="text-sm text-gray-400 mt-2">Spins remaining: {remainingSpins}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}