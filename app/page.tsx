"use client";

import React from "react";

type BadgeProps = {
  status: Status;
  children: React.ReactNode;
};

const statuses = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
};

type Status = keyof typeof statuses;

function Badge({ status, children }: BadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-md ${statuses[status]}`}>
      {children}
    </span>
  );
}

export default function Home() {
  const statusesList = Object.keys(statuses) as Status[];
  return (
    <>
      {statusesList.map((status) => (
        <React.Fragment key={status}>
          <Badge status={status}>{status}</Badge>
        </React.Fragment>
      ))}
    </>
  );
}
