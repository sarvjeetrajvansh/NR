import Logo from "../../assets/logo.jpeg";
const Profile = () => {
  return (
    <>
      <div className="p-card">
        <img src={Logo} alt="profile-pic" className="p-logo" />
        <div>
          <h2>Sarvjeet</h2>
        </div>
        <div>Developer at FoodVilla</div>
      </div>
    </>
  );
};

export default Profile;
