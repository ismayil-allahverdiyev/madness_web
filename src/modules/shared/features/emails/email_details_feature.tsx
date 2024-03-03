// import {
//   Body,
//   Container,
//   Head,
//   Html,
//   Preview,
//   Row,
//   Section,
//   Text,
// } from "@react-email/components";

// interface AirbnbReviewEmailProps {
//   date: Date;
//   reviewText: string;
// }

// export const AirbnbReviewEmail = ({
//   date,
//   reviewText,
// }: AirbnbReviewEmailProps) => {
//   const previewText = `Read your review`;

//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>

//       <Body style={main}>
//         <Container style={container}>
//           <Section>
//             <Text style={logo}>Madness fitness club</Text>
//           </Section>

//           <Section style={{ paddingBottom: "8px" }}>
//             <Row>
//               <Text style={heading}>Review on your gym</Text>
//               <Text style={review}>{reviewText}</Text>
//               <Text style={dateformat}>{new Date(date).toLocaleDateString('tr-Tr', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
//             </Row>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// AirbnbReviewEmail.PreviewProps = {
//   date: new Date(),
//   reviewText: `“Alan was a great guest! Easy communication, the apartment was left
//     in great condition, very polite, and respectful of all house rules.
//     He’s welcome back anytime and would easily recommend him to any
//     host!”`,
// } as AirbnbReviewEmailProps;

// export default AirbnbReviewEmail;

// const main = {
//   backgroundColor: "#ffffff",
//   fontFamily:
//     '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };

// const container = {
//   margin: "0 auto",
//   padding: "20px 0 48px",
//   width: "580px",
//   maxWidth: "100%",
// };

// const heading = {
//   fontSize: "32px",
//   lineHeight: "1.3",
//   fontWeight: "700",
//   color: "#484848",
// };

// const logo = {
//   fontSize: "42px",
//   lineHeight: "2",
//   fontWeight: "700",
//   margin: "auto",
//   width: "max-content",
// };

// const paragraph = {
//   fontSize: "18px",
//   lineHeight: "1.4",
//   color: "#484848",
// };

// const review = {
//   ...paragraph,
//   padding: "24px",
//   backgroundColor: "#f2f3f3",
//   borderRadius: "4px",
// };

// const dateformat = {
//   fontSize: "18px",
//   lineHeight: "1.3",
//   fontWeight: "700",
//   color: "#484848",
//   marginLeft: "auto",
//   width: "max-content",
// };
