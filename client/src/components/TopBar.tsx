/* DESIGN: Industrial Automotriz Premium — TopBar informativo — Tema Claro */
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function TopBar() {
  return (
    <div className="bg-red-800 text-white/90 hidden md:block">
      <div className="container flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-6">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Phone className="w-3 h-3 text-amber-300" />
            <span>{COMPANY.phone}</span>
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Mail className="w-3 h-3 text-amber-300" />
            <span>{COMPANY.email}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-300" />
            <span className="hidden lg:inline">Tegucigalpa, Honduras</span>
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-amber-300" />
          <span>{COMPANY.schedule.weekdays}</span>
        </span>
      </div>
    </div>
  );
}
