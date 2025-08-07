// import { useState } from "react";
// import { useCreateCreateMutation, useGivewayTicketQuery, useUpdateTicketMutation } from "../../../redux/features/ticketSlice";
// import toast from "react-hot-toast";
// import { SquarePen, X } from "lucide-react";

// export default function TicketCreate() {
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [expiresAt, setExpiresAt] = useState("");
//     const [description, setDescription] = useState("");

//     // edit modal state
//     const [editModal, setEditModal] = useState(false);

//     const [createCreate] = useCreateCreateMutation();
//     const { data, refetch } = useGivewayTicketQuery();
//     const tickets = data?.ticket ? [data.ticket] : [];

//     const [updateTicket] =useUpdateTicketMutation();

//     const handleCreate = async (e) => {
//         e.preventDefault();
//         try {
//             await createCreate({
//                 title,
//                 price: Number(price),
//                 total_available: Number(quantity),
//                 ticket_expiry_date: expiresAt,
//                 description
//             }).unwrap();
//             toast.success("Ticket created successfully!");
//             // Clear form
//             setTitle("");
//             setPrice("");
//             setQuantity("");
//             setExpiresAt("");
//             setDescription("");
//             // Refresh ticket data
//             refetch();
//         } catch (error) {
//             console.log(error);
//             toast.error(error?.data?.message || "Failed to create ticket");
//         }
//     };

//     const handleEdit = async (id) => {
//         setEditModal(true);
//         try {
//             const res = await updateTicket({
//                 id,
//                 title,
//                 price: Number(price),
//                 total_available: Number(quantity),
//                 ticket_expiry_date: expiresAt,
//                 description
//             })
//             console.log(res,"Edit clicked");
//         } catch (error) {
//             console.log(error);
//         }
        
//     };

//     return (
//         <div className="">
//             <h2 className="text-2xl font-bold text-white mb-6">Create New Ticket</h2>
//             <form onSubmit={handleCreate} className="mb-10 max-w-5xl mx-auto ">
//                 <div className="flex flex-col gap-4">
//                     <input 
//                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                         value={title} 
//                         onChange={(e) => setTitle(e.target.value)} 
//                         type="text" 
//                         placeholder="Ticket title" 
//                         required
//                     />
//                     <input 
//                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                         value={price} 
//                         onChange={(e) => setPrice(e.target.value)} 
//                         type="number" 
//                         placeholder="Ticket price" 
//                         min="0"
//                         step="0.01"
//                         required
//                     />
//                     <input 
//                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                         value={quantity} 
//                         onChange={(e) => setQuantity(e.target.value)} 
//                         type="number" 
//                         placeholder="Total available tickets" 
//                         min="1"
//                         required
//                     />
//                     <input 
//                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                         value={expiresAt} 
//                         onChange={(e) => setExpiresAt(e.target.value)} 
//                         type="date" 
//                         placeholder="Ticket Expires date" 
//                         required
//                     />
//                     <textarea 
//                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]" 
//                         value={description} 
//                         onChange={(e) => setDescription(e.target.value)} 
//                         placeholder="Ticket description" 
//                         required
//                     />
//                 </div>

//                 <button 
//                     className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-white rounded-md transition-colors font-medium mt-4"
//                     type="submit"
//                 >
//                     Create Ticket
//                 </button>    
//             </form>

//             <h2 className="text-2xl text-white font-bold mb-4">Existing Tickets</h2>
//             <div className="overflow-x-auto shadow-md rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires At</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {tickets.map((ticket) => (
//                             <tr key={ticket.id}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.ticket_id}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.title}</td>
//                                 <td className="px-6 py-4 text-sm text-gray-500">{ticket.description}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ticket.price}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.total_available}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(ticket.ticket_expiry_date).toLocaleDateString()}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                                         {ticket.is_available ? 'Available' : 'Expired'}
//                                     </span>
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button type="button" onClick={() => handleEdit(ticket)} className=""><SquarePen /></button></td>
//                             </tr>
//                         ))}
//                         {tickets.length === 0 && (
//                             <tr>
//                                 <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
//                                     No tickets found
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             {
//                 editModal && (
//                     <div className="fixed inset-0 flex items-center justify-center z-50">
//                         <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
//                         <div className="bg-white p-8 rounded-lg shadow-lg z-50">
//                             <div className="flex items-center justify-between mb-4">
//                                 <h2 className="text-2xl font-bold mb-4">Edit Ticket</h2>
//                             <button onClick={() => setEditModal(false)}><X /></button>
//                             </div>
//                             <form onSubmit={handleEdit}>
//                                 <div className="space-y-4 flex flex-col ">
//                                     <input 
//                                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                                         value={title} 
//                                         onChange={(e) => setTitle(e.target.value)} 
//                                         defaultValue={title}
//                                         type="text" 
//                                         placeholder="Ticket title" 
//                                         required
//                                     />
//                                     <input 
//                                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                                         value={price} 
//                                         onChange={(e) => setPrice(e.target.value)} 
//                                         type="number" 
//                                         placeholder="Ticket price" 
//                                         required
//                                     />
//                                     <input 
//                                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                                         value={description} 
//                                         onChange={(e) => setDescription(e.target.value)} 
//                                         type="text" 
//                                         placeholder="Ticket description" 
//                                         required
//                                     />
//                                     <input 
//                                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                                         value={quantity} 
//                                         onChange={(e) => setQuantity(e.target.value)} 
//                                         type="number" 
//                                         placeholder="Ticket quantity" 
//                                         required
//                                     />
//                                     <input 
//                                         className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                                         value={expiresAt} 
//                                         onChange={(e) => setExpiresAt(e.target.value)} 
//                                         type="date" 
//                                         placeholder="Ticket expires at" 
//                                         required
//                                     />
//                                 </div>
//                                 <button 
//                                     className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-white rounded-md transition-colors font-medium mt-4"
//                                     type="submit"
//                                 >
//                                     Update Ticket
//                                 </button>    
//                             </form>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//     );
// }

import { useState } from "react";
import { useCreateCreateMutation, useGivewayTicketQuery, useUpdateTicketMutation } from "../../../redux/features/ticketSlice";
import toast from "react-hot-toast";
import { SquarePen, Trash, X } from "lucide-react";

export default function TicketCreate() {
  // State for create form
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [description, setDescription] = useState("");

  // State for edit modal
  const [editModal, setEditModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editExpiresAt, setEditExpiresAt] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [createCreate] = useCreateCreateMutation();
  const { data, refetch } = useGivewayTicketQuery();
  const tickets = data?.ticket ? [data.ticket] : [];
  const [updateTicket] = useUpdateTicketMutation();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createCreate({
        title,
        price: Number(price),
        total_available: Number(quantity),
        ticket_expiry_date: expiresAt,
        description,
      }).unwrap();
      toast.success("Ticket created successfully!");
      // Clear form
      setTitle("");
      setPrice("");
      setQuantity("");
      setExpiresAt("");
      setDescription("");
      refetch();
    } catch (error) {
      console.error("Create error:", error);
      toast.error(error?.data?.message || "Failed to create ticket");
    }
  };

  const openEditModal = (ticket) => {
    setEditTicket(ticket);
    setEditPrice(ticket.price?.toString() || "");
    setEditQuantity(ticket.total_available?.toString() || "");
    setEditExpiresAt(ticket.ticket_expiry_date?.split("T")[0] || "");
    setEditDescription(ticket.description || "");
    setEditModal(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!editTicket?.id) {
      toast.error("No ticket selected for update");
      return;
    }
    const body = {
      price: Number(editPrice),
      total_available: Number(editQuantity),
      ticket_expiry_date: editExpiresAt,
      description: editDescription,
    };
    try {
      await updateTicket({
        id: editTicket.id,
        body,
      }).unwrap();
      toast.success("Ticket updated successfully!");
      setEditModal(false);
      // Clear edit form
      setEditPrice("");
      setEditQuantity("");
      setEditExpiresAt("");
      setEditDescription("");
      setEditTicket(null);
      refetch();
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error?.data?.message || "Failed to update ticket");
    }
  };

  return (
    <div className="min-h-screen  p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Ticket</h2>
      <form onSubmit={handleCreate} className="mb-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4">
          <input
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Ticket title"
            required
          />
          <input
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Ticket price"
            min="0"
            step="0.01"
            required
          />
          <input
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="Total available tickets"
            min="1"
            required
          />
          <input
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            type="date"
            placeholder="Ticket Expires date"
            required
          />
          <textarea
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white min-h-[100px]"
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
        <table className="min-w-full divide-y divide-gray-700 bg-gray-800 text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ticket ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Available</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Expires At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {tickets.map((ticket, index) => (
              <tr key={ticket.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{ticket.ticket_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{ticket.title}</td>
                <td className="px-6 py-4 text-sm">{ticket.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">${ticket.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{ticket.total_available}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(ticket.ticket_expiry_date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ticket.is_available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {ticket.is_available ? "Available" : "Expired"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center gap-7">
                  <button type="button" onClick={() => openEditModal(ticket)}>
                    <SquarePen className="text-indigo-500 hover:text-indigo-700" />
                  </button>
                  <button type="button" >
                    <Trash className="text-red " />
                  </button>
                </td>
              </tr>
            ))}
            {tickets.length === 0 && (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-400">
                  No tickets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={() => setEditModal(false)}></div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg z-50 max-w-lg w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Edit Ticket</h2>
              <button onClick={() => setEditModal(false)}>
                <X className="text-white hover:text-gray-300" />
              </button>
            </div>
            <form onSubmit={handleEdit}>
              <div className="space-y-4 flex flex-col">
        
                <input
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  type="number"
                  placeholder="Ticket price"
                  min="0"
                  step="0.01"
                  required
                />
                <input
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(e.target.value)}
                  type="number"
                  placeholder="Total available tickets"
                  min="1"
                  required
                />
                <input
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
                  value={editExpiresAt}
                  onChange={(e) => setEditExpiresAt(e.target.value)}
                  type="date"
                  placeholder="Ticket expires at"
                  required
                />
                <textarea
                  className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white min-h-[100px]"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Ticket description"
                  required
                />
              </div>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-white rounded-md transition-colors font-medium mt-4"
                type="submit"
              >
                Update Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}