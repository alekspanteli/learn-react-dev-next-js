import Avatar2 from "../components/avatar-2";
import Profile2 from "../components/profile-2";

export default function PassingProps() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-2">PassingProps</h1>
      <div className="flex gap-4">
        <Avatar2 person={{ name: 'Katsuko Saruhashi', imageId: 'OKS67lh' }} size={50} />
        <Avatar2 person={{ name: 'Katsuko Saruhashi', imageId: 'OKS67lh' }} size={80} />
        <Avatar2 person={{ name: 'Katsuko Saruhashi', imageId: 'OKS67lh' }} size={100} />
      </div>
      <br />
      <h2>Passing all props</h2>
      <Profile2 person={{ name: 'Katsuko Saruhashi', imageId: 'OKS67lh' }} />
    </div>
  );
}
  