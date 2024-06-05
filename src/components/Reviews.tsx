export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="title">
          <h1>Что говорят о нас</h1>
        </div>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*// @ts-expect-error */}
        <review-lab data-widgetid="615460382f94086a47cb9ca9" />
        <script src="https://app.reviewlab.ru/widget/index-es2015.js" defer />
      </div>
    </section>
  );
};
