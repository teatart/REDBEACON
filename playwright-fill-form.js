const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();

  // Navigate to the live GitHub Pages site (real domain required for FormSubmit.co)
  await page.goto('https://teatart.github.io/REDBEACON/');

  // Scroll to the contact section
  await page.click('a[href="#contact"]');
  await page.waitForTimeout(800);

  // Fill in the form fields
  await page.fill('#fullName', 'Tracey Tay');
  await page.fill('#email', 'tracey.tay@redbeaconam.com');
  await page.fill('#phone', '+65 9123 4567');
  await page.selectOption('#investmentRange', '$250,000 – $1,000,000');
  await page.fill('#message', 'Hello, I am interested in learning more about your wealth management services. Please contact me at your earliest convenience.');

  // Submit the form
  await page.click('#submitBtn');

  // Wait for the success message
  await page.waitForTimeout(3000);

  console.log('Form submitted successfully!');
  await browser.close();
})();
