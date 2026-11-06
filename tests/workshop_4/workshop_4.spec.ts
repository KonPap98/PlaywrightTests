import {test, expect} from '@playwright/test'

test.skip('Handling Alerts', async ({page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_4//index.html');
    let allertMessage = '';
    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert');
        allertMessage = await dialog.message();
        await page.waitForTimeout(3000);
        await dialog.accept();
    })
await page.click('#show-alert');
expect(allertMessage).toBe('This is a simple alert.');
})

test.skip('Confirm Alert', async({page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_4//index.html');
    let allertMessage = '';
    page.on("dialog", async(dialog) => {
        allertMessage = dialog.message();
        await page.waitForTimeout(4000);
        await dialog.dismiss();
    })
    await page.click('#show-confirm');
    expect(allertMessage).toBe('You clicked Cancel.');
})

test.skip('Handling POP_UPs', async({page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_4//index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup'),
    ]);

    await popup.waitForLoadState();
    // if(popup.url() == 'exapmple url')
    // {

    // }
    await popup.close();
})