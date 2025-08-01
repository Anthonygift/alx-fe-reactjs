function UserProfile(user) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p> {user.bio}</p>
    </div>
  );
}
 export default UserProfile;