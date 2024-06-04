import FormLogin from "../components/fragments/FormLogin"
import AuthLayouts from "../components/layouts/AuthLayouts"

const LoginPage = () => {
    return (
        <AuthLayouts title="LOGIN" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage