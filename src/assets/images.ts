import flowerteam640 from "./site/duotone/flowerteam-640.webp";
import flowerteam1000 from "./site/duotone/flowerteam-1000.webp";
import flowerteam1024 from "./site/duotone/flowerteam-1024.webp";
import flowerteamFallback from "./site/duotone/flowerteam-1024.jpg";

import gnesta640 from "./site/duotone/gnesta-640.webp";
import gnesta1000 from "./site/duotone/gnesta-1000.webp";
import gnesta1400 from "./site/duotone/gnesta-1400.webp";
import gnesta2025 from "./site/duotone/gnesta-2025.webp";
import gnestaFallback from "./site/duotone/gnesta-1280.jpg";

import hall640 from "./site/duotone/hall-640.webp";
import hall1000 from "./site/duotone/hall-1000.webp";
import hall1400 from "./site/duotone/hall-1400.webp";
import hall1536 from "./site/duotone/hall-1536.webp";
import hallFallback from "./site/duotone/hall-1280.jpg";

import icarus640 from "./site/duotone/icarus-640.webp";
import icarus1000 from "./site/duotone/icarus-1000.webp";
import icarus1024 from "./site/duotone/icarus-1024.webp";
import icarusFallback from "./site/duotone/icarus-1024.jpg";

import munkbro640 from "./site/duotone/munkbro-640.webp";
import munkbro1000 from "./site/duotone/munkbro-1000.webp";
import munkbro1400 from "./site/duotone/munkbro-1400.webp";
import munkbro1536 from "./site/duotone/munkbro-1536.webp";
import munkbroFallback from "./site/duotone/munkbro-1280.jpg";

import nifelhem640 from "./site/duotone/nifelhem-640.webp";
import nifelhem1000 from "./site/duotone/nifelhem-1000.webp";
import nifelhem1400 from "./site/duotone/nifelhem-1400.webp";
import nifelhem1536 from "./site/duotone/nifelhem-1536.webp";
import nifelhemFallback from "./site/duotone/nifelhem-1280.jpg";

import maskinisten640 from "./site/duotone/maskinisten-640.webp";
import maskinisten1000 from "./site/duotone/maskinisten-1000.webp";
import maskinisten1400 from "./site/duotone/maskinisten-1400.webp";
import maskinisten1605 from "./site/duotone/maskinisten-1605.webp";
import maskinistenFallback from "./site/duotone/maskinisten-1280.jpg";

import roof640 from "./site/duotone/roof-640.webp";
import roof1000 from "./site/duotone/roof-1000.webp";
import roof1400 from "./site/duotone/roof-1400.webp";
import roof1605 from "./site/duotone/roof-1605.webp";
import roofFallback from "./site/duotone/roof-1280.jpg";

import quay640 from "./site/duotone/quay-640.webp";
import quay1000 from "./site/duotone/quay-1000.webp";
import quay1400 from "./site/duotone/quay-1400.webp";
import quay1535 from "./site/duotone/quay-1535.webp";
import quayFallback from "./site/duotone/quay-1280.jpg";

export type ResponsiveImage = {
  fallback: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
};

const srcSet = (entries: [string, number][]) =>
  entries.map(([src, width]) => `${src} ${width}w`).join(", ");

const photo = (
  fallback: string,
  entries: [string, number][],
  width: number,
  height: number
): ResponsiveImage => ({
  fallback,
  srcSet: srcSet(entries),
  width,
  height,
  alt: "",
});

export const roof = photo(
  roofFallback,
  [
    [roof640, 640],
    [roof1000, 1000],
    [roof1400, 1400],
    [roof1605, 1605],
  ],
  1605,
  941
);

export const hall = photo(
  hallFallback,
  [
    [hall640, 640],
    [hall1000, 1000],
    [hall1400, 1400],
    [hall1536, 1536],
  ],
  1536,
  1024
);

export const icarus = photo(
  icarusFallback,
  [
    [icarus640, 640],
    [icarus1000, 1000],
    [icarus1024, 1024],
  ],
  1024,
  683
);

export const flowerteam = photo(
  flowerteamFallback,
  [
    [flowerteam640, 640],
    [flowerteam1000, 1000],
    [flowerteam1024, 1024],
  ],
  1024,
  323
);

export const gnesta = photo(
  gnestaFallback,
  [
    [gnesta640, 640],
    [gnesta1000, 1000],
    [gnesta1400, 1400],
    [gnesta2025, 2025],
  ],
  2025,
  637
);

export const munkbro = photo(
  munkbroFallback,
  [
    [munkbro640, 640],
    [munkbro1000, 1000],
    [munkbro1400, 1400],
    [munkbro1536, 1536],
  ],
  1536,
  911
);

export const nifelhem = photo(
  nifelhemFallback,
  [
    [nifelhem640, 640],
    [nifelhem1000, 1000],
    [nifelhem1400, 1400],
    [nifelhem1536, 1536],
  ],
  1536,
  864
);

export const maskinisten = photo(
  maskinistenFallback,
  [
    [maskinisten640, 640],
    [maskinisten1000, 1000],
    [maskinisten1400, 1400],
    [maskinisten1605, 1605],
  ],
  1605,
  900
);

export const quay = photo(
  quayFallback,
  [
    [quay640, 640],
    [quay1000, 1000],
    [quay1400, 1400],
    [quay1535, 1535],
  ],
  1535,
  1024
);
