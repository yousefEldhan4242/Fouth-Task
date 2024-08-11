import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // props are like the content or styles or anything you want to pass to the child components
  // to make the child components more reusable and more maintainable
  // and you can use it by passing them as attributes to the child component like : content="my content"
  // and then receive them from the child component as a propeties for "props" object like : props.content
  return (
    <div style={{ marginTop: "50px" }}>
      <ChildComponent text="hello i am a text prop from parent component but i will be shown in the child component" />
    </div>
  );
};

export default ParentComponent;
