import Tour from "./tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="title">
      <div>
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
