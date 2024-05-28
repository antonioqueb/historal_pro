
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Image from "next/image";


export default function DashboardEmployedAdmin() {
  return (
    <div className="w-full  mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Administrar Empleados</h1>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
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
                <Select className="w-full" id="role-filter">
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
                <Select className="w-full" id="department-filter">
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
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="name">
                    Nombre
                  </Label>
                  <Input className="col-span-3" id="name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label className="text-right md:text-left md:col-span-1" htmlFor="role">
                    Rol
                  </Label>
                  <Select className="col-span-3" id="role">
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
                  <Select className="col-span-3" id="department">
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
                    placeholder="Ingrese una breve descripción del empleado"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button>Agregar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="Foto del Empleado"
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
              <h3 className="text-lg font-semibold">Juan Pérez</h3>
              <p className="text-gray-500 dark:text-gray-400">Gerente</p>
              <p className="text-sm line-clamp-2">
                Juan es un gerente experimentado con más de 10 años de experiencia en la industria. Es conocido por su
                pensamiento estratégico y su capacidad para motivar a su equipo.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tiempo laborando: 8 años</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="Foto del Empleado"
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
              <h3 className="text-lg font-semibold">María Rodríguez</h3>
              <p className="text-gray-500 dark:text-gray-400">Desarrolladora</p>
              <p className="text-sm line-clamp-2">
                María es una desarrolladora habilidosa con pasión por crear soluciones innovadoras. Siempre está ansiosa
                por aprender nuevas tecnologías y colaborar con su equipo.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tiempo laborando: 3 años</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="Foto del Empleado"
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
              <h3 className="text-lg font-semibold">Carlos Hernández</h3>
              <p className="text-gray-500 dark:text-gray-400">Diseñador</p>
              <p className="text-sm line-clamp-2">
                Carlos es un diseñador talentoso con ojo para el detalle y pasión por crear diseños visualmente
                impresionantes. Siempre está explorando nuevas tendencias y técnicas de diseño.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tiempo laborando: 5 años</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="Foto del Empleado"
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
              <h3 className="text-lg font-semibold">Ana García</h3>
              <p className="text-gray-500 dark:text-gray-400">Recursos Humanos</p>
              <p className="text-sm line-clamp-2">
                Ana es una profesional experta en recursos humanos con una gran capacidad para gestionar el talento y
                fomentar un ambiente de trabajo positivo. Su enfoque es siempre el bienestar de los empleados.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tiempo laborando: 6 años</p>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                alt="Foto del Empleado"
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
              <h3 className="text-lg font-semibold">Pedro Ramírez</h3>
              <p className="text-gray-500 dark:text-gray-400">Mercadotecnia</p>
              <p className="text-sm line-clamp-2">
                Pedro es un experto en mercadotecnia con un profundo conocimiento de las últimas tendencias y
                estrategias. Su creatividad y pensamiento innovador lo convierten en un activo invaluable para la
                empresa.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tiempo laborando: 2 años</p>
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
      </div>

    </div>
  )
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
  )
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
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}