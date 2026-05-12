// pages/DiscountFormPage.ts
import { Page } from '@playwright/test';

export class DiscountFormPage {
    constructor(private readonly page: Page) { }

    async selecionarTipoDeCliente(tipoDeCliente: 'A' | 'B' | 'C') {
        await this.page.getByRole('combobox').selectOption(tipoDeCliente);
    }

    async informarQuantidade(quantidade: number) {
        await this.page.getByRole('textbox', { name: 'Quantidade:' }).fill(String(quantidade));
    }

    async calcularDesconto() {
        await this.page.getByRole('button', { name: 'Calcular Desconto!' }).click();
    }

    async preencherFormulario(tipoDeCliente: 'A' | 'B' | 'C', quantidade: number) {
        await this.selecionarTipoDeCliente(tipoDeCliente);
        await this.informarQuantidade(quantidade);
    }
}