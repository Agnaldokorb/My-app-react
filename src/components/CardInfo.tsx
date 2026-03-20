import { Box, Text } from "@chakra-ui/react";

interface CardInfoProps {
  title?: string;
  name?: string;
  description?: string;
}

const CardInfo = ({ title, name, description }: CardInfoProps) => {
  return (
    <Box minHeight="120px" backgroundColor="#0077b6" width={320} padding={8} borderRadius="25px">
      <Text color={'#03045e'} fontSize="2xl" fontWeight="bold" marginBottom={4}>
        {title}
      </Text>
      <Text color={'#caf0f8'} fontSize="2xl" fontWeight="bold" marginBottom={4}>
        {name}
      </Text>

      <Text fontSize="xl" color="#90e0ef">
        {description}
      </Text>
    </Box>
  );
};


export default CardInfo;
