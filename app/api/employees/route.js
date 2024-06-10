import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log(`Received ${req.method} request at /api/auth/employees`);

  const session = await getSession({ req });
  if (!session) {
    console.error("Unauthorized: No session found");
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    console.error("User not found for email:", session.user.email);
    return res.status(404).json({ error: "User not found" });
  }

  if (req.method === "GET") {
    console.log("Handling GET request");
    const employees = await prisma.employee.findMany({
      where: { userId: user.id },
    });
    return res.status(200).json(employees);
  } else if (req.method === "POST") {
    console.log("Handling POST request with body:", req.body);
    const { name, role, department, description } = req.body;
    if (!name || !role || !department || !description) {
      console.error("Bad Request: Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }
    try {
      const employee = await prisma.employee.create({
        data: {
          name,
          role,
          department,
          description,
          userId: user.id,
        },
      });
      console.log("Employee created:", employee);
      return res.status(201).json(employee);
    } catch (error) {
      console.error("Failed to create employee:", error);
      return res.status(500).json({ error: "Failed to create employee" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    console.error(`Method ${req.method} Not Allowed`);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
