import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <Load>
      <h2>Loading...</h2>
    </Load>
  );
};

const Load = styled(motion.div)`
  text-align: center;
  margin: 90px auto;
`;

export default Loading;
