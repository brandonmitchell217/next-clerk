"use server";
import { z } from "zod";
import { RBSeason, getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function addLike(player: string) {
  const { userId } = auth();
  if (!userId) return;

  const xataClient = getXataClient();
  const userLikes = await xataClient.db.user_likes
    .filter({ userId })
    .getFirst();
  const userPlayers = userLikes?.players || [];

  if (!userLikes) {
    await xataClient.db.user_likes.create({
      userId,
      players: [player],
    });
    revalidatePath("/dashboard");
  } else if (!userPlayers.includes(player)) {
    const updatedPlayers = [...userPlayers, player];
    await xataClient.db.user_likes.update(userLikes.id, {
      players: updatedPlayers,
    });
    revalidatePath("/dashboard");
  } else {
    return console.log("Player already liked");
  }
}
