# Garden Club Dominator — Design Document

**Status:** Living document reflecting the current playable prototype  
**Last updated:** 2026-11-10

## Theme & Fantasy
- Gardening incremental / “numbers go up” game.
- City-wide garden club competing for the title **Gardener of the Month**.
- Humorous tone about dominating the vegetable gardening scene.
- Player grows increasingly desirable vegetables and supplies larger markets.

## Core Loop (per veggie plot)
- Each plot waits on one uncollected cycle. Harvested crops stack in inventory until sold.
- First click: button says **“Plant”** → growth cycle starts.
- Progress bar fills (time shown as `m:ss.xx`).
- When ready, the same button becomes **“Harvest”** and is clickable.
- Click Harvest → receive current yield, inventory increases, next cycle starts automatically.
- While growing, the Harvest button is **disabled** (label stays “Harvest”).
- After the initial Plant, only Harvest requires a click until automated.
- Prestige can later grant **Auto-Plant**.

## Plants & Yield
- Buying a plant adds 1 to the base harvest amount.
- Each plant also multiplies that veggie's harvest and cycle speed by ×1.02.
- Every **25 plants** grants a speed bonus (cycle time ×0.90).
- Plant cost starts at the veggie’s first-plant cost, then multiplies by **×1.15** each purchase.
- Buy multiplier (x1 / x10 / x100 / Max) shows total cost. A newly unlocked veggie always starts at x1.

## Veggie Progression
- Start with **Kale** unlocked. Every subsequent veggie unlocks at **10 plants** of the previous one.
- All 9 veggies are intended to be unlockable within roughly an hour with upgrades and automation.

| # | Veggie              | Unlock condition     | First plant cost | Base cycle   | Sell price |
|---|---------------------|----------------------|------------------|--------------|------------|
| 1 | Kale                | Starting             | 5                | 5 seconds    | 1          |
| 2 | Spinach             | 10 Kale plants       | 25               | 20 seconds   | 4          |
| 3 | Beets               | 10 Spinach plants    | 200              | 1.5 minutes  | 20         |
| 4 | Swiss Chard         | 10 Beets plants      | 1,500            | 6 minutes    | 100        |
| 5 | Radishes            | 10 Swiss Chard plants| 10,000           | 20 minutes   | 500        |
| 6 | Carrots             | 10 Radishes plants   | 75,000           | 1 hour       | 2,500      |
| 7 | Broccoli            | 10 Carrots plants    | 500,000          | 3 hours      | 15,000     |
| 8 | Bell Peppers        | 10 Broccoli plants   | 3,500,000        | 6 hours      | 80,000     |
| 9 | Heirloom Tomatoes   | 10 Bell Pepper plants| 25,000,000       | **12 hours** | 500,000    |

- Plots display in three columns and shrink to fit a tablet.
- The next locked veggie is shown with its unlock requirement and cost. The button reads Unlock and does not start the cycle.

## Selling
- Each veggie has its own Sell button.
- Once auto-sell is purchased, the button becomes disabled and reads **“Auto”**.
- Prices are shown with a space before “c” (e.g. `12 c`).

## Neighbors (three categories)

### Helpful Neighbors (Managers / Automations)
Purchased with coins. Named per veggie:

| Veggie              | Auto-Harvest (10× first plant) | Auto-Sell (50× first plant) |
|---------------------|--------------------------------|-----------------------------|
| Kale                | Eager Neighbor Kid (100 c)     | Kid with a Wagon (500 c)    |
| Spinach             | Garden Club Volunteer (500 c)  | Stand Helper (2.5k c)       |
| Beets               | Backyard Botanist (5.0k c)     | Market Runner (25.0k c)     |
| Swiss Chard         | Retired Horticulturist (50.0k c)| Chard Courier (250.0k c)   |
| Radishes            | Weekend Weeder (500.0k c)      | Radish Runner (2.5M c)      |
| Carrots             | Carrot Enthusiast (5.0M c)     | Produce Porter (25.0M c)    |
| Broccoli            | Club Secretary (50.0M c)       | Broccoli Broker (250.0M c)  |
| Bell Peppers        | Pepper Pro (500.0M c)          | Pepper Packer (2.5B c)      |
| Heirloom Tomatoes   | Master Gardener (5.0B c)       | Tomato Tycoon (25.0B c)     |

- Auto-harvest unlocks when the veggie is unlocked.
- Auto-sell unlocks at 10 plants of that veggie.
- Once purchased, the Sell button becomes permanently disabled and reads **“Auto”**.
- Plant buying is not a toggle. After **Shopping List**, each veggie can hire a buyer. Buyers are listed in the automation section.

### Purchase Cost Reference
| Item                        | Cost formula / value          |
|-----------------------------|-------------------------------|
| First plant of a veggie     | See veggie table              |
| Subsequent plants           | ×1.15 previous plant          |
| Auto-Harvest                | 10× first plant (Kale = 100 c)|
| Auto-Sell                   | 50× first plant (Kale = 500 c)|
| Per-crop +10% speed         | 500× first plant, +50% each level |
| Global +25% speed           | 25k c, +50% each level |
| Plant buyers                | 100× first plant, after Shopping List |

### Generous Neighbors (Speed Upgrades)
- Per-crop +10% speed upgrades unlock every 10 plants of that veggie.
- Each successive level costs 50% more than the previous. The first level costs 500× that veggie's first plant.
- Level is displayed on the button.
- Global +25% speed (“Neighborhood Compost Tea”) starts at 25k c and costs 50% more each level. The next level is offered when 3, 6, or 9 veggies are unlocked, and it stays available once all 9 are unlocked.
- Speed upgrades only affect veggies that are already unlocked at the time of purchase.

### Supportive Neighbors (Prestige resource)
- The first time the player buys a second Heirloom Tomato plant, they gain **1** Supportive Neighbor. This grant happens only once. It does not return on later runs.
- After that grant, every harvest adds `yield × base sell price / 300,000` to the counter. **Perpetual Winner** multiplies that accrual by ×10.
- The counter is this run only and resets on prestige. The one-time grant flag does not reset.
- The first 5 prestiges award exactly 1 trophy each. After that, every prestige awards `floor(sqrt(Supportive Neighbors))` trophies, minimum 1 once the counter is at least 1.

## Prestige Upgrades (Locked)

Prestige converts Supportive Neighbors into trophies. Upgrades must be purchased in the Supportive Neighbors tab before they take effect. All effects are permanent.

| # | Upgrade | Cost (Trophies) | Effect |
|---|---------|-----------------|--------|
| 1 | **Better Soil** | 1 | ×2 base harvest amount |
| 2 | **Enriched Compost** | 1 | ×1.5 base cycle speed |
| 3 | **Ongoing Support** | 2 | Keeps Auto-Harvest, Auto-Sell, and plant buyers through prestige |
| 4 | **Perpetual Winner** | 4 | ×10 Supportive Neighbor accrual |
| 5 | **Spring in the Step** | 8 | After a prestige, plots start already planted. Newly unlocked plots start planted too |
| 6 | **Blue Ribbon Soil** | 16 | Another ×2 harvest, stacked with Better Soil |
| 7 | **Familiar Faces** | 32 | Keep Generous speed levels, including Compost Tea, through prestige |
| 8 | **Standing Order** | 64 | Keep Market upgrades through prestige |
| 9 | **Shopping List** | 128 | Reveals a plant buyer for each veggie |
| 10 | **Committee Minutes** | 256 | Auto-buys one Helpful or Generous upgrade every 3 seconds |
| 11 | **Monthly Meeting** | 512 | Auto-prestige once Club Bylaws sets a trophy minimum |
| 12 | **Club Bylaws** | 1024 | Sets the auto-prestige minimum and the wait-for-next-upgrade option |

### Prestige rules
- The first prestige shows a 5-second celebration: fireworks and a farm sign reading "Congratulations! You have reached the first Prestige!" Later prestiges do not show it.
- The first prestige unlocks the first time the player owns 2 Heirloom Tomato plants.
- Later prestiges unlock whenever this run has at least 1 Supportive Neighbor. Tomatoes do not have to be unlocked again.
- Prestige requires at least 1 Supportive Neighbor.
- Trophy upgrades appear in the Supportive Neighbors tab once Broccoli has been unlocked. They do nothing until bought.
- Full reset of plants, coins, inventory, named neighbors, Generous speed levels (including Compost Tea), and Market upgrades. Keep trophies and purchased prestige upgrades. Familiar Faces keeps Generous speed levels. Standing Order keeps Market upgrades. Ongoing Support keeps harvest, sell, and plant-buyer automation.

## Buying plants
- The Buy button stays a Buy button and keeps its price. It is unavailable until that plot's Plant button has been clicked once.

## Market Upgrades
- Market upgrades appear on the Market card (not in the Upgrades tab).
- Each market upgrade boosts the sell price of every veggie, including ones unlocked later.

- Market buttons read **Purchase** and the price. They stay grey until that tier is unlocked. The requirement stays on the line under the name, not on the button.
- The game saves in the browser and restores after a refresh. Prestige count is saved and does not reset. Reset on the top bar opens a confirmation dialog. Confirming deletes the save and starts over.
- The first time Prestige is available, a banner appears and the Upgrades tab lights up. The fireworks sign still plays only after the first Prestige.

| Upgrade | Unlocks | Cost | Effect |
|---------|---------|------|--------|
| Farmers Market Stand | Beets | 1M c | ×1.5 sell price |
| Co-op Cooler | Carrots | 1B c | ×1.5 sell price |
| Wholesale Dock | Heirloom Tomatoes | 1T c | ×2 sell price |
| Distribution Hub | After 5 completed prestiges | 1Qa c | ×2 sell price |

## UI
- The page background is a dusk community-garden scene. Plot cards stay solid so the numbers stay readable.
- Coin totals from 1 trillion up use T, Qa, Qi, Sx, Sp, Oc, No, Dc instead of thousands of billions.
- Each plot has an info button at the top center. It opens a popup of that veggie's upgrades. Plant count sits at the top right.
- The progress bar still fills as the crop grows. Its label shows how fast 1 crop is harvested: `3.2/s` when at least one per second, otherwise `1 / 5s`, `1 / 2min`, `1 / 3hour`, `1 / 2day`, and so on. Once production is about 10 per second or faster, the bar stays full. Before the first plant, the label says "Ready to plant". A finished cycle that still needs a click says "Ready!".
- Red-dot notifications on the Upgrades tab and on Helpful, Generous, and Supportive when something there is affordable.
- Upgrade cards are compact.
- Buy multiplier button sits next to the Buy button.

## To-Do / Recent Decisions

Pending, not built:
- Level 3. The Next Season can be bought on San Salvador Ranch after Feria de Agosto, for 2048 trophies. It does not open a new board.

In the game:
- San Salvador Ranch is level 2. The top-bar button jumps there and back until the ranch is bought. Ctrl+H hides that button, and Ctrl+H shows it again. Buying the ranch for 2048 trophies, after Distribution Hub, leaves the garden for good.
- The garden's coin rate freezes and keeps paying. Pinche Tu doubles that rate once. Pat says "Two what? Tu Madre."
- Onion starts planted on a 5-second cycle. The next Onion is 1 Qa. Compadres, the four ranch markets, and the ranch art are in. The second Onion grants +50% ranch speed, once.

Done:
- Sell button unavailable and grey until inventory exists. **(Implemented)**
- Neighborhood Compost Tea starts at **25k c**; each level costs 50% more. The effect is +25% speed. **(Implemented)**
- Global speed upgrades only affect veggies that were already unlocked at the moment the upgrade was purchased. **(Implemented)**
- Testing-only time scale control: 1× / 2× / 5× / 10×. The active speed is highlighted. **(Implemented)**
- Per-plant ×1.02 speed and ×1.02 harvest multipliers. **(Implemented)**
- Recurring upgrade costs scale by +50% per level. **(Implemented)**
- The first Supportive Neighbor is granted once, at 2 tomato plants. The first 5 prestiges award 1 trophy each, then trophies are √(Supportive Neighbors). Perpetual Winner is ×10 accrual. **(Implemented)**

## Reference
- Achievements are a tab next to Garden and Upgrades. They stay unlocked through prestige. When one is earned, Yendy appears in a bottom overlay and presents the name and joke. Locked jokes stay hidden until you earn them.
- Obsessive Compulsive unlocks when 3 or more veggies have the same number of plants, ignoring empty plots. Pat fills the screen and says "You're playing it wrong!" Yendy does not present that one.
- Super Obsessed is the level 2 version. It unlocks when 3 or more salsa crops have the same number of plants, ignoring empty plots. Pat fills the screen in a comically large, colorful Mexican sombrero, with a slight smile, offering a tray of Salvadoran sweet bread and a gold medal. He says "You're doing it again!" Yendy does not present that one.
- Pupusas, On the House unlocks the first time the player buys the second Onion. It grants +50% speed to every salsa crop, including crops unlocked later. Once only.

## Locked automation (implemented)
- **Hide owned** on the Helpful tab. **Overeager Club Treasurer** is removed.
- **Shopping List** (128), **Committee Minutes** (256), **Monthly Meeting** (512), and **Club Bylaws** (1024) are trophy upgrades. Costs double from Perpetual Winner onward.
- Shopping List reveals nine plant buyers after auto-harvest. Ongoing Support keeps them. Buys go to the most advanced planted veggie and treat Max as ×1.
- Committee Minutes buys one Helpful or Generous upgrade every 3 seconds, after plant buying. The Upgrades tab toggles it. It never buys Market or trophy upgrades.
- Monthly Meeting only prestiges. It stays off until Club Bylaws sets a minimum (default 4 trophies). It does not spend trophies and does not fire during Yendy's celebration. The upgrade-wait rule is ignored once every prestige upgrade is owned.
- Yendy's celebration uses the broccoli illustration and a dance animation for 5 seconds. The sign stays HTML and says the reward is +50% speed for every veggie. The first time it plays, every veggie gains that speed, including veggies unlocked later. The bonus is once only and survives prestige. A save that already unlocked Broccoli receives it on load.
- Plot cards show that veggie's portrait. Upgrade cards show the neighbor. Coins, trophies, and the Market heading use their own icons.
- The coin total shows the accrual rate underneath. It counts plots that auto-sell and are producing, as coins per second, or the time to earn 1 coin when slower.
- The title is a stained-wood plank logo in the chunky cut-lumber letter style. The subtitle is Yendy's competition for "Gardener of the Month"!
- Tablet layout keeps three plot columns and the garden background. Plots shrink to fit the screen.
- Android tablet: the same game, landscape, installable from Chrome with Add to Home screen. The garden stays three columns and the background stays. Not a Play Store app.

## San Salvador Ranch (level 2, in the game)

Locked:
- Buying the next prestige unlock leaves the garden for good. The garden is level 1. Level 2 is San Salvador Ranch. There is no going back.
- On San Salvador Ranch, Supportive Neighbors are called Compadres. They accrue, reset, and convert into trophies by the same rules. The counter starts at 0 when the ranch begins. A test visit sets it aside and puts it back when you return to the garden.
- Level 1 keeps paying. At the moment the ranch unlocks, the garden's coin rate is frozen and paid forever. Salsa sales add on top. The coin readout shows both.
- The board is the same game on 12 plots, 3 columns by 4 rows. A crop appears when the one before it has 10 plants.
- The run starts with 1 Onion, already planted and growing, on a 5-second cycle. The next Onion costs 1 Qa c. Later Onions follow ×1.15. The buy multiplier starts at ×1.
- Each later crop's first plant costs 10× the crop before it. Sell price is one fifth of that first-plant cost. Per-plant ×1.02 speed and harvest still apply. Neighbor costs stay 10×, 50×, and 100× the first plant.
- Prestige upgrades already bought apply. The San Salvador Ranch prestige ladder matches level 1, paid with trophies from Compadres. Its final upgrade costs 2048 trophies, appears after Feria de Agosto, and unlocks level 3. Level 3 is not designed.
- The San Salvador Ranch trophy upgrade costs 2048 trophies. It stays hidden until Distribution Hub has been purchased.
- Garlic's first plant costs 10 Qa c.
- The setting is El Salvador. The art package uses a volcano, indigo cloth, a comal of pupusas, curtido, loroco, coffee, and a torogoz. The market icon is the comal.
- The Obsessive Compulsive judge is named Pat. Super Obsessed uses Pat in a comically large, colorful Mexican sombrero, with a slight smile, offering a tray of Salvadoran sweet bread with a gold medal on it. The line is "You're doing it again!"
- Pinche Tu is awarded when San Salvador Ranch is entered for good. Pat fills the screen in a black cowboy hat, mustache curled at the tips, two fingers up and two coin pouches in the other hand. The line is "Two what? Tu Madre." The frozen garden rate is doubled, once. Every locked achievement name stays hidden until it is earned.
- Pupusas, On the House unlocks the first time the second Onion is bought. Reward: +50% speed on every salsa crop, including crops unlocked later. Once only.
- Tres Leches is three parts. Bell peppers grant Leche Evaporada, Tomatillos grant Leche Condensada, and Mint grants La Crema. Don Leche, a chili in a modest sombrero with a curled mustache and a slice of cake, fills the screen. When all three are earned, ranch sell prices double. The frozen garden income is not doubled.

| # | Crop | First plant | Base cycle |
|---|------|-------------|------------|
| 1 | Onions | 1 Qa (the plant you start with is free; this is the next one) | 5s |
| 2 | Garlic | 10 Qa | 20s |
| 3 | Cilantro | 100 Qa | 90s |
| 4 | Tomatoes | 1 Qi | 6 min |
| 5 | Jalapeños | 10 Qi | 20 min |
| 6 | Bell peppers | 100 Qi | 1 hour |
| 7 | Serrano peppers | 1 Sx | 3 hours |
| 8 | Zucchini | 10 Sx | 6 hours |
| 9 | Tomatillos | 100 Sx | 12 hours |
| 10 | Carrots | 1 Sp | 1 day |
| 11 | Celery | 10 Sp | 2 days |
| 12 | Mint | 100 Sp | 4 days |

- Sell price of each crop is one fifth of its first-plant cost. Owned speed upgrades cut the base cycles down, same as in the garden.
- Salsa market prices follow the garden's scale. The garden's stands are 1M, 1B, 1T, then 1 Qa, each ×1000, with effects ×1.5, ×1.5, ×2, ×2. The salsa stands continue that ladder, and they unlock on the 3rd, 6th, 9th, and 12th salsa crop.

| Upgrade | Unlocks | Cost | Effect |
|---------|---------|------|--------|
| Pupusería La Esquina | Cilantro | 1 Qi c | ×1.5 sell price |
| Comal de Doña Rosa | Bell peppers | 1 Sx c | ×1.5 sell price |
| Mercado Central | Tomatillos | 1 Sp c | ×2 sell price |
| Feria de Agosto | Mint | 1 Oc c | ×2 sell price |

- Neighbor and speed-upgrade names. Harvest picks, sell runs the cup, speed is the Generous upgrade, buyer plants.

| Crop | Harvest | Sell | Speed upgrade | Buyer |
|------|---------|------|---------------|-------|
| Onions | Goggle-Free Luz | Tissue Auntie | Tear-Free Brine | Pallet Tío |
| Garlic | Parsley Tito | Clove Carmen | Midnight Rub | Double-Batch Aunt |
| Cilantro | Soap-Truther Rafa | Bunch Bianca | Not-Soap Tonic | Smuggler Sol |
| Tomatoes | Dice-Kid Diego | Pico Pilar | Seed-Spit Tonic | Can-Hoarder Cruz |
| Jalapeños | Glove Nephew Nito | Heat-Check Hank | Seed-Scrape Serum | Mild-Liar Milo |
| Bell peppers | Soft-Hands Sofia | Dulce the Rep | Crunch Keeper | Peacekeeper Paz |
| Serrano peppers | Bare-Hand Brenda | Warning-Label Lety | Afterburner Oil | Pride Omar |
| Zucchini | Grater Gabi | Hidden Hugo | Shred-and-Deny | July Julio |
| Tomatillos | Husk Cata | Verde Vero | Husk Solvent | Contadora Inés |
| Carrots | Napper Nico | Porter Paco | Second-Life Soak | Found-It Fabi |
| Celery | String-Puller Pete | Defender Dalia | Snap-Back Tonic | Tupperware Tere |
| Mint | Mojito Mona | Garnish Gus | Muddle Mist | Dessert Tono |

- San Salvador Ranch achievements. Yendy presents these, except Pat fills the screen for Pinche Tu and Super Obsessed, and Don Leche fills the screen for Tres Leches.

| Name | Unlocks when | Line |
|------|----------------|------|
| No Going Back | San Salvador Ranch is entered | The garden is still paying. It is not still yours. |
| Pinche Tu | San Salvador Ranch is entered | Two what? Tu Madre. |
| It Begins With Crying | First Onion harvest | You cut an onion on purpose. |
| Quadrillion Tears | The second Onion is bought | One quadrillion coins, and you still cried. |
| Pupusas, On the House | The second Onion is bought, first time only | +50% salsa speed. The comal is hot. |
| Everyone Knows | Garlic unlocks | The whole block knows what you had for lunch. |
| Soap or Herb | Cilantro unlocks | You called it cilantro. Someone called it soap. |
| Gloves Were Optional | Jalapeños unlock | The gloves were a suggestion. You declined. |
| This Was a Mistake | Serrano peppers unlock | Hotter was not the same as better. |
| Don't Tell Them | Zucchini unlocks | Someone called this salsa. Do not correct them. |
| The Green One | Tomatillos unlock | Salsa verde. The club is briefly impressed. |
| The Potluck | Celery unlocks | Nobody asked. You brought it anyway. |
| Who Asked for Mint | Mint unlocks | The salsa is now a drink. |
| The Club Went Too Far | All 12 salsa crops are unlocked | Twelve plants. Zero restraint. |
| Super Obsessed | 3 or more salsa crops have the same plant count | You're doing it again! |
| Leche Evaporada | Bell peppers unlock | One milk. The cake is still dry. |
| Leche Condensada | Tomatillos unlock | Two milks. Someone brought a fork. |
| La Crema | Mint unlocks | Three milks. The sponge has given up. |
| Tres Leches | Mint unlocks, after the other two milks | The whole ranch is soaked. Ranch sell prices are doubled. |

## Art Packages

Each level has its own art package. The painting style stays the same: dusk storybook brushwork, gold rim light, smug vegetable portraits. The package changes the world: background, palette, crop portraits, neighbor portraits, and the coin, trophy, and market icons.

Level 1, Garden Club, is set. Navy night, lantern gold, cottage garden, the nine vegetable portraits, the neighbor portraits, Yendy, and the row inspector.

Level 2, Salsa Farm, keeps that painting and moves it to El Salvador. Evening adobe, a volcano on the horizon, indigo woven cloth, a comal of pupusas, curtido, loroco, coffee, and a torogoz in the trees. The garden beds still show the twelve salsa crops. For Super Obsessed, Pat wears a comically large colorful Mexican sombrero and offers Salvadoran sweet bread with a gold medal. The other portraits do not wear sombreros. No posters and no words in the art.

| Token | Level 1 | Level 2 |
|-------|---------|---------|
| Sky | Navy | Navy, warmer at the horizon |
| Cards | Slate | Adobe brown |
| Accent | Lantern gold | Marigold and chili red |
| Highlight | Leaf green | Lime and cilantro |
| Coin icon | Gold coin | Clay token with a gold rim |
| Trophy icon | Gold cup | Fair ribbon on a chili-red rosette |
| Market icon | Roadside stand | Comal with pupusas |
| Compadres icon | Supportive Neighbors have no portrait | Two friends, one clay cup |

Level 2 art is drawn: Salvadoran background, twelve crops, clay coin, rosette, pupusa comal, Compadres icon, twelve harvest neighbors, twelve sellers, twelve buyers, and Pat.
