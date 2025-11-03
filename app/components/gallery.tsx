import Profile from "./profile";

export default function Gallery() {
  return (
    <div className="flex gap-4">  
        <Profile />
        <Profile />
        <Profile />
      </div>
  );
}