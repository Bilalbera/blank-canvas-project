import { createFileRoute, Navigate } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";
import { AdminShell } from "@/components/app/AdminShell";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/kurucu")({
  head: () => ({
    meta: [
      { title: "Kurucu Paneli — Bilal Efendi" },
      { name: "description", content: "Bilal Efendi içerik ve platform yönetimi." },
      { property: "og:title", content: "Kurucu Paneli — Bilal Efendi" },
      { property: "og:description", content: "Bilal Efendi içerik ve platform yönetimi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FounderGate,
});

function FounderGate() {
  const { loading, isFounder } = useAuth();
  if (loading) return <div className="flex min-h-screen items-center justify-center"><LoaderCircle className="h-8 w-8 animate-spin text-primary" /></div>;
  if (!isFounder) return <Navigate to="/" replace />;
  return <AdminShell />;
}