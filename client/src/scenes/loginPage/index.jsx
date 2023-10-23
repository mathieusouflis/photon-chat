import { useDispatch } from "react-redux"
import { setLogin } from "../../state"
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const userResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    })
    const response = await userResponse.json()
    e.target[0].value = ""
    e.target[1].value = ""
    if (response){
      dispatch(
        setLogin({
          user: response.user,
          token: response.token
        })
      )
      navigate("/profil")
    }
  }
  return (
    <>
    <form onSubmit={submit}>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    </>
  );
}

export default Login;