const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const baseUrl = "http://localhost:3000";
  const iterations = 100;
  let totalLoadRowsTime = 0;
  let totalUpdateRowsTime = 0;
  let totalSelectRowTime = 0;
  let totalEditRowTime = 0;
  let totalCreateRowTime = 0;
  let totalDeleteRowsTime = 0;

  const measureLoadTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);

    const start = performance.now();
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );
    const end = performance.now();

    return end - start;
  };

  const measureUpdateTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);

    const start = performance.now();
    await page.click("button");

    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );

    const end = performance.now();
    return end - start;
  };

  const measureSelectTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);
    await page.waitForSelector("button");

    const start = performance.now();
    await page.click("button");

    await page.waitForFunction(
      () => document.querySelector("div h4").innerText === "Linha Selecionada:",
    );

    const end = performance.now();
    return end - start;
  };

  const measureEditTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);
    await page.waitForSelector("button");

    const start = performance.now();
    await page.click("button");

    await page.waitForFunction(
      () => document.querySelector("div h4").innerText === "Linha Editada:",
    );

    const end = performance.now();
    return end - start;
  };

  const measureCreateTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);
    await page.waitForSelector("button");

    const start = performance.now();
    await page.click("button");

    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 10000,
    );

    const end = performance.now();
    return end - start;
  };

  const measureDeleteTime = async (path) => {
    await page.goto(`${baseUrl}${path}`);
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
    const loadTime = await measureLoadTime("/loadRows");
    console.log(`Teste carregar linhas ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalLoadRowsTime += loadTime;

    await sleep(1000);
  }

  for (let i = 0; i < iterations; i++) {
    const loadTime = await measureUpdateTime("/updateRows");
    console.log(`Teste atualizar linhas ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalUpdateRowsTime += loadTime;

    await sleep(1000);
  }

  for (let i = 0; i < iterations; i++) {
    const loadTime = await measureSelectTime("/selectRow");
    console.log(`Teste selecionar linhas ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalSelectRowTime += loadTime;

    await sleep(1000);
  }

  for (let i = 0; i < iterations; i++) {
    const loadTime = await measureEditTime("/editRow");
    console.log(`Teste editar linha ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalEditRowTime += loadTime;

    await sleep(1000);
  }

  for (let i = 0; i < iterations; i++) {
    const loadTime = await measureCreateTime("/createRows");
    console.log(`Teste criar linhas ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalCreateRowTime += loadTime;

    await sleep(1000);
  }

  for (let i = 0; i < iterations; i++) {
    const loadTime = await measureDeleteTime("/deleteRows");
    console.log(`Teste deletar linhas ${i + 1}: ${loadTime.toFixed(2)} ms`);
    totalDeleteRowsTime += loadTime;

    await sleep(1000);
  }

  const averageLoadRowsTime = totalLoadRowsTime / iterations;
  console.log(
    `\nMédia de tempo de carregamento (100 testes): ${averageLoadRowsTime.toFixed(2)} ms`,
  );

  const averageUpdateRowsTime = totalUpdateRowsTime / iterations;
  console.log(
    `\nMédia de tempo de atualização (100 testes): ${averageUpdateRowsTime.toFixed(2)} ms`,
  );

  const averageSelectRowTime = totalSelectRowTime / iterations;
  console.log(
    `\nMédia de tempo de seleção (100 testes): ${averageSelectRowTime.toFixed(2)} ms`,
  );

  const averageEditrowTime = totalEditRowTime / iterations;
  console.log(
    `\nMédia de tempo de edição (100 testes): ${averageEditrowTime.toFixed(2)} ms`,
  );

  const averageCreateRowTime = totalCreateRowTime / iterations;
  console.log(
    `\nMédia de tempo de criação (100 testes): ${averageCreateRowTime.toFixed(2)} ms`,
  );

  const averageDeleteRowTime = totalDeleteRowsTime / iterations;
  console.log(
    `\nMédia de tempo de deleção (100 testes): ${averageDeleteRowTime.toFixed(2)} ms`,
  );
  await browser.close();
})();
