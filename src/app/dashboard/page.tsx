import React from "react";
import { getXataClient } from "@/xata";
import { UserButton, auth } from "@clerk/nextjs";
import RbCard from "@/components/RbCard";

export default async function DashboardPage() {
  const { userId } = auth();
  const xataClient = getXataClient();
  if (!userId) return null;

  const user = await xataClient.db.user_likes.filter({ userId }).getFirst();
  const playerList = user?.players || [];

  const players = await xataClient.db.RB_season.filter({
    id: { $any: playerList },
  })
    .sort("TotalPoints", "desc")
    .getMany();

  return (
    <main className="max-w-7xl m-auto">
      <div className="flex-[0.5] flex items-center gap-4 mb-4">
        <h1>Dashboard page</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {players.map((player) => (
          <RbCard key={player.id} player={player} />
        ))}
      </div>
    </main>
  );
}
