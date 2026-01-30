export default function ChildComponent(props) {
  return( 
  <>
   <p>Привет, {props.name}!Текущий счет:{props.count}</p>
  </>
  );
}
