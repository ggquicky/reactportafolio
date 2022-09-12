import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7e018" },
  { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#07b0ce" },
  { name: "Chakra UI", icon: SiChakraui, color: "#41c7bf" },
  { name: "React", icon: FaReact, color: "#53c1de" },
  { name: "VUE", icon: FaVuejs, color: "#4bb483" },
  { name: "NEXTjs", icon: TbBrandNextjs, color: "#9b4eee" },
  { name: "PHP", icon: SiPhp, color: "#6082bb" },
  { name: "LARAVEL", icon: FaLaravel, color: "#ff291a" },
];

export default function Skills() {
  return (
    <Flex justifyContent="center" gap="50px" flexWrap="wrap">
      {skills.map((skill, index) => (
        <Flex
          key={index}
          flexDirection="column"
          justifyContent="center"
          align="center"
          gap="8px"
          _hover={{ color: skill.color }}
        >
          <Icon h="30px" w="30px" as={skill.icon} />
          <Text key={index}>{skill.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
