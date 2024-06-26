import {
  Anchor,
  Box,
  Divider,
  Flex,
  List,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";

export default function Resume() {
  return (
    <Stack w="100vw" h="100vh" align="center">
      <Stack maw={800} display="flex" justify="center" spacing="sm" py={36}>
        <Flex justify="space-between">
          <Stack spacing={4}>
            <Title order={1}>Ahmad Ahmaro</Title>
            <Text>Fullstack Developer</Text>
          </Stack>
          <Stack spacing={4} align="flex-end">
            <Text>Jerusalem</Text>
            <Flex>
              <Anchor href="https://github.com/ahmadahmaro">GitHub</Anchor>
              <Divider
                size="sm"
                orientation="vertical"
                mx="sm"
                h={16}
                sx={{ alignSelf: "center" }}
              />
              <Anchor href="https://www.linkedin.com/in/ahmad-ahmaro/">
                LinkedIn
              </Anchor>
            </Flex>
            <Anchor href="mailto:ahmaro.ahmad@gmail.com">
              ahmaro.ahmad@gmail.com
            </Anchor>
          </Stack>
        </Flex>
        <Text className="web-only" size="sm">
          Creative fullstack developer, experienced in building captivating
          UI/UX, from concept prototypes to production ready components,
          implementing scalable projects from mockups to production.
        </Text>
        <Title order={2}>Skills</Title>
        <Divider size="sm" />
        <Table sx={{ "& tbody tr td": { borderTop: 0 } }}>
          <tbody>
            <tr>
              <td>
                <Text color="blue">Frontend</Text>
              </td>
              <td>
                ReactJS , Redux, ES6, Typescript, React Native, StoryBook,
                NextJS, Tailwind CSS.
              </td>
            </tr>
            <tr>
              <td>
                <Text color="blue">Backend</Text>
              </td>
              <td>
                NodeJS, ExpressJS, NestJS, AWS RDS, PostgreSQL, DynamoDB, S3,
                MeiliSearch.
              </td>
            </tr>
            <tr>
              <td>
                <Text color="blue">DevOps</Text>
              </td>
              <td>Docker, Linux, Bash, GitHub Actions, AWS.</td>
            </tr>
            <tr>
              <td>
                <Text color="blue">Design</Text>
              </td>
              <td>Figma, Adobe XD, Framer.</td>
            </tr>
            <tr>
              <td>
                <Text color="blue">Testing</Text>
              </td>
              <td>Chai, Mocha, jsdom, PhantomJS, WebdriverI/O, SuperTest.</td>
            </tr>
            <tr>
              <td>
                <Text color="blue">Industry</Text>
              </td>
              <td>
                OOP, Functional, Git, UI/UX, SPA, Serverless, JAM Stack, MapBox
                APIs, Google APIs.
              </td>
            </tr>
          </tbody>
        </Table>
        <Title order={2}>Experience</Title>
        <Divider size="sm" />
        {/* Employer #1 */}
        <Stack spacing={0}>
          <Flex justify="space-between" mb={16}>
            <Text color="blue" fw="bold">
              Sakani
            </Text>
            <Text fw="bold">Jerusalem</Text>
          </Flex>
          <Flex justify="space-between " mb={8}>
            <Text>Fullstack Developer</Text>
            <Text>January 2021 - Present</Text>
          </Flex>
          <List size="sm" mb={16} withPadding>
            <List.Item>
              Co-developed our web app using Next.js, Nest.js and Digital Ocean.
            </List.Item>
            <List.Item>
              Implemented AuthN, AuthZ, database, API, and deployment.
            </List.Item>
            <List.Item>
              Assembled a GIS team, that built over 500K+ shapes and street data
              for the MENA region.
            </List.Item>
            <List.Item>
              Implemented i18n for 2 languages in the Sakani codebase.
            </List.Item>
            <List.Item>
              Built UI components ensuring, performance, responsiveness, and
              a11y best practices.
            </List.Item>
          </List>
          <Flex justify="space-between" mb={8}>
            <Text>Product Development Lead</Text>
            <Text>March 2019 - December 2020</Text>
          </Flex>

          <List size="sm" mb={16} withPadding>
            <List.Item>
              Conducted market research to gather ideas and analyze competitors.
            </List.Item>
            <List.Item>
              Assisted in developing business logic and processes for the
              platform.
            </List.Item>
            <List.Item>
              Contributed and advised optimal UX and UI practices to enhance
              user experience.
            </List.Item>
            <List.Item>
              Participated in creating mockups and wireframes to guide the
              development team.
            </List.Item>
          </List>
        </Stack>
        {/* Employer #2 */}

        <Stack spacing={0}>
          <Flex justify="space-between" mb={16}>
            <Text color="blue" fw="bold">
              Rhino ERP
            </Text>
            <Text fw="bold">Ramallah</Text>
          </Flex>
          <Flex justify="space-between" mb={8}>
            <Text>Frontend Developer</Text>
            <Text>April 2017 - Jan 2019 </Text>
          </Flex>
          <List size="sm" mb={8} withPadding>
            <List.Item>
              Worked as part of a team to establish UI library of consistent and
              reusable ReactJS components.
            </List.Item>
            <List.Item>Managed application state using Redux.</List.Item>
            <List.Item>
              Contributed significantly to the design language for our internal
              UI library.
            </List.Item>
            <List.Item>
              Worked closely in creating our ERP core and UI with a backend
              engineers and a graphic designers.
            </List.Item>
          </List>
        </Stack>
        <Title order={2}>Education</Title>
        <Divider size="sm" />
        {/* Degree #1 */}
        <Flex justify="space-between">
          <Stack spacing={4}>
            <Text color="blue">The Open University of Israel</Text>
            <Text>Non-Degree Program, Computer and Information Security</Text>
          </Stack>
          <Stack spacing={4} align="flex-end">
            <Text>Malha, Jerusalem</Text>
            <Text>2013</Text>
          </Stack>
        </Flex>
        {/* Degree #2 */}
        <Flex justify="space-between">
          <Stack spacing={4}>
            <Text color="blue">Princess Sumaya University for Technology</Text>
            <Text>Bachelor of Science, Electronics Engineering</Text>
          </Stack>
          <Stack spacing={4} align="flex-end">
            <Text>Amman, Jordan</Text>
            <Text>2004 - 2009</Text>
          </Stack>
        </Flex>
        <Title order={2}>Languages</Title>
        <Divider size="sm" />
        <Stack spacing={4}>
          <Flex justify="space-between">
            <Text color="blue">Arabic</Text>
            <Text>Native/ Bilingual level</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="blue">English</Text>
            <Text>Native/ Bilingual level</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="blue">Hebrew</Text>
            <Text>Professional/ Working level</Text>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
