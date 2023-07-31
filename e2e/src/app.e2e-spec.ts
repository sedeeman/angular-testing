import { ElementArrayFinder, ElementFinder, by } from 'protractor';
import { AppPage } from './app.po';

describe('User List App', () => {
    const page = new AppPage();

    beforeEach(async () => {
        await page.getDashboard();
    });

    it('Should have a header', async () => {
        const text = await page.getHeaderText();
        expect(text).toBe('Active Users');
    });

    it('Should have 16 users on page load', async () => {
        const users = page.getListItems();
        expect(await users.count()).toBe(16);
    });

    describe('Filter Input', () => {
        let input: ElementFinder;
        let items: ElementArrayFinder;

        beforeEach(async () => {
            input = page.getInput();
            items = page.getListItems();
            await input.sendKeys('davis');
        });

        it('It should filter list on users', async () => {
            expect(await items.count()).toBe(2);
        });

        it('Should highlight filter text', async () => {
            (await items).forEach((item) => {
                const span = item.element(by.css('span'));
                expect(span.getAttribute('class')).toBe('highlight-text');
            });
        });
    });
});
