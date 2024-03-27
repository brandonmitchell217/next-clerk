import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { RBSeason, getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import RbCard from "@/components/RbCard";
// import { addLike } from "@/lib/util";

export default async function Home() {
  const { userId } = auth();
  const xata = getXataClient();
  if (!userId) return null;
  const folders = await xata.db.folders.filter({ userId }).getAll();
  const players = await xata.db.RB_season.filter({
    Rank: { $le: 10 },
  }).getMany();
  // console.log(players);

  return (
    <main className="max-w-7xl m-auto">
      <div className="flex flex-col items-center justify-center p-24">
        <div className="flex-[0.5] flex items-center gap-4 mb-4">
          <h1>Home page</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          {players.map((player) => (
            <RbCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </main>
  );
}
