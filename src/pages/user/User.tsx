import { FunctionComponent, useContext } from "react";
import Context from "../../components/Context";
import edit from "../../assets/icons/edit.svg";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { disconnect } from "../../components/Topbar/variables";
import { LoginProps } from "../login/variables";

const User: FunctionComponent<LoginProps> = ({ setCtx }) => {
  const user = useContext(Context);
  const navigate = useNavigate();

  const fullName = user[0].firstName + " " + user[0].lastName;

  const myPhoto = user[0]?.profilPicture && user[0]?.profilPicture;

  const changeValue = (e: any) => {
    // A MODIFIER
    const newPicture = e.target.files[0];
    const reader: any = new FileReader();
    reader.addEventListener("load", () => {
      const img = document.querySelector(".edit-profil") as HTMLImageElement;
      img.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(newPicture);
  };

  const confirmation = () => window.confirm("Êtes-vous sur de vouloir supprimer votre compte ?");

  const deleteAccount = () => {
    const answer = confirmation();
    if (answer) {
      disconnect(navigate, setCtx, "Supression du compte en cours");
    }
  };

  return (
    <div className='settings-user container' data-testid='settings-user'>
      <h2>
        Votre compte
        <br />
        {fullName}
      </h2>
      <section>
        <h2>Votre photo</h2>
        <div className='edit-photo container flex-center'>
          <img className='edit-profil' src={myPhoto} alt='profil' width={100} height={100} />
          <div data-testid='inputfile-form' className='form-data container uppercase'>
            <label htmlFor='picture'>
              <img src={edit} alt='edit' /> :
            </label>
            <input onChange={(e) => changeValue(e)} name='picture' id={"picture"} type='file' />
          </div>
        </div>
        <h2>Inscript depuis :</h2>
        <p>{user[0].signinDate}</p>
        <Button onClick={deleteAccount} content='Supprimer mon compte' />
      </section>
    </div>
  );
};

export default User;
