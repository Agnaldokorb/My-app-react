import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = 'test@example.com';
  const mockPassword = 'password123';

  beforeEach(() => {
    mockAlert.mockClear(); // limpa chamadas anteriores
  });

  it('não deve exibir alerta de sucesso com email incorreto', async () => {
    await login('email@invalido.com', mockPassword);
    expect(mockAlert).not.toHaveBeenCalledWith(`Login successful! ${mockEmail}`);
  });

  it('deve exibir erro caso o email seja inválido', async () => {
    await login('email@invalido.com', mockPassword);
    expect(mockAlert).toHaveBeenCalledWith(`E-mail ou senha invalidos!`);
  });
});