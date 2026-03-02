import { useState } from "react";

function App() {

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // State to store registered users
  const [users, setUsers] = useState([]);

  // Function to add user
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Basic validation
    if (!name || !email || !role) {
      alert("Please fill all fields");
      return;
    }

    // Create new user object
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      role: role
    };

    // Add to users array
    setUsers([...users, newUser]);

    // Clear form
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>User Registration</h1>

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h2>Registered Users</h2>

      {/* Display Cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              padding: "15px",
              width: "200px",
              borderRadius: "10px"
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;