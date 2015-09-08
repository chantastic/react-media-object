const nullBase = {};
const nullProps = {
  style: {},
  noDefaultStyle: false
};

export default function style (base = nullBase, props = nullProps) {
  return Object.assign(
    {},
    !props.noDefaultStyle && base,
    props.style
  );
}
