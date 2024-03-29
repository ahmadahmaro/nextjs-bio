import { Box, Stack, Text, Title, Image, Anchor } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Ahmaro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack w="100%" align="center" mt={{ base: 40, sm: 96 }} px={24}>
          <Image
            src="/ahmad-ahmaro.svg"
            alt="Ahmad Ahmaro logo"
            width={48}
            height={40}
          />
          <Title> Ahmad Ahmaro</Title>
          <Stack maw={500}>
            <Title order={2}>About</Title>
            <Text>
              Hey, I&apos;m Ahmad.{" "}
              <Text fw="bold" span>
                I&apos;m a software engineer
              </Text>{" "}
              at Sakani where we make the MENA real estate market a better
              place.
            </Text>

            <Image
              src="/avatar-photo.jpeg"
              alt="My Avatar Photo"
              width={100}
              height={100}
              radius={50}
            />
            <Text>
              I&apos;m a full-stack developer skilled in React, NodeJS, Docker, AWS, and
              UI/UX design. Successfully built and deployed scalable projects,
              including GIS solutions. I&apos;m passionate about Frontend
              development and solving problems using tech.
            </Text>
            <Title order={2}>Contact</Title>
            <Text>
              Want to reach out? Check out my{" "}
              <Anchor
                href="/resume"
                target="_blank"
                color="dark"
                td="underline"
              >
                Resume
              </Anchor>
              ,{" "}
              <Anchor
                href="https://www.linkedin.com/in/ahmad-ahmaro/"
                target="_blank"
                color="dark"
                td="underline"
              >
                LinkedIn
              </Anchor>
              , or{" "}
              <Anchor
                href="https://github.com/ahmadahmaro"
                target="_blank"
                color="dark"
                td="underline"
              >
                Github
              </Anchor>
            </Text>
          </Stack>
        </Stack>
      </main>
    </>
  );
}
