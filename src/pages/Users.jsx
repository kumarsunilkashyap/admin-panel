import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "sam.wilson@example.com",
      role: "Viewer",
    },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: "", email: "", role: "" });
    }
  };

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) => (user.id === editingUser.id ? editingUser : user))
    );
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <table className="w-full border-collapse border border-gray-200 mb-4">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 p-2 text-left">ID</th>
              <th className="border border-gray-200 p-2 text-left">Name</th>
              <th className="border border-gray-200 p-2 text-left">Email</th>
              <th className="border border-gray-200 p-2 text-left">Role</th>
              <th className="border border-gray-200 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-200 p-2">{user.id}</td>
                <td className="border border-gray-200 p-2">{user.name}</td>
                <td className="border border-gray-200 p-2">{user.email}</td>
                <td className="border border-gray-200 p-2">{user.role}</td>
                <td className="border border-gray-200 p-2">
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="text-blue-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingUser ? (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Edit User</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Role"
              value={editingUser.role}
              onChange={(e) =>
                setEditingUser({ ...editingUser, role: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
              onClick={handleUpdateUser}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update User
            </button>
          </div>
        ) : (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Add New User</h2>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
              onClick={handleAddUser}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
