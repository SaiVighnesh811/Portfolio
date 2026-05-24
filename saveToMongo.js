/**
 * saveToMongo.js
 * One-time script to save project details to MongoDB.
 * Run: node saveToMongo.js
 */

require("dotenv").config();
const {MongoClient} = require("mongodb");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not set in .env file");
  process.exit(1);
}

const projects = [
  {
    projectName: "Chat Translator Application",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask-SocketIO",
      "Translator API"
    ],
    description:
      "A real-time multilingual chat application enabling seamless communication between users of different languages with automatic translation of messages and synchronized delete functionality.",
    features: [
      "Real-time chat",
      "Multi-language support",
      "Instant translation",
      "Socket-based communication",
      "Synchronized delete functionality",
      "Modern UI"
    ]
  },
  {
    projectName: "Restaurant Automation System",
    techStack: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
    description:
      "Automated order processing, billing, and inventory tracking system with modules for menu display and purchase orders. Integrated Flask backend with MySQL database and full CRUD operations.",
    features: [
      "Order processing automation",
      "Billing system",
      "Inventory tracking",
      "Menu display module",
      "Purchase order management",
      "CRUD operations"
    ]
  },
  {
    projectName: "Anti-Cheating Detection System",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A secure online examination platform with tab-switch detection, auto submission on violation threshold, and full-screen enforcement for exam integrity. Built with REST APIs.",
    features: [
      "Tab-switch detection",
      "Auto submission on violation threshold",
      "Full-screen enforcement",
      "REST APIs",
      "Secure examination platform"
    ]
  }
];

async function saveProjects() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    const db = client.db("Portfolio");
    const collection = db.collection("projects");

    // Clear existing projects and insert fresh data
    await collection.deleteMany({});
    const result = await collection.insertMany(
      projects.map(p => ({
        ...p,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );

    console.log(`${result.insertedCount} projects saved to MongoDB!`);

    // Verify by reading back
    const saved = await collection.find({}).toArray();
    saved.forEach(p => console.log(`  ✓ ${p.projectName}`));
  } catch (error) {
    console.error("Error saving to MongoDB:", error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

saveProjects();
