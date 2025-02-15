type Props = {
  children: React.ReactNode;
};

const SayHello = (props: Props) => {
  return (
    <div>
      <h1>Sayhello</h1>
      {props.children}
    </div>
  );
};

export default SayHello;
