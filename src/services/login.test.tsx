import { login } from './login';

describe('login', () => {

    const mockAlert = jest.fn();

    beforeAll(() => {
        window.alert = mockAlert;
    });

    it('should be defined', () => {
    login();
    expect(window.alert).toBeCalled();
  });
});