import Profile from "./profile";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <div className="flex gap-4">
        <Profile />
        <Profile />  
        <Profile />
      </div>
    </div>
  );
}