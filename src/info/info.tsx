type Props = {
  title: string;
};

export function Info({ title }: Props) {
  return (
    <header className="main-header">
      <h1 className="main-title">{title}</h1>
    </header>
  );
}
