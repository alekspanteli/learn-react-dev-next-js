import Gallery from "../components/gallery";
import Avatal from "../components/avatal";

export default function YourFirstComponent() {
  return (
    <>
      <h1 className="mb-2">Amazing scientists</h1>
      <Gallery />
      <br/>
      <h1 className="mb-2">Avatar</h1>
      <Avatal />
    </>
  );
}