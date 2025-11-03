import Profile from "../components/profile";

export default function YourFirstComponent() {
  return (
    <>
      <h1 className="mb-2">Amazing scientists</h1>
      <div className="flex gap-4">  
        <Profile />
        <Profile />
        <Profile />
      </div>
    </>
  );
}