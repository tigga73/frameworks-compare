const puppeteer = require("puppeteer");
const readline = require("readline");

const iterations = 100;

// Função para solicitar a entrada do usuário
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.toLowerCase());
    }),
  );
};

(async () => {
  // Perguntar ao usuário qual framework está sendo testado
  const framework = await askQuestion(
    "Qual framework você está testando? (React, Vue, Angular): ",
  );

  // Definir a porta correta com base no framework
  let port;
  if (framework === "react") {
    port = 3000;
  } else if (framework === "vue") {
    port = 5173;
  } else if (framework === "angular") {
    port = 4200;
  } else {
    console.error("Framework inválido! Escolha entre React, Vue, ou Angular.");
    process.exit(1); // Encerrar o processo se a escolha for inválida
  }

  const baseURL = `http://localhost:${port}`;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Função genérica para calcular média, mínima e máxima
  const calculateMetrics = (times) => {
    const totalTime = times.reduce((acc, time) => acc + time, 0);
    const average = totalTime / times.length;
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);
    return { average, minTime, maxTime };
  };

  // Função para medir tempo de LoadRows
  const measureLoadRows = async () => {
    await page.goto(`${baseURL}/loadRows`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );
    const end = performance.now();
    return end - start;
  };

  // Função para medir tempo de UpdateRows
  const measureUpdateRows = async () => {
    await page.goto(`${baseURL}/updateRows`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 1000,
    );
    const end = performance.now();
    return end - start;
  };

  // Função para medir tempo de SelectRow
  const measureSelectRow = async () => {
    await page.goto(`${baseURL}/selectRow`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForSelector("h4");
    await page.waitForFunction(() =>
      document.querySelector("h4").innerText.includes("Linha Selecionada:"),
    );
    const end = performance.now();
    return end - start;
  };

  // Função para medir tempo de EditRow
  const measureEditRow = async () => {
    await page.goto(`${baseURL}/editRow`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForSelector("h4");
    await page.waitForFunction(() =>
      document.querySelector("h4").innerText.includes("Linha Editada:"),
    );
    const end = performance.now();
    return end - start;
  };

  // Função para medir tempo de CreateRows
  const measureCreateRows = async () => {
    await page.goto(`${baseURL}/createRows`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 10000,
    );
    const end = performance.now();
    return end - start;
  };

  // Função para medir tempo de DeleteRows
  const measureDeleteRows = async () => {
    await page.goto(`${baseURL}/deleteRows`);
    await page.waitForSelector("button");
    const start = performance.now();
    await page.click("button");
    await page.waitForFunction(
      () => document.querySelectorAll("table tbody tr").length === 9000,
    );
    const end = performance.now();
    return end - start;
  };

  // Função para rodar testes e calcular média, mínima e máxima
  const runTest = async (measureFunction, testName) => {
    const times = [];
    for (let i = 0; i < iterations; i++) {
      console.log(
        `Executando iteração ${i + 1} de ${iterations} para ${testName}`,
      );
      const time = await measureFunction();
      times.push(time);
      console.log(`Tempo (iteração ${i + 1}): ${time.toFixed(2)} ms`);
    }
    const metrics = calculateMetrics(times);
    return { testName, ...metrics };
  };

  // Rodar todos os testes e armazenar resultados
  const results = [];
  results.push(await runTest(measureLoadRows, "LoadRows"));
  results.push(await runTest(measureUpdateRows, "UpdateRows"));
  results.push(await runTest(measureSelectRow, "SelectRow"));
  results.push(await runTest(measureEditRow, "EditRow"));
  results.push(await runTest(measureCreateRows, "CreateRows"));
  results.push(await runTest(measureDeleteRows, "DeleteRows"));

  await browser.close(); // Fecha o navegador

  // Apresentar todos os resultados no final
  console.log("\n--- Resultados Finais ---");
  results.forEach((result) => {
    console.log(`\n--- ${result.testName} ---`);
    console.log(`Média: ${result.average.toFixed(2)} ms`);
    console.log(`Tempo mínimo: ${result.minTime.toFixed(2)} ms`);
    console.log(`Tempo máximo: ${result.maxTime.toFixed(2)} ms`);
  });
})();
