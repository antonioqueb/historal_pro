'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createEmployee } from '@/actions/createEmployee';

export default function DashboardEmployedAdmin() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Administrar Empleados</h1>
      </div>
      <form action={createEmployee}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <Label className="text-right md:text-left md:col-span-1" htmlFor="name">
              Nombre
            </Label>
            <Input className="col-span-3" id="name" name="name" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <Label className="text-right md:text-left md:col-span-1" htmlFor="role">
              Rol
            </Label>
            <Select className="col-span-3" id="role" name="role" required>
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
            <Select className="col-span-3" id="department" name="department" required>
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
              name="description"
              placeholder="Ingrese una breve descripción del empleado"
              required
            />
          </div>
        </div>
        <Button type="submit">Agregar</Button>
      </form>
    </div>
  );
}
