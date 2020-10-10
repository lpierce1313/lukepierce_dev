import { Tag } from "@chakra-ui/core";

const Tags = (props) => {
  console.log(props);

  return props.data.map((datum) => <Tag key={datum}>{datum}</Tag>);
};

export default Tags;
