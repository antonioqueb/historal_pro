// app/actions/createEmployee.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEmployee(formData) {
  const { name, role, department, description, userId } = formData;

  try {
    const employee = await prisma.employee.create({
      data: {
        name,
        role,
        department,
        description,
        userId,
      },
    });

    return { success: true, employee };
  } catch (error) {
    console.error('Error creating employee:', error);
    return { success: false, message: 'Error creating employee' };
  }
}
