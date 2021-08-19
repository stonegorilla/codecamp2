import { Wrapper, Box, Navi } from "./Home.styles";

export default function HomeUI(props) {
  return (
    <>
      <Wrapper>
        {props.data.map((data, index) => (
          <Box
            key={data.name}
            onClick={props.gotowhere(data.push)}
            color={data.color}
          >
            <Navi>{data.name}</Navi>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}
