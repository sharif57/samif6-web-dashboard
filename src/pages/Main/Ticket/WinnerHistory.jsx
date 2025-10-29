import { useState } from 'react';
import { useAllWinnerHistoryQuery } from '../../../redux/features/ticketSlice';

export default function WinnerHistory() {
  const { data, isLoading, isError } = useAllWinnerHistoryQuery();
  console.log(data, 'winners');
  const [selectedWinner, setSelectedWinner] = useState(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (isError) return <div className="text-center py-4 text-red-500">Error loading winners</div>;

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">All Winner History</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-200">
          <thead className="bg-[#534590]">
            <tr>
              <th className="py-2 px-4 border-b text-left">Position</th>
              <th className="py-2 px-4 border-b text-left">Full Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Ticket ID</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((winner) => (
              <tr key={winner.id} className="hover:bg-[#534590]">
                <td className="py-2 px-4 border-b">{winner.position}</td>
                <td className="py-2 px-4 border-b">{winner.full_name}</td>
                <td className="py-2 px-4 border-b">{winner.email}</td>
                <td className="py-2 px-4 border-b">{winner.winning_ticket_id}</td>
                <td className="py-2 px-4 border-b">{formatDate(winner.created_at)}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => setSelectedWinner(winner)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedWinner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#534590] p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Winner Details</h2>
            <div className="space-y-2">
              <p><strong>Position:</strong> {selectedWinner.position}</p>
              <p><strong>Name:</strong> {selectedWinner.full_name}</p>
              <p><strong>Email:</strong> {selectedWinner.email}</p>
-scroll
              <p><strong>Ticket ID:</strong> {selectedWinner.winning_ticket_id}</p>
              <p><strong>Giveaway ID:</strong> {selectedWinner.giveaway}</p>
              <p><strong>Created:</strong> {formatDate(selectedWinner.created_at)}</p>
              <p><strong>Archived:</strong> {formatDate(selectedWinner.archived_at)}</p>
            </div>
            <button
              onClick={() => setSelectedWinner(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}