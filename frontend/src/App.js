import { useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  // 🔐 Change role here if needed
  const username = "admin"; // change to "user" to test RBAC
  const password = "password";

  const fetchProducts = () => {
    axios.get("http://localhost:8080/products", {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password)
      }
    })
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
  };

  // 🔴 DELETE (Admin only)
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/products/${id}`, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password)
      }
    })
    .then(() => fetchProducts())
    .catch(err => console.error(err));
  };

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <h1 style={styles.heading}>🛒 Ecommerce Dashboard</h1>

      {/* User Info */}
      <h3 style={{ color: "#555" }}>
        Logged in as: <span style={{ color: "#4CAF50" }}>{username}</span>
      </h3>

      {/* Product Count */}
      <h3 style={{ marginBottom: "20px" }}>
        Total Products: {products.length}
      </h3>

      {/* Button */}
      <button style={styles.button} onClick={fetchProducts}>
        Load Products
      </button>

      {/* Product Grid */}
      <div style={styles.grid}>
        {products.map(p => (
          <div 
            key={p.id} 
            style={styles.card}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>{p.name}</h3>
            <p style={{ color: "#555" }}>{p.description}</p>
            <h4 style={{ color: "#4CAF50" }}>₹{p.price}</h4>

            {/* 🔴 Admin-only Delete */}
            {username === "admin" && (
              <button 
                style={styles.deleteBtn}
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  },
  heading: {
    marginBottom: "10px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "30px",
    fontSize: "16px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s"
  },
  deleteBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default App;