import { PrismaClient } from "@prisma/client";
const client_stt_cs = new PrismaClient({
  datasources: { db: { url: "file:/home/spsither/stt_cs.sqlite" } },
});
const client_stt_tt = new PrismaClient({
  datasources: { db: { url: "file:/home/spsither/stt_tt.sqlite" } },
});
const client_stt_ns = new PrismaClient({
  datasources: { db: { url: "file:/home/spsither/stt_ns.sqlite" } },
});
export function getClient(workSpace) {
  if (workSpace === "stt_cs") {
    return client_stt_cs;
  } else if (workSpace === "stt_tt") {
    return client_stt_tt;
  } else if (workSpace === "stt_ns") {
    return client_stt_ns;
  } else {
    return null;
  }
}
