import React, { useState, FormEvent } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Check if email already exists in Firestore
      const q = query(
        collection(db, "users"),
        where("email", "==", formData.email.trim().toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("⚠️ This email is already subscribed.");
        return;
      }

      // Add new document
      await addDoc(collection(db, "users"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        createdAt: new Date(),
      });

      setFormData({ name: "", email: "" });
      setMessage("✅ Your details have been submitted successfully!");
      setTimeout(() => setMessage(""), 4000);

    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.title}>Stay Updated</h3>
        <input
          
          className="flex-1 px-3 py-2 text-sm bg-background/10 border border-background/20 rounded-md text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          
          className="flex-1 px-3 py-2 text-sm bg-background/10 border border-background/20 rounded-md text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200">
          Submit
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};



const styles: { [key: string]: React.CSSProperties } = {
  container: {
    
    padding: "20px 10px",
    color: "#fff",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    maxWidth: "300px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "5px",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
  },
  button: {
    background: "#87CEEA",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000",
    transition: "0.3s",
  },
  message: {
    fontSize: "14px",
    marginTop: "5px",
    color: "#f0f0f0",
  },
};

export default Form;
