export const getSome = (name) => {
  return name + 'test'
};


const Profile = ({ name }) => {
  return (
    <div data-testid="test-id">
      {getSome(name)}
    </div>
  );
};

export default Profile;
