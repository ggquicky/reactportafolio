import profileP from "./profile.jpeg";

import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import Skills from "./Skills";

export default function About() {
    const title = "Hi, I´m Erick Narvaez";
    const titleArray = title.split("");
    const subTitle = "a web developer";
    const subTitleArray = subTitle.split("");

    return (<Flex
        id="sectionAbout"
        marginBlockStart="60px"
        direction={{base: "column"}}
        width="100%"
        justify="center"
        align="center"
        gap={{base: "16px", md: "60px"}}
    >
        <Box


            display="flex"
            flexDirection={{base: "column", md: "row"}}
            alignItems="center"


            gap={{base: "20px", md: "50px"}}
        >
            <Image
                borderRadius="20px"
                w="200px"
                h="auto"
                objectFit="cover"
                src={profileP}
                alt="profile"
                boxShadow="md"
                _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,white 0px 5px 10px,white 0px 15px 40px",
                }}
            />
            <Box>
                <Heading transition=" color 2s ease-out">
                    {titleArray.map(function (value, index) {
                        if (value === " ") {
                            return (<Text
                                display="inline-block"
                                color="textColor"
                                _hover={{color: "#2f74c0"}}
                                key={index}
                            >
                                &nbsp;
                            </Text>);
                        } else {
                            return (<Text
                                display="inline-block"
                                color="textColor"
                                _hover={{
                                    color: "#2f74c0", transform: "skewX(15deg)",
                                }}
                                key={index}
                            >
                                {" "}
                                {value}
                            </Text>);
                        }
                    })}
                </Heading>
                <Box fontSize="24px">
                    {subTitleArray.map(function (value, index) {
                        if (value === " ") {
                            return (<Text
                                display="inline-block"
                                color="textColor"
                                _hover={{color: "#f7e018"}}
                                key={index}
                            >
                                &nbsp;
                            </Text>);
                        } else {
                            return (<Text
                                display="inline-block"
                                color="textColor"
                                _hover={{
                                    color: "#f7e018", transform: "skewX(15deg)",
                                }}
                                key={index}
                            >
                                {value}
                            </Text>);
                        }
                    })}
                </Box>
            </Box>
        </Box>

        <Box width={{base: "auto", md: "600px"}}>
            <Text color="textColor" textAlign="justify" fontWeight="bold">
                I’m a passionate web developer from Managua, Nicaragua. I’m a fast
                learner, proactive and reliable programmer. I consider that being on
                top of the latest technologies and trends is key to being successful
                in this industry.
            </Text>
        </Box>
        <Flex
            flexDirection="column"
            gap="30px"
            width={{base: "auto", md: "600px"}}
        >
            <Heading>My skills</Heading>
            <Skills/>
        </Flex>
    </Flex>);
}
