interface Props {
  html: string;
  style?: React.CSSProperties;
}

export const Icon = (props: Props) => {
  const { html, style = { display: 'flex' } } = props;

  return <div dangerouslySetInnerHTML={{ __html: html }} style={style} />;
};
