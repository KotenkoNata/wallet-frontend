import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <h1>Wallet</h1>

      <form autoComplete="off">
        <label>
          <input type="email" name="email" placeholder={'E-mail'} />
        </label>

        <label>
          <input type="password" name="Пароль" placeholder={'Пароль'} />
        </label>

        <button type="submit">Вход</button>
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}
