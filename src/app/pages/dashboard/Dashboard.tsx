import { Link } from "react-router-dom";

const Button = () => {
  return <button>Comprar</button>;
};

const Button1 = () => {
  return <button>Comprar1</button>;
};

const Titulo = () => {
  return <h1>Meu Título</h1>;
};
const Input = () => {
  return <input type="text" />;
};

export const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/entrar">Login</Link>
      <Titulo />
      <Input />
      <Button />
      <Button1 />
    </div>
  );
};
