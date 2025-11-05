import Button from "./button";


function ProfileCard() {
  return (
    <div>
      <h2>Profile Card</h2>
    </div>
  );
}

export default function FirstComponent() {
  return (
    <div>
      <h1>First Component</h1>
      <ProfileCard />
      <Button />
    </div>
  );
}