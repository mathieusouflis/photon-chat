import { useSelector } from "react-redux";

function Profil() {
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  console.log(token);

  return (
    <>
    <p>{JSON.stringify(user)}</p>
    {token}
    </>
  );
}

export default Profil;