import { useState } from "react";
import { Link } from "react-router-dom";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      ticketNum: "#458678",
      user: "Marvin McKinney",
      ticketCount: "#4",
      amount: "$19.99",
    },
    {
      ticketNum: "#458678",
      user: "Jane Cooper",
      ticketCount: "#6",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Esther Howard",
      ticketCount: "#10",
      amount: "$19.99",
    },
    {
      ticketNum: "#458678",
      user: "Darlene Robertson",
      ticketCount: "#20",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Cameron Williamson",
      ticketCount: "#15",
      amount: "$19.99",
    },
    {
      ticketNum: "#458678",
      user: "Ronald Richards",
      ticketCount: "#17",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Jerome Bell",
      ticketCount: "#4",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Dianne Russell",
      ticketCount: "#7",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Bessie Cooper",
      ticketCount: "#13",
      amount: "$39.99",
    },
    {
      ticketNum: "#458678",
      user: "Robert Fox",
      ticketCount: "#25",
      amount: "$39.99",
    },
  ];

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="  rounded-lg flex items-center justify-center bg-[#404040] ">
      <div className="w-full ">
        {/* Header */}
        <div className="mb-6 p-4 flex items-center justify-between">
          <h1 className="text-xl font-medium text-white">Purchased User</h1>
          <Link to={'/spanner'}>
            <button className="rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-600 transition-colors">
              🎲 Raffle Draw
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg ">
          {/* Table Header */}
          <div className="bg-[#534590]">
            <div className="flex items-center justify-between gap-4 bg-[#534590] container mx-auto w-full px-6 py-4 text-sm font-medium text-white">
              <div className="flex-1 text-center">Ticket Num</div>
              <div className="flex-1 text-center">User</div>
              <div className="flex-1 text-center flex items-center justify-center gap-1">
                Ticket Count
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 text-center">Amount</div>
              <div className="flex-1 text-center">Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 px-6 py-4 text-sm text-white"
              >
                <div className="flex-1 0 text-center">{user.ticketNum}</div>
                <div className="flex-1 text-white text-center">{user.user}</div>
                <div className="flex-1  text-center">{user.ticketCount}</div>
                <div className="flex-1 text-white text-center">
                  {user.amount}
                </div>
                <div className="flex-1 text-center">
                  <button
                    onClick={() => openModal(user)}
                    className="rounded-full bg-gray-700 p-1.5  hover:bg-gray-600 hover:text-gray-300 transition-colors"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3889 16.5H11.6111V9.77778H10.3889V16.5ZM11 8.03855C11.2135 8.03855 11.3923 7.96644 11.5366 7.82222C11.6808 7.678 11.7525 7.49915 11.7517 7.28567C11.7509 7.07219 11.6787 6.89374 11.5353 6.75033C11.3919 6.60693 11.2135 6.53481 11 6.534C10.7865 6.53318 10.6081 6.6053 10.4647 6.75033C10.3213 6.89537 10.2491 7.07422 10.2483 7.28689C10.2475 7.49955 10.3196 7.678 10.4647 7.82222C10.6097 7.96644 10.7881 8.03855 11 8.03855ZM11.0037 22C9.48241 22 8.05241 21.7116 6.71367 21.1347C5.37493 20.557 4.21015 19.7731 3.21933 18.7831C2.22852 17.7931 1.44426 16.6296 0.866556 15.2924C0.288852 13.9553 0 12.5257 0 11.0037C0 9.48159 0.288852 8.05159 0.866556 6.71367C1.44344 5.37493 2.22607 4.21015 3.21444 3.21933C4.20282 2.22852 5.36678 1.44426 6.70633 0.866556C8.04589 0.288852 9.47589 0 10.9963 0C12.5168 0 13.9468 0.288852 15.2863 0.866556C16.6251 1.44344 17.7899 2.22648 18.7807 3.21567C19.7715 4.20485 20.5557 5.36881 21.1334 6.70755C21.7111 8.0463 22 9.47589 22 10.9963C22 12.5168 21.7116 13.9468 21.1347 15.2863C20.5578 16.6259 19.7739 17.7907 18.7831 18.7807C17.7923 19.7707 16.6287 20.5549 15.2924 21.1334C13.9561 21.712 12.5266 22.0008 11.0037 22ZM11 20.7778C13.7296 20.7778 16.0417 19.8306 17.9361 17.9361C19.8306 16.0417 20.7778 13.7296 20.7778 11C20.7778 8.27037 19.8306 5.95833 17.9361 4.06389C16.0417 2.16944 13.7296 1.22222 11 1.22222C8.27037 1.22222 5.95833 2.16944 4.06389 4.06389C2.16944 5.95833 1.22222 8.27037 1.22222 11C1.22222 13.7296 2.16944 16.0417 4.06389 17.9361C5.95833 19.8306 8.27037 20.7778 11 20.7778Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <button className="h-8 w-8 rounded-md text-sm text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            1
          </button>

          <span className="text-gray-500">...</span>

          <button className="h-8 w-8 rounded-md bg-purple-600 text-sm text-white hover:bg-purple-700 transition-colors">
            12
          </button>

          <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            Next
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-xl">
            {/* Modal Header */}
            <h2 className="mb-6 text-center text-lg font-medium text-white">
              User Details
            </h2>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">User Name :</span>
                <span className="text-white">{selectedUser.user}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Ticket Num</span>
                <span className="text-white">{selectedUser.ticketNum}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Ticket Count</span>
                <span className="text-white">{selectedUser.ticketCount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Amount</span>
                <span className="text-white">{selectedUser.amount}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6">
              <button
                onClick={closeModal}
                className="w-full rounded-md bg-purple-600 py-2 text-white hover:bg-purple-700 transition-colors"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
