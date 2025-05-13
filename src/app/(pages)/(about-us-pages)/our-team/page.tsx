"use client";

import { CoreTeam } from "./fragments/core-team";
import FoundationTeam  from "./fragments/foundation-team";

export default function OurTeam() {
  return (
    <>
      <CoreTeam goback={true} />
      <FoundationTeam />
    </>
  );
}
