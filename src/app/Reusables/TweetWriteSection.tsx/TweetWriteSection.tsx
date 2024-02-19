import SingleAvatar from "../Avatar/SingleAvatar";
import TextAreaComp from "./components/TextAreaComp";

const TweetWriteSection = () => {
  return (
    <>
      <div className="flex py-2">
        <SingleAvatar />
        <TextAreaComp />
      </div>
    </>
  );
};

export default TweetWriteSection;
