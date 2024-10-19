const puppeteer = require("puppeteer");

const iterations = 100;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let totalTimeLoad = 0;
  let totalTimeUpdate = 0;
  let totalTimeSelect = 0;
  let totalTimeEdit = 0;
  let totalTimeCreate = 0;
  let totalTimeDelete = 0;

  const measureLoadRows = async () => {
    await page.goto("http://localhost:5173/loadRows");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );
    const end = performance.now();
    return end - start;
  };

  const measureUpdateRows = async () => {
    await page.goto("http://localhost:5173/updateRows");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );
    const end = performance.now();
    return end - start;
  };

  const measureSelectRow = async () => {
    await page.goto("http://localhost:5173/selectRow");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelector("div h4").innerText === "Linha Selecionada:",
    );
    const end = performance.now();
    return end - start;
  };

  const measureEditRow = async () => {
    await page.goto("http://localhost:5173/editRow");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelector("div h4").innerText === "Linha Editada:",
    );
    const end = performance.now();
    return end - start;
  };

  const measureCreateRows = async () => {
    await page.goto("http://localhost:5173/createRows");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 10000,
    );
    const end = performance.now();
    return end - start;
  };

  const measureDeleteRows = async () => {
    await page.goto("http://localhost:5173/deleteRows");
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 9000,
    );
    const end = performance.now();
    return end - start;
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  for (let i = 0; i < iterations; i++) {
    console.log(`\nExecutando iteração ${i + 1} de ${iterations}`);

    const loadTime = await measureLoadRows();
    totalTimeLoad += loadTime;
    console.log(`Teste LoadRows: ${loadTime.toFixed(2)} ms`);

    const updateTime = await measureUpdateRows();
    totalTimeUpdate += updateTime;
    console.log(`Teste UpdateRows: ${updateTime.toFixed(2)} ms`);

    const selectTime = await measureSelectRow();
    totalTimeSelect += selectTime;
    console.log(`Teste SelectRow: ${selectTime.toFixed(2)} ms`);

    const editTime = await measureEditRow();
    totalTimeEdit += editTime;
    console.log(`Teste EditRow: ${editTime.toFixed(2)} ms`);

    const createTime = await measureCreateRows();
    totalTimeCreate += createTime;
    console.log(`Teste CreateRows: ${createTime.toFixed(2)} ms`);

    const deleteTime = await measureDeleteRows();
    totalTimeDelete += deleteTime;
    console.log(`Teste DeleteRows: ${deleteTime.toFixed(2)} ms`);

    await sleep(1000);
  }

  const averageLoad = totalTimeLoad / iterations;
  const averageUpdate = totalTimeUpdate / iterations;
  const averageSelect = totalTimeSelect / iterations;
  const averageEdit = totalTimeEdit / iterations;
  const averageCreate = totalTimeCreate / iterations;
  const averageDelete = totalTimeDelete / iterations;

  console.log("\n--- Resultados Médios ---");
  console.log(`Média LoadRows: ${averageLoad.toFixed(2)} ms`);
  console.log(`Média UpdateRows: ${averageUpdate.toFixed(2)} ms`);
  console.log(`Média SelectRow: ${averageSelect.toFixed(2)} ms`);
  console.log(`Média EditRow: ${averageEdit.toFixed(2)} ms`);
  console.log(`Média CreateRows: ${averageCreate.toFixed(2)} ms`);
  console.log(`Média DeleteRows: ${averageDelete.toFixed(2)} ms`);

  await browser.close();
})();
