"use client";
import React from "react";
import { addLike } from "@/lib/util";
import { RBSeason } from "@/xata";

export default function AddLikeComponent({ player }: { player: string }) {
  return (
    <div
      className="absolute bottom-2 right-2 border-green-500 border rounded-full text-center w-8 h-8 text-2xl text-green-500 cursor-pointer"
      onClick={() => addLike(player)}
    >
      +
    </div>
  );
}
