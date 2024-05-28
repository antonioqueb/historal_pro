
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from "next/image"

export default function DashboardEmployedList() {
  return (
    (<div className="w-full  mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Empleados</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400 w-5 h-5" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-zinc-800 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
              placeholder="Buscar empleados..."
              type="search" />
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
                <Input
                  className="w-full"
                  id="name-filter"
                  placeholder="Filtrar por nombre"
                  type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role-filter">Cargo</Label>
                <Select className="w-full" id="role-filter">
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">Manager</SelectItem>
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
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Manager</p>
            <p className="text-sm line-clamp-2">
              John is a seasoned manager with over 10 years of experience in the industry. He is known for his strategic
              thinking and ability to motivate his team.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Developer</p>
            <p className="text-sm line-clamp-2">
              Jane is a skilled developer with a passion for creating innovative solutions. She is always eager to learn
              new technologies and collaborate with her team.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Michael Johnson</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Designer</p>
            <p className="text-sm line-clamp-2">
              Michael is a talented designer with a keen eye for detail and a passion for creating visually stunning
              designs. He is always exploring new design trends and techniques.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Emily Davis</h3>
            <p className="text-zinc-500 dark:text-zinc-400">HR Specialist</p>
            <p className="text-sm line-clamp-2">
              Emily is an HR specialist with a passion for employee engagement and talent development. She is known for
              her empathetic approach and ability to create a positive work environment.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">David Lee</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Developer</p>
            <p className="text-sm line-clamp-2">
              David is a skilled developer with a passion for clean code and efficient solutions. He is always eager to
              learn new technologies and share his knowledge with his team.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Sarah Wilson</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Marketing Specialist</p>
            <p className="text-sm line-clamp-2">
              Sarah is a marketing specialist with a passion for data-driven strategies and creative campaigns. She is
              known for her ability to connect with customers and drive business growth.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Alex Chen</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Developer</p>
            <p className="text-sm line-clamp-2">
              Alex is a skilled developer with a passion for problem-solving and innovation. He is always eager to
              explore new technologies and collaborate with his team to create cutting-edge solutions.
            </p>
          </div>
        </div>
        <div
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-square">
            <Image
              alt="Employee Photo"
              className="w-full h-full object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Olivia Gonzalez</h3>
            <p className="text-zinc-500 dark:text-zinc-400">HR Manager</p>
            <p className="text-sm line-clamp-2">
              Olivia is an experienced HR manager with a passion for employee development and organizational culture.
              She is known for her strategic thinking and ability to create a positive work environment.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}

function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
