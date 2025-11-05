import Avatar, { AvatarProps } from "./avatar";

function Profile(props: AvatarProps) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
}

function Card({children}: {children: React.ReactNode}){
  return (
    <div className="border rounded-xl p-4 w-fit">
      {children}
    </div>
  );
}

export default function PassingPropsToAComponent() {
  return (
    <div>
      <Avatar person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }} />
      <br />
      <Avatar person={{ name: "Alan Turing", imageId: "1bX5QH6" }} size={80} />
      <br />
      <Avatar person={{ name: "Margaret Hamilton", imageId: "1bX5QH6" }} size={50} />
      <br />
      <Profile person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }} size={100} />
      <br />
      <Card>
        <Avatar person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }} size={100} />
      </Card>
    </div>
  );
}