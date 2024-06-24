export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="title">
          <span className="h1">Что говорят о нас</span>
        </div>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*// @ts-expect-error */}
        <review-lab data-widgetid="615460382f94086a47cb9ca9" />
        <script src="https://app.reviewlab.ru/widget/index-es2015.js" defer />
      </div>
    </section>
  );
};
