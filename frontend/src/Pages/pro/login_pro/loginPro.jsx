import './loginPro.css';


import Header from '../../../Component/header/header';
import FormLogin from '../../../Component/form_login/formLogin';


function LoginPro() {
  return (
    <div>
      <Header />
      <FormLogin
        onClickPath="/login_user" 
        titleConnexion="Profesionnel"
      />
    </div>
  );
}

export default LoginPro;