import {Flex, Heading, Icon, Link, Text} from "@chakra-ui/react";
import {GoMarkGithub} from "react-icons/go";
import {FaLinkedin, FaMailBulk} from "react-icons/fa";

export default function ContactMe() {
    const socials = [
        {
            name: "Github",
            action: "https://github.com/ggquicky",
            icon: GoMarkGithub,
        },
        {
            name: "Linkedin",
            action: "https://www.linkedin.com/in/erick-narvaez-b37a10107",
            icon: FaLinkedin,
        },
        {
            name: "Mail",
            action: "mailto:ggquicky@gmail.com",
            icon: FaMailBulk,
        },
    ];

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base: "24px", md: "48px"}}
            id="sectionContactme"
            width="100%"
        >
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Heading fontSize={{base: "30px", md: "36px"}} as="h3">
                    Let's work together!!
                </Heading>
                <Text fontSize={{base: "16px", md: "24px"}}>
                    How do you like coffee?
                </Text>
            </Flex>
            <Flex
                flexDirection={{base: "column", md: "row"}}
                justifyContent="center"
                alignItems="center"
                gap={{base: "24px", md: "48px"}}
            >
                {socials.map((social, index) => {
                    return (
                        <Link
                            key={index}
                            href={social.action}
                            fontSize={{base: "30px", md: "24px"}}
                            _hover={{textDecoration: "none", color: "white"}}
                        >
                            <Icon as={social.icon}/>
                            {social.name}
                        </Link>
                    );
                })}
            </Flex>
        </Flex>
    );
}
