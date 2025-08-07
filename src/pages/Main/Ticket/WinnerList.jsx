import { useWinnerListQuery } from "../../../redux/features/ticketSlice";

export default function WinnerList() {
  const { data, isLoading } = useWinnerListQuery();
  console.log(data, 'winner list');

  if(isLoading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Winner List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-white bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Full Name</th>
              <th className="px-6 py-4">Winning Ticket ID</th>
              <th className="px-6 py-4">Position</th>
              <th className="px-6 py-4">Giveaway</th>
              <th className="px-6 py-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
                } hover:bg-gray-600 transition-colors duration-200`}
              >
                <td className="px-6 py-4">{item.user}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.full_name}</td>
                <td className="px-6 py-4 font-mono">{item.winning_ticket_id}</td>
                <td className="px-6 py-4">{item.position}</td>
                <td className="px-6 py-4">{item.giveaway}</td>
                <td className="px-6 py-4">
                  {new Date(item.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}