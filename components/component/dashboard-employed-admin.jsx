'use client';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Image from "next/image";

export default function DashboardEmployedAdmin() {
  const { data: session } = useSession();
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    description: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      fetch("/api/employees")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => setEmployees(data))
        .catch((error) => {
          console.error('Error fetching employees:', error);
          setError('Failed to fetch employees');
        });
    }
  }, [session]);

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (field, value) => {
    setNewEmployee({
      ...newEmployee,
      [field]: value,
    });
  };

  const handleAddEmployee = async () => {
    const res = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });

    if (res.ok) {
      const addedEmployee = await res.json();
      setEmployees([...employees, addedEmployee]);
      setNewEmployee({ name: "", role: "", department: "", description: "" });
      setError(null);
    } else {
      const errorData = await res.json();
      setError(errorData.error);
    }
  };

  return (
    <div className="w-full mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Administrar Empleados</h1>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400 w-5 h-5" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-zinc-800 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
              placeholder="Buscar empleado..."
              type="search"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2" variant="outline">
                <FilterIcon className="w-5 h-5" />
                Filtros
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name-filter">Nombre</Label>
                <Input className="w-full" id="name-filter" placeholder="Filtrar por nombre" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role-filter">Rol</Label>
                <Select className="w-full" id="role-filter" onValueChange={(value) => handleSelectChange('role', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">Gerente</SelectItem>
                    <SelectItem value="developer">Desarrollador</SelectItem>
                    <SelectItem value="designer">Diseñador</SelectItem>
                    <SelectItem value="hr">Recursos Humanos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department-filter">Departamento</Label>
                <Select className="w-full" id="department-filter" onValueChange={(value) => handleSelectChange('department', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Ingeniería</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="hr">Recursos Humanos</SelectItem>
                    <SelectItem value="marketing">Mercadotecnia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2" variant="outline">
                <PlusIcon className="w-5 h-5" />
                Agregar Empleado
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar Empleado</DialogTitle>
                <DialogDescription>Ingrese los detalles del nuevo empleado.</DialogDescription>
              </DialogHeader>
              {error && <p className="text-red-500">{error}</p>}
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="name">
                    Nombre
                  </Label>
                  <Input className="col-span-3" id="name" value={newEmployee.name} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="role">
                    Rol
                  </Label>
                  <Select className="col-span-3" id="role" value={newEmployee.role} onValueChange={(value) => handleSelectChange('role', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Gerente</SelectItem>
                      <SelectItem value="developer">Desarrollador</SelectItem>
                      <SelectItem value="designer">Diseñador</SelectItem>
                      <SelectItem value="hr">Recursos Humanos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="department">
                    Departamento
                  </Label>
                  <Select className="col-span-3" id="department" value={newEmployee.department} onValueChange={(value) => handleSelectChange('department', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Ingeniería</SelectItem>
                      <SelectItem value="design">Diseño</SelectItem>
                      <SelectItem value="hr">Recursos Humanos</SelectItem>
                      <SelectItem value="marketing">Mercadotecnia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="description">
                    Descripción
                  </Label>
                  <Textarea
                    className="col-span-3"
                    id="description"
                    value={newEmployee.description}
                    onChange={handleInputChange}
                    placeholder="Ingrese una breve descripción del empleado"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddEmployee}>Agregar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-4 p-4">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                  alt={`Foto de ${employee.name}`}
                  className="w-full h-full object-cover"
                  height={80}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width={80}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">{employee.role}</p>
                <p className="text-sm line-clamp-2">{employee.description}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Departamento: {employee.department}</p>
              </div>
              <div className="flex gap-2">
                <Button className="rounded-full" size="icon" variant="outline">
                  <MdEdit className="w-4 h-4" />
                </Button>
                <Button className="rounded-full" size="icon" variant="outline">
                  <DeleteIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24
24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
