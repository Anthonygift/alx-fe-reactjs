function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}
 export default UserProfile;