import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "1234jndfn3e3n",
      name: "Sam",
      age: 24,
      email: "sam@gmail.com",
    },
    {
      id: "1234jndfn3e3k",
      name: "Lorelei",
      age: 23,
      email: "lore@gmail.com",
    },
    {
      id: "1234jndfn3e3h",
      name: "Zé",
      age: 18,
      email: "ze@gmail.com",
    },
  ];

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de usuários</h1>

          <input placeholder="Nome" type="text" name="nome" />
          <input placeholder="Idade" type="number" name="idade" />
          <input placeholder="E-mail" type="email" name="email" />

          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} alt="Ícone de lixeira" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
