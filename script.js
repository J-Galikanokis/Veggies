// Garden Club Dominator — multi-veggie prototype matching DESIGN.md

const GARDEN = [
  { id: "kale", name: "Kale", unlockPlants: 0, firstCost: 5, baseCycle: 5, sellPrice: 1, unlocked: true },
  { id: "spinach", name: "Spinach", unlockPlants: 10, firstCost: 25, baseCycle: 20, sellPrice: 4, unlocked: false },
  { id: "beets", name: "Beets", unlockPlants: 10, firstCost: 200, baseCycle: 90, sellPrice: 20, unlocked: false },
  { id: "chard", name: "Swiss Chard", unlockPlants: 10, firstCost: 1500, baseCycle: 360, sellPrice: 100, unlocked: false },
  { id: "radishes", name: "Radishes", unlockPlants: 10, firstCost: 10000, baseCycle: 1200, sellPrice: 500, unlocked: false },
  { id: "carrots", name: "Carrots", unlockPlants: 10, firstCost: 75000, baseCycle: 3600, sellPrice: 2500, unlocked: false },
  { id: "broccoli", name: "Broccoli", unlockPlants: 10, firstCost: 500000, baseCycle: 10800, sellPrice: 15000, unlocked: false },
  { id: "peppers", name: "Bell Peppers", unlockPlants: 10, firstCost: 3500000, baseCycle: 21600, sellPrice: 80000, unlocked: false },
  { id: "tomatoes", name: "Heirloom Tomatoes", unlockPlants: 10, firstCost: 25000000, baseCycle: 43200, sellPrice: 500000, unlocked: false },
];

const SALSA = [
  { id: "onion", name: "Onions", unlockPlants: 0, firstCost: 1e15, baseCycle: 5, sellPrice: 2e14, unlocked: true, ranch: true },
  { id: "garlic", name: "Garlic", unlockPlants: 10, firstCost: 1e16, baseCycle: 20, sellPrice: 2e15, unlocked: false, ranch: true },
  { id: "cilantro", name: "Cilantro", unlockPlants: 10, firstCost: 1e17, baseCycle: 90, sellPrice: 2e16, unlocked: false, ranch: true },
  { id: "salsa-tomato", name: "Tomatoes", unlockPlants: 10, firstCost: 1e18, baseCycle: 360, sellPrice: 2e17, unlocked: false, ranch: true },
  { id: "jalapeno", name: "Jalapeños", unlockPlants: 10, firstCost: 1e19, baseCycle: 1200, sellPrice: 2e18, unlocked: false, ranch: true },
  { id: "salsa-bell", name: "Bell peppers", unlockPlants: 10, firstCost: 1e20, baseCycle: 3600, sellPrice: 2e19, unlocked: false, ranch: true },
  { id: "serrano", name: "Serrano peppers", unlockPlants: 10, firstCost: 1e21, baseCycle: 10800, sellPrice: 2e20, unlocked: false, ranch: true },
  { id: "zucchini", name: "Zucchini", unlockPlants: 10, firstCost: 1e22, baseCycle: 21600, sellPrice: 2e21, unlocked: false, ranch: true },
  { id: "tomatillo", name: "Tomatillos", unlockPlants: 10, firstCost: 1e23, baseCycle: 43200, sellPrice: 2e22, unlocked: false, ranch: true },
  { id: "salsa-carrot", name: "Carrots", unlockPlants: 10, firstCost: 1e24, baseCycle: 86400, sellPrice: 2e23, unlocked: false, ranch: true },
  { id: "celery", name: "Celery", unlockPlants: 10, firstCost: 1e25, baseCycle: 172800, sellPrice: 2e24, unlocked: false, ranch: true },
  { id: "mint", name: "Mint", unlockPlants: 10, firstCost: 1e26, baseCycle: 345600, sellPrice: 2e25, unlocked: false, ranch: true },
];

const CROPS = GARDEN.concat(SALSA);
let VEGGIES = GARDEN;

const NEIGHBORS = {
  kale:      { harvest: "Eager Neighbor Kid",      sell: "Kid with a Wagon",     speed: "Kale Growth Serum",        buy: "Allowance Kid" },
  spinach:   { harvest: "Garden Club Volunteer",   sell: "Stand Helper",         speed: "Spinach Turbo Soil",      buy: "Coupon Clipper" },
  beets:     { harvest: "Backyard Botanist",       sell: "Market Runner",        speed: "Beet Booster Blend",      buy: "Bargain Botanist" },
  chard:     { harvest: "Retired Horticulturist",  sell: "Chard Courier",        speed: "Chard Catalyst",          buy: "Cart Filler" },
  radishes:  { harvest: "Weekend Weeder",          sell: "Radish Runner",        speed: "Radish Rocket Fuel",      buy: "Row Shopper" },
  carrots:   { harvest: "Carrot Enthusiast",       sell: "Produce Porter",       speed: "Carrot Growth Cocktail",  buy: "Carrot Quartermaster" },
  broccoli:  { harvest: "Club Secretary",          sell: "Broccoli Broker",      speed: "Broccoli Boost",          buy: "Club Bookkeeper" },
  peppers:   { harvest: "Pepper Pro",              sell: "Pepper Packer",        speed: "Pepper Power Serum",      buy: "Pepper Purchaser" },
  tomatoes:  { harvest: "Master Gardener",         sell: "Tomato Tycoon",        speed: "Heirloom Hyper-Growth Formula", buy: "Tomato Treasurer" },
  onion:     { harvest: "Goggle-Free Luz",         sell: "Tissue Auntie",        speed: "Tear-Free Brine",       buy: "Pallet Tío" },
  garlic:    { harvest: "Parsley Tito",            sell: "Clove Carmen",         speed: "Midnight Rub",          buy: "Double-Batch Aunt" },
  cilantro:  { harvest: "Soap-Truther Rafa",       sell: "Bunch Bianca",         speed: "Not-Soap Tonic",        buy: "Smuggler Sol" },
  "salsa-tomato": { harvest: "Dice-Kid Diego",     sell: "Pico Pilar",           speed: "Seed-Spit Tonic",       buy: "Can-Hoarder Cruz" },
  jalapeno:  { harvest: "Glove Nephew Nito",       sell: "Heat-Check Hank",      speed: "Seed-Scrape Serum",     buy: "Mild-Liar Milo" },
  "salsa-bell": { harvest: "Soft-Hands Sofia",     sell: "Dulce the Rep",        speed: "Crunch Keeper",         buy: "Peacekeeper Paz" },
  serrano:   { harvest: "Bare-Hand Brenda",        sell: "Warning-Label Lety",   speed: "Afterburner Oil",       buy: "Pride Omar" },
  zucchini:  { harvest: "Grater Gabi",             sell: "Hidden Hugo",          speed: "Shred-and-Deny",        buy: "July Julio" },
  tomatillo: { harvest: "Husk Cata",               sell: "Verde Vero",           speed: "Husk Solvent",          buy: "Contadora Inés" },
  "salsa-carrot": { harvest: "Napper Nico",        sell: "Porter Paco",          speed: "Second-Life Soak",      buy: "Found-It Fabi" },
  celery:    { harvest: "String-Puller Pete",      sell: "Defender Dalia",       speed: "Snap-Back Tonic",       buy: "Tupperware Tere" },
  mint:      { harvest: "Mojito Mona",             sell: "Garnish Gus",          speed: "Muddle Mist",           buy: "Dessert Tono" },
};

const ART = {
  kale: "art-kale.jpg",
  spinach: "art-spinach.jpg",
  beets: "art-beets.jpg",
  chard: "art-chard.jpg",
  radishes: "art-radish.jpg",
  carrots: "art-carrot.jpg",
  broccoli: "yendy-broccoli.jpg",
  peppers: "art-pepper.jpg",
  tomatoes: "art-tomato.jpg",
  onion: "art-onion.jpg",
  garlic: "art-garlic.jpg",
  cilantro: "art-cilantro.jpg",
  "salsa-tomato": "art-salsa-tomato.jpg",
  jalapeno: "art-jalapeno.jpg",
  "salsa-bell": "art-salsa-bell.jpg",
  serrano: "art-serrano.jpg",
  zucchini: "art-zucchini.jpg",
  tomatillo: "art-tomatillo.jpg",
  "salsa-carrot": "art-salsa-carrot.jpg",
  celery: "art-celery.jpg",
  mint: "art-mint.jpg",
};

const NEIGHBOR_ART = {
  "Eager Neighbor Kid": "art-neighbor-eager-kid.jpg",
  "Kid with a Wagon": "art-neighbor-wagon.jpg",
  "Allowance Kid": "art-neighbor-allowance.jpg",
  "Garden Club Volunteer": "art-neighbor-volunteer.jpg",
  "Stand Helper": "art-neighbor-stand-helper.jpg",
  "Coupon Clipper": "art-neighbor-coupon.jpg",
  "Backyard Botanist": "art-neighbor-botanist.jpg",
  "Market Runner": "art-neighbor-market-runner.jpg",
  "Bargain Botanist": "art-neighbor-bargain.jpg",
  "Retired Horticulturist": "art-neighbor-horticulturist.jpg",
  "Chard Courier": "art-neighbor-courier.jpg",
  "Cart Filler": "art-neighbor-cart.jpg",
  "Weekend Weeder": "art-neighbor-weeder.jpg",
  "Radish Runner": "art-neighbor-radish-runner.jpg",
  "Row Shopper": "art-neighbor-row-shopper.jpg",
  "Carrot Enthusiast": "art-neighbor-enthusiast.jpg",
  "Produce Porter": "art-neighbor-porter.jpg",
  "Carrot Quartermaster": "art-neighbor-quartermaster.jpg",
  "Club Secretary": "art-neighbor-secretary.jpg",
  "Broccoli Broker": "art-neighbor-broker.jpg",
  "Club Bookkeeper": "art-neighbor-bookkeeper.jpg",
  "Pepper Pro": "art-neighbor-pepper-pro.jpg",
  "Pepper Packer": "art-neighbor-packer.jpg",
  "Pepper Purchaser": "art-neighbor-purchaser.jpg",
  "Master Gardener": "art-neighbor-master.jpg",
  "Tomato Tycoon": "art-neighbor-tycoon.jpg",
  "Tomato Treasurer": "art-neighbor-treasurer.jpg",
  "Goggle-Free Luz": "art-salsa-luz.jpg",
  "Tissue Auntie": "art-salsa-tissue.jpg",
  "Pallet Tío": "art-salsa-tio.jpg",
  "Parsley Tito": "art-salsa-tito.jpg",
  "Clove Carmen": "art-salsa-carmen.jpg",
  "Double-Batch Aunt": "art-salsa-aunt.jpg",
  "Soap-Truther Rafa": "art-salsa-rafa.jpg",
  "Bunch Bianca": "art-salsa-bianca.jpg",
  "Smuggler Sol": "art-salsa-sol.jpg",
  "Dice-Kid Diego": "art-salsa-diego.jpg",
  "Pico Pilar": "art-salsa-pilar.jpg",
  "Can-Hoarder Cruz": "art-salsa-cruz.jpg",
  "Glove Nephew Nito": "art-salsa-nito.jpg",
  "Heat-Check Hank": "art-salsa-hank.jpg",
  "Mild-Liar Milo": "art-salsa-milo.jpg",
  "Soft-Hands Sofia": "art-salsa-sofia.jpg",
  "Dulce the Rep": "art-salsa-dulce.jpg",
  "Peacekeeper Paz": "art-salsa-paz.jpg",
  "Bare-Hand Brenda": "art-salsa-brenda.jpg",
  "Warning-Label Lety": "art-salsa-lety.jpg",
  "Pride Omar": "art-salsa-omar.jpg",
  "Grater Gabi": "art-salsa-gabi.jpg",
  "Hidden Hugo": "art-salsa-hugo.jpg",
  "July Julio": "art-salsa-julio.jpg",
  "Husk Cata": "art-salsa-cata.jpg",
  "Verde Vero": "art-salsa-vero.jpg",
  "Contadora Inés": "art-salsa-ines.jpg",
  "Napper Nico": "art-salsa-nico.jpg",
  "Porter Paco": "art-salsa-paco.jpg",
  "Found-It Fabi": "art-salsa-fabi.jpg",
  "String-Puller Pete": "art-salsa-pete.jpg",
  "Defender Dalia": "art-salsa-dalia.jpg",
  "Tupperware Tere": "art-salsa-tere.jpg",
  "Mojito Mona": "art-salsa-mona.jpg",
  "Garnish Gus": "art-salsa-gus.jpg",
  "Dessert Tono": "art-salsa-tono.jpg",
};

function portrait(src) {
  return src ? `<img class="portrait" src="${src}" alt="">` : "";
}

const PRESTIGE_UPS = [
  { id: "betterSoil", name: "Better Soil", cost: 1, desc: "×2 base harvest amount" },
  { id: "enrichedCompost", name: "Enriched Compost", cost: 1, desc: "×1.5 base cycle speed" },
  { id: "ongoingSupport", name: "Ongoing Support", cost: 2, desc: "Keep Auto-Harvest, Auto-Sell, and plant buyers through prestige" },
  { id: "perpetualWinner", name: "Perpetual Winner", cost: 4, desc: "×10 Supportive Neighbor accrual" },
  { id: "springInTheStep", name: "Spring in the Step", cost: 8, desc: "Plots start already planted after a prestige" },
  { id: "blueRibbon", name: "Blue Ribbon Soil", cost: 16, desc: "Another ×2 harvest, stacked with Better Soil" },
  { id: "familiarFaces", name: "Familiar Faces", cost: 32, desc: "Keep Generous speed levels through prestige" },
  { id: "standingOrder", name: "Standing Order", cost: 64, desc: "Keep Market upgrades through prestige" },
  { id: "shoppingList", name: "Shopping List", cost: 128, desc: "Unlock a plant buyer for each veggie" },
  { id: "committeeMinutes", name: "Committee Minutes", cost: 256, desc: "Auto-buy Helpful and Generous upgrades" },
  { id: "monthlyMeeting", name: "Monthly Meeting", cost: 512, desc: "Auto-prestige once a trophy minimum is set" },
  { id: "clubBylaws", name: "Club Bylaws", cost: 1024, desc: "Set the auto-prestige trophy minimum and upgrade wait" },
  { id: "papusaRanch", name: "San Salvador Ranch", cost: 2048, desc: "Leave for San Salvador Ranch. The garden keeps paying." },
  { id: "openLevel3", name: "The Next Season", cost: 2048, desc: "Unlocks level 3. It is not open yet." },
];

const MARKET_UPS = [
  { id: "farmersMarket", key: "farmers-market", name: "Farmers Market Stand", cost: 1e6, gate: "beets", need: "Needs Beets", mult: 1.5, blurb: "+50% sell price for every veggie" },
  { id: "coopCooler", key: "coop-cooler", name: "Co-op Cooler", cost: 1e9, gate: "carrots", need: "Needs Carrots", mult: 1.5, blurb: "+50% sell price for every veggie" },
  { id: "wholesaleDock", key: "wholesale-dock", name: "Wholesale Dock", cost: 1e12, gate: "tomatoes", need: "Needs Heirloom Tomatoes", mult: 2, blurb: "×2 sell price for every veggie" },
  { id: "distributionHub", key: "distribution-hub", name: "Distribution Hub", cost: 1e15, gate: "prestige", need: "Needs 5 prestiges", mult: 2, blurb: "×2 sell price for every veggie" },
];

const RANCH_MARKETS = [
  { id: "pupuseria", key: "pupuseria", name: "Pupusería La Esquina", cost: 1e18, gate: "cilantro", need: "Needs Cilantro", mult: 1.5, blurb: "+50% sell price" },
  { id: "donaRosa", key: "dona-rosa", name: "Comal de Doña Rosa", cost: 1e21, gate: "salsa-bell", need: "Needs Bell peppers", mult: 1.5, blurb: "+50% sell price" },
  { id: "mercadoCentral", key: "mercado-central", name: "Mercado Central", cost: 1e24, gate: "tomatillo", need: "Needs Tomatillos", mult: 2, blurb: "×2 sell price" },
  { id: "feriaAgosto", key: "feria-agosto", name: "Feria de Agosto", cost: 1e27, gate: "mint", need: "Needs Mint", mult: 2, blurb: "×2 sell price" },
];

function markets() {
  return state.level === 2 ? RANCH_MARKETS : MARKET_UPS;
}

function buyNeighborCost(v) {
  return Math.floor(v.firstCost * 100);
}

function trophyLabel(n) {
  return `${n} ${n === 1 ? "trophy" : "trophies"}`;
}

function trophiesThisRun() {
  if (state.supportive < 1) return 0;
  const earned = Math.max(1, Math.floor(Math.sqrt(state.supportive)));
  if (state.prestigeCount < 5) return 1;
  return earned;
}

function nextPrestigeUpgrade() {
  return PRESTIGE_UPS.find(p => !state.prestigeUpgrades[p.id]) || null;
}

function showFirstPrestige() {
  if (document.getElementById("yendy-overlay")) return;
  state.celebrating = true;
  const overlay = document.createElement("div");
  overlay.id = "yendy-overlay";
  const sparks = Array.from({ length: 10 }, (_, i) => `<span class="fw fw-${i}"></span>`).join("");
  overlay.innerHTML = `
    <div class="fw-layer">${sparks}</div>
    <div class="farm-sign">
      <div class="farm-post"></div>
      <div class="farm-sign-board">Congratulations! You have reached the first Prestige!</div>
      <div class="farm-post"></div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
    state.celebrating = false;
  }, 5000);
}

function showYendy() {
  state.yendySpeed = true;
  if (document.getElementById("yendy-overlay")) return;
  state.celebrating = true;
  const overlay = document.createElement("div");
  overlay.id = "yendy-overlay";
  overlay.innerHTML = `
    <div class="yendy-card">
      <img src="yendy-broccoli.jpg" alt="" class="yendy-broccoli">
      <div class="yendy-sign">Yendy's Special Reward!!<span>+50% speed for every veggie</span></div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
    state.celebrating = false;
  }, 5000);
}

function showPortrait(id, image, title, line) {
  if (document.getElementById(id)) return;
  state.celebrating = true;
  const overlay = document.createElement("div");
  overlay.id = id;
  overlay.innerHTML = `
    <div class="yendy-card">
      <img src="${image}" alt="" class="wrong-portrait">
      <div class="yendy-sign">${title}<span>${line}</span></div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
    state.celebrating = false;
  }, 5000);
}

function showWrongWay() {
  showPortrait("wrong-overlay", "row-inspector.jpg", "Obsessive Compulsive", "You're playing it wrong!");
}

function cheapestCoinUpgrade() {
  let best = null;
  const consider = (cost, apply) => {
    if (state.coins < cost) return;
    if (!best || cost < best.cost) best = { cost, apply };
  };
  VEGGIES.forEach(v => {
    if (!v.unlocked) return;
    const plot = state.plots[v.id];
    const up = state.upgrades[v.id];
    const harvestCost = v.id === "kale" ? 100 : Math.floor(v.firstCost * 10);
    const sellCost = v.id === "kale" ? 500 : Math.floor(v.firstCost * 50);
    if (plot.plants >= 1 && !up.harvest) consider(harvestCost, () => { up.harvest = true; plot.autoHarvest = true; });
    if (plot.plants >= 10 && !up.sell) consider(sellCost, () => { up.sell = true; plot.autoSell = true; });
    if (state.prestigeUpgrades.shoppingList && up.harvest && !up.buy) {
      consider(buyNeighborCost(v), () => { up.buy = true; plot.autoBuy = true; });
    }
    const availableSpeed = Math.floor(plot.plants / 10);
    if (availableSpeed > up.speedBought) {
      const cost = Math.floor(v.firstCost * 500 * Math.pow(1.5, up.speedBought));
      consider(cost, () => { up.speedBought++; plot.speedLevels++; });
    }
  });
  const unlockedCount = VEGGIES.filter(v => v.unlocked).length;
  if (unlockedCount >= 3 && unlockedCount % 3 === 0) {
    const teaCost = Math.floor(25000 * Math.pow(1.5, state.globalSpeedLevels));
    consider(teaCost, () => {
      state.globalSpeed *= 1.25;
      state.globalSpeedLevels++;
      if (state.level !== 2) state.gardenTeaLevels = state.globalSpeedLevels;
      VEGGIES.forEach(v => {
        if (v.unlocked && !state.globalSpeedAffected.includes(v.id)) state.globalSpeedAffected.push(v.id);
      });
    });
  }
  return best;
}

function maybeAutoPrestige() {
  if (state.celebrating || !state.prestigeUpgrades.monthlyMeeting || state.autoPrestigeMin == null) return;
  if (state.supportive < 1) return;
  const earned = trophiesThisRun();
  if (earned < state.autoPrestigeMin) return;
  if (state.prestigeUpgrades.clubBylaws && state.waitForNextUpgrade) {
    const next = nextPrestigeUpgrade();
    if (next && state.trophies + earned < next.cost) return;
  }
  prestige();
}

function marketReady(m) {
  if (m.gate === "prestige") return state.prestigeCount >= 5;
  const veg = VEGGIES.find(v => v.id === m.gate);
  return !!veg?.unlocked;
}

const state = {
  coins: 0,
  supportive: 0,
  trophies: 0,
  prestigeUpgrades: {
    betterSoil: false,
    enrichedCompost: false,
    ongoingSupport: false,
    perpetualWinner: false,
    springInTheStep: false,
    blueRibbon: false,
    familiarFaces: false,
    standingOrder: false,
    shoppingList: false,
    committeeMinutes: false,
    monthlyMeeting: false,
    clubBylaws: false,
    papusaRanch: false,
    openLevel3: false,
  },
  marketUpgrades: {
    farmersMarket: false,
    coopCooler: false,
    wholesaleDock: false,
    distributionHub: false,
    pupuseria: false,
    donaRosa: false,
    mercadoCentral: false,
    feriaAgosto: false,
  },
  marketAffected: {
    farmersMarket: [],
    coopCooler: [],
    wholesaleDock: [],
    distributionHub: [],
    pupuseria: [],
    donaRosa: [],
    mercadoCentral: [],
    feriaAgosto: [],
  },
  prestigeSeen: false,
  firstNeighborAwarded: false,
  seenFirstPrestige: false,
  prestigeCount: 0,
  yendySpeed: false,
  achievements: {},
  achieveNew: false,
  lifetime: { harvests: 0, gardenHarvests: 0, ranchHarvests: 0, plantsBought: 0, peakCoins: 0, gardenPeak: 0 },
  betterSoil: 1,
  buyMode: 1, // legacy, now per-plot
  globalSpeed: 1,
  globalSpeedLevels: 0,
  gardenTeaLevels: 0,
  globalSpeedAffected: [],
  timeScale: 1,
  plots: {},
  upgrades: {},
  hideOwnedHelpful: false,
  upgradeAutobuy: true,
  autoPrestigeMin: null,
  waitForNextUpgrade: false,
  upgradeBuyCooldown: 0,
  celebrating: false,
  notified: {},
  level: 1,
  ranchUnlocked: false,
  testingRanch: false,
  gardenStipend: 0,
  pupusaSpeed: false,
  ranchStarted: false,
  level3Unlocked: false,
  onionHarvested: false,
  hideLevelJump: false,
  savedSupportive: null,
};

CROPS.forEach(v => {
  state.plots[v.id] = {
    plants: v.unlocked ? 1 : 0,
    plantCost: v.firstCost,
    inventory: 0,
    progress: 0,
    growing: false,
    ready: false,
    hasStarted: false,
    autoHarvest: false,
    autoSell: false,
    speedLevels: 0,
    buyMode: 1,
    autoBuy: false,
  };
  state.upgrades[v.id] = { harvest: false, sell: false, buy: false, speedBought: 0 };
});

const coinsEl = document.getElementById("coins");
const coinRateEl = document.getElementById("coin-rate");
const supportiveEl = document.getElementById("supportive");
const trophiesEl = document.getElementById("trophies");
const plotsEl = document.getElementById("plots");
const helpfulList = document.getElementById("helpful-list");
const generousList = document.getElementById("generous-list");
const prestigeBtn = document.getElementById("prestige-btn");
const prestigeInfo = document.getElementById("prestige-info");

function format(n) {
  if (!isFinite(n)) return "∞";
  const sign = n < 0 ? "-" : "";
  n = Math.abs(n);
  if (n < 1000) return sign + Math.floor(n).toString();
  const suffixes = ["", "k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
  let tier = Math.floor(Math.log10(n) / 3);
  if (tier >= suffixes.length) tier = suffixes.length - 1;
  const scaled = n / Math.pow(1000, tier);
  return sign + scaled.toFixed(1) + suffixes[tier];
}

function formatHarvestRate(perSec) {
  if (!isFinite(perSec) || perSec <= 0) return "0/s";
  if (perSec >= 1) {
    const n = perSec >= 100 ? Math.round(perSec) : perSec >= 10 ? perSec.toFixed(1) : perSec.toFixed(2);
    return `${n}/s`;
  }
  let value = 1 / perSec;
  let label = "s";
  const ladder = [[60, "s", "min"], [60, "min", "hour"], [24, "hour", "day"], [7, "day", "week"], [52, "week", "year"]];
  for (const [size, from, to] of ladder) {
    if (label !== from || value < size) break;
    value /= size;
    label = to;
  }
  const n = value >= 10 ? value.toFixed(1) : value.toFixed(2);
  return `1 / ${n}${label}`;
}

function formatCoinRate(perSec) {
  if (!isFinite(perSec) || perSec <= 0) return "0 c/s";
  if (perSec >= 1) return `${format(perSec)} c/s`;
  let value = 1 / perSec;
  let label = "s";
  const ladder = [[60, "s", "min"], [60, "min", "hour"], [24, "hour", "day"], [7, "day", "week"], [52, "week", "year"]];
  for (const [size, from, to] of ladder) {
    if (label !== from || value < size) break;
    value /= size;
    label = to;
  }
  const n = value >= 10 ? value.toFixed(1) : value.toFixed(2);
  return `1 c / ${n}${label}`;
}

function coinRatePerSec() {
  let perSec = 0;
  VEGGIES.forEach(v => {
    if (!v.unlocked) return;
    const plot = state.plots[v.id];
    if (!plot.autoSell || !plot.hasStarted) return;
    if (plot.ready && !plot.autoHarvest) return;
    const cycle = getCycleTime(v, plot);
    if (!(cycle > 0)) return;
    perSec += (getYield(plot) / cycle) * getSellPrice(v);
  });
  if (state.level === 2) perSec += state.ranchUnlocked ? state.gardenStipend : boardRate(GARDEN);
  return perSec;
}

function boardRate(list) {
  let perSec = 0;
  list.forEach(v => {
    if (!v.unlocked) return;
    const plot = state.plots[v.id];
    if (!plot || !plot.autoSell || !plot.hasStarted) return;
    if (plot.ready && !plot.autoHarvest) return;
    const cycle = getCycleTime(v, plot);
    if (!(cycle > 0)) return;
    perSec += (getYield(plot) / cycle) * getSellPrice(v);
  });
  return perSec;
}

function getSellPrice(veggie) {
  let mult = 1;
  const list = veggie.ranch ? RANCH_MARKETS : MARKET_UPS;
  list.forEach(m => {
    if (state.marketUpgrades[m.id]) mult *= m.mult;
  });
  if (veggie.ranch && state.achievements.tresLeches) mult *= 2;
  return veggie.sellPrice * mult;
}

function getYield(plot) {
  const plantMult = Math.pow(1.02, plot.plants);
  let soil = 1;
  if (state.prestigeUpgrades.betterSoil) soil *= 2;
  if (state.prestigeUpgrades.blueRibbon) soil *= 2;
  return plot.plants * soil * plantMult;
}

const SUPPORTIVE_SCALE = 300000;
function addSupportive(veggie, amount) {
  if (!veggie || amount <= 0) return;
  if (!state.firstNeighborAwarded && !veggie.ranch) return;
  const mult = state.prestigeUpgrades.perpetualWinner ? 10 : 1;
  const scale = veggie.ranch ? SUPPORTIVE_SCALE * SALSA[0].sellPrice : SUPPORTIVE_SCALE;
  state.supportive += (amount * veggie.sellPrice * mult) / scale;
}

function getCycleTime(veggie, plot) {
  const batches = Math.floor(plot.plants / 25);
  const plantSpeed = Math.pow(1.02, plot.plants);
  let globalMult = 1;
  if (state.globalSpeedAffected.includes(veggie.id)) {
    globalMult = state.globalSpeed;
  }
  const compost = state.prestigeUpgrades.enrichedCompost ? 1.5 : 1;
  const yendy = state.yendySpeed ? 1.5 : 1;
  const pupusa = veggie.ranch && state.pupusaSpeed ? 1.5 : 1;
  const speedMult = (1 + plot.speedLevels * 0.10) * globalMult * plantSpeed * compost * yendy * pupusa;
  return veggie.baseCycle * Math.pow(0.90, batches) / speedMult;
}

function crewName() {
  return state.level === 2 ? "Compadres" : "Supportive Neighbors";
}

function visiblePrestige() {
  return PRESTIGE_UPS.filter(p => {
    if (p.id === "papusaRanch") return state.marketUpgrades.distributionHub || state.prestigeUpgrades.papusaRanch;
    if (p.id === "openLevel3") return state.level === 2 && (state.marketUpgrades.feriaAgosto || state.prestigeUpgrades.openLevel3);
    return true;
  });
}

function applyChrome() {
  const ranch = state.level === 2;
  document.body.classList.toggle("ranch", ranch);
  const sub = document.querySelector(".subtitle");
  if (sub) sub.textContent = ranch ? "San Salvador Ranch" : 'Yendy\'s competition for "Gardener of the Month"!';
  const coin = document.querySelector(".stat-icon");
  if (coin) coin.src = ranch ? "art-salsa-coin.jpg" : "art-coin.jpg";
  const tab = document.querySelector('[data-tab="garden"]');
  if (tab) tab.textContent = ranch ? "Ranch" : "Garden";
  const crewBtn = document.getElementById("crew-label");
  if (crewBtn) crewBtn.textContent = crewName();
  const marketTitle = document.getElementById("market-title");
  if (marketTitle) marketTitle.textContent = ranch ? "Market: Pupusería" : "Market: Rickety Roadside Stand";
  const marketIcon = document.getElementById("market-icon");
  if (marketIcon) marketIcon.src = ranch ? "art-salsa-market.jpg" : "art-market.jpg";
  const trophyIcon = document.getElementById("trophy-icon");
  if (trophyIcon) trophyIcon.src = ranch ? "art-salsa-trophy.jpg" : "art-trophy.jpg";
  const compadreIcon = document.getElementById("compadre-icon");
  if (compadreIcon) {
    compadreIcon.style.display = ranch ? "inline-block" : "none";
    compadreIcon.src = "art-salsa-compadre.jpg";
  }
  const crewCount = document.getElementById("crew-count-label");
  if (crewCount) crewCount.textContent = crewName() + ":";
  const banner = document.getElementById("prestige-banner");
  if (banner) banner.textContent = ranch
    ? "Prestige is available. Open Upgrades, then Compadres."
    : "Prestige is available. Open Upgrades, then Supportive Neighbors.";
  const jump = document.getElementById("ranch-jump");
  if (jump) {
    jump.style.display = state.ranchUnlocked || state.hideLevelJump ? "none" : "inline-block";
    jump.textContent = ranch ? "Garden" : "San Salvador Ranch";
  }
  const firstNote = document.getElementById("first-note");
  if (firstNote) {
    firstNote.textContent = ranch
      ? "Compadres accrue from harvests, same as the garden."
      : "The first prestige unlocks at 2 tomato plants.";
  }
}

function startOnion() {
  const plot = state.plots.onion;
  if (state.ranchStarted) return;
  state.ranchStarted = true;
  SALSA[0].unlocked = true;
  plot.plants = 1;
  plot.plantCost = 1e15;
  plot.hasStarted = true;
  plot.growing = true;
  plot.ready = false;
  plot.progress = 0;
  plot.inventory = 0;
}

function enterRanch(permanent) {
  if (state.level !== 2) {
    state.savedSupportive = state.supportive;
    state.supportive = 0;
  }
  if (permanent && !state.ranchUnlocked) {
    GARDEN.forEach(v => {
      const plot = state.plots[v.id];
      if (plot.inventory > 0) {
        state.coins += plot.inventory * getSellPrice(v);
        plot.inventory = 0;
      }
    });
    state.gardenStipend = boardRate(GARDEN) * 2;
    state.ranchUnlocked = true;
    state.savedSupportive = null;
    state.achievements.pinche = true;
    showPinche();
  }
  state.testingRanch = !permanent && !state.ranchUnlocked;
  state.level = 2;
  VEGGIES = SALSA;
  startOnion();
  lastUnlockState = "";
  lastUpgradeState = "";
  const marketEl = document.getElementById("market-upgrades");
  if (marketEl) marketEl.dataset.key = "";
  const list = document.getElementById("supportive-list");
  if (list) list.dataset.key = "";
  applyChrome();
  updateUI();
}

function leaveTest() {
  if (state.ranchUnlocked) return;
  if (typeof state.savedSupportive === "number") {
    state.supportive = state.savedSupportive;
    state.savedSupportive = null;
  }
  state.testingRanch = false;
  state.level = 1;
  VEGGIES = GARDEN;
  lastUnlockState = "";
  lastUpgradeState = "";
  const marketEl = document.getElementById("market-upgrades");
  if (marketEl) marketEl.dataset.key = "";
  const list = document.getElementById("supportive-list");
  if (list) list.dataset.key = "";
  applyChrome();
  updateUI();
}

function showPinche() {
  showPortrait("wrong-overlay", "art-pinche-pat.jpg", "Pinche Tu", "Two what? Tu Madre.");
}

function showSuper() {
  showPortrait("wrong-overlay", "art-salsa-inspector.jpg", "Super Obsessed", "You're doing it again!");
}

function showDonLeche(title, line) {
  showPortrait("wrong-overlay", "art-don-leche.jpg", title, line);
}

let lastUnlockState = "";

let lastUpgradeState = "";

function updateUI() {
  coinsEl.textContent = format(state.coins);
  if (coinRateEl) coinRateEl.textContent = formatCoinRate(coinRatePerSec());
  if (supportiveEl) supportiveEl.textContent = state.supportive.toFixed(2);
  if (trophiesEl) trophiesEl.textContent = state.trophies;

  // Red dots — only when something is actually affordable and unlocked
  const upgradesDot = document.getElementById("upgrades-dot");
  const helpfulDot = document.getElementById("helpful-dot");
  const generousDot = document.getElementById("generous-dot");

  let helpfulNew = false;
  let generousNew = false;
  let supportiveNew = false;
  VEGGIES.forEach(v => {
    if (!v.unlocked) return;
    const plot = state.plots[v.id];
    const up = state.upgrades[v.id];
    const harvestCost = v.id === "kale" ? 100 : Math.floor(v.firstCost * 10);
    const sellCost = v.id === "kale" ? 500 : Math.floor(v.firstCost * 50);
    if (!up.harvest && state.coins >= harvestCost) helpfulNew = true;
    if (plot.plants >= 10 && !up.sell && state.coins >= sellCost) helpfulNew = true;
    if (state.prestigeUpgrades.shoppingList && up.harvest && !up.buy && state.coins >= buyNeighborCost(v)) helpfulNew = true;
    const availableSpeed = Math.floor(plot.plants / 10);
    if (availableSpeed > up.speedBought) {
      const cost = Math.floor(v.firstCost * 500 * Math.pow(1.5, up.speedBought));
      if (state.coins >= cost) generousNew = true;
    }
  });

  if (state.prestigeSeen || state.level === 2) {
    visiblePrestige().forEach(p => {
      if (!state.prestigeUpgrades[p.id] && state.trophies >= p.cost) supportiveNew = true;
    });
  }

  if (upgradesDot) {
    const any = helpfulNew || generousNew || supportiveNew;
    upgradesDot.style.display = any ? "inline-block" : "none";
    const tabBtn = document.getElementById("upgrades-tab-btn");
    if (tabBtn) tabBtn.classList.toggle("has-upgrade", any);
  }
  if (helpfulDot) helpfulDot.style.display = helpfulNew ? "inline-block" : "none";
  if (generousDot) generousDot.style.display = generousNew ? "inline-block" : "none";
  const supportiveDot = document.getElementById("supportive-dot");
  if (supportiveDot) supportiveDot.style.display = supportiveNew ? "inline-block" : "none";

  const unlockState = VEGGIES.map(v => (v.unlocked ? "1" : "0")).join("");
  const needsRebuild = plotsEl.children.length === 0 || unlockState !== lastUnlockState;
  lastUnlockState = unlockState;

  if (needsRebuild) {
    plotsEl.innerHTML = "";
    VEGGIES.forEach((v, idx) => {
      if (!v.unlocked) return; // only show unlocked veggies

      const plot = state.plots[v.id];
      const div = document.createElement("div");
      div.className = "plot";
      div.dataset.veggie = v.id;

      div.innerHTML = `
        <div class="plot-head">
          <h3 class="plot-name">${portrait(ART[v.id])}<span>${v.name}</span></h3>
          <button type="button" class="info-btn" data-info="${v.id}" aria-label="Upgrades for ${v.name}">i</button>
          <span class="plant-count"></span>
        </div>
        <div class="progress-container">
          <div class="progress-bar"></div>
          <div class="progress-text"></div>
        </div>
        <div class="button-row">
          <button class="action" data-action="${v.id}"></button>
          <button class="buy" data-buy="${v.id}"></button>
          <button class="buy-mode" data-mode="${v.id}">x1</button>
        </div>
        <button class="sell" data-sell="${v.id}"></button>
        <p class="small stats-info"></p>
        <div class="plot-pop"></div>
      `;
      plotsEl.appendChild(div);
    });

    // Always show next locked veggie once previous is unlocked
    const nextLocked = VEGGIES.find(v => !v.unlocked);
    if (nextLocked) {
      const prev = VEGGIES[VEGGIES.indexOf(nextLocked) - 1];
      if (prev && state.plots[prev.id] && (prev.unlocked || state.plots[prev.id].plants > 0)) {
        const prevPlot = state.plots[prev.id];
        const canUnlock = prevPlot.plants >= nextLocked.unlockPlants && state.coins >= nextLocked.firstCost;
        const div = document.createElement("div");
        div.className = "plot";
        div.innerHTML = `
          <h3 class="plot-name">${portrait(ART[nextLocked.id])}<span>${nextLocked.name} (Locked)</span></h3>
          <p class="small">Unlocks at ${nextLocked.unlockPlants} ${prev.name} plants · First plant: ${format(nextLocked.firstCost)} c</p>
          <button class="buy" data-unlock="${nextLocked.id}" ${canUnlock ? "" : "disabled"}>
            Unlock (${format(nextLocked.firstCost)} c)
          </button>
        `;
        plotsEl.appendChild(div);
      }
    }
  }

  // Update existing plot elements (only unlocked ones are in the DOM)
  VEGGIES.forEach(v => {
    if (!v.unlocked) return;
    const div = plotsEl.querySelector(`[data-veggie="${v.id}"]`);
    if (!div) return;
    const plot = state.plots[v.id];

    const cycle = getCycleTime(v, plot);
    const yieldAmt = getYield(plot);

    const bar = div.querySelector(".progress-bar");
    const text = div.querySelector(".progress-text");
    const actionBtn = div.querySelector(".action");
    const buyBtn = div.querySelector(".buy");
    const sellBtn = div.querySelector(".sell");
    const yieldInfo = div.querySelector(".stats-info");
    const modeBtn = div.querySelector(".buy-mode");
    const plantCount = div.querySelector(".plant-count");

    if (bar) {
      const perSec = cycle > 0 ? yieldAmt / cycle : 0;
      const fast = plot.hasStarted && perSec >= 10;
      bar.style.width = fast ? "100%" : Math.min(100, plot.progress * 100) + "%";
    }
    if (text) {
      const perSec = cycle > 0 ? yieldAmt / cycle : 0;
      if (!plot.hasStarted) text.textContent = "Ready to plant";
      else if (plot.ready && !plot.autoHarvest) text.textContent = "Ready!";
      else text.textContent = formatHarvestRate(perSec);
    }
    if (actionBtn) {
      actionBtn.textContent = !plot.hasStarted ? "Plant" : "Harvest";
      actionBtn.disabled = plot.growing && !plot.ready;
    }
    if (buyBtn) {
      const mode = plot.buyMode || 1;
      const modeLabel = mode === "max" ? "Max" : `x${mode}`;
      let totalCost = 0;
      let tempCost = plot.plantCost;
      if (mode === "max") {
        let guard = 0;
        while (totalCost + tempCost <= state.coins && guard < 400) {
          totalCost += tempCost;
          tempCost = Math.max(tempCost + 1, Math.ceil(tempCost * 1.15));
          guard++;
        }
        if (totalCost === 0) totalCost = plot.plantCost;
      } else {
        const count = Number(mode) || 1;
        for (let i = 0; i < count; i++) {
          totalCost += tempCost;
          tempCost = Math.max(tempCost + 1, Math.ceil(tempCost * 1.15));
        }
      }
      buyBtn.textContent = `Buy ${modeLabel} (${format(totalCost)} c)`;
      buyBtn.disabled = !plot.hasStarted || state.coins < totalCost;
    }
    if (sellBtn) {
      sellBtn.textContent = plot.autoSell ? "Auto" : `Sell (${format(plot.inventory * getSellPrice(v))} c)`;
      sellBtn.disabled = plot.autoSell || plot.inventory <= 0;
    }
    if (modeBtn) {
      const mode = plot.buyMode || 1;
      modeBtn.textContent = mode === "max" ? "Max" : "x" + mode;
    }
    if (yieldInfo) {
      const perMinute = (yieldAmt / cycle) * 60;
      const incomePerMin = perMinute * getSellPrice(v);
      const usePerSec = perMinute > 1000;
      const rate = usePerSec ? (perMinute / 60).toFixed(1) + "/s" : perMinute.toFixed(1) + "/min";
      const income = usePerSec ? (incomePerMin / 60).toFixed(1) + "/s" : incomePerMin.toFixed(1) + "/min";
      const speedPct = Math.round(plot.speedLevels * 10);
      const mults = [];
      if (speedPct > 0) mults.push(`+${speedPct}% spd`);
      if (state.globalSpeedAffected.includes(v.id) && state.globalSpeed > 1) mults.push(`×${state.globalSpeed.toFixed(2)} tea`);
      if (state.yendySpeed) mults.push("×1.5 Yendy");
      if (v.ranch && state.pupusaSpeed) mults.push("×1.5 pupusa");
      const multText = mults.length ? ` · ${mults.join(" ")}` : "";
      yieldInfo.textContent = `Inv: ${format(plot.inventory)} · Prod: ${rate} · Income: ${income}${multText}`;
    }
    if (plantCount) plantCount.textContent = format(plot.plants);

    const pop = div.querySelector(".plot-pop");
    if (pop) {
      const up = state.upgrades[v.id];
      const lines = [];
      lines.push(up.harvest ? "Auto-Harvest: on" : "Auto-Harvest: off");
      lines.push(up.sell ? "Auto-Sell: on" : "Auto-Sell: off");
      lines.push(up.speedBought > 0 ? `Speed upgrades: ${up.speedBought} (+${up.speedBought * 10}%)` : "Speed upgrades: none");
      lines.push(`Per plant: ×${Math.pow(1.02, plot.plants).toFixed(2)} harvest and speed`);
      if (state.prestigeUpgrades.betterSoil) lines.push("Better Soil: ×2 harvest");
      if (state.prestigeUpgrades.blueRibbon) lines.push("Blue Ribbon Soil: ×2 harvest");
      if (state.prestigeUpgrades.enrichedCompost) lines.push("Enriched Compost: ×1.5 speed");
      if (state.yendySpeed) lines.push("Yendy: ×1.5 speed");
      if (v.ranch && state.pupusaSpeed) lines.push("Pupusas: ×1.5 speed");
      if (state.globalSpeedAffected.includes(v.id) && state.globalSpeed > 1) lines.push(`Compost tea: ×${state.globalSpeed.toFixed(2)} speed`);
      if (v.ranch && state.achievements.tresLeches) lines.push("Tres Leches: ×2 sell");
      const sellMult = getSellPrice(v) / v.sellPrice;
      if (sellMult > 1.001) lines.push(`Market sell: ×${sellMult.toFixed(2)}`);
      const popKey = lines.join("|");
      if (pop.dataset.key !== popKey) {
        pop.dataset.key = popKey;
        pop.innerHTML = `<strong>${v.name} upgrades</strong>` + lines.map(l => `<div>${l}</div>`).join("");
      }
    }
  });

  // Update unlock button if present
  const unlockBtn = plotsEl.querySelector("[data-unlock]");
  if (unlockBtn) {
    const nextLocked = VEGGIES.find(v => !v.unlocked);
    if (nextLocked) {
      const prev = VEGGIES[VEGGIES.indexOf(nextLocked) - 1];
      const prevPlot = state.plots[prev.id];
      const canUnlock = prevPlot.plants >= nextLocked.unlockPlants && state.coins >= nextLocked.firstCost;
      unlockBtn.disabled = !canUnlock;
    }
  }
  // Dynamic upgrade lists
  const upgradeState = VEGGIES.map(v => 
    `${v.unlocked}:${state.plots[v.id].plants}:${state.upgrades[v.id].harvest}:${state.upgrades[v.id].sell}:${state.upgrades[v.id].buy}:${state.upgrades[v.id].speedBought}`
  ).join("|") + `|${state.hideOwnedHelpful}|${state.prestigeUpgrades.shoppingList}|${state.globalSpeed}|${state.globalSpeedLevels}|${state.marketUpgrades.farmersMarket}`;

  if (upgradeState !== lastUpgradeState) {
    lastUpgradeState = upgradeState;

    let helpfulHTML = "";
    let generousHTML = "";

    VEGGIES.forEach(v => {
      if (!v.unlocked) return;
      const plot = state.plots[v.id];
      const up = state.upgrades[v.id];
      const names = NEIGHBORS[v.id];
      const harvestCost = v.id === "kale" ? 100 : Math.floor(v.firstCost * 10);
      const sellCost = v.id === "kale" ? 500 : Math.floor(v.firstCost * 50);
      const baseSpeedCost = Math.floor(v.firstCost * 500);

      if (plot.plants >= 1 && !(state.hideOwnedHelpful && up.harvest)) {
        helpfulHTML += `
          <div class="upgrade-card card-with-art" data-upgrade="harvest-${v.id}">
            ${portrait(NEIGHBOR_ART[names.harvest])}
            <div>
            <strong>${names.harvest}</strong> ${!up.harvest && state.coins >= harvestCost ? '<span class="red-dot"></span>' : ''}
            <p class="small">Auto-harvests ${v.name}</p>
            <button type="button" class="buy" data-upgrade="harvest-${v.id}" data-cost="${harvestCost}" data-owned="${up.harvest ? "1" : "0"}">
              ${up.harvest ? "Owned" : `Buy (${format(harvestCost)} c)`}
            </button>
            </div>
          </div>`;
      }

      if (plot.plants >= 10 && !(state.hideOwnedHelpful && up.sell)) {
        helpfulHTML += `
          <div class="upgrade-card card-with-art" data-upgrade="sell-${v.id}">
            ${portrait(NEIGHBOR_ART[names.sell])}
            <div>
            <strong>${names.sell}</strong> ${!up.sell && state.coins >= sellCost ? '<span class="red-dot"></span>' : ''}
            <p class="small">Auto-sells ${v.name}</p>
            <button type="button" class="buy" data-upgrade="sell-${v.id}" data-cost="${sellCost}" data-owned="${up.sell ? "1" : "0"}">
              ${up.sell ? "Owned" : `Buy (${format(sellCost)} c)`}
            </button>
            </div>
          </div>`;
      }

      if (state.prestigeUpgrades.shoppingList && up.harvest && !(state.hideOwnedHelpful && up.buy)) {
        const cost = buyNeighborCost(v);
        helpfulHTML += `
          <div class="upgrade-card card-with-art" data-upgrade="buy-${v.id}">
            ${portrait(NEIGHBOR_ART[names.buy])}
            <div>
            <strong>${names.buy}</strong> ${!up.buy && state.coins >= cost ? '<span class="red-dot"></span>' : ''}
            <p class="small">Auto-buys ${v.name} plants</p>
            <button type="button" class="buy" data-upgrade="buy-${v.id}" data-cost="${cost}" data-owned="${up.buy ? "1" : "0"}">
              ${up.buy ? "Owned" : `Buy (${format(cost)} c)`}
            </button>
            </div>
          </div>`;
      }

      const availableSpeed = Math.floor(plot.plants / 10);
      if (availableSpeed > up.speedBought) {
        const cost = Math.floor(baseSpeedCost * Math.pow(1.5, up.speedBought));
        generousHTML += `
          <div class="upgrade-card card-with-art" data-upgrade="speed-${v.id}">
            ${portrait(ART[v.id])}
            <div>
            <strong>${names.speed} ${up.speedBought + 1}</strong> ${state.coins >= cost ? '<span class="red-dot"></span>' : ''}
            <p class="small">+10% speed for ${v.name}</p>
            <button type="button" class="buy" data-upgrade="speed-${v.id}" data-cost="${cost}" data-owned="0">
              Buy Lvl ${up.speedBought + 1} (${format(cost)} c)
            </button>
            </div>
          </div>`;
      }
    });

    const unlockedCount = VEGGIES.filter(v => v.unlocked).length;
    const teaBase = state.level === 2 ? 5e18 : 25000;
    const boardFull = unlockedCount >= VEGGIES.length;
    const teaReady = unlockedCount >= 3 && (boardFull || state.globalSpeedLevels < Math.floor(unlockedCount / 3));
    if (teaReady) {
      const teaCost = Math.floor(teaBase * Math.pow(1.5, state.globalSpeedLevels));
      generousHTML += `
        <div class="upgrade-card" data-upgrade="global-speed">
          <strong>Neighborhood Compost Tea ${state.globalSpeedLevels + 1}</strong> ${state.coins >= teaCost ? '<span class="red-dot"></span>' : ''}
          <p class="small">+25% speed for veggies unlocked at purchase</p>
          <button type="button" class="buy" data-upgrade="global-speed" data-cost="${teaCost}" data-owned="0">
            Buy (${format(teaCost)} c)
          </button>
        </div>`;
    }

    helpfulList.innerHTML = helpfulHTML || "<p class='small'>Unlock veggies to hire neighbors.</p>";
    generousList.innerHTML = generousHTML || "<p class='small'>Grow plants to unlock speed upgrades.</p>";
  }

  const marketKey = markets().map(m => `${m.id}:${marketReady(m)}:${state.marketUpgrades[m.id]}:${state.prestigeCount}:${state.level}`).join("|");
  const marketUpgradesEl = document.getElementById("market-upgrades");
  if (marketUpgradesEl && marketKey !== marketUpgradesEl.dataset.key) {
    marketUpgradesEl.dataset.key = marketKey;
    const icon = state.level === 2 ? "art-salsa-market.jpg" : "art-market.jpg";
    marketUpgradesEl.innerHTML = markets().map(m => {
      const unlocked = marketReady(m);
      const owned = state.marketUpgrades[m.id];
      return `
      <div class="upgrade-card card-with-art" data-upgrade="${m.key}">
        ${portrait(icon)}
        <div>
        <strong>${m.name}</strong>
        <p class="small">${m.blurb}${unlocked || owned ? "" : ` · ${m.need}`}</p>
        <button type="button" class="buy" data-upgrade="${m.key}" data-cost="${m.cost}" data-owned="${owned ? "1" : "0"}" ${unlocked ? "" : "disabled data-locked=\"1\""}>
          ${owned ? "Owned" : `Purchase (${format(m.cost)} c)`}
        </button>
        </div>
      </div>`;
    }).join("");
  }

  const supportiveList = document.getElementById("supportive-list");
  const prestigeKey = `${state.prestigeSeen}|${state.trophies}|${state.level}|${state.marketUpgrades.distributionHub}|${state.marketUpgrades.feriaAgosto}|${visiblePrestige().map(p => state.prestigeUpgrades[p.id]).join("")}`;
  if (supportiveList && prestigeKey !== supportiveList.dataset.key) {
    supportiveList.dataset.key = prestigeKey;
    if (!(state.prestigeSeen || state.level === 2)) {
      supportiveList.innerHTML = `<p class="small">Unlock Broccoli to reveal trophy upgrades.</p>`;
    } else {
      supportiveList.innerHTML = visiblePrestige().map(p => {
        const owned = state.prestigeUpgrades[p.id];
        return `
        <div class="upgrade-card" data-upgrade="prestige-${p.id}">
          <strong>${p.name}</strong>
          <p class="small">${p.desc}</p>
          <button type="button" class="buy" data-upgrade="prestige-${p.id}" data-cost="${p.cost}" data-currency="trophies" data-owned="${owned ? "1" : "0"}">
            ${owned ? "Owned" : `Buy (${trophyLabel(p.cost)})`}
          </button>
        </div>`;
      }).join("");
    }
  }

  document.querySelectorAll("button[data-cost]").forEach(btn => {
    const owned = btn.dataset.owned === "1";
    const locked = btn.dataset.locked === "1";
    const cost = Number(btn.dataset.cost);
    const purse = btn.dataset.currency === "trophies" ? state.trophies : state.coins;
    btn.classList.toggle("cant-afford", !owned && !locked && purse < cost);
  });

  const broccoliUnlocked = GARDEN.find(v => v.id === "broccoli")?.unlocked;
  if (broccoliUnlocked) state.prestigeSeen = true;
  const canPrestige = state.supportive >= 1;
  prestigeBtn.disabled = !canPrestige;
  prestigeBtn.classList.toggle("ready", canPrestige);
  const crew = crewName();
  const accrualNote = state.level === 2
    ? `Harvests add Compadres on the ranch scale${state.prestigeUpgrades.perpetualWinner ? ", at ×10" : ""}.`
    : state.prestigeUpgrades.perpetualWinner
      ? `Harvests add ${crew} at ×10 (yield × sell price / 30,000).`
      : `Harvests add ${crew} (yield × sell price / 300,000).`;
  if (canPrestige) {
    prestigeInfo.textContent = `Prestige available. This run is worth ${trophyLabel(trophiesThisRun())}. ${state.firstNeighborAwarded ? accrualNote : ""}`;
  } else if (state.level3Unlocked) {
    prestigeInfo.textContent = "Level 3 is not open yet.";
  } else if (state.firstNeighborAwarded) {
    prestigeInfo.textContent = accrualNote;
  } else {
    prestigeInfo.textContent = state.level === 2
      ? "Compadres accrue from harvests."
      : "The first Supportive Neighbor arrives when you buy your second tomato plant.";
  }
  const firstPrestigeReady = canPrestige && !state.seenFirstPrestige;
  const banner = document.getElementById("prestige-banner");
  if (banner) banner.style.display = firstPrestigeReady ? "block" : "none";
  if (firstPrestigeReady) {
    const tabBtn = document.getElementById("upgrades-tab-btn");
    const supportiveDot = document.getElementById("supportive-dot");
    if (tabBtn) tabBtn.classList.add("has-upgrade");
    if (supportiveDot) supportiveDot.style.display = "inline-block";
    const upgradesDot = document.getElementById("upgrades-dot");
    if (upgradesDot) upgradesDot.style.display = "inline-block";
  }

  const hideBtn = document.getElementById("hide-owned");
  if (hideBtn) hideBtn.classList.toggle("active", state.hideOwnedHelpful);
  const upgradeBuyBtn = document.getElementById("upgrade-autobuy");
  if (upgradeBuyBtn) {
    const on = state.prestigeUpgrades.committeeMinutes;
    upgradeBuyBtn.style.display = on ? "inline-block" : "none";
    upgradeBuyBtn.textContent = state.upgradeAutobuy ? "Upgrade autobuy: on" : "Upgrade autobuy: off";
    upgradeBuyBtn.classList.toggle("active", state.upgradeAutobuy);
  }
  const bylaws = document.getElementById("bylaws");
  if (bylaws) bylaws.style.display = state.prestigeUpgrades.clubBylaws ? "block" : "none";
  const minInput = document.getElementById("auto-min");
  if (minInput && document.activeElement !== minInput && state.autoPrestigeMin != null) {
    minInput.value = state.autoPrestigeMin;
  }
  const waitBox = document.getElementById("wait-upgrade");
  if (waitBox) waitBox.checked = !!state.waitForNextUpgrade;
  const runTrophies = document.getElementById("run-trophies");
  if (runTrophies) {
    const earned = trophiesThisRun();
    runTrophies.textContent = state.prestigeUpgrades.monthlyMeeting
      ? `This run is worth ${trophyLabel(earned)}.`
      : "";
  }
  checkAchievements();
}

const ACHIEVEMENTS = [
  { id: "firstHarvest", name: "Touched Grass, Sort Of", text: "It was kale. The grass is relieved.", check: () => state.lifetime.gardenHarvests >= 1 },
  { id: "hundredHarvests", name: "Repeat Offender", text: "One hundred harvests. The kale has a restraining order.", check: () => state.lifetime.gardenHarvests >= 100 },
  { id: "tenKale", name: "Kale Loyalist", text: "Ten kale plants. Your friends have formed a support group.", check: () => state.plots.kale.plants >= 10 },
  { id: "spinach", name: "It Gets Worse", text: "You unlocked spinach and called it progress.", check: () => GARDEN.find(v => v.id === "spinach").unlocked },
  { id: "beets", name: "Beet Red", text: "The beets are in. So is the stain on the good towel.", check: () => GARDEN.find(v => v.id === "beets").unlocked },
  { id: "chard", name: "Rainbow Regret", text: "Swiss chard. You are one newsletter away from being insufferable.", check: () => GARDEN.find(v => v.id === "chard").unlocked },
  { id: "radishes", name: "Sharp Comment", text: "Radishes. Even the neighbors are making a face.", check: () => GARDEN.find(v => v.id === "radishes").unlocked },
  { id: "carrots", name: "What's Up, Neighbor", text: "Carrots unlocked. Do not tell the rabbit.", check: () => GARDEN.find(v => v.id === "carrots").unlocked },
  { id: "yendy", name: "Yendy Has Notes", text: "A broccoli danced at you. This is a formal warning.", check: () => state.yendySpeed && GARDEN.find(v => v.id === "broccoli").unlocked },
  { id: "peppers", name: "Pepper Upper", text: "Bell peppers. The club is pretending this was the plan.", check: () => GARDEN.find(v => v.id === "peppers").unlocked },
  { id: "tomatoes", name: "Heirloom Problems", text: "Tomatoes this slow should come with a will.", check: () => GARDEN.find(v => v.id === "tomatoes").unlocked },
  { id: "noticed", name: "A Neighbor Approves", text: "Someone on the block is willing to admit they know you.", check: () => state.firstNeighborAwarded },
  { id: "firstPrestige", name: "Gardener of the Month, Allegedly", text: "One trophy. The case looks very empty around it.", check: () => state.prestigeCount >= 1 },
  { id: "fivePrestige", name: "Five-Time Champion", text: "Five trophies. The club is legally required to clap.", check: () => state.prestigeCount >= 5 },
  { id: "hired", name: "Eager, Apparently", text: "You paid a child to pick kale. The club calls this management.", check: () => GARDEN.some(v => state.upgrades[v.id].harvest) },
  { id: "autosell", name: "They Sell Themselves", text: "The wagon kid is employed. Your hands are free to worry.", check: () => GARDEN.some(v => state.upgrades[v.id].sell) },
  { id: "million", name: "Local Menace", text: "A million coins. The roadside stand has a security camera now.", check: () => state.lifetime.gardenPeak >= 1e6 },
  { id: "billion", name: "The Bank Has Questions", text: "A billion coins, and not one of them is a tomato you waited for.", check: () => state.lifetime.gardenPeak >= 1e9 },
  { id: "market", name: "Slightly Less Rickety", text: "The stand has been upgraded. The rickets remain.", check: () => MARKET_UPS.some(m => state.marketUpgrades[m.id]) },
  { id: "fullBed", name: "No Vacancies", text: "All nine crops. The soil has filed a complaint.", check: () => GARDEN.every(v => v.unlocked) },
  { id: "hoa", name: "HOA Pamphlet", text: "Twenty-five of one vegetable. A pamphlet has been slid under your door.", check: () => GARDEN.some(v => state.plots[v.id].plants >= 25) },
  { id: "tea", name: "Neighborhood Tea", text: "You drank the compost tea. The compost tea drank you back.", check: () => state.gardenTeaLevels >= 1 },
  { id: "perpetual", name: "Always the Month", text: "Perpetual Winner. The other gardeners have stopped making eye contact.", check: () => state.prestigeUpgrades.perpetualWinner },
  { id: "fast", name: "The Bar Gave Up", text: "Ten a second. The progress bar has gone to lie down.", check: () => GARDEN.some(v => {
    if (!v.unlocked || !state.plots[v.id].hasStarted) return false;
    const cycle = getCycleTime(v, state.plots[v.id]);
    return cycle > 0 && getYield(state.plots[v.id]) / cycle >= 10;
  }) },
  { id: "buyer", name: "Shopping Problem", text: "A neighbor is buying plants with your money. You agreed to this.", check: () => GARDEN.some(v => state.upgrades[v.id].buy) },
  { id: "ocd", name: "Obsessive Compulsive", text: "Three crops, one number. The rows are even. You are not.", check: () => {
    const counts = {};
    GARDEN.forEach(v => {
      const n = state.plots[v.id].plants;
      if (n < 1) return;
      counts[n] = (counts[n] || 0) + 1;
    });
    return Object.values(counts).some(c => c >= 3);
  } },
  { id: "pinche", name: "Pinche Tu", text: "Two what? Tu Madre.", check: () => state.ranchUnlocked },
  { id: "noGoingBack", name: "No Going Back", text: "The garden is still paying. It is not still yours.", check: () => state.ranchUnlocked },
  { id: "pupusas", name: "Pupusas, On the House", text: "+50% ranch speed. The comal is hot.", check: () => state.pupusaSpeed },
  { id: "quadrillion", name: "Quadrillion Tears", text: "One quadrillion coins, and you still cried.", check: () => state.pupusaSpeed },
  { id: "super", name: "Super Obsessed", text: "You're doing it again!", check: () => {
    const counts = {};
    SALSA.forEach(v => {
      const n = state.plots[v.id].plants;
      if (n < 1) return;
      counts[n] = (counts[n] || 0) + 1;
    });
    return Object.values(counts).some(c => c >= 3);
  } },
  { id: "crying", name: "It Begins With Crying", text: "You cut an onion on purpose.", check: () => state.onionHarvested },
  { id: "garlicKnows", name: "Everyone Knows", text: "The whole block knows what you had for lunch.", check: () => SALSA.find(v => v.id === "garlic").unlocked },
  { id: "soap", name: "Soap or Herb", text: "You called it cilantro. Someone called it soap.", check: () => SALSA.find(v => v.id === "cilantro").unlocked },
  { id: "gloves", name: "Gloves Were Optional", text: "The gloves were a suggestion. You declined.", check: () => SALSA.find(v => v.id === "jalapeno").unlocked },
  { id: "mistake", name: "This Was a Mistake", text: "Hotter was not the same as better.", check: () => SALSA.find(v => v.id === "serrano").unlocked },
  { id: "dontTell", name: "Don't Tell Them", text: "Someone called this salsa. Do not correct them.", check: () => SALSA.find(v => v.id === "zucchini").unlocked },
  { id: "greenOne", name: "The Green One", text: "Salsa verde. The club is briefly impressed.", check: () => SALSA.find(v => v.id === "tomatillo").unlocked },
  { id: "potluck", name: "The Potluck", text: "Nobody asked. You brought it anyway.", check: () => SALSA.find(v => v.id === "celery").unlocked },
  { id: "whoMint", name: "Who Asked for Mint", text: "The salsa is now a drink.", check: () => SALSA.find(v => v.id === "mint").unlocked },
  { id: "tooFar", name: "The Club Went Too Far", text: "Twelve plants. Zero restraint.", check: () => SALSA.every(v => v.unlocked) },
  { id: "lecheEvaporada", name: "Leche Evaporada", text: "One milk. The cake is still dry.", check: () => SALSA.find(v => v.id === "salsa-bell").unlocked },
  { id: "lecheCondensada", name: "Leche Condensada", text: "Two milks. Someone brought a fork.", check: () => SALSA.find(v => v.id === "tomatillo").unlocked },
  { id: "laCrema", name: "La Crema", text: "Three milks. The sponge has given up.", check: () => SALSA.find(v => v.id === "mint").unlocked },
  { id: "tresLeches", name: "Tres Leches", text: "The whole ranch is soaked. Ranch sell prices are doubled.", check: () => state.achievements.lecheEvaporada && state.achievements.lecheCondensada && state.achievements.laCrema },
];

let achievementsLive = false;
let achieveToastTimer = 0;

function checkAchievements() {
  if (state.level === 2) {
    if (state.coins > (state.lifetime.ranchPeak || 0)) state.lifetime.ranchPeak = state.coins;
  } else if (state.coins > state.lifetime.gardenPeak) {
    state.lifetime.gardenPeak = state.coins;
  }
  if (state.coins > state.lifetime.peakCoins) state.lifetime.peakCoins = state.coins;
  const fresh = [];
  ACHIEVEMENTS.forEach(a => {
    if (state.achievements[a.id] || !a.check()) return;
    state.achievements[a.id] = true;
    if (achievementsLive) fresh.push(a);
  });
  if (fresh.length) {
    state.achieveNew = true;
    const ocd = fresh.find(a => a.id === "ocd");
    const superHit = fresh.find(a => a.id === "super");
    const pinche = fresh.find(a => a.id === "pinche");
    const leche = fresh.find(a => a.id === "tresLeches")
      || fresh.find(a => a.id === "laCrema")
      || fresh.find(a => a.id === "lecheCondensada")
      || fresh.find(a => a.id === "lecheEvaporada");
    const lecheIds = ["tresLeches", "laCrema", "lecheCondensada", "lecheEvaporada"];
    const rest = fresh.filter(a => a.id !== "ocd" && a.id !== "super" && a.id !== "pinche" && !(leche && lecheIds.includes(a.id)));
    if (ocd) showWrongWay();
    if (superHit) showSuper();
    if (pinche && !document.getElementById("wrong-overlay")) showPinche();
    if (leche && !document.getElementById("wrong-overlay")) showDonLeche(leche.name, leche.text);
    const toast = document.getElementById("achieve-toast");
    if (toast && rest.length) {
      const extra = rest.length > 1 ? ` (+${rest.length - 1} more)` : "";
      toast.innerHTML = `<img class="yendy-present" src="yendy-character.jpg" alt="Yendy"><div class="achieve-copy"><div class="achieve-kicker">Yendy presents</div><strong>${rest[0].name}${extra}</strong><p>${rest[0].text}</p></div>`;
      toast.style.display = "flex";
      clearTimeout(achieveToastTimer);
      achieveToastTimer = setTimeout(() => { toast.style.display = "none"; }, 5500);
    }
  }
  const viewing = document.getElementById("achievements-tab")?.style.display === "block";
  const dot = document.getElementById("achieve-dot");
  if (dot) dot.style.display = state.achieveNew && !viewing ? "inline-block" : "none";
  const earned = ACHIEVEMENTS.filter(a => state.achievements[a.id]).length;
  const key = ACHIEVEMENTS.map(a => state.achievements[a.id] ? "1" : "0").join("");
  const list = document.getElementById("achieve-list");
  if (list && list.dataset.key !== key) {
    list.dataset.key = key;
    list.innerHTML = ACHIEVEMENTS.map(a => {
      const got = !!state.achievements[a.id];
      const title = got ? a.name : "???";
      return `<div class="upgrade-card achieve-card${got ? " earned" : ""}"><strong>${title}</strong><p class="small">${got ? a.text : "Not yet."}</p></div>`;
    }).join("");
  }
  const countEl = document.getElementById("achieve-count");
  if (countEl) countEl.textContent = `${earned} of ${ACHIEVEMENTS.length}`;
}

function startCycle(id) {
  const plot = state.plots[id];
  if (plot.growing || plot.ready) return;
  plot.growing = true;
  plot.ready = false;
  plot.progress = 0;
  plot.hasStarted = true;
}

function countHarvest(veggie, n) {
  if (!(n > 0)) return;
  state.lifetime.harvests += n;
  if (veggie && veggie.ranch) state.lifetime.ranchHarvests += n;
  else state.lifetime.gardenHarvests += n;
}

function harvest(id) {
  const plot = state.plots[id];
  if (!plot.ready) return;
  const veggie = VEGGIES.find(v => v.id === id);
  const amount = getYield(plot);
  plot.inventory += amount;
  countHarvest(veggie, 1);
  if (id === "onion") state.onionHarvested = true;
  addSupportive(veggie, amount);
  plot.ready = false;
  plot.growing = true;
  plot.progress = 0;
  updateUI();
}

function buyPlant(id, count = 1) {
  const plot = state.plots[id];
  if (!plot.hasStarted) return;
  const veggie = VEGGIES.find(v => v.id === id);
  let bought = 0;
  for (let i = 0; i < count; i++) {
    if (state.coins < plot.plantCost) break;
    state.coins -= plot.plantCost;
    plot.plants++;
    bought++;
    if (veggie.id === "tomatoes" && plot.plants >= 2 && !state.firstNeighborAwarded) {
      state.firstNeighborAwarded = true;
      state.supportive += 1;
    }
    if (veggie.id === "onion" && plot.plants >= 2 && !state.pupusaSpeed) state.pupusaSpeed = true;
    plot.plantCost = Math.max(plot.plantCost + 1, Math.ceil(plot.plantCost * 1.15));
  }
  state.lifetime.plantsBought += bought;
  updateUI();
}

function onPlotClick(e) {
  const action = e.target.dataset.action;
  const buy = e.target.dataset.buy;
  const mode = e.target.dataset.mode;
  const sell = e.target.dataset.sell;
  const unlock = e.target.dataset.unlock;

  if (action) {
    const plot = state.plots[action];
    if (!plot.hasStarted) startCycle(action);
    else if (plot.ready) harvest(action);
  }
  if (buy) {
    const plot = state.plots[buy];
    const modeVal = plot.buyMode || 1;
    let count = 1;
    if (modeVal === "max") {
      let temp = plot.plantCost;
      let total = 0;
      while (total + temp <= state.coins && count < 1000) {
        total += temp;
        temp = Math.max(temp + 1, Math.ceil(temp * 1.15));
        count++;
      }
      count = Math.max(1, count - 1);
    } else {
      count = Number(modeVal);
    }
    buyPlant(buy, count);
  }
  if (mode) {
    const plot = state.plots[mode];
    const modes = [1, 10, 100, "max"];
    const idx = modes.indexOf(plot.buyMode || 1);
    plot.buyMode = modes[(idx + 1) % modes.length];
  }
  if (sell) {
    const plot = state.plots[sell];
    const veggie = VEGGIES.find(v => v.id === sell);
    if (!plot.autoSell && plot.inventory > 0) {
      state.coins += plot.inventory * getSellPrice(veggie);
      plot.inventory = 0;
    }
  }
  if (unlock) {
    const veggie = VEGGIES.find(v => v.id === unlock);
    if (state.coins >= veggie.firstCost) {
      state.coins -= veggie.firstCost;
      veggie.unlocked = true;
      state.plots[unlock].plants = 1;
      state.plots[unlock].buyMode = 1;
      if (state.prestigeUpgrades.springInTheStep) {
        state.plots[unlock].hasStarted = true;
        state.plots[unlock].growing = true;
        state.plots[unlock].ready = false;
        state.plots[unlock].progress = 0;
      }
      if (veggie.id === "broccoli") showYendy();
    }
  }
  updateUI();
}

function prestige() {
  if (state.supportive < 1) return;
  const firstTime = !state.seenFirstPrestige;
  state.seenFirstPrestige = true;
  state.trophies += trophiesThisRun();
  state.prestigeCount += 1;
  state.coins = 0;
  state.supportive = 0;
  VEGGIES.forEach(v => {
    const starter = v.id === "kale" || (state.level === 2 && v.id === "onion");
    if (!starter) v.unlocked = false;
    const p = state.plots[v.id];
    p.plants = starter ? 1 : 0;
    p.plantCost = v.firstCost;
    p.inventory = 0;
    p.progress = 0;
    p.ready = false;
    const autoPlant = (state.prestigeUpgrades.springInTheStep && v.id === "kale") || (state.level === 2 && v.id === "onion");
    p.hasStarted = autoPlant;
    p.growing = autoPlant;
    if (!state.prestigeUpgrades.familiarFaces) {
      p.speedLevels = 0;
      state.upgrades[v.id].speedBought = 0;
    }
    if (!state.prestigeUpgrades.ongoingSupport) {
      p.autoHarvest = false;
      p.autoSell = false;
      p.autoBuy = false;
      state.upgrades[v.id].harvest = false;
      state.upgrades[v.id].sell = false;
      state.upgrades[v.id].buy = false;
    }
  });
  if (!state.prestigeUpgrades.familiarFaces) {
    state.globalSpeed = 1;
    state.globalSpeedLevels = 0;
    state.globalSpeedAffected = [];
  }
  if (!state.prestigeUpgrades.standingOrder) {
    markets().forEach(m => {
      state.marketUpgrades[m.id] = false;
      state.marketAffected[m.id] = [];
    });
  }
  const marketEl = document.getElementById("market-upgrades");
  if (marketEl) marketEl.dataset.key = "";
  lastUpgradeState = "";
  if (firstTime) showFirstPrestige();
  saveGame();
  updateUI();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab + "-tab").style.display = "block";
    if (tab.dataset.tab === "achievements") {
      state.achieveNew = false;
      const dot = document.getElementById("achieve-dot");
      if (dot) dot.style.display = "none";
    }
  });
});

document.querySelectorAll(".subtab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".subtab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".subpanel").forEach(p => p.style.display = "none");
    tab.classList.add("active");
    document.getElementById(tab.dataset.subtab + "-panel").style.display = "block";
  });
});

plotsEl.addEventListener("click", onPlotClick);
prestigeBtn.addEventListener("click", prestige);

document.getElementById("hide-owned")?.addEventListener("click", () => {
  state.hideOwnedHelpful = !state.hideOwnedHelpful;
  lastUpgradeState = "";
  updateUI();
});
document.getElementById("upgrade-autobuy")?.addEventListener("click", (e) => {
  e.stopPropagation();
  state.upgradeAutobuy = !state.upgradeAutobuy;
  updateUI();
});
document.getElementById("auto-min")?.addEventListener("change", (e) => {
  const n = Math.max(1, Math.floor(Number(e.target.value) || 1));
  state.autoPrestigeMin = n;
  e.target.value = n;
});
document.getElementById("wait-upgrade")?.addEventListener("change", (e) => {
  state.waitForNextUpgrade = e.target.checked;
});

document.addEventListener("click", (e) => {
  const info = e.target.closest("[data-info]");
  if (info) {
    const pop = info.closest(".plot")?.querySelector(".plot-pop");
    const willOpen = pop && !pop.classList.contains("open");
    document.querySelectorAll(".plot-pop.open").forEach(p => p.classList.remove("open"));
    if (willOpen) pop.classList.add("open");
    return;
  }
  if (!e.target.closest(".plot-pop")) {
    document.querySelectorAll(".plot-pop.open").forEach(p => p.classList.remove("open"));
  }
  const card = e.target.closest("[data-upgrade]");
  if (!card || card.id === "prestige-btn") return;
  const up = card.dataset.upgrade;
  if (!up || up === "1" || up === "0") return;

  if (up.startsWith("harvest-")) {
    const id = up.slice("harvest-".length);
    const v = VEGGIES.find(x => x.id === id);
    if (v && !state.upgrades[id].harvest) {
      const cost = v.id === "kale" ? 100 : Math.floor(v.firstCost * 10);
      if (state.coins >= cost) {
        state.coins -= cost;
        state.upgrades[id].harvest = true;
        state.plots[id].autoHarvest = true;
        lastUpgradeState = "";
        updateUI();
      }
    }
  }
  if (up.startsWith("sell-")) {
    const id = up.slice("sell-".length);
    const v = VEGGIES.find(x => x.id === id);
    if (v && !state.upgrades[id].sell) {
      const cost = v.id === "kale" ? 500 : Math.floor(v.firstCost * 50);
      if (state.coins >= cost) {
        state.coins -= cost;
        state.upgrades[id].sell = true;
        state.plots[id].autoSell = true;
        lastUpgradeState = "";
        updateUI();
      }
    }
  }
  if (up.startsWith("buy-")) {
    const id = up.slice(4);
    const v = VEGGIES.find(x => x.id === id);
    const cost = buyNeighborCost(v);
    if (state.prestigeUpgrades.shoppingList && state.upgrades[id].harvest && !state.upgrades[id].buy && state.coins >= cost) {
      state.coins -= cost;
      state.upgrades[id].buy = true;
      state.plots[id].autoBuy = true;
      lastUpgradeState = "";
      updateUI();
    }
  }
  if (up.startsWith("speed-")) {
    const id = up.slice("speed-".length);
    const v = VEGGIES.find(x => x.id === id);
    if (v) {
      const cost = Math.floor(v.firstCost * 500 * Math.pow(1.5, state.upgrades[id].speedBought));
      if (state.coins >= cost) {
        state.coins -= cost;
        state.upgrades[id].speedBought++;
        state.plots[id].speedLevels++;
        lastUpgradeState = "";
        updateUI();
      }
    }
  }
  if (up === "global-speed") {
    const teaBase = state.level === 2 ? 5e18 : 25000;
    const teaCost = Math.floor(teaBase * Math.pow(1.5, state.globalSpeedLevels));
    if (state.coins >= teaCost) {
      state.coins -= teaCost;
      state.globalSpeed *= 1.25;
      state.globalSpeedLevels++;
      if (state.level !== 2) state.gardenTeaLevels = state.globalSpeedLevels;
      VEGGIES.forEach(v => {
        if (v.unlocked && !state.globalSpeedAffected.includes(v.id)) {
          state.globalSpeedAffected.push(v.id);
        }
      });
      lastUpgradeState = "";
      updateUI();
    }
  }
  if (up.startsWith("prestige-")) {
    const id = up.slice("prestige-".length);
    const def = PRESTIGE_UPS.find(p => p.id === id);
    if (def && (state.prestigeSeen || state.level === 2) && !state.prestigeUpgrades[id] && state.trophies >= def.cost) {
      if (id === "papusaRanch" && !state.marketUpgrades.distributionHub) return;
      if (id === "openLevel3" && !state.marketUpgrades.feriaAgosto) return;
      state.trophies -= def.cost;
      state.prestigeUpgrades[id] = true;
      if (id === "betterSoil") state.betterSoil = 2;
      if (id === "clubBylaws" && state.autoPrestigeMin == null) state.autoPrestigeMin = 4;
      if (id === "openLevel3") state.level3Unlocked = true;
      const list = document.getElementById("supportive-list");
      if (list) list.dataset.key = "";
      if (id === "papusaRanch") enterRanch(true);
      else updateUI();
    }
  }
  const market = markets().find(m => m.key === up);
  if (market && !state.marketUpgrades[market.id] && state.coins >= market.cost && marketReady(market)) {
      state.coins -= market.cost;
      state.marketUpgrades[market.id] = true;
      const marketEl = document.getElementById("market-upgrades");
      if (marketEl) marketEl.dataset.key = "";
      updateUI();
  }
});

let last = performance.now();
let saveAcc = 0;
function loop(now) {
  const realDt = (now - last) / 1000;
  const dt = realDt * (state.timeScale || 1);
  last = now;

  if (state.level === 2) {
    const gardenPay = state.ranchUnlocked ? state.gardenStipend : boardRate(GARDEN);
    if (gardenPay > 0) state.coins += gardenPay * dt;
  }

  VEGGIES.forEach(v => {
    const plot = state.plots[v.id];
    if (plot.autoSell && plot.inventory > 0) {
      state.coins += plot.inventory * getSellPrice(v);
      plot.inventory = 0;
    }
  });

  VEGGIES.forEach(v => {
    const plot = state.plots[v.id];
    if (!v.unlocked || !plot.growing || plot.ready) return;
    const cycle = getCycleTime(v, plot);
    if (cycle < 0.01 && plot.autoHarvest) {
      const amount = getYield(plot) * (dt / cycle);
      plot.inventory += amount;
      countHarvest(v, dt / cycle);
      addSupportive(v, amount);
      plot.progress = 1;
      plot.growing = true;
      plot.ready = false;
      return;
    }
    plot.progress += dt / cycle;
    if (plot.progress >= 1) {
      plot.progress = 1;
      plot.growing = false;
      plot.ready = true;
      if (plot.autoHarvest) harvest(v.id);
    }
  });

  if (state.prestigeUpgrades.committeeMinutes && state.upgradeAutobuy) {
    state.upgradeBuyCooldown -= dt;
    if (state.upgradeBuyCooldown <= 0) {
      const offer = cheapestCoinUpgrade();
      if (offer) {
        state.coins -= offer.cost;
        offer.apply();
        lastUpgradeState = "";
        state.upgradeBuyCooldown = 3;
      }
    }
  }

  if (state.prestigeUpgrades.shoppingList) {
    for (let i = VEGGIES.length - 1; i >= 0; i--) {
      const v = VEGGIES[i];
      const plot = state.plots[v.id];
      if (!v.unlocked || !plot.autoBuy || !plot.hasStarted) continue;
      const mode = plot.buyMode === "max" ? 1 : (Number(plot.buyMode) || 1);
      if (state.coins >= plot.plantCost) {
        buyPlant(v.id, mode);
        break;
      }
    }
  }

  maybeAutoPrestige();

  updateUI();
  saveAcc += realDt;
  if (saveAcc >= 2) {
    saveAcc = 0;
    saveGame();
  }
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (e) => {
  if (!e.ctrlKey || e.altKey || e.metaKey || e.key.toLowerCase() !== "h") return;
  e.preventDefault();
  state.hideLevelJump = !state.hideLevelJump;
  applyChrome();
  saveGame();
});
document.getElementById("ranch-jump")?.addEventListener("click", () => {
  if (state.ranchUnlocked) return;
  if (state.level === 2) leaveTest();
  else enterRanch(false);
});
document.getElementById("reset-game")?.addEventListener("click", () => {
  const dialog = document.getElementById("reset-dialog");
  if (dialog) dialog.style.display = "flex";
});
document.getElementById("reset-cancel")?.addEventListener("click", () => {
  const dialog = document.getElementById("reset-dialog");
  if (dialog) dialog.style.display = "none";
});
document.getElementById("reset-confirm")?.addEventListener("click", () => {
  allowSave = false;
  localStorage.removeItem("garden-club-v1");
  location.reload();
});

document.getElementById("time-scale")?.addEventListener("click", (e) => {
  const scale = e.target.dataset.scale;
  if (!scale) return;
  state.timeScale = Number(scale);
  document.querySelectorAll("#time-scale button[data-scale]").forEach(b => {
    b.style.background = b.dataset.scale == scale ? "#3b82f6" : "#475569";
    b.style.color = "white";
  });
});
document.querySelectorAll("#time-scale button[data-scale]").forEach(b => {
  b.style.background = b.dataset.scale === "1" ? "#3b82f6" : "#475569";
  b.style.color = "white";
});

let allowSave = true;
function saveGame() {
  if (!allowSave) return;
  const data = {
    coins: state.coins,
    supportive: state.supportive,
    trophies: state.trophies,
    prestigeUpgrades: state.prestigeUpgrades,
    marketUpgrades: state.marketUpgrades,
    marketAffected: state.marketAffected,
    prestigeSeen: state.prestigeSeen,
    firstNeighborAwarded: state.firstNeighborAwarded,
    seenFirstPrestige: state.seenFirstPrestige,
    prestigeCount: state.prestigeCount,
    yendySpeed: state.yendySpeed,
    betterSoil: state.betterSoil,
    globalSpeed: state.globalSpeed,
    globalSpeedLevels: state.globalSpeedLevels,
    gardenTeaLevels: state.gardenTeaLevels,
    globalSpeedAffected: state.globalSpeedAffected,
    hideOwnedHelpful: state.hideOwnedHelpful,
    upgradeAutobuy: state.upgradeAutobuy,
    autoPrestigeMin: state.autoPrestigeMin,
    waitForNextUpgrade: state.waitForNextUpgrade,
    unlocked: CROPS.filter(v => v.unlocked).map(v => v.id),
    plots: state.plots,
    upgrades: state.upgrades,
    achievements: state.achievements,
    achieveNew: state.achieveNew,
    lifetime: state.lifetime,
    level: state.level,
    ranchUnlocked: state.ranchUnlocked,
    testingRanch: state.testingRanch,
    gardenStipend: state.gardenStipend,
    pupusaSpeed: state.pupusaSpeed,
    ranchStarted: state.ranchStarted,
    level3Unlocked: state.level3Unlocked,
    onionHarvested: state.onionHarvested,
    hideLevelJump: !!state.hideLevelJump,
    savedSupportive: state.savedSupportive,
  };
  try { localStorage.setItem("garden-club-v1", JSON.stringify(data)); } catch (e) {}
}

function finiteAtLeast(n, min) {
  return typeof n === "number" && Number.isFinite(n) && n >= min ? n : null;
}

function loadGame() {
  let data;
  try { data = JSON.parse(localStorage.getItem("garden-club-v1") || "null"); } catch (e) { return; }
  if (!data || typeof data !== "object" || Array.isArray(data)) return;
  const numbers = {
    coins: 0, supportive: 0, trophies: 0, betterSoil: 1,
    globalSpeed: 0.01, globalSpeedLevels: 0, gardenTeaLevels: 0, prestigeCount: 0,
  };
  Object.keys(numbers).forEach(key => {
    const n = finiteAtLeast(data[key], numbers[key] === 0.01 ? 0.01 : 0);
    if (n != null) state[key] = n;
  });
  if (data.autoPrestigeMin === null) state.autoPrestigeMin = null;
  else {
    const min = finiteAtLeast(data.autoPrestigeMin, 1);
    if (min != null) state.autoPrestigeMin = Math.floor(min);
  }
  ["prestigeSeen", "firstNeighborAwarded", "seenFirstPrestige", "hideOwnedHelpful", "upgradeAutobuy", "waitForNextUpgrade", "yendySpeed", "ranchUnlocked", "testingRanch", "pupusaSpeed", "ranchStarted", "level3Unlocked", "onionHarvested", "hideLevelJump"].forEach(key => {
    if (typeof data[key] === "boolean") state[key] = data[key];
  });
  const stipend = finiteAtLeast(data.gardenStipend, 0);
  if (stipend != null) state.gardenStipend = stipend;
  if (data.savedSupportive === null) state.savedSupportive = null;
  else {
    const savedNeighbors = finiteAtLeast(data.savedSupportive, 0);
    if (savedNeighbors != null) state.savedSupportive = savedNeighbors;
  }
  if (data.prestigeUpgrades && typeof data.prestigeUpgrades === "object") {
    PRESTIGE_UPS.forEach(p => {
      if (typeof data.prestigeUpgrades[p.id] === "boolean") state.prestigeUpgrades[p.id] = data.prestigeUpgrades[p.id];
    });
  }
  if (data.marketUpgrades && typeof data.marketUpgrades === "object") {
    MARKET_UPS.concat(RANCH_MARKETS).forEach(m => {
      if (typeof data.marketUpgrades[m.id] === "boolean") state.marketUpgrades[m.id] = data.marketUpgrades[m.id];
    });
  }
  const knownIds = new Set(CROPS.map(v => v.id));
  if (data.marketAffected && typeof data.marketAffected === "object") {
    MARKET_UPS.concat(RANCH_MARKETS).forEach(m => {
      const list = data.marketAffected[m.id];
      if (Array.isArray(list)) state.marketAffected[m.id] = list.filter(id => knownIds.has(id));
    });
  }
  if (Array.isArray(data.globalSpeedAffected)) {
    state.globalSpeedAffected = data.globalSpeedAffected.filter(id => knownIds.has(id));
  }
  if (Array.isArray(data.unlocked)) {
    CROPS.forEach(v => {
      const starter = v.id === "kale" || (v.id === "onion" && (state.ranchStarted || state.ranchUnlocked || state.testingRanch));
      v.unlocked = starter || data.unlocked.includes(v.id);
    });
  }
  CROPS.forEach(v => {
    const savedPlot = data.plots && data.plots[v.id];
    if (savedPlot && typeof savedPlot === "object") {
      const plot = state.plots[v.id];
      ["plants", "plantCost", "inventory", "speedLevels"].forEach(key => {
        const n = finiteAtLeast(savedPlot[key], 0);
        if (n != null) plot[key] = n;
      });
      const progress = finiteAtLeast(savedPlot.progress, 0);
      if (progress != null) plot.progress = Math.min(1, progress);
      ["growing", "ready", "hasStarted", "autoHarvest", "autoSell", "autoBuy"].forEach(key => {
        if (typeof savedPlot[key] === "boolean") plot[key] = savedPlot[key];
      });
      if (savedPlot.buyMode === "max" || savedPlot.buyMode === 1 || savedPlot.buyMode === 10 || savedPlot.buyMode === 100) {
        plot.buyMode = savedPlot.buyMode;
      }
    }
    const savedUp = data.upgrades && data.upgrades[v.id];
    if (savedUp && typeof savedUp === "object") {
      const up = state.upgrades[v.id];
      ["harvest", "sell", "buy"].forEach(key => {
        if (typeof savedUp[key] === "boolean") up[key] = savedUp[key];
      });
      const speed = finiteAtLeast(savedUp.speedBought, 0);
      if (speed != null) up.speedBought = Math.floor(speed);
    }
  });
  if (data.achievements && typeof data.achievements === "object") {
    ACHIEVEMENTS.forEach(a => {
      if (data.achievements[a.id] === true) state.achievements[a.id] = true;
    });
  }
  if (data.lifetime && typeof data.lifetime === "object") {
    ["harvests", "gardenHarvests", "ranchHarvests", "plantsBought", "peakCoins", "gardenPeak", "ranchPeak"].forEach(key => {
      const n = finiteAtLeast(data.lifetime[key], 0);
      if (n != null) state.lifetime[key] = n;
    });
    if (data.lifetime.gardenHarvests == null) {
      state.lifetime.gardenHarvests = state.ranchStarted ? 0 : state.lifetime.harvests;
    }
    if (data.lifetime.gardenPeak == null) {
      state.lifetime.gardenPeak = (state.ranchUnlocked || state.testingRanch) ? 0 : state.lifetime.peakCoins;
    }
  }
  if (data.gardenTeaLevels == null && !(state.ranchUnlocked || state.testingRanch)) {
    state.gardenTeaLevels = state.globalSpeedLevels;
  }
  if (typeof data.achieveNew === "boolean") state.achieveNew = data.achieveNew;
  if (state.prestigeSeen) state.yendySpeed = true;
  if (state.ranchUnlocked || state.testingRanch) {
    state.level = 2;
    VEGGIES = SALSA;
  } else {
    state.level = 1;
    VEGGIES = GARDEN;
  }
}

window.addEventListener("beforeunload", saveGame);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveGame();
});

loadGame();
applyChrome();
updateUI();
achievementsLive = true;
requestAnimationFrame(loop);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
