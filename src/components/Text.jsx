import styled from "styled-components";

const Text = () => {
  return (
    <Wrapper>
      <h3>Learning to use three.js in React.js!</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  color: white;
  padding: 30px;
  background: #1f1144;
`;
export { Text };
