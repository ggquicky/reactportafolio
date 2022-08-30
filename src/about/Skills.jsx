import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiChakraui, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { name: "React", icon: FaReact },
  { name: "VUE", icon: FaVuejs },
  { name: "NEXTjs", icon: TbBrandNextjs },
  { name: "LARAVEL", icon: FaLaravel },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Chakra UI", icon: SiChakraui },
];

export default function Skills() {
  return (
    <Flex justifyContent="center" gap="30px" flexWrap="wrap">
      {skills.map((skill, index) => (
        <Flex
          key={index}
          flexDirection="column"
          justifyContent="center"
          align="center"
          gap={{ base: "32px", sm: "8px" }}
          _hover={{ color: "white" }}
        >
          <Icon h="30px" w="30px" as={skill.icon} />
          <Text key={index}>{skill.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
