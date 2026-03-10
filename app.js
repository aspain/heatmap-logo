const DEFAULT_COLS = 185;
const DEFAULT_ROWS = 30;
const DEFAULT_FONT_MODE = "arial";
const DEFAULT_WEIGHT_MODE = "regular";
const MIN_COLS = 20;
const MAX_COLS = 400;
const MIN_ROWS = 8;
const MAX_ROWS = 120;
const MAX_LEVEL = 4;
const BASE_NOISE_AMOUNT = 0;
const INITIAL_NOISE_AMOUNT = -2;
const NOISE_AMOUNT_STEP = 0.08;
const STORAGE_KEY = "heatmap-logo.builder.v1";
const CELL_SIZE = 4;
const CELL_GAP = 1;
const CELL_RADIUS = 2;
const GRID_RADIUS = 10;
const GRID_PAD = Object.freeze({ top: 4, right: 4, bottom: 4, left: 4 });
const EMPTY_CELL = "#1f2937";
const GRID_BG = "#0f172a";
const RUN_BLUE = "#01cdfe";
const TEXT_LEVEL = MAX_LEVEL;
const SHADE_LEVEL = 1;
const GLYPH_SIZE = 7;
const GLYPH_SPACING = 1;
const TEXT_PADDING_X = 10;
const TEXT_PADDING_Y = 3;
const TEXT_RASTER_SCALE = 4;
const FONT_OPTIONS = Object.freeze({
  arial: Object.freeze({ label: "Arial", family: "Arial, Helvetica, sans-serif" }),
  "arial-black": Object.freeze({ label: "Arial Black", family: "\"Arial Black\", Gadget, sans-serif" }),
  "avenir-next": Object.freeze({ label: "Avenir Next", family: "\"Avenir Next\", Avenir, \"Segoe UI\", sans-serif" }),
  "bank-gothic": Object.freeze({ label: "Bank Gothic", family: "\"Bank Gothic\", \"Eurostile Extended\", Impact, sans-serif" }),
  "brush-script": Object.freeze({ label: "Brush Script", family: "\"Brush Script MT\", \"Segoe Script\", cursive" }),
  copperplate: Object.freeze({ label: "Copperplate", family: "Copperplate, \"Copperplate Gothic Light\", serif" }),
  courier: Object.freeze({ label: "Courier New", family: "\"Courier New\", Courier, monospace" }),
  didot: Object.freeze({ label: "Didot", family: "Didot, \"Bodoni 72\", serif" }),
  eurostile: Object.freeze({ label: "Eurostile", family: "Eurostile, \"Microgramma D Extended\", sans-serif" }),
  "franklin-gothic": Object.freeze({ label: "Franklin Gothic", family: "\"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif" }),
  "futura-condensed": Object.freeze({ label: "Futura Condensed", family: "\"Futura Condensed Extra Bold\", Futura, \"Arial Narrow\", sans-serif" }),
  georgia: Object.freeze({ label: "Georgia", family: "Georgia, serif" }),
  "gill-sans": Object.freeze({ label: "Gill Sans", family: "\"Gill Sans\", \"Gill Sans MT\", Calibri, sans-serif" }),
  helvetica: Object.freeze({ label: "Helvetica", family: "Helvetica, Arial, sans-serif" }),
  impact: Object.freeze({ label: "Impact", family: "Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif" }),
  "lucida-sans": Object.freeze({ label: "Lucida Sans", family: "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif" }),
  optima: Object.freeze({ label: "Optima", family: "Optima, Candara, \"Noto Sans\", sans-serif" }),
  oswald: Object.freeze({ label: "Oswald", family: "Oswald, \"Arial Narrow\", sans-serif" }),
  palatino: Object.freeze({ label: "Palatino", family: "\"Palatino Linotype\", Palatino, serif" }),
  phosphate: Object.freeze({ label: "Phosphate", family: "Phosphate, \"Arial Black\", Impact, sans-serif" }),
  pixel: Object.freeze({ label: "Pixel", family: "" }),
  "racing-sans": Object.freeze({ label: "Racing Sans One", family: "\"Racing Sans One\", \"Arial Black\", Impact, sans-serif" }),
  rockwell: Object.freeze({ label: "Rockwell", family: "Rockwell, \"Roboto Slab\", serif" }),
  stencil: Object.freeze({ label: "Stencil", family: "Stencil, \"Stencil Std\", Impact, sans-serif" }),
  "system-ui": Object.freeze({ label: "System UI", family: "system-ui, sans-serif" }),
  tahoma: Object.freeze({ label: "Tahoma", family: "Tahoma, Geneva, sans-serif" }),
  times: Object.freeze({ label: "Times New Roman", family: "\"Times New Roman\", Times, serif" }),
  trebuchet: Object.freeze({ label: "Trebuchet MS", family: "\"Trebuchet MS\", Tahoma, sans-serif" }),
  verdana: Object.freeze({ label: "Verdana", family: "Verdana, Geneva, sans-serif" }),
  "wide-latin": Object.freeze({ label: "Wide Latin", family: "\"Wide Latin\", \"Copperplate Gothic Bold\", serif" }),
});
const BITMAP_FONT = Object.freeze({
  " ": Object.freeze([
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
  ]),
  "-": Object.freeze([
    "0000000",
    "0000000",
    "0000000",
    "0011100",
    "0000000",
    "0000000",
    "0000000",
  ]),
  ".": Object.freeze([
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0011000",
    "0011000",
  ]),
  "_": Object.freeze([
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "1111111",
  ]),
  "0": Object.freeze([
    "0111110",
    "1000001",
    "1001101",
    "1010011",
    "1100001",
    "1000001",
    "0111110",
  ]),
  "1": Object.freeze([
    "0011000",
    "0101000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "1111111",
  ]),
  "2": Object.freeze([
    "0111110",
    "1000001",
    "0000001",
    "0001110",
    "0110000",
    "1000000",
    "1111111",
  ]),
  "3": Object.freeze([
    "1111110",
    "0000001",
    "0000001",
    "0011110",
    "0000001",
    "0000001",
    "1111110",
  ]),
  "4": Object.freeze([
    "0000110",
    "0001010",
    "0010010",
    "0100010",
    "1111111",
    "0000010",
    "0000010",
  ]),
  "5": Object.freeze([
    "1111111",
    "1000000",
    "1000000",
    "1111110",
    "0000001",
    "0000001",
    "1111110",
  ]),
  "6": Object.freeze([
    "0111110",
    "1000000",
    "1000000",
    "1111110",
    "1000001",
    "1000001",
    "0111110",
  ]),
  "7": Object.freeze([
    "1111111",
    "0000001",
    "0000010",
    "0000100",
    "0001000",
    "0010000",
    "0010000",
  ]),
  "8": Object.freeze([
    "0111110",
    "1000001",
    "1000001",
    "0111110",
    "1000001",
    "1000001",
    "0111110",
  ]),
  "9": Object.freeze([
    "0111110",
    "1000001",
    "1000001",
    "0111111",
    "0000001",
    "0000001",
    "0111110",
  ]),
  A: Object.freeze([
    "0111110",
    "1000001",
    "1000001",
    "1111111",
    "1000001",
    "1000001",
    "1000001",
  ]),
  B: Object.freeze([
    "1111110",
    "1000001",
    "1000001",
    "1111110",
    "1000001",
    "1000001",
    "1111110",
  ]),
  C: Object.freeze([
    "0111111",
    "1000000",
    "1000000",
    "1000000",
    "1000000",
    "1000000",
    "0111111",
  ]),
  D: Object.freeze([
    "1111110",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1111110",
  ]),
  E: Object.freeze([
    "1111111",
    "1000000",
    "1000000",
    "1111110",
    "1000000",
    "1000000",
    "1111111",
  ]),
  F: Object.freeze([
    "1111111",
    "1000000",
    "1000000",
    "1111110",
    "1000000",
    "1000000",
    "1000000",
  ]),
  G: Object.freeze([
    "0111111",
    "1000000",
    "1000000",
    "1001111",
    "1000001",
    "1000001",
    "0111110",
  ]),
  H: Object.freeze([
    "1000001",
    "1000001",
    "1000001",
    "1111111",
    "1000001",
    "1000001",
    "1000001",
  ]),
  I: Object.freeze([
    "1111111",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "1111111",
  ]),
  J: Object.freeze([
    "0001111",
    "0000010",
    "0000010",
    "0000010",
    "1000010",
    "1000010",
    "0111100",
  ]),
  K: Object.freeze([
    "1000001",
    "1000010",
    "1000100",
    "1111000",
    "1000100",
    "1000010",
    "1000001",
  ]),
  L: Object.freeze([
    "1000000",
    "1000000",
    "1000000",
    "1000000",
    "1000000",
    "1000000",
    "1111111",
  ]),
  M: Object.freeze([
    "1000001",
    "1100011",
    "1010101",
    "1001001",
    "1000001",
    "1000001",
    "1000001",
  ]),
  N: Object.freeze([
    "1000001",
    "1100001",
    "1010001",
    "1001001",
    "1000101",
    "1000011",
    "1000001",
  ]),
  O: Object.freeze([
    "0111110",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "0111110",
  ]),
  P: Object.freeze([
    "1111110",
    "1000001",
    "1000001",
    "1111110",
    "1000000",
    "1000000",
    "1000000",
  ]),
  Q: Object.freeze([
    "0111110",
    "1000001",
    "1000001",
    "1000001",
    "1001001",
    "1000101",
    "0111110",
  ]),
  R: Object.freeze([
    "1111110",
    "1000001",
    "1000001",
    "1111110",
    "1000100",
    "1000010",
    "1000001",
  ]),
  S: Object.freeze([
    "0111111",
    "1000000",
    "1000000",
    "0111110",
    "0000001",
    "0000001",
    "1111110",
  ]),
  T: Object.freeze([
    "1111111",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
  ]),
  U: Object.freeze([
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "0111110",
  ]),
  V: Object.freeze([
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "0100010",
    "0010100",
    "0001000",
  ]),
  W: Object.freeze([
    "1000001",
    "1000001",
    "1000001",
    "1001001",
    "1010101",
    "1100011",
    "1000001",
  ]),
  X: Object.freeze([
    "1000001",
    "0100010",
    "0010100",
    "0001000",
    "0010100",
    "0100010",
    "1000001",
  ]),
  Y: Object.freeze([
    "1000001",
    "0100010",
    "0010100",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
  ]),
  Z: Object.freeze([
    "1111111",
    "0000001",
    "0000010",
    "0001000",
    "0010000",
    "1000000",
    "1111111",
  ]),
});
const LOWERCASE_FONT = Object.freeze({
  a: Object.freeze([
    "0000000",
    "0000000",
    "0011000",
    "0000100",
    "0011100",
    "0100100",
    "0011110",
  ]),
  b: Object.freeze([
    "0010000",
    "0010000",
    "0011100",
    "0010010",
    "0010010",
    "0010010",
    "0011100",
  ]),
  c: Object.freeze([
    "0000000",
    "0000000",
    "0011110",
    "0100000",
    "0100000",
    "0100000",
    "0011110",
  ]),
  d: Object.freeze([
    "0000100",
    "0000100",
    "0011110",
    "0100100",
    "0100100",
    "0100100",
    "0011110",
  ]),
  e: Object.freeze([
    "0000000",
    "0000000",
    "0011100",
    "0100010",
    "0111110",
    "0100000",
    "0011110",
  ]),
  f: Object.freeze([
    "0001110",
    "0010000",
    "0010000",
    "0111100",
    "0010000",
    "0010000",
    "0010000",
  ]),
  g: Object.freeze([
    "0000000",
    "0000000",
    "0011110",
    "0100010",
    "0011110",
    "0000010",
    "0111100",
  ]),
  h: Object.freeze([
    "0010000",
    "0010000",
    "0011100",
    "0010010",
    "0010010",
    "0010010",
    "0010010",
  ]),
  i: Object.freeze([
    "0001000",
    "0000000",
    "0011000",
    "0001000",
    "0001000",
    "0001000",
    "0011100",
  ]),
  j: Object.freeze([
    "0000100",
    "0000000",
    "0001100",
    "0000100",
    "0000100",
    "0100100",
    "0011000",
  ]),
  k: Object.freeze([
    "0010000",
    "0010000",
    "0010010",
    "0010100",
    "0011000",
    "0010100",
    "0010010",
  ]),
  l: Object.freeze([
    "0011000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "0001000",
    "0011100",
  ]),
  m: Object.freeze([
    "0000000",
    "0000000",
    "0110110",
    "0101010",
    "0101010",
    "0101010",
    "0101010",
  ]),
  n: Object.freeze([
    "0000000",
    "0000000",
    "0011100",
    "0100010",
    "0100010",
    "0100010",
    "0100010",
  ]),
  o: Object.freeze([
    "0000000",
    "0000000",
    "0011100",
    "0100010",
    "0100010",
    "0100010",
    "0011100",
  ]),
  p: Object.freeze([
    "0000000",
    "0000000",
    "0011100",
    "0010010",
    "0011100",
    "0010000",
    "0010000",
  ]),
  q: Object.freeze([
    "0000000",
    "0000000",
    "0011110",
    "0100100",
    "0011110",
    "0000100",
    "0000100",
  ]),
  r: Object.freeze([
    "0000000",
    "0000000",
    "0010110",
    "0011000",
    "0010000",
    "0010000",
    "0010000",
  ]),
  s: Object.freeze([
    "0000000",
    "0000000",
    "0011110",
    "0100000",
    "0011100",
    "0000100",
    "0111100",
  ]),
  t: Object.freeze([
    "0010000",
    "0010000",
    "0111000",
    "0010000",
    "0010000",
    "0010010",
    "0001100",
  ]),
  u: Object.freeze([
    "0000000",
    "0000000",
    "0100010",
    "0100010",
    "0100010",
    "0100010",
    "0011110",
  ]),
  v: Object.freeze([
    "0000000",
    "0000000",
    "0100010",
    "0100010",
    "0100010",
    "0010100",
    "0001000",
  ]),
  w: Object.freeze([
    "0000000",
    "0000000",
    "0100010",
    "0100010",
    "0101010",
    "0101010",
    "0010100",
  ]),
  x: Object.freeze([
    "0000000",
    "0000000",
    "0100010",
    "0010100",
    "0001000",
    "0010100",
    "0100010",
  ]),
  y: Object.freeze([
    "0000000",
    "0000000",
    "0100010",
    "0100010",
    "0011110",
    "0000100",
    "0111000",
  ]),
  z: Object.freeze([
    "0000000",
    "0000000",
    "0111110",
    "0001000",
    "0010000",
    "0100000",
    "0111110",
  ]),
});

const textForm = document.getElementById("textForm");
const textInput = document.getElementById("textInput");
const fontModeSelect = document.getElementById("fontModeSelect");
const weightModeSelect = document.getElementById("weightModeSelect");
const accentColorInput = document.getElementById("accentColorInput");
const threeDModeInput = document.getElementById("threeDModeInput");
const gridWidthInput = document.getElementById("gridWidthInput");
const gridHeightInput = document.getElementById("gridHeightInput");
const gridWidthIncreaseButton = document.getElementById("gridWidthIncreaseButton");
const gridWidthDecreaseButton = document.getElementById("gridWidthDecreaseButton");
const gridHeightIncreaseButton = document.getElementById("gridHeightIncreaseButton");
const gridHeightDecreaseButton = document.getElementById("gridHeightDecreaseButton");
const undoButton = document.getElementById("undoButton");
const resetButton = document.getElementById("resetButton");
const randomNoiseButton = document.getElementById("randomNoiseButton");
const noiseIncreaseButton = document.getElementById("noiseIncreaseButton");
const noiseDecreaseButton = document.getElementById("noiseDecreaseButton");
const exportSplit = document.getElementById("exportSplit");
const exportButton = document.getElementById("exportButton");
const exportMenuButton = document.getElementById("exportMenuButton");
const exportMenu = document.getElementById("exportMenu");
const exportSvgButton = document.getElementById("exportSvgButton");
const exportPngButton = document.getElementById("exportPngButton");
const paintStats = document.getElementById("paintStats");
const statusMessage = document.getElementById("statusMessage");
const gridValidationMessage = document.getElementById("gridValidationMessage");
const legendSwatches = document.getElementById("legendSwatches");
const grid = document.getElementById("grid");
const resizeHandle = document.getElementById("resizeHandle");
const editorPanel = document.querySelector(".editor-panel");
const heatmapFrame = document.querySelector(".heatmap-frame");

const loadedState = loadState();
let gridCols = loadedState.cols;
let gridRows = loadedState.rows;
let levels = loadedState.levels;
let backgroundLevels = loadedState.backgroundLevels;
let currentGeneratorMask = loadedState.generatorMask;
let noiseSeed = loadedState.noiseSeed;
let noiseAmount = normalizeNoiseAmount(loadedState.noiseAmount);
let accentColor = loadedState.accentColor;
let levelColors = buildLevelColors(accentColor);
let undoStack = [];
let activeStroke = null;
let statusTimeoutId = 0;
let autoApplyTimeoutId = 0;
let lastAutoApplySignature = "";
let lastRenderedFromGenerator = loadedState.lastRenderedFromGenerator;
let resizeSession = null;
let lastGeneratorFailure = "";
let lastGeneratorLayout = null;
let exportMenuOpen = false;

renderLegend();
renderGrid();
renderAllCells();
syncSizeInputs();
syncAccentColorUi();
syncUi();
applyInitialTextFromUrl();

grid.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

grid.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

window.addEventListener("pointerup", finishStroke);
window.addEventListener("pointercancel", finishStroke);
window.addEventListener("blur", finishStroke);
window.addEventListener("pointermove", updateResizeSession);
window.addEventListener("pointerup", endResizeSession);
window.addEventListener("pointercancel", endResizeSession);
window.addEventListener("blur", endResizeSession);
window.addEventListener("keydown", handleExportMenuKeydown);
window.addEventListener("pointerdown", handleExportMenuPointerdown);
window.addEventListener("resize", syncPreviewScale);

resizeHandle.addEventListener("pointerdown", beginResizeSession);

undoButton.addEventListener("click", () => {
  if (!undoStack.length) return;
  restoreSnapshot(undoStack.pop());
  clearGridValidationError();
  clearStatusMessage();
});

resetButton.addEventListener("click", () => {
  if (!canResetEditor()) {
    clearGridValidationError();
    clearStatusMessage();
    syncUi();
    return;
  }
  finishStroke();
  pushUndoSnapshot();
  textInput.value = "";
  gridCols = DEFAULT_COLS;
  gridRows = DEFAULT_ROWS;
  fontModeSelect.value = DEFAULT_FONT_MODE;
  weightModeSelect.value = DEFAULT_WEIGHT_MODE;
  threeDModeInput.checked = false;
  accentColor = RUN_BLUE;
  levelColors = buildLevelColors(accentColor);
  noiseAmount = BASE_NOISE_AMOUNT;
  syncSizeInputs();
  syncAccentColorUi();
  renderLegend();
  backgroundLevels = Array(totalCells()).fill(0);
  levels = Array(totalCells()).fill(0);
  currentGeneratorMask = [];
  noiseSeed = 0;
  lastGeneratorLayout = null;
  lastRenderedFromGenerator = false;
  lastAutoApplySignature = "";
  clearGridValidationError();
  renderGrid();
  persistLevels();
  renderAllCells();
  syncUi();
  clearStatusMessage();
});

randomNoiseButton.addEventListener("click", () => {
  applyRandomNoise();
});

noiseIncreaseButton.addEventListener("click", () => {
  adjustNoiseAmount(1);
});

noiseDecreaseButton.addEventListener("click", () => {
  adjustNoiseAmount(-1);
});

gridWidthIncreaseButton.addEventListener("click", () => {
  stepSizeInput(gridWidthInput, 1);
});

gridWidthDecreaseButton.addEventListener("click", () => {
  stepSizeInput(gridWidthInput, -1);
});

gridHeightIncreaseButton.addEventListener("click", () => {
  stepSizeInput(gridHeightInput, 1);
});

gridHeightDecreaseButton.addEventListener("click", () => {
  stepSizeInput(gridHeightInput, -1);
});

exportButton.addEventListener("click", () => {
  exportSvg();
});

exportMenuButton.addEventListener("click", () => {
  toggleExportMenu();
});

exportSvgButton.addEventListener("click", () => {
  closeExportMenu();
  exportSvg();
});

exportPngButton.addEventListener("click", async () => {
  closeExportMenu();
  await exportPng();
});

function normalizeAccentColor(value) {
  const normalized = String(value || "").trim();
  return /^#[0-9a-fA-F]{6}$/.test(normalized) ? normalized.toLowerCase() : RUN_BLUE;
}

function buildLevelColors(color = accentColor) {
  const colors = [EMPTY_CELL];
  for (let level = 1; level <= MAX_LEVEL; level += 1) {
    colors.push(heatColor(color, level, MAX_LEVEL));
  }
  return colors;
}

function syncAccentColorUi() {
  const color = normalizeAccentColor(accentColor);
  accentColor = color;
  accentColorInput.value = color;
  document.documentElement.style.setProperty("--accent", color);
}

function hexToRgb(hex) {
  const cleaned = String(hex || "").replace("#", "");
  if (cleaned.length !== 6) return null;
  const r = Number.parseInt(cleaned.slice(0, 2), 16);
  const g = Number.parseInt(cleaned.slice(2, 4), 16);
  const b = Number.parseInt(cleaned.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
  return { r, g, b };
}

function heatColor(hex, value, max) {
  if (max <= 0) return EMPTY_CELL;
  if (value <= 0) return GRID_BG;
  const rgb = hexToRgb(hex);
  const base = hexToRgb(GRID_BG);
  if (!rgb || !base) return hex;
  const intensity = Math.pow(Math.min(value / max, 1), 0.75);
  const r = Math.round(base.r + (rgb.r - base.r) * intensity);
  const g = Math.round(base.g + (rgb.g - base.g) * intensity);
  const b = Math.round(base.b + (rgb.b - base.b) * intensity);
  return `rgb(${r}, ${g}, ${b})`;
}

function clampInt(value, min, max, fallback) {
  const number = Number.parseInt(String(value), 10);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(Math.max(number, min), max);
}

function totalCells(cols = gridCols, rows = gridRows) {
  return cols * rows;
}

function cellIndex(col, row, rows = gridRows) {
  return (col * rows) + row;
}

function resizeLevelsFromBase(baseLevels, baseCols, baseRows, nextCols, nextRows) {
  const nextLevels = Array(totalCells(nextCols, nextRows)).fill(0);
  const colsToCopy = Math.min(baseCols, nextCols);
  const rowsToCopy = Math.min(baseRows, nextRows);

  for (let col = 0; col < colsToCopy; col += 1) {
    for (let row = 0; row < rowsToCopy; row += 1) {
      nextLevels[cellIndex(col, row, nextRows)] = normalizeLevel(baseLevels[cellIndex(col, row, baseRows)]);
    }
  }

  return nextLevels;
}

function resizeMaskFromBase(baseMask, baseCols, baseRows, nextCols, nextRows) {
  const colsToCopy = Math.min(baseCols, nextCols);
  const rowsToCopy = Math.min(baseRows, nextRows);
  const resizedMask = [];

  normalizeMask(baseMask, totalCells(baseCols, baseRows)).forEach((index) => {
    const col = Math.floor(index / baseRows);
    const row = index % baseRows;
    if (col >= colsToCopy || row >= rowsToCopy) return;
    resizedMask.push(cellIndex(col, row, nextRows));
  });

  return normalizeMask(resizedMask, totalCells(nextCols, nextRows));
}

function normalizeMask(mask, cellCount = totalCells()) {
  if (!Array.isArray(mask)) return [];
  const unique = new Set();
  mask.forEach((value) => {
    const index = Number.parseInt(String(value), 10);
    if (!Number.isFinite(index)) return;
    if (index < 0 || index >= cellCount) return;
    unique.add(index);
  });
  return Array.from(unique).sort((left, right) => left - right);
}

function snapshotState() {
  return {
    cols: gridCols,
    rows: gridRows,
    levels: levels.slice(),
    backgroundLevels: backgroundLevels.slice(),
    generatorMask: currentGeneratorMask.slice(),
    noiseSeed,
    noiseAmount,
    accentColor,
    lastRenderedFromGenerator,
  };
}

function normalizeNoiseAmount(value) {
  const number = Number.parseInt(String(value), 10);
  if (!Number.isFinite(number)) return BASE_NOISE_AMOUNT;
  return number;
}

function syncGridCssVars() {
  grid.style.setProperty("--grid-cols", String(gridCols));
  grid.style.setProperty("--grid-rows", String(gridRows));
}

function syncSizeInputs() {
  gridWidthInput.value = String(gridCols);
  gridHeightInput.value = String(gridRows);
}

function renderLegend() {
  legendSwatches.innerHTML = "";
  levelColors.forEach((color, level) => {
    const item = document.createElement("span");
    item.className = "legend-swatch";

    const chip = document.createElement("span");
    chip.className = "legend-chip";
    chip.style.background = color;

    const text = document.createElement("span");
    text.textContent = String(level);

    item.append(chip, text);
    legendSwatches.appendChild(item);
  });
}

function renderGrid() {
  grid.innerHTML = "";
  syncGridCssVars();
  syncPreviewScale();
  for (let index = 0; index < totalCells(); index += 1) {
    const cell = document.createElement("button");
    const row = index % gridRows;
    const col = Math.floor(index / gridRows);
    cell.type = "button";
    cell.className = "cell";
    cell.dataset.index = String(index);
    cell.style.gridColumn = String(col + 1);
    cell.style.gridRow = String(row + 1);
    cell.setAttribute("role", "gridcell");
    cell.addEventListener("pointerdown", handleCellPointerDown);
    cell.addEventListener("pointerenter", handleCellPointerEnter);
    grid.appendChild(cell);
  }
}

function renderAllCells() {
  Array.from(grid.children).forEach((cell) => {
    renderCell(Number(cell.dataset.index));
  });
}

function renderCell(index) {
  const cell = grid.children[index];
  if (!cell) return;
  const level = normalizeLevel(levels[index]);
  const row = index % gridRows;
  const col = Math.floor(index / gridRows);
  cell.style.background = levelColors[level];
  cell.setAttribute(
    "aria-label",
    `Column ${col + 1}, row ${row + 1}, contribution level ${level}`,
  );
  cell.title = `Column ${col + 1}, row ${row + 1}: level ${level}`;
}

function handleCellPointerDown(event) {
  const mode = resolveStrokeMode(event);
  if (!mode) return;
  event.preventDefault();
  const index = Number(event.currentTarget.dataset.index);
  startStroke(mode);
  applyStroke(index);
}

function handleCellPointerEnter(event) {
  if (!activeStroke) return;
  event.preventDefault();
  const index = Number(event.currentTarget.dataset.index);
  applyStroke(index);
}

function resolveStrokeMode(event) {
  if (event.button === 0) {
    return event.shiftKey ? "max" : "increment";
  }
  if (event.button === 2) {
    return event.shiftKey ? "clear" : "decrement";
  }
  return "";
}

function startStroke(mode) {
  finishStroke();
  pushUndoSnapshot();
  activeStroke = {
    mode,
    changed: false,
  };
}

function pushUndoSnapshot() {
  undoStack.push(snapshotState());
  if (undoStack.length > 200) {
    undoStack.shift();
  }
}

function restoreSnapshot(snapshot) {
  if (!snapshot) return;
  const cols = clampInt(snapshot.cols, MIN_COLS, MAX_COLS, gridCols);
  const rows = clampInt(snapshot.rows, MIN_ROWS, MAX_ROWS, gridRows);
  gridCols = cols;
  gridRows = rows;
  levels = Array.isArray(snapshot.levels) && snapshot.levels.length === totalCells(cols, rows)
    ? snapshot.levels.map(normalizeLevel)
    : resizeLevelsFromBase(snapshot.levels || [], cols, rows, cols, rows);
  backgroundLevels = Array.isArray(snapshot.backgroundLevels) && snapshot.backgroundLevels.length === totalCells(cols, rows)
    ? snapshot.backgroundLevels.map(normalizeLevel)
    : resizeLevelsFromBase(snapshot.backgroundLevels || [], cols, rows, cols, rows);
  currentGeneratorMask = normalizeMask(snapshot.generatorMask, totalCells(cols, rows));
  noiseSeed = Number.isFinite(snapshot.noiseSeed) ? Number(snapshot.noiseSeed) : 0;
  noiseAmount = normalizeNoiseAmount(snapshot.noiseAmount);
  accentColor = normalizeAccentColor(snapshot.accentColor);
  levelColors = buildLevelColors(accentColor);
  lastGeneratorLayout = null;
  lastRenderedFromGenerator = Boolean(snapshot.lastRenderedFromGenerator);
  lastAutoApplySignature = "";
  syncSizeInputs();
  syncAccentColorUi();
  renderLegend();
  renderGrid();
  renderAllCells();
  persistLevels();
  syncUi();
}

function applyAccentColor(nextColor, options = {}) {
  const normalized = normalizeAccentColor(nextColor);
  if (normalized === accentColor) {
    syncAccentColorUi();
    return;
  }
  accentColor = normalized;
  levelColors = buildLevelColors(accentColor);
  syncAccentColorUi();
  renderLegend();
  renderAllCells();
  persistLevels();
  syncUi();
  if (!options.skipStatus) {
    clearStatusMessage();
  }
}

function applyStroke(index) {
  if (!activeStroke) return;
  const current = normalizeLevel(levels[index]);
  const next = nextLevelForMode(current, activeStroke.mode);
  if (next === current) return;
  levels[index] = next;
  backgroundLevels[index] = next;
  noiseSeed = 0;
  lastGeneratorLayout = null;
  activeStroke.changed = true;
  lastRenderedFromGenerator = false;
  renderCell(index);
  const cell = grid.children[index];
  if (cell) {
    cell.classList.add("is-drawing");
    window.setTimeout(() => cell.classList.remove("is-drawing"), 120);
  }
  persistLevels();
  syncUi();
}

function finishStroke() {
  if (!activeStroke) return;
  if (!activeStroke.changed) {
    undoStack.pop();
  }
  activeStroke = null;
  syncUi();
}

function nextLevelForMode(current, mode) {
  if (mode === "increment") {
    return Math.min(current + 1, MAX_LEVEL);
  }
  if (mode === "decrement") {
    return current <= 0 ? 0 : current - 1;
  }
  if (mode === "max") {
    return MAX_LEVEL;
  }
  if (mode === "clear") {
    return 0;
  }
  return current;
}

function normalizeLevel(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.min(Math.max(Math.round(number), 0), MAX_LEVEL);
}

function hasPaintedCells() {
  return levels.some((level) => normalizeLevel(level) > 0);
}

function canResetEditor() {
  return hasPaintedCells()
    || noiseSeed !== 0
    || gridCols !== DEFAULT_COLS
    || gridRows !== DEFAULT_ROWS
    || Boolean(normalizeGeneratorText(textInput.value))
    || fontModeSelect.value !== DEFAULT_FONT_MODE
    || weightModeSelect.value !== DEFAULT_WEIGHT_MODE
    || Boolean(threeDModeInput.checked)
    || normalizeAccentColor(accentColor) !== RUN_BLUE;
}

function normalizeGeneratorText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function generatorStateSignature() {
  return JSON.stringify({
    text: normalizeGeneratorText(textInput.value),
    font: fontModeSelect.value,
    weightMode: weightModeSelect.value,
    depth: Boolean(threeDModeInput.checked),
    cols: gridCols,
    rows: gridRows,
  });
}

function generatorContentSignature(rawText = textInput.value) {
  return JSON.stringify({
    text: normalizeGeneratorText(rawText),
    font: fontModeSelect.value,
    weightMode: weightModeSelect.value,
    depth: Boolean(threeDModeInput.checked),
  });
}

function resolveGlyph(character) {
  if (Object.prototype.hasOwnProperty.call(BITMAP_FONT, character)) {
    return BITMAP_FONT[character];
  }
  if (Object.prototype.hasOwnProperty.call(LOWERCASE_FONT, character)) {
    return LOWERCASE_FONT[character];
  }
  return null;
}

function glyphColumnBounds(glyph) {
  let minCol = GLYPH_SIZE;
  let maxCol = -1;

  glyph.forEach((rowPattern) => {
    Array.from(rowPattern).forEach((pixel, colIndex) => {
      if (pixel !== "1") return;
      minCol = Math.min(minCol, colIndex);
      maxCol = Math.max(maxCol, colIndex);
    });
  });

  if (maxCol < minCol) {
    return { minCol: 0, maxCol: 0, width: 1 };
  }

  return {
    minCol,
    maxCol,
    width: (maxCol - minCol) + 1,
  };
}

function collectPaintedMask(sourceLevels) {
  const mask = [];
  sourceLevels.forEach((level, index) => {
    if (normalizeLevel(level) > 0) {
      mask.push(index);
    }
  });
  return mask;
}

function composeLevels(preview, baseBackground = backgroundLevels) {
  const nextLevels = Array.isArray(baseBackground) && baseBackground.length === totalCells()
    ? baseBackground.slice()
    : Array(totalCells()).fill(0);
  preview.mask.forEach((index) => {
    nextLevels[index] = normalizeLevel(preview.levels[index]);
  });
  return nextLevels;
}

function randomSeed() {
  return Math.floor(Math.random() * 0x7fffffff);
}

function seededNoiseValue(col, row, seed) {
  let value = Math.imul((col + 1), 374761393) ^ Math.imul((row + 1), 668265263) ^ seed;
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  value ^= value >>> 16;
  return (value >>> 0) / 4294967295;
}

function noiseLevelFromRoll(roll) {
  if (roll < 0.68) return 0;
  if (roll < 0.84) return 1;
  if (roll < 0.93) return 2;
  if (roll < 0.985) return 3;
  return 4;
}

function clamp01(value) {
  return Math.min(Math.max(value, 0), 1);
}

function adjustedNoiseRoll(roll, amount = noiseAmount) {
  return clamp01(roll + ((normalizeNoiseAmount(amount) - BASE_NOISE_AMOUNT) * NOISE_AMOUNT_STEP));
}

function buildNoiseLevels(seed, amount = noiseAmount, cols = gridCols, rows = gridRows) {
  const nextLevels = Array(totalCells(cols, rows)).fill(0);
  if (!seed) {
    return nextLevels;
  }

  for (let col = 0; col < cols; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      const roll = adjustedNoiseRoll(seededNoiseValue(col, row, seed), amount);
      nextLevels[cellIndex(col, row, rows)] = noiseLevelFromRoll(roll);
    }
  }

  return nextLevels;
}

function areLevelArraysEqual(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) {
    return false;
  }
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }
  return true;
}

function canAdjustNoise(direction) {
  if (!noiseSeed) {
    return direction > 0;
  }
  const nextBackgroundLevels = buildNoiseLevels(noiseSeed, noiseAmount + direction, gridCols, gridRows);
  return !areLevelArraysEqual(backgroundLevels, nextBackgroundLevels);
}

function defaultTextPadding() {
  return {
    x: TEXT_PADDING_X,
    y: TEXT_PADDING_Y,
  };
}

function edgeTextPadding() {
  return {
    x: 0,
    y: 0,
  };
}

function generatorSizeConstraint(contentSignature) {
  if (!lastGeneratorLayout) return null;
  if (lastGeneratorLayout.contentSignature !== contentSignature) return null;
  if (lastGeneratorLayout.cols === gridCols && lastGeneratorLayout.rows === gridRows) return null;
  return lastGeneratorLayout;
}

function compareResizeDirection(previousLayout) {
  if (!previousLayout) return "same";

  const grewCols = gridCols > previousLayout.cols;
  const shrankCols = gridCols < previousLayout.cols;
  const grewRows = gridRows > previousLayout.rows;
  const shrankRows = gridRows < previousLayout.rows;

  if ((grewCols || grewRows) && !shrankCols && !shrankRows) {
    return "expand";
  }

  if ((shrankCols || shrankRows) && !grewCols && !grewRows) {
    return "shrink";
  }

  const previousArea = previousLayout.cols * previousLayout.rows;
  const nextArea = gridCols * gridRows;
  if (nextArea > previousArea) return "expand";
  if (nextArea < previousArea) return "shrink";
  return "same";
}

function chooseAdaptiveLayout(buildWithPadding, contentSignature) {
  const previousLayout = generatorSizeConstraint(contentSignature);
  const paddedLayout = buildWithPadding(defaultTextPadding());
  if (!previousLayout) {
    return paddedLayout || buildWithPadding(edgeTextPadding());
  }

  const metricLimit = previousLayout.metric;
  const resizeDirection = compareResizeDirection(previousLayout);
  const cappedPaddedLayout = buildWithPadding(defaultTextPadding(), metricLimit);
  const cappedEdgeLayout = buildWithPadding(edgeTextPadding(), metricLimit);

  if (resizeDirection === "expand") {
    if (paddedLayout && paddedLayout.metric >= metricLimit) {
      return paddedLayout;
    }
    if (cappedEdgeLayout) {
      return cappedEdgeLayout;
    }
    return cappedPaddedLayout || paddedLayout || buildWithPadding(edgeTextPadding());
  }

  if (cappedPaddedLayout) {
    return cappedPaddedLayout;
  }
  if (cappedEdgeLayout) {
    return cappedEdgeLayout;
  }
  return paddedLayout || buildWithPadding(edgeTextPadding());
}

function refreshBackgroundLevels() {
  if (noiseSeed) {
    backgroundLevels = buildNoiseLevels(noiseSeed, noiseAmount, gridCols, gridRows);
    return;
  }
  if (!Array.isArray(backgroundLevels) || backgroundLevels.length !== totalCells()) {
    backgroundLevels = Array(totalCells()).fill(0);
  }
}

function applyTextToGrid(rawText, options = {}) {
  finishStroke();
  clearGeneratorFailure();
  const normalizedText = normalizeGeneratorText(rawText);
  if (!normalizedText) {
    clearGridValidationError();
    clearStatusMessage();
    return;
  }
  const preview = buildGeneratorPreview(normalizedText);
  if (!preview) {
    if (lastGeneratorFailure) {
      if (lastGeneratorFailure.includes("does not fit")) {
        setGridValidationError(lastGeneratorFailure);
      } else {
        clearGridValidationError();
        flashStatus(lastGeneratorFailure);
      }
    } else {
      setGridValidationError("Text does not fit in the current grid. Increase width or height, or shorten the text.");
    }
    return;
  }

  if (!options.skipUndo) {
    pushUndoSnapshot();
  }
  clearGridValidationError();
  refreshBackgroundLevels();
  levels = composeLevels(preview);
  currentGeneratorMask = preview.mask.slice();
  lastGeneratorLayout = preview.layoutMeta || null;
  lastRenderedFromGenerator = true;
  persistLevels();
  renderAllCells();
  syncUi();
  clearStatusMessage();
}

function buildGeneratorPreview(rawText) {
  const normalizedText = normalizeGeneratorText(rawText);
  if (!normalizedText) {
    return {
      levels: Array(totalCells()).fill(0),
      mask: [],
    };
  }
  const text = normalizedText;
  const enable3d = threeDModeInput.checked;
  const glyphSpacing = GLYPH_SPACING;
  const fontMode = fontModeSelect.value;
  const weightMode = weightModeSelect.value;
  const contentSignature = generatorContentSignature(normalizedText);

  const layout = fontMode === "pixel"
    ? buildBitmapTextLevels(text, glyphSpacing, weightMode, contentSignature)
    : buildFontTextLevels(text, fontMode, weightMode, contentSignature);

  if (!layout) {
    return null;
  }

  const finalLevels = enable3d ? apply3dShade(layout.levels) : layout.levels;
  return {
    levels: finalLevels,
    mask: collectPaintedMask(finalLevels),
    layoutMeta: {
      contentSignature,
      cols: gridCols,
      rows: gridRows,
      metric: layout.metric,
    },
  };
}

function resolveCurrentNoisePreview() {
  finishStroke();
  clearGeneratorFailure();
  const normalizedText = normalizeGeneratorText(textInput.value);
  const preview = normalizedText
    ? buildGeneratorPreview(normalizedText)
    : { levels: Array(totalCells()).fill(0), mask: [] };
  if (!preview) {
    if (lastGeneratorFailure) {
      if (lastGeneratorFailure.includes("does not fit")) {
        setGridValidationError(lastGeneratorFailure);
      } else {
        clearGridValidationError();
        flashStatus(lastGeneratorFailure);
      }
    } else {
      setGridValidationError("Text does not fit in the current grid. Increase width or height, or shorten the text.");
    }
    return null;
  }
  return preview;
}

function applyNoiseFromSeed(seed, options = {}) {
  const preview = resolveCurrentNoisePreview();
  if (!preview) return false;
  if (!options.skipUndo) {
    pushUndoSnapshot();
  }
  clearGridValidationError();
  noiseSeed = seed;
  backgroundLevels = buildNoiseLevels(noiseSeed, noiseAmount, gridCols, gridRows);
  levels = composeLevels(preview);
  currentGeneratorMask = preview.mask.slice();
  lastGeneratorLayout = preview.layoutMeta || null;
  lastRenderedFromGenerator = false;
  persistLevels();
  renderAllCells();
  syncUi();
  if (!options.skipStatus) {
    clearStatusMessage();
  }
  return true;
}

function applyRandomNoise() {
  if (!noiseSeed) {
    noiseAmount = BASE_NOISE_AMOUNT;
  }
  applyNoiseFromSeed(randomSeed());
}

function adjustNoiseAmount(direction) {
  if (!noiseSeed) {
    if (direction > 0) {
      noiseAmount = INITIAL_NOISE_AMOUNT;
      applyNoiseFromSeed(randomSeed());
      return;
    }
    syncUi();
    return;
  }

  const nextAmount = noiseAmount + direction;
  const nextBackgroundLevels = buildNoiseLevels(noiseSeed, nextAmount, gridCols, gridRows);
  if (areLevelArraysEqual(backgroundLevels, nextBackgroundLevels)) {
    syncUi();
    return;
  }

  pushUndoSnapshot();
  noiseAmount = nextAmount;
  const applied = applyNoiseFromSeed(noiseSeed, { skipUndo: true, skipStatus: true });
  if (!applied) {
    restoreSnapshot(undoStack.pop());
    return;
  }
  clearStatusMessage();
}

function clearGridForEmptyText() {
  if (!hasPaintedCells()) {
    clearGridValidationError();
    syncUi();
    return;
  }
  pushUndoSnapshot();
  levels = Array(totalCells()).fill(0);
  backgroundLevels = Array(totalCells()).fill(0);
  currentGeneratorMask = [];
  noiseSeed = 0;
  lastGeneratorLayout = null;
  lastRenderedFromGenerator = false;
  clearGridValidationError();
  persistLevels();
  renderAllCells();
  syncUi();
  clearStatusMessage();
}

function applyCurrentGeneratorState(options = {}) {
  const signature = generatorStateSignature();
  if (signature === lastAutoApplySignature) {
    return;
  }
  lastAutoApplySignature = signature;
  const normalizedText = normalizeGeneratorText(textInput.value);
  if (!normalizedText) {
    clearGridForEmptyText();
    return;
  }
  applyTextToGrid(normalizedText, options);
}

function scheduleAutoApply(delay = 0) {
  if (autoApplyTimeoutId) {
    window.clearTimeout(autoApplyTimeoutId);
  }
  autoApplyTimeoutId = window.setTimeout(() => {
    autoApplyTimeoutId = 0;
    applyCurrentGeneratorState();
  }, delay);
}

function applyGridResize(nextCols, nextRows, options = {}) {
  const targetCols = clampInt(nextCols, MIN_COLS, MAX_COLS, gridCols);
  const targetRows = clampInt(nextRows, MIN_ROWS, MAX_ROWS, gridRows);
  if (targetCols === gridCols && targetRows === gridRows) {
    syncSizeInputs();
    return false;
  }

  const {
    baseCols = gridCols,
    baseRows = gridRows,
    baseLevels = levels.slice(),
    baseBackgroundLevels = backgroundLevels.slice(),
    baseGeneratorMask = currentGeneratorMask.slice(),
    baseNoiseSeed = noiseSeed,
    baseWasGenerated = lastRenderedFromGenerator,
    skipUndo = false,
    skipStatus = false,
  } = options;

  if (!skipUndo) {
    pushUndoSnapshot();
  }

  gridCols = targetCols;
  gridRows = targetRows;
  syncSizeInputs();

  const normalizedText = normalizeGeneratorText(textInput.value);

  if (normalizedText) {
    lastAutoApplySignature = "";
    noiseSeed = baseNoiseSeed;
    backgroundLevels = baseNoiseSeed
      ? buildNoiseLevels(baseNoiseSeed, noiseAmount, gridCols, gridRows)
      : resizeLevelsFromBase(baseBackgroundLevels, baseCols, baseRows, gridCols, gridRows);
    levels = Array(totalCells()).fill(0);
    currentGeneratorMask = [];
    renderGrid();
    applyCurrentGeneratorState({ skipUndo: true });
  } else {
    noiseSeed = baseNoiseSeed;
    backgroundLevels = baseNoiseSeed
      ? buildNoiseLevels(baseNoiseSeed, noiseAmount, gridCols, gridRows)
      : resizeLevelsFromBase(baseBackgroundLevels, baseCols, baseRows, gridCols, gridRows);
    levels = baseNoiseSeed
      ? backgroundLevels.slice()
      : resizeLevelsFromBase(baseLevels, baseCols, baseRows, gridCols, gridRows);
    currentGeneratorMask = resizeMaskFromBase(baseGeneratorMask, baseCols, baseRows, gridCols, gridRows);
    lastRenderedFromGenerator = false;
    renderGrid();
    renderAllCells();
    persistLevels();
    syncUi();
  }

  if (!skipStatus) {
    clearStatusMessage();
  }
  return true;
}

function commitSizeInputs() {
  const nextCols = clampInt(gridWidthInput.value, MIN_COLS, MAX_COLS, gridCols);
  const nextRows = clampInt(gridHeightInput.value, MIN_ROWS, MAX_ROWS, gridRows);
  applyGridResize(nextCols, nextRows, { skipStatus: false });
}

function stepSizeInput(input, direction) {
  const currentValue = Number.parseInt(input.value, 10);
  const fallback = input === gridWidthInput ? gridCols : gridRows;
  const min = Number.parseInt(input.min, 10);
  const max = Number.parseInt(input.max, 10);
  const nextValue = clampInt(
    (Number.isFinite(currentValue) ? currentValue : fallback) + direction,
    Number.isFinite(min) ? min : fallback,
    Number.isFinite(max) ? max : fallback,
    fallback,
  );
  input.value = String(nextValue);
  commitSizeInputs();
}

function beginResizeSession(event) {
  event.preventDefault();
  resizeSession = {
    startX: event.clientX,
    startY: event.clientY,
    baseCols: gridCols,
    baseRows: gridRows,
    baseLevels: levels.slice(),
    baseBackgroundLevels: backgroundLevels.slice(),
    baseGeneratorMask: currentGeneratorMask.slice(),
    baseNoiseSeed: noiseSeed,
    baseWasGenerated: lastRenderedFromGenerator,
    changed: false,
  };
  pushUndoSnapshot();
  resizeHandle.setPointerCapture?.(event.pointerId);
}

function updateResizeSession(event) {
  if (!resizeSession) return;
  const previewScale = getPreviewScale();
  const colStep = (CELL_SIZE + CELL_GAP) * previewScale;
  const rowStep = (CELL_SIZE + CELL_GAP) * previewScale;
  const deltaCols = Math.round((event.clientX - resizeSession.startX) / colStep);
  const deltaRows = Math.round((event.clientY - resizeSession.startY) / rowStep);
  const nextCols = resizeSession.baseCols + deltaCols;
  const nextRows = resizeSession.baseRows + deltaRows;
  const changed = applyGridResize(nextCols, nextRows, {
    baseCols: resizeSession.baseCols,
    baseRows: resizeSession.baseRows,
    baseLevels: resizeSession.baseLevels,
    baseBackgroundLevels: resizeSession.baseBackgroundLevels,
    baseGeneratorMask: resizeSession.baseGeneratorMask,
    baseNoiseSeed: resizeSession.baseNoiseSeed,
    baseWasGenerated: resizeSession.baseWasGenerated,
    skipUndo: true,
    skipStatus: true,
  });
  resizeSession.changed = resizeSession.changed || changed;
}

function endResizeSession() {
  if (!resizeSession) return;
  if (!resizeSession.changed) {
    undoStack.pop();
  }
  resizeSession = null;
}

function stepSelectOption(select, direction) {
  const options = Array.from(select.options);
  const currentIndex = Math.max(0, select.selectedIndex);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), options.length - 1);
  if (nextIndex === currentIndex) return;
  select.selectedIndex = nextIndex;
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

function bindArrowStepSelect(select) {
  select.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      stepSelectOption(select, 1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      stepSelectOption(select, -1);
    }
  });
}

function computeBitmapTextLayout(text, glyphSpacing, weightMode, padding, maxScale = Number.POSITIVE_INFINITY) {
  const unsupported = Array.from(new Set(
    Array.from(text).filter((character) => !resolveGlyph(character)),
  ));
  if (unsupported.length) {
    setGeneratorFailure(`Unsupported characters: ${unsupported.join(" ")}`);
    return null;
  }

  const glyphEntries = Array.from(text).map((character) => {
    const glyph = resolveGlyph(character);
    return {
      character,
      glyph,
      bounds: glyphColumnBounds(glyph),
    };
  });

  const scaledGlyphWidth = glyphEntries.reduce((total, entry) => (
    total + (entry.bounds.width * 1)
  ), 0);
  const totalGapWidth = Math.max(0, glyphEntries.length - 1) * glyphSpacing;
  const scale = Math.floor(Math.min(
    (gridCols - (padding.x * 2) - totalGapWidth) / Math.max(scaledGlyphWidth, 1),
    (gridRows - (padding.y * 2)) / GLYPH_SIZE,
    maxScale,
  ));
  if (scale < 1) {
    return null;
  }

  const glyphHeight = GLYPH_SIZE * scale;
  const glyphWidth = glyphEntries.reduce((total, entry, index) => (
    total + (entry.bounds.width * scale) + (index > 0 ? glyphSpacing : 0)
  ), 0);
  const offsetY = Math.floor((gridRows - glyphHeight) / 2);
  const offsetX = Math.floor((gridCols - glyphWidth) / 2);
  const nextLevels = Array(totalCells()).fill(0);
  let cursorX = offsetX;

  glyphEntries.forEach((entry, characterIndex) => {
    const { glyph, bounds } = entry;
    glyph.forEach((rowPattern, rowIndex) => {
      Array.from(rowPattern).forEach((pixel, colIndex) => {
        if (pixel !== "1") return;
        if (colIndex < bounds.minCol || colIndex > bounds.maxCol) return;
        for (let scaleY = 0; scaleY < scale; scaleY += 1) {
          for (let scaleX = 0; scaleX < scale; scaleX += 1) {
            const gridCol = cursorX + ((colIndex - bounds.minCol) * scale) + scaleX;
            const gridRow = offsetY + (rowIndex * scale) + scaleY;
            const linearIndex = cellIndex(gridCol, gridRow);
            nextLevels[linearIndex] = TEXT_LEVEL;

            if (weightMode === "bold" && gridCol + 1 < gridCols) {
              nextLevels[cellIndex(gridCol + 1, gridRow)] = TEXT_LEVEL;
            }
          }
        }
      });
    });
    cursorX += (bounds.width * scale) + ((characterIndex < glyphEntries.length - 1) ? glyphSpacing : 0);
  });

  return {
    levels: nextLevels,
    metric: scale,
  };
}

function buildBitmapTextLevels(text, glyphSpacing, weightMode, contentSignature) {
  const layout = chooseAdaptiveLayout(
    (padding, maxScale) => computeBitmapTextLayout(text, glyphSpacing, weightMode, padding, maxScale),
    contentSignature,
  );
  if (!layout) {
    setGeneratorFailure("Text does not fit in the current grid. Increase width or height, or shorten the text.");
  }
  return layout;
}

function measureTextCoverage(metrics) {
  return {
    width: Math.ceil(metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight),
    height: Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent),
  };
}

function measureTextAdvance(metrics) {
  if (Number.isFinite(metrics.width)) {
    return metrics.width;
  }
  return metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
}

function snapToRaster(value) {
  return Math.round(value / TEXT_RASTER_SCALE) * TEXT_RASTER_SCALE;
}

function canUseDeterministicGlyphPlacement(option) {
  return !/\bcursive\b/i.test(option.family);
}

function renderDeterministicGlyphRun(ctx, text, originX, baselineY) {
  const characters = Array.from(text);
  let prefixText = "";

  characters.forEach((character) => {
    const advanceBefore = prefixText
      ? measureTextAdvance(ctx.measureText(prefixText))
      : 0;
    const drawX = snapToRaster(originX + advanceBefore);
    ctx.fillText(character, drawX, baselineY);
    prefixText += character;
  });
}

function computeFontTextLayout(text, fontMode, weightMode, padding, maxFontSize = Number.POSITIVE_INFINITY) {
  const option = FONT_OPTIONS[fontMode] || FONT_OPTIONS.arial;
  const fontWeight = weightMode === "bold" ? 700 : 400;
  const alphaThreshold = weightMode === "bold" ? 80 : 64;
  const availableWidth = gridCols - (padding.x * 2);
  const availableHeight = gridRows - (padding.y * 2);
  if (availableWidth <= 0 || availableHeight <= 0) {
    setGeneratorFailure("Text does not fit in the current grid. Increase width or height, or shorten the text.");
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = gridCols * TEXT_RASTER_SCALE;
  canvas.height = gridRows * TEXT_RASTER_SCALE;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    setGeneratorFailure("Could not initialize font renderer.");
    return null;
  }

  const availableWidthPx = availableWidth * TEXT_RASTER_SCALE;
  const availableHeightPx = availableHeight * TEXT_RASTER_SCALE;
  const padLeftPx = padding.x * TEXT_RASTER_SCALE;
  const padTopPx = padding.y * TEXT_RASTER_SCALE;

  let low = 1;
  let high = availableHeightPx * 2;
  let bestSize = 0;
  let bestMetrics = null;

  while (low <= high) {
    const fontSize = Math.floor((low + high) / 2);
    if (fontSize > maxFontSize) {
      high = fontSize - 1;
      continue;
    }
    ctx.font = `${fontWeight} ${fontSize}px ${option.family}`;
    const metrics = ctx.measureText(text);
    const { width, height } = measureTextCoverage(metrics);
    if (width <= availableWidthPx && height <= availableHeightPx) {
      bestSize = fontSize;
      bestMetrics = metrics;
      low = fontSize + 1;
    } else {
      high = fontSize - 1;
    }
  }

  if (!bestSize || !bestMetrics) {
    return null;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "alphabetic";
  ctx.font = `${fontWeight} ${bestSize}px ${option.family}`;

  const { height: textHeight } = measureTextCoverage(bestMetrics);
  const textAdvance = measureTextAdvance(bestMetrics);
  const centerX = padLeftPx + Math.floor(availableWidthPx / 2);
  const baselineY = padTopPx + Math.floor((availableHeightPx - textHeight) / 2) + Math.ceil(bestMetrics.actualBoundingBoxAscent);
  if (canUseDeterministicGlyphPlacement(option)) {
    ctx.textAlign = "left";
    renderDeterministicGlyphRun(ctx, text, centerX - (textAdvance / 2), baselineY);
  } else {
    ctx.textAlign = "center";
    ctx.fillText(text, centerX, baselineY);
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const nextLevels = Array(totalCells()).fill(0);

  for (let col = 0; col < gridCols; col += 1) {
    for (let row = 0; row < gridRows; row += 1) {
      let alphaSum = 0;
      let samples = 0;
      for (let px = 0; px < TEXT_RASTER_SCALE; px += 1) {
        for (let py = 0; py < TEXT_RASTER_SCALE; py += 1) {
          const sampleCol = (col * TEXT_RASTER_SCALE) + px;
          const sampleRow = (row * TEXT_RASTER_SCALE) + py;
          const dataIndex = ((sampleRow * canvas.width) + sampleCol) * 4;
          alphaSum += imageData.data[dataIndex + 3];
          samples += 1;
        }
      }
      if ((alphaSum / Math.max(samples, 1)) >= alphaThreshold) {
        nextLevels[cellIndex(col, row)] = TEXT_LEVEL;
      }
    }
  }

  return {
    levels: nextLevels,
    metric: bestSize,
  };
}

function buildFontTextLevels(text, fontMode, weightMode, contentSignature) {
  const layout = chooseAdaptiveLayout(
    (padding, maxFontSize) => computeFontTextLayout(text, fontMode, weightMode, padding, maxFontSize),
    contentSignature,
  );
  if (!layout) {
    setGeneratorFailure("Text does not fit in the current grid. Increase width or height, or shorten the text.");
  }
  return layout;
}

function apply3dShade(sourceLevels) {
  const shadedLevels = sourceLevels.slice();
  const mainPixels = new Set();

  sourceLevels.forEach((level, index) => {
    if (normalizeLevel(level) === TEXT_LEVEL) {
      mainPixels.add(index);
    }
  });

  mainPixels.forEach((linearIndex) => {
    const gridCol = Math.floor(linearIndex / gridRows);
    const gridRow = linearIndex % gridRows;
    const shadeCol = gridCol - 1;
    if (shadeCol < 0) return;
    const shadeIndex = cellIndex(shadeCol, gridRow);
    if (mainPixels.has(shadeIndex)) return;
    shadedLevels[shadeIndex] = Math.max(shadedLevels[shadeIndex], SHADE_LEVEL);
  });

  return shadedLevels;
}

function persistLevels() {
  return;
}

function setExportMenuOpen(nextOpen) {
  exportMenuOpen = nextOpen;
  exportMenu.hidden = !nextOpen;
  exportMenuButton.setAttribute("aria-expanded", String(nextOpen));
}

function closeExportMenu() {
  setExportMenuOpen(false);
}

function openExportMenu() {
  setExportMenuOpen(true);
}

function toggleExportMenu() {
  if (exportMenuOpen) {
    closeExportMenu();
  } else {
    openExportMenu();
  }
}

function handleExportMenuKeydown(event) {
  if (event.key === "Escape" && exportMenuOpen) {
    closeExportMenu();
    exportMenuButton.focus();
  }
}

function handleExportMenuPointerdown(event) {
  if (!exportMenuOpen) return;
  if (exportSplit?.contains(event.target)) return;
  closeExportMenu();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function exportSvg() {
  const svg = buildSvg();
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  downloadBlob(blob, "heatmap-logo.svg");
  clearStatusMessage();
}

async function exportPng() {
  try {
    const { width, height } = buildExportDimensions();
    const svg = buildSvg();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    try {
      const image = await loadImage(svgUrl);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Could not initialize PNG exporter.");
      }
      ctx.drawImage(image, 0, 0, width, height);
      const pngBlob = await canvasToBlob(canvas, "image/png");
      downloadBlob(pngBlob, "heatmap-logo.png");
      clearStatusMessage();
    } finally {
      URL.revokeObjectURL(svgUrl);
    }
  } catch (error) {
    flashStatus(error instanceof Error ? error.message : "PNG export failed.");
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("PNG export failed."));
    image.src = src;
  });
}

function canvasToBlob(canvas, type) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("PNG export failed."));
        return;
      }
      resolve(blob);
    }, type);
  });
}

function loadState() {
  return {
    cols: DEFAULT_COLS,
    rows: DEFAULT_ROWS,
    levels: Array(totalCells(DEFAULT_COLS, DEFAULT_ROWS)).fill(0),
    backgroundLevels: Array(totalCells(DEFAULT_COLS, DEFAULT_ROWS)).fill(0),
    generatorMask: [],
    noiseSeed: 0,
    noiseAmount: BASE_NOISE_AMOUNT,
    accentColor: RUN_BLUE,
    lastRenderedFromGenerator: false,
  };
}

function buildExportDimensions() {
  const width = GRID_PAD.left + GRID_PAD.right + (gridCols * CELL_SIZE) + ((gridCols - 1) * CELL_GAP);
  const height = GRID_PAD.top + GRID_PAD.bottom + (gridRows * CELL_SIZE) + ((gridRows - 1) * CELL_GAP);
  return { width, height };
}

function getPreviewScale() {
  const scale = Number.parseFloat(getComputedStyle(heatmapFrame).getPropertyValue("--heatmap-preview-scale"));
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function syncPreviewScale() {
  if (!editorPanel || !heatmapFrame) return;
  const compactLayout = window.matchMedia("(max-width: 720px)").matches;
  if (!compactLayout) {
    heatmapFrame.style.setProperty("--heatmap-preview-scale", "1");
    return;
  }

  const { width: gridWidth } = buildExportDimensions();
  const panelStyles = getComputedStyle(editorPanel);
  const horizontalPadding = Number.parseFloat(panelStyles.paddingLeft) + Number.parseFloat(panelStyles.paddingRight);
  const availableWidth = Math.max(editorPanel.clientWidth - horizontalPadding - 2, 0);
  const frameWidth = gridWidth + 18;
  const scale = frameWidth > 0 ? Math.min(1, availableWidth / frameWidth) : 1;
  heatmapFrame.style.setProperty("--heatmap-preview-scale", String(Math.max(scale, 0.01)));
}

function buildSvg() {
  const { width, height } = buildExportDimensions();
  const rects = [];

  for (let index = 0; index < totalCells(); index += 1) {
    const row = index % gridRows;
    const col = Math.floor(index / gridRows);
    const x = GRID_PAD.left + (col * (CELL_SIZE + CELL_GAP));
    const y = GRID_PAD.top + (row * (CELL_SIZE + CELL_GAP));
    const fill = escapeXml(levelColors[normalizeLevel(levels[index])]);
    rects.push(
      `<rect x="${x}" y="${y}" width="${CELL_SIZE}" height="${CELL_SIZE}" rx="${CELL_RADIUS}" ry="${CELL_RADIUS}" fill="${fill}"/>`,
    );
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="heatmap logo heatmap">`,
    `<rect x="0" y="0" width="${width}" height="${height}" rx="${GRID_RADIUS}" ry="${GRID_RADIUS}" fill="${GRID_BG}"/>`,
    ...rects,
    `</svg>`,
  ].join("");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function syncUi() {
  undoButton.disabled = undoStack.length === 0;
  resetButton.disabled = false;
  randomNoiseButton.setAttribute("aria-label", "Add random commits");
  noiseIncreaseButton.disabled = !canAdjustNoise(1);
  noiseDecreaseButton.disabled = !canAdjustNoise(-1);
}

function flashStatus(message) {
  statusMessage.textContent = message;
  if (statusTimeoutId) {
    window.clearTimeout(statusTimeoutId);
  }
  statusTimeoutId = window.setTimeout(() => {
    statusMessage.textContent = "";
    statusTimeoutId = 0;
  }, 1600);
}

function clearStatusMessage() {
  if (statusTimeoutId) {
    window.clearTimeout(statusTimeoutId);
    statusTimeoutId = 0;
  }
  statusMessage.textContent = "";
}

function setGridValidationError(message) {
  gridValidationMessage.textContent = message;
}

function clearGridValidationError() {
  gridValidationMessage.textContent = "";
}

function setGeneratorFailure(message) {
  lastGeneratorFailure = message;
}

function clearGeneratorFailure() {
  lastGeneratorFailure = "";
}

function applyInitialTextFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const initialText = params.get("text");
  const initialFont = params.get("font");
  const initialWeight = params.get("weight");
  const initialDepth = params.get("depth");
  const initialColor = params.get("color");
  if (initialFont && Object.prototype.hasOwnProperty.call(FONT_OPTIONS, initialFont)) {
    fontModeSelect.value = initialFont;
  }
  if (initialWeight === "regular" || initialWeight === "bold") {
    weightModeSelect.value = initialWeight;
  }
  if (initialDepth === "1" || initialDepth === "true" || initialDepth === "yes") {
    threeDModeInput.checked = true;
  }
  if (initialColor) {
    applyAccentColor(initialColor, { skipStatus: true });
  }
  const initialCols = params.get("cols");
  const initialRows = params.get("rows");
  if (initialCols || initialRows) {
    gridCols = clampInt(initialCols, MIN_COLS, MAX_COLS, gridCols);
    gridRows = clampInt(initialRows, MIN_ROWS, MAX_ROWS, gridRows);
    levels = resizeLevelsFromBase(levels, loadedState.cols, loadedState.rows, gridCols, gridRows);
    renderGrid();
    renderAllCells();
    syncSizeInputs();
  }
  if (!initialText) {
    applyCurrentGeneratorState({ skipUndo: true });
    return;
  }
  textInput.value = initialText;
  applyCurrentGeneratorState({ skipUndo: true });
}

function selectAllTextInput() {
  textInput.focus();
  textInput.setSelectionRange(0, textInput.value.length);
}

textInput.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  selectAllTextInput();
});

textInput.addEventListener("focus", () => {
  window.setTimeout(() => {
    textInput.setSelectionRange(0, textInput.value.length);
  }, 0);
});

textInput.addEventListener("input", () => {
  syncUi();
  scheduleAutoApply(120);
});

gridWidthInput.addEventListener("change", commitSizeInputs);
gridHeightInput.addEventListener("change", commitSizeInputs);

gridWidthInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    commitSizeInputs();
  }
});

gridHeightInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    commitSizeInputs();
  }
});

fontModeSelect.addEventListener("change", () => {
  syncUi();
  scheduleAutoApply();
});

weightModeSelect.addEventListener("change", () => {
  syncUi();
  scheduleAutoApply();
});

accentColorInput.addEventListener("input", () => {
  applyAccentColor(accentColorInput.value, { skipStatus: true });
});

accentColorInput.addEventListener("change", () => {
  applyAccentColor(accentColorInput.value);
});

threeDModeInput.addEventListener("change", () => {
  syncUi();
  scheduleAutoApply();
});

bindArrowStepSelect(fontModeSelect);
bindArrowStepSelect(weightModeSelect);
