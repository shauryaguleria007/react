const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <PersonId key={person.id} {...person} />;
      })}
    </>
  );
};

const PersonId = ({ id, name, age, image }) => {
  return (
    <article  className="person">
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
