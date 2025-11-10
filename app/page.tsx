export default function Home() {
  const email = "test@test.com";
  return (
    <>
      <p>Email: {email.replace("@", "[at]")}</p>
      <input type="text" placeholder="Enter your email" required={true} />
    </>
  );
}
