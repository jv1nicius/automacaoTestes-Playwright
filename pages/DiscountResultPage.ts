// pages/DiscountResultPage.ts
import { expect, Page } from '@playwright/test';

export class DiscountResultPage {
    constructor(private readonly page: Page) { }

    async validarMensagemDeSucesso() {
        await expect(this.page.locator('section')).toContainText(/calculado com sucesso/i);
    }

    async validarFatorDeDesconto(fator: string) {
        await expect(this.page.getByRole('textbox', { name: 'Fator de desconto:' })).toHaveValue(new RegExp(fator));
    }

    async validarTipoDeCliente(tipoDeCliente: 'A' | 'B' | 'C') {
        await expect(this.page.getByRole('textbox', { name: 'Tipo de Cliente:' })).toHaveValue(tipoDeCliente);
    }

    async validarQuantidade(quantidade: number) {
        await expect(this.page.getByRole('textbox', { name: 'Quantidade orçada:' })).toHaveValue(String(quantidade));
    }

    async validarMensagemDeErro(mensagem: RegExp) {
        await expect(this.page.locator('section')).toContainText(mensagem);
    }
}