import { RBSeason, getXataClient } from "@/xata";
import React from "react";
import AddLikeComponent from "./AddLike";

export default async function RbCard({ player }: { player: RBSeason }) {
  //   console.log(player);
  return (
    <article className="relative max-w-[350px] w-full p-2 flex flex-col gap-3 justify-between rounded-lg border border-slate-200">
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col">
          <h5 className="font-bold text-lg leading-none">
            {player.PlayerName}
          </h5>
          <div className="text-slate-300 text-sm flex-1">
            <span>
              {player.Pos} / {player.Team}
            </span>
          </div>
        </div>
        <div className="font-semibold">Rank: {player.Rank}</div>
      </div>

      <div className="text-slate-300 text-sm">
        <div className="mb-2">
          <h6 className="font-bold border-b border-b-slate-400 max-w-fit">
            Total Points: {player.TotalPoints}
          </h6>
        </div>

        <div className="flex flex-col">
          <h6 className="font-bold">Rush</h6>
          <div className="flex items-center space-x-1">
            <div>Yds: {player.RushingYDS}</div>
            <div>Tds: {player.RushingTD}</div>
          </div>
        </div>

        <div className="flex flex-col">
          <h6 className="font-bold">Rec</h6>
          <div className="flex items-center gap-2">
            <div>Yds: {player.ReceivingYDS}</div>
            <div>Tds: {player.ReceivingTD}</div>
          </div>
        </div>
      </div>
      <AddLikeComponent player={player.id} />
    </article>
  );
}
