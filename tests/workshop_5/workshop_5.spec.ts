import {test, expect} from '@playwright/test'

test.skip('Open new window and navigate back', async({context, page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');
    await page.click('#openNewWindow');
    const pagePromise = context.waitForEvent('page')
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading', {name: 'Welcome to the New Page'})).toBeVisible();
});

test.skip('Add cookie', async({page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookie);
    await expect(sessionCookie).toBeDefined();
});

test.only('Delete Cookie', async ({page}) => {
    await page.goto('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');

    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', sessionCookie);

    await page.click('#deleteCookie');
    const deletedCookies = await page.context().cookies('file:///C://Users//WarMi//Desktop//Playwright-Tests//tests//workshop_5//index.html');
    const deletedSessionCookie = deletedCookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookie', deletedSessionCookie);
    await expect(deletedSessionCookie).toBeUndefined();
});