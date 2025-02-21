interface titleProps {
  text: string;
}

export const Title = ({ text }: titleProps) => {
  return (
    <div>
      <h1 className="title" style={{ overflow: 'hidden' }}>
        {text}
      </h1>
    </div>
  );
};
