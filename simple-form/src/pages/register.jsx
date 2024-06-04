import FormRegist from "../components/fragments/FormRegist"
import AuthLayouts from "../components/layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayouts title="REGISTER" type="register">
            <FormRegist/>
        </AuthLayouts>
    )
}

export default RegisterPage