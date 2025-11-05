import Image from "next/image";

function Component1() {
  return <div>Component1</div>;
}
function Component2() {
  return <div>Component2</div>;
}
function Component3() {
  return <div>Component3</div>;
}

export default function WritingMarkupWithJSX() {
  return (
    <>
      <h1>Writing Markup with JSX</h1>
      <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" width={100} height={100} />
      <Component1 />
      <Component2 />
      <Component3 />
      <br />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <br />
    </>
  );
}