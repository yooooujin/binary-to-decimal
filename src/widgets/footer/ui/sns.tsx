interface SNSItemProps {
  link: string;
  label: string;
}

const SNSItem = (props: SNSItemProps) => {
  const { link, label } = props;

  return <a href={link}>{label}</a>;
};

const SNS = () => {
  return (
    <ul>
      <SNSItem link="https://github.com/yooooujin" label="GitHub" />
      <SNSItem link="https://velog.io/@yooooujin/posts" label="Blog" />
      <SNSItem link="in/yujin-kim-28a12129b" label="LinkedIn" />
    </ul>
  );
};

export default SNS;
