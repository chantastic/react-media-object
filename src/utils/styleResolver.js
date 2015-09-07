export default function style (base, props) {
  return Object.assign(
    {},
    base,
    props.style
  );
}
