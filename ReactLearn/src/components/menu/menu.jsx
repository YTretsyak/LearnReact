export const Menu = (props) => {
  return (
    <div>
      <h3>Menu:</h3>
      <h4>id:{props.id}</h4>
      <h4>name:{props.name}</h4>
      <h4>price:{props.price}</h4>
      <h4>
        ingredients:
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </h4>
    </div>
  );
};
