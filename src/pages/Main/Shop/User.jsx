import { useState } from "react";
import { Table, Modal, Button } from "antd";
import { Eye } from "lucide-react";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showModal = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "#SI No.",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name  ",
    },
    {
      title: "Subscription",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Action",
      key: "Action",
      align: "center",
      render: (_, data) => (
        <Button
          type="link"
          onClick={() => showModal(data)}
          // className="flex items-center"
        >
          {/* <img
            src={exlamIcon}
            alt="Review"
            className="w-5 h-5 cursor-pointer"
          /> */}
          <div className="flex items-center gap-4 ">
            <Eye />
          </div>
        </Button>
      ),
    },
  ];

  const data = Array.from({ length: 17 }, (_, index) => ({
    transIs: `${index + 1}`,
    name: "Henry",
    Email: "sharif@gmail.com",
    Address: "Standard",
    transactionAmount: "$50",
    date: "16 Apr 2024",
    userId: `U-${index + 1}`,
  }));

  return (
    <div>
      <div className="rounded-lg  py-4   mt-8 recent-users-table text-white bg-[#404040]">
        {/* Ant Design Table */}
        <h1 className="text-2xl font-semibold mb-4 text-white pl-4">User List</h1>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          className="rounded-2xl  text-white"
          rowKey="userId"
            rowClassName={() => "border-b border-[#]"}

        />
        

        {/* Modal */}
        <Modal
          title={
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-center">
                User Details
              </span>
              {/* <CloseOutlined
              className="text-lg cursor-pointer"
              onClick={handleCancel}
            /> */}
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="custom-modal"
        >
          {selectedUser && (
            <div className="flex flex-col gap-4  ">
              {/* User Details */}
              <div className="flex justify-between items-center ">
                <span className=" font-medium">User ID:</span>
                <span className="">{selectedUser.userId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">Date:</span>
                <span className="">{selectedUser.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">User Name:</span>
                <span className="">{selectedUser.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">Transaction Amount:</span>
                <span className="">{selectedUser.transactionAmount}</span>
              </div>

              {/* Download Button */}
              <Button
                // type="primary"
                className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
              >
                Download
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default User;
