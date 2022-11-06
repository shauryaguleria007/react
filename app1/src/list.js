const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <PersonId person={person} />;
      })}
    </>
  );
};

const PersonId = ({ person }) => {
  const { id, name, age, image } = person;
  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
  // return <h1>hello</h1>;
};
export default List;
