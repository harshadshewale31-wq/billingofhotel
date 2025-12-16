
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TableLayoutProps {
  tables: string[];
  activeTable: string;
  billedTables: string[];
  onSelectTable: (table: string) => void;
}

export function TableLayout({ tables, activeTable, billedTables, onSelectTable }: TableLayoutProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Select Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {tables.map((table) => {
            const hasBill = billedTables.includes(table);
            const isActive = activeTable === table;
            return (
              <Button
                key={table}
                variant={isActive ? "default" : hasBill ? "secondary" : "outline"}
                className={cn(
                  "h-16 text-lg font-bold transition-all duration-300 transform hover:scale-105",
                  isActive && "ring-2 ring-offset-2 ring-primary",
                  hasBill && !isActive && "bg-accent/50 border-accent"
                )}
                onClick={() => onSelectTable(table)}
              >
                {table}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
