// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "folders",
    columns: [
      { name: "name", type: "string", unique: true },
      { name: "userId", type: "string", notNull: true, defaultValue: "null" },
    ],
  },
  {
    name: "RB_season",
    columns: [
      { name: "PlayerName", type: "string" },
      { name: "PlayerId", type: "int" },
      { name: "Pos", type: "string" },
      { name: "Team", type: "string" },
      { name: "PassingYDS", type: "int" },
      { name: "PassingTD", type: "int" },
      { name: "PassingInt", type: "string" },
      { name: "RushingYDS", type: "int" },
      { name: "RushingTD", type: "int" },
      { name: "ReceivingRec", type: "int" },
      { name: "ReceivingYDS", type: "int" },
      { name: "ReceivingTD", type: "int" },
      { name: "RetTD", type: "int" },
      { name: "FumTD", type: "string" },
      { name: "2PT", type: "int" },
      { name: "Fum", type: "int" },
      { name: "FanPtsAgainst-pts", type: "float" },
      { name: "TouchCarries", type: "int" },
      { name: "TouchReceptions", type: "int" },
      { name: "Touches", type: "int" },
      { name: "TargetsReceptions", type: "int" },
      { name: "Targets", type: "int" },
      { name: "ReceptionPercentage", type: "int" },
      { name: "RzTarget", type: "int" },
      { name: "RzTouch", type: "int" },
      { name: "RzG2G", type: "int" },
      { name: "Rank", type: "int" },
      { name: "TotalPoints", type: "float" },
    ],
  },
  {
    name: "user_likes",
    columns: [
      { name: "userId", type: "string", notNull: true, defaultValue: "null" },
      { name: "players", type: "multiple" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Folders = InferredTypes["folders"];
export type FoldersRecord = Folders & XataRecord;

export type RBSeason = InferredTypes["RB_season"];
export type RBSeasonRecord = RBSeason & XataRecord;

export type UserLikes = InferredTypes["user_likes"];
export type UserLikesRecord = UserLikes & XataRecord;

export type DatabaseSchema = {
  folders: FoldersRecord;
  RB_season: RBSeasonRecord;
  user_likes: UserLikesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Brandon-s-workspace-17i2de.us-east-1.xata.sh/db/test-auth-db",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
