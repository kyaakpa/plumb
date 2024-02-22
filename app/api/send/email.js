import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Email = ({
  firstName,
  lastName,
  email,
  description,
  phone,
  updatedDate,
}) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview>{`Email from ${firstName} ${lastName}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`/logo-black.webp`} />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Date : {formattedDate}</Text>
            <Text style={paragraph}>
              Name : {firstName} {lastName}
            </Text>
            <Text style={paragraph}>Phone : {phone}</Text>
            <Text style={paragraph}>Email : {email}</Text>
            <Text style={paragraph}>Description : {description}</Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2024 All Rights Reserved | Mark J. Ahern, Inc. <br />4 Cortland
              Lane Lynnfield, MA 01940
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
