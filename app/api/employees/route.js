// src/app/api/auth/employees/route.js
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (req.method === "GET") {
    const employees = await prisma.employee.findMany({
      where: { userId: user.id },
    });
    return res.status(200).json(employees);
  } else if (req.method === "POST") {
    const { name, role, department, description } = req.body;
    if (!name || !role || !department || !description) {
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
      return res.status(201).json(employee);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create employee" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
