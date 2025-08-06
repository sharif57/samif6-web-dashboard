import { useState } from "react";
import { useCreateCreateMutation, useGivewayTicketQuery } from "../../../redux/features/ticketSlice";
import toast from "react-hot-toast";

export default function TicketCreate() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [expiresAt, setExpiresAt] = useState("");
    const [description, setDescription] = useState("");

    const [createCreate] = useCreateCreateMutation();
    const { data, refetch } = useGivewayTicketQuery();
    const tickets = data?.ticket ? [data.ticket] : [];

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await createCreate({
                title,
                price: Number(price),
                total_available: Number(quantity),
                ticket_expiry_date: expiresAt,
                description
            }).unwrap();
            toast.success("Ticket created successfully!");
            // Clear form
            setTitle("");
            setPrice("");
            setQuantity("");
            setExpiresAt("");
            setDescription("");
            // Refresh ticket data
            refetch();
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to create ticket");
        }
    };

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>
            <form onSubmit={handleCreate} className="mb-10 max-w-5xl mx-auto ">
                <div className="flex flex-col gap-4">
                    <input 
                        className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        placeholder="Ticket title" 
                        required
                    />
                    <input 
                        className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        type="number" 
                        placeholder="Ticket price" 
                        min="0"
                        step="0.01"
                        required
                    />
                    <input 
                        className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        type="number" 
                        placeholder="Total available tickets" 
                        min="1"
                        required
                    />
                    <input 
                        className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        value={expiresAt} 
                        onChange={(e) => setExpiresAt(e.target.value)} 
                        type="date" 
                        placeholder="Ticket Expires date" 
                        required
                    />
                    <textarea 
                        className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Ticket description" 
                        required
                    />
                </div>

                <button 
                    className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-white rounded-md transition-colors font-medium mt-4"
                    type="submit"
                >
                    Create Ticket
                </button>    
            </form>

            <h2 className="text-2xl text-white font-bold mb-4">Existing Tickets</h2>
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires At</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.ticket_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{ticket.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ticket.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.total_available}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(ticket.ticket_expiry_date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {ticket.is_available ? 'Available' : 'Expired'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {tickets.length === 0 && (
                            <tr>
                                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                                    No tickets found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}