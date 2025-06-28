import { useState } from "react";
import { Table, Modal, Button } from "antd";
import { Eye } from "lucide-react";
import { useAllUserQuery } from "../../../redux/features/userSlice";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, isLoading, error } = useAllUserQuery();

  const showModal = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Download function supporting JSON, CSV, and PDF formats
  const handleDownload = (user, format = "json") => {
    const fileName = `user_${user.id}.${format}`;

    if (format === "json") {
      // JSON Download
      const userData = JSON.stringify(user, null, 2);
      const blob = new Blob([userData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    } else if (format === "csv") {
      // CSV Download
      const headers = ["ID,Full Name,Email,Verified,Date Joined,Mobile No,Location"];
      const row = [
        user.id,
        user.full_name,
        user.email,
        user.is_verified ? "Verified" : "Unverified",
        new Date(user.date_joined).toLocaleDateString(),
        user.mobile_no || "N/A",
        user.location || "N/A",
      ].map((field) => `"${field}"`).join(",");
      const csvContent = [headers, row].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    } else if (format === "pdf") {
      // PDF Download using jsPDF
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("User Details", 10, 10);
      doc.setFontSize(12);
      doc.text(`User ID: ${user.id}`, 10, 20);
      doc.text(`Full Name: ${user.full_name}`, 10, 30);
      doc.text(`Email: ${user.email}`, 10, 40);
      doc.text(`Subscription: ${user.is_verified ? "Verified" : "Unverified"}`, 10, 50);
      doc.text(`Date Joined: ${new Date(user.date_joined).toLocaleDateString()}`, 10, 60);
      doc.text(`Mobile No: ${user.mobile_no || "N/A"}`, 10, 70);
      doc.text(`Location: ${user.location || "N/A"}`, 10, 80);
      doc.save(fileName);
    }
  };

  const columns = [
    {
      title: "#SI No.",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subscription",
      dataIndex: "is_verified",
      key: "is_verified",
      render: (is_verified) => (is_verified ? "Verified" : "Unverified"),
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, data) => (
        <Button
          type="link"
          onClick={() => showModal(data)}
          aria-label="View user details"
        >
          <div className="flex items-center gap-4">
            <Eye className="w-5 h-5" />
          </div>
        </Button>
      ),
    },
  ];

  const dataSource = data?.user_list?.map((user) => ({
    key: user.id,
    id: user.id,
    full_name: user.full_name,
    email: user.email,
    is_verified: user.is_verified,
    date_joined: user.date_joined,
    profile_pic: user.profile_pic,
    mobile_no: user.mobile_no,
    location: user.location,
    is_superuser: user.is_superuser,
    is_staff: user.is_staff,
    updated_at: user.updated_at,
  })) || [];

  return (
    <div>
      <div className="rounded-lg py-4 mt-8 recent-users-table text-white bg-[#404040]">
        <h1 className="text-2xl font-semibold mb-4 text-white pl-4">User List</h1>

        {isLoading && <p className="text-white pl-4">Loading users...</p>}
        {error && (
          <p className="text-red-500 pl-4">Error loading users: {error.message}</p>
        )}

        {!isLoading && !error && (
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{ position: ["bottomCenter"], pageSize: 10 }}
            className="rounded-2xl text-white"
            rowKey="key"
            rowClassName={() => "border-b border-gray-600"}
          />
        )}

        <Modal
          title={
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">User Details</span>
              <button
                onClick={handleCancel}
                className="text-lg cursor-pointer text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                {/* <CloseOutlined /> */}
              </button>
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="custom-modal"
        >
          {selectedUser && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">User ID:</span>
                <span>{selectedUser.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Full Name:</span>
                <span>{selectedUser.full_name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Email:</span>
                <span>{selectedUser.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Subscription:</span>
                <span>{selectedUser.is_verified ? "Verified" : "Unverified"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Date Joined:</span>
                <span>{new Date(selectedUser.date_joined).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Mobile Number:</span>
                <span>{selectedUser.mobile_no || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Location:</span>
                <span>{selectedUser.location || "N/A"}</span>
              </div>

              {/* Download Buttons for Different Formats */}
              <div className="flex gap-4">
                <Button
                  type="primary"
                  className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
                  onClick={() => handleDownload(selectedUser, "json")}
                  aria-label="Download user details as JSON"
                >
                  Download JSON
                </Button>
                <Button
                  type="primary"
                  className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
                  onClick={() => handleDownload(selectedUser, "csv")}
                  aria-label="Download user details as CSV"
                >
                  Download CSV
                </Button>
                <Button
                  type="primary"
                  className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
                  onClick={() => handleDownload(selectedUser, "pdf")}
                  aria-label="Download user details as PDF"
                >
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default User;