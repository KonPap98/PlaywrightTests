import {test} from '@playwright/test';

test.skip('Bacic navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(300);
    await page.reload();
})

test.skip('Interacting with web elements on GitLab', async({page}) =>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.getByRole('link', {name: /Get free trial/i }).click();
    // await page.locator('[data-testid="new-user-first-name-field"]').fill("John1");
    // await page.locator('[data-testid="new-user-last-name-field"]').fill("Snow1");
    await page.getByTestId('new-user-first-name-field').fill("John1");
    await page.getByTestId('new-user-last-name-field').fill("John1");
})

test.skip('Using Various Locator Methods', async ({page}) => {
    await page.goto('https://gitlab.com/');
    // await page.click('#onetrust-accept-btn-handler'); //cookie button click
    // await page.getByRole('link', {name: 'Sign in'}).click();
    await page.click(':has-text("Sign in")');
    await page.waitForTimeout(3000);
})