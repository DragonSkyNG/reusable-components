import Card from "./helpers/Card";
import Input from "./helpers/Input";
import classes from "./Page.module.css";

const Page = () => {
  return (
    <div className={classes.page}>
      <Card>
        <Input
          label="Name"
          input={{
            id: "Name",
            type: "text",
            defaultValue: "Enter your name",
          }}
        />
      </Card>
      <Card>
        <Input
          label="Favorite number"
          input={{
            id: "favNumber",
            type: "Number",
            min: "0",
            max: "1000",
            step: "1",
            defaultValue: "1",
          }}
        />
      </Card>
    </div>
  );
};

export default Page;
