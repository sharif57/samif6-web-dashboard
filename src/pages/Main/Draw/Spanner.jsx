// import { useRef, useState } from 'react';
// import SpinAndWin from 'react-spin-game';
// import 'react-spin-game/dist/index.css';
// import { useCollectTicketQuery, useGiveWayIdQuery, useSpinDrawMutation } from '../../../redux/features/ticketSlice';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';

// const generateColors = (count) => {
//   const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#534590', '#9B59B6', '#3498DB'];
//   return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
// };  

// const Spanner = () => {
//   const router = useNavigate()
//   const [winner, setWinner] = useState(null);
//   // const { data, isLoading, isError } = useSpinTicketQuery();
//   const {data: giveWayId, isLoading, isError} = useGiveWayIdQuery()
//   console.log(giveWayId, 'give way id')
//   const {data: collectTicket} = useCollectTicketQuery()
//   console.log(collectTicket, 'collect ticket')
//   const spinRef = useRef(null);
//   const [spinDraw] = useSpinDrawMutation();

//   const handleDraw = async () => {
//     try {
//       const res = await spinDraw({
//         giveaway_id: giveWayId?.ticket?.id,
//         winners_count: winner
//       }).unwrap();
//       console.log(res, 'spin draw');
//       toast.success(res?.message || 'Spin successful');
//       router('/spanner/winner-list')
      
      
//     } catch (error) {
//       console.error('Error spinning draw:', error);
//       toast.error(error?.data?.message || 'Failed to spin draw');
//     }
//   };

//   const handleSpinClick = async () => {
//     if (!winner) {
//       alert('Please enter a winner count first');
//       return;
//     }
    
//     try {
//       const drawResult = await handleDraw();
//       console.log(drawResult, 'draw result');
      
//       if (spinRef.current) {
//         spinRef.current.handleSpin();
//       }
//     } catch (error) {
//       console.error('Error during spin process:', error);
//     }
//   };

//   const tickets = collectTicket?.spin_eligible_tickets || [];
//   const colors = generateColors(tickets.length);
//   const freeSpinGifts = tickets.map((ticket, index) => [ticket, colors[index]]);

//   if (isLoading) return <div className='text-white text-center'>Loading...</div>;
//   // if (isError || !tickets?.length) return <div className='text-white text-center'>No tickets available.</div>;

//   return (
//   <div>
//   <Link to={'/spanner/winner-list'} className='flex justify-end'>
//   <button className='text-white bg-[#534590] px-8 rounded-lg py-3 hover:text-gray-300 transition-colors'>Winner List</button>
//   </Link>
//     <div className='flex flex-col items-center gap-4'>
      
//       <input 
//         type="number" 
//         value={winner || ''} 
//         onChange={(e) => setWinner(Number(e.target.value))} 
//         placeholder='Enter winner count' 
//         className='border w-1/3 border-red-500 mx-auto py-2 px-4 rounded-lg text-white bg-black mb-4'  
//       />

      
//     <button onClick={handleSpinClick}>
//         <SpinAndWin 
//         ref={spinRef}
//         data={freeSpinGifts}
//         // onSpin={handleSpinClick} 
//       />
//     </button>
      
//       {/* <button 
//         onClick={handleSpinClick}
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Start Spin
//       </button> */}
//     </div>
//     </div>
//   );
// };

// export default Spanner;



// import { useState } from "react"
// import { useCollectTicketQuery, useGiveWayIdQuery, useSpinDrawMutation } from "../../../redux/features/ticketSlice"
// import { useNavigate } from "react-router-dom"
// import toast from "react-hot-toast"



// export default function Spanner() {
//   const [winnerCount, setWinnerCount] = useState(1)
//   const [isLoading, setIsLoading] = useState(false)
//   const [selectedWinners, setSelectedWinners] = useState([])
//   const [showResults, setShowResults] = useState(false)
//   const router = useNavigate()

//   // Replace these with your actual API hooks
//   const { data: giveWayId } = useGiveWayIdQuery()
//   const { data: collectTicket , isLoading: collectTicketLoading} = useCollectTicketQuery()
//   console.log(collectTicket?.spin_eligible_tickets, 'collect ticket')
//   const [spinDraw] = useSpinDrawMutation()

//   const tickets = collectTicket?.spin_eligible_tickets // Replace with: collectTicket?.spin_eligible_tickets || []

//   const handleDraw = async () => {
//     if (!winnerCount || winnerCount <= 0) {
//       alert("Please enter a valid winner count")
//       return
//     }

//     if (winnerCount > tickets.length) {
//       alert(`Winner count cannot exceed total tickets (${tickets.length})`)
//       return
//     }

//     setIsLoading(true)

//     try {
//       // Replace with your actual API call
//       const res = await spinDraw({
//         giveaway_id: giveWayId?.ticket?.id,
//         winners_count: winnerCount
//       }).unwrap()

//       console.log(res, 'spin draw')
//       toast.success(res?.message || 'Spin successful')

//       // Mock API call
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//       // Simulate random winner selection
//       const shuffled = [...tickets].sort(() => 0.5 - Math.random())
//       const winners = shuffled.slice(0, winnerCount)
//       setSelectedWinners(winners)
//       setShowResults(true)

//       // alert("Winners selected successfully!")

//       // Navigate to winner list
//       router('/spanner/winner-list')
//     } catch (error) {
//       console.error("Error selecting winners:", error)
//       toast.error(error?.message ||"Failed to select winners")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleWinnerList = () => {
//     // Navigate to winner list
//     router('/spanner/winner-list')
//     console.log("Navigate to winner list")
//   }

//   const resetSelection = () => {
//     setSelectedWinners([])
//     setShowResults(false)
//     setWinnerCount(1)
//   }

//   if(collectTicketLoading){
//     return <div className='text-white text-center'>Loading...</div>
//   }

//   return (
//     <div className="min-h-screen  p-4">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <button onClick={() => router(-1)} className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back
//           </button>

//           <button
//             onClick={handleWinnerList}
//             className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//               />
//             </svg>
//             Winner List
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="bg-[#534590] rounded-2xl shadow-xl p-8">
//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🎉 Winner Selection</h1>
//             <p className="text-lg text-white">Select random winners from your participant list</p>
//           </div>

//           {!showResults ? (
//             <>
//               {/* Stats Cards */}
//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
//                   <div className="text-3xl font-bold mb-2">{tickets?.length}</div>
//                   <div className="text-blue-100">Total Participants</div>
//                 </div>
//                 <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
//                   <div className="text-3xl font-bold mb-2">{winnerCount}</div>
//                   <div className="text-green-100">Winners to Select</div>
//                 </div>
           
//               </div>

//               {/* Controls */}
//               <div className="max-w-md mx-auto mb-8">
//                 <label className="block text-white font-semibold mb-3 text-lg">Number of Winners</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max={tickets?.length}
//                   value={winnerCount}
//                   onChange={(e) => setWinnerCount(Number(e.target.value))}
//                   className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
//                   placeholder="Enter number of winners"
//                 />
//               </div>

//               {/* Draw Button */}
//               <div className="text-center">
//                 <button
//                   onClick={handleDraw}
//                   disabled={isLoading || tickets?.length === 0}
//                   className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center gap-3">
//                       <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Selecting Winners...
//                     </div>
//                   ) : (
//                     <div className="flex items-center gap-3">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 10V3L4 14h7v7l9-11h-7z"
//                         />
//                       </svg>
//                       Select Winners
//                     </div>
//                   )}
//                 </button>
//               </div>

// {/* ['C5CBFC3B347B', '3043A9A9C5AD'] 'collect ticket' */}
//               {/* Participants List */}
//               <div className="mt-12">
//                 <h3 className="text-2xl font-bold text-white mb-6 text-center">Participants ({tickets?.length})</h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
//                   {tickets?.map((ticket, index) => (
//                     <div
//                       key={ticket.id}
//                       className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <div className="font-semibold text-gray-800">{ticket}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </>
//           ) : (
//             /* Results Section */
//             <div className="text-center">
//               <div className="mb-8">
//                 <div className="text-6xl mb-4">🏆</div>
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Congratulations Winners!</h2>
//                 <p className="text-lg text-gray-600">
//                   {selectedWinners?.length} winner{selectedWinners?.length > 1 ? "s" : ""} selected from {tickets?.length}{" "}
//                   participants
//                 </p>
//               </div>

//               {/* Winners List */}
//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 {selectedWinners.map((winner, index) => (
//                   <div
//                     key={winner.id}
//                     className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg"
//                   >
//                     <div className="text-2xl font-bold mb-2">🥇 Winner #{index + 1}</div>
//                     <div className="text-xl font-semibold">{winner.name}</div>
//                     <div className="text-yellow-100">{winner.email}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={resetSelection}
//                   className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
//                 >
//                   Select Again
//                 </button>
//                 <button
//                   onClick={handleWinnerList}
//                   className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
//                 >
//                   View All Winners
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// import React from 'react'

// export default function Spanner() {
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   )
// }

import { useState } from "react";
import { TicketIcon
 } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Spanner() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useNavigate();

  const handleCollectTicket = async () => {
    // Show confirmation dialog using SweetAlert2
    const result = await Swal.fire({
      title: "Confirm Collection?",
      text: "Are you sure you want to collect your ticket?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50", // Green for confirm
      cancelButtonColor: "#F44336", // Red for cancel
      confirmButtonText: "Yes, collect it!",
      cancelButtonText: "No, cancel",
      customClass: {
        popup: "rounded-lg shadow-xl",
        title: "text-2xl font-bold",
        confirmButton: "px-6 py-2 text-lg",
        cancelButton: "px-6 py-2 text-lg",
      },
    });

    if (result.isConfirmed) {
      setIsLoading(true);

      try {
        // Simulate an API call to collect the ticket
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success message
        await Swal.fire({
          title: "Success!",
          text: "Your ticket has been successfully collected. Check your email for details.",
          icon: "success",
          confirmButtonColor: "#4CAF50",
          customClass: {
            popup: "rounded-lg shadow-xl",
            title: "text-2xl font-bold",
            confirmButton: "px-6 py-2 text-lg",
          },
        });

        // Redirect to /spanner/collect-ticket
        router("/spanner/collect-ticket");
      } catch (error) {
        // Show error message for unexpected issues
        await Swal.fire({
          title: "Error!",
          text: "An error occurred while collecting the ticket. Please try again later.",
          icon: "error",
          confirmButtonColor: "#F44336",
          customClass: {
            popup: "rounded-lg shadow-xl",
            title: "text-2xl font-bold",
            confirmButton: "px-6 py-2 text-lg",
          },
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-4">
      <div className="w-full max-w-md rounded-xl shadow-2xl border-none dark:bg-gray-800/70 backdrop-blur-md">
        <div className="text-center space-y-4 pt-8">
          <div className="flex justify-center">
            <TicketIcon className="h-16 w-16 text-blue-500 animate-bounce-in" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">All User Collect Ticket</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click below to instantly access your event pass.
          </p>
        </div>

        <div className="flex justify-center pb-8 px-6 mt-10" >
          <button
            onClick={handleCollectTicket}
            className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Collect My Ticket"}
          </button>
        </div>
      </div>
    </div>
  );
}