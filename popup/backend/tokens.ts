
import type { TokenRes } from "types/token";
import type { SendResponseParams } from "types/stream";

import { MTypePopup } from "config/stream-keys";
import { Message } from "lib/stream/message";
import { warpMessage } from "lib/stream/warp-message";


export async function getFTTokens(...addresses: string[]) {
  const data = await new Message<SendResponseParams>({
    type: MTypePopup.GET_FT_STATES,
    payload: {
      addresses
    }
  }).send();
  const resolve = warpMessage(data) as TokenRes[];
  return resolve;
}