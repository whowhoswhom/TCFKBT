import React from 'react';

export interface Column<T> {
  key: keyof T;
  label: string;
}

interface StatsTableProps<T> {
  data: T[];
  columns: Column<T>[];
  title: string;
}

export default function StatsTable<T>({ data, columns, title }: StatsTableProps<T>) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              {columns.map((column) => (
                <th key={String(column.key)} className="py-3 px-4 text-left text-gray-300 font-semibold">
                  <span>{column.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                {columns.map((column) => (
                  <td key={String(column.key)} className="py-3 px-4 text-white">
                    {row[column.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
