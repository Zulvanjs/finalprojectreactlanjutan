
import { Box, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box className="footer">
      <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.200"
        borderTop="1px solid"
        borderColor="gray.300"
      >
        <p className="studentName" mr={2}>
           Zulvan Jundi
        </p>
        <p className="studentId">FE4237820</p>
      </Flex>
    </Box>
  );

};

export default Footer;