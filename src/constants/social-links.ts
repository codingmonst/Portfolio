export const urls: { link: string; platform: string }[] = [
  {
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.REACT_APP_EMAIL_ADDRESS}`,
    platform: "EMAIL",
  },
  { link: "https://github.com/codingmonst", platform: "GITHUB" },
];
