import puppeteer from 'puppeteer';
(async () => {
  console.log('lanzamos navegador');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://nodejs.org');
  let titleOne = await page.evaluate(() => {
    const h2 = document.querySelector('h2')
    return h2.innerHTML || '';
  })
  if (titleOne === 'Download for Windows (x64)2') {
    console.log('Is the same');
  } else {
    console.log('Is diferent');
  }
  browser.close()
  console.log(titleOne);

  // setTimeout(() => {
  //   browser.close();
  // }, 3000);
  console.log('Close browser');
})()