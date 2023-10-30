type Props = {
  title: string;
  subTitle: string;
};

export function Info({ title, subTitle }: Props) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{title}</h1>
      </header>
      <section className="controls">
        <p className="info">0 {subTitle}</p>
        <button className="button button--select">Select all</button>
      </section>
    </>
  );
}
