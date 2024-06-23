import { Button, Text } from "@chakra-ui/react";

const MailTo = () => {
  return (
    <div className="MailTo">
      <Text>We’d love to hear what you think!</Text>
      <Button colorScheme="gray" variant="outline">
        <a href={`mailTo:"skashyap9934@gmail.com"`}>Give feedback</a>
      </Button>
    </div>
  );
};

export default MailTo;
