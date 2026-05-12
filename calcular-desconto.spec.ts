// tests/calcular-desconto.spec.ts
import { test } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';
import { DiscountFormPage } from '../pages/DiscountFormPage';
import { DiscountResultPage } from '../pages/DiscountResultPage';

test('CT01: Quantidade inválida - Cliente A', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 0;
    const tipoDeCliente = 'A';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarMensagemDeErro(/maior ou igual a 01/i);
});

test('CT02: Quantidade inválida - Cliente B', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 0;
    const tipoDeCliente = 'B';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarMensagemDeErro(/maior ou igual a 01/i);
});

test('CT03: Quantidade inválida - Cliente C', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 0;
    const tipoDeCliente = 'C';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarMensagemDeErro(/maior ou igual a 01/i);
});

test('CT04: Calcular Desconto - Cliente A, Quantidade 1-99', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    // A - Arrange
    const quantidade = 99;
    const tipoDeCliente = 'A';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    // A - Act
    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    // A - Assert
    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,90');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT05: Calcular Desconto - Cliente B, Quantidade 1-99', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    // Arrange
    const quantidade = 99;
    const tipoDeCliente = 'B';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    // Act
    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    // Assert
    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,85');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT06: Calcular Desconto - Cliente C, Quantidade 1-99', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 99;
    const tipoDeCliente = 'C';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,80');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT07: Calcular Desconto - Cliente A, Quantidade 100-999', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 500;
    const tipoDeCliente = 'A';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,95');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT08: Calcular Desconto - Cliente B, Quantidade 100-999', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 500;
    const tipoDeCliente = 'B';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,90');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT09: Calcular Desconto - Cliente C, Quantidade 100-999', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 500;
    const tipoDeCliente = 'C';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,85');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT10: Calcular Desconto - Cliente A, Quantidade >=1000', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 1000;
    const tipoDeCliente = 'A';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('1,00');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT11: Calcular Desconto - Cliente B, Quantidade >=1000', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 1000;
    const tipoDeCliente = 'B';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,95');
    await discountResultPage.validarMensagemDeSucesso();
});

test('CT12: Calcular Desconto - Cliente C, Quantidade >=1000', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const discountFormPage = new DiscountFormPage(page);
    const discountResultPage = new DiscountResultPage(page);

    const quantidade = 1000;
    const tipoDeCliente = 'C';

    await productListPage.goto();
    await productListPage.selecionarPrimeiroProdutoParaCalculo();

    await discountFormPage.preencherFormulario(tipoDeCliente, quantidade);
    await discountFormPage.calcularDesconto();

    await discountResultPage.validarTipoDeCliente(tipoDeCliente);
    await discountResultPage.validarQuantidade(quantidade);
    await discountResultPage.validarFatorDeDesconto('0,90');
    await discountResultPage.validarMensagemDeSucesso();
});