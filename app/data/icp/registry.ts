import type { IcpConfig } from "./types";
import { indieHackersConfig } from "./indie-hackers";
import { aiStartupsConfig } from "./ai-startups";
import { developerToolsConfig } from "./developer-tools";
import { microSaasConfig } from "./micro-saas";
import { nocodeBuildersConfig } from "./nocode-builders";
import { affiliateSitesConfig } from "./affiliate-sites";
import { aiDirectoriesConfig } from "./ai-directories";
import { startupFoundersConfig } from "./startup-founders";

export const icpRegistry: Record<string, IcpConfig> = {
  "indie-hackers": indieHackersConfig,
  "ai-startups": aiStartupsConfig,
  "developer-tools": developerToolsConfig,
  "micro-saas": microSaasConfig,
  "nocode-builders": nocodeBuildersConfig,
  "affiliate-sites": affiliateSitesConfig,
  "ai-directories": aiDirectoriesConfig,
  "startup-founders": startupFoundersConfig,
};

export const icpSlugs = Object.keys(icpRegistry);
