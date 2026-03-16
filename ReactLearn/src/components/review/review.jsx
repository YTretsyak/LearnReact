export const Review = (props) => {
  return (
    <div>
      <h4>user:{props.user}</h4>
      <h4>review:{props.text}</h4>
      <h4>rating:{props.rating}</h4>
    </div>
  );
};
