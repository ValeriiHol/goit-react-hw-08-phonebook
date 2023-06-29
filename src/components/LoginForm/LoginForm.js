import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(logIn(user));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" />
      </label>
      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};
