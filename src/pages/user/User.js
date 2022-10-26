import { useContext, useState } from "react";
import Context from "../../components/Context";
import edit from "../../assets/icons/edit.svg";
import Button from "../../components/button/Button";
import FormData from "../../components/formData/FormData";

const User = () => {
  const user = useContext(Context);

  const fullName = user[0].firstName + " " + user[0].lastName;

  const myPhoto = user[0]?.profilPicture && user[0]?.profilPicture;
  const [photo, setPhoto] = useState(myPhoto);

  const changeValue = (e) => {
    setPhoto(e.target.files[0].name);
  };

  return (
    <div className='settings-user container' data-testid='settings-user'>
      <h2>
        Votre compte <br />
        {fullName}
      </h2>
      <section>
        <h2>Votre photo</h2>
        <div className='edit-photo container flex-center'>
          <img src={photo} alt='profil' width={100} height={100} />
          <FormData handleChange={changeValue} name='picture' typeInput='file' />
        </div>
        <h2>Inscript depuis :</h2>
        <p>{user[0].signinDate}</p>
        <Button onClick={() => null} content='Supprimer mon compte' />
      </section>
    </div>
  );
};

export default User;
