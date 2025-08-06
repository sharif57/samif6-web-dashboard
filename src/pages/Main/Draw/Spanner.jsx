import { useRef, useState } from 'react';
import SpinAndWin from 'react-spin-game';
import 'react-spin-game/dist/index.css';
import { useCollectTicketQuery, useGiveWayIdQuery, useSpinDrawMutation } from '../../../redux/features/ticketSlice';
import toast from 'react-hot-toast';

const generateColors = (count) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#534590', '#9B59B6', '#3498DB'];
  return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
};  

const Spanner = () => {
  const [winner, setWinner] = useState(null);
  // const { data, isLoading, isError } = useSpinTicketQuery();
  const {data: giveWayId, isLoading, isError} = useGiveWayIdQuery()
  const {data: collectTicket} = useCollectTicketQuery()
  console.log(collectTicket, 'collect ticket')
  const spinRef = useRef(null);
  const [spinDraw] = useSpinDrawMutation();

  const handleDraw = async () => {
    try {
      const res = await spinDraw({
        giveaway_id: giveWayId?.ticket?.id,
        winners_count: winner
      }).unwrap();
      console.log(res, 'spin draw');
      toast.success(res?.message || 'Spin successful');
      
      
    } catch (error) {
      console.error('Error spinning draw:', error);
      toast.error(error?.data?.message || 'Failed to spin draw');
    }
  };

  const handleSpinClick = async () => {
    if (!winner) {
      alert('Please enter a winner count first');
      return;
    }
    
    try {
      const drawResult = await handleDraw();
      console.log(drawResult, 'draw result');
      
      if (spinRef.current) {
        spinRef.current.handleSpin();
      }
    } catch (error) {
      console.error('Error during spin process:', error);
    }
  };

  const tickets = collectTicket?.spin_eligible_tickets || [];
  const colors = generateColors(tickets.length);
  const freeSpinGifts = tickets.map((ticket, index) => [ticket, colors[index]]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !tickets?.length) return <div className='text-white text-center'>No tickets available.</div>;

  return (
    <div className='flex flex-col items-center gap-4'>
      
      <input 
        type="number" 
        value={winner || ''} 
        onChange={(e) => setWinner(Number(e.target.value))} 
        placeholder='Enter winner count' 
        className='border w-1/3 border-red-500 mx-auto py-2 px-4 rounded-lg text-white bg-black mb-4'  
      />

      
    <button onClick={handleSpinClick}>
        <SpinAndWin 
        ref={spinRef}
        data={freeSpinGifts}
        onSpin={handleSpinClick} // If the component supports this prop
        // onSpinEnd={(winner) => console.log('Winner:', winner)} // If you need to handle the end of spin
      />
    </button>
      
      {/* <button 
        onClick={handleSpinClick}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Spin
      </button> */}
    </div>
  );
};

export default Spanner;