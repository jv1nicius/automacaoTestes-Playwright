// pages/ProductListPage.ts
import { Page } from '@playwright/test';

export class ProductListPage {
    constructor(private readonly page: Page) { }

    async goto() {
        await this.page.goto('https://calculadora.diegoquirino.net/');
        await this.page
            .getByRole('link', { name: 'Calcular Desconto' })
            .nth(1)
            .click();
    }

    async selecionarPrimeiroProdutoParaCalculo() {
        await this.page.getByRole('link', { name: '$' }).first().click();
    }
}