import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="prose">
      <h1>About</h1>
      <p>
        I&apos;m a software engineer interested in building simple, self
        correcting and reliable systems. I&apos;m interested in developer
        productivity, build systems, technical management and more. I work at{" "}
        <a href="https://vanta.com/">Vanta</a> as a full-stack engineer.
      </p>
      <p>
        I used to work at Dropbox, and was responsible for enabling product
        velocity and ensuring reliability of our monolith Python web
        application, and larger async systems like{" "}
        <a href="https://dropbox.tech/infrastructure/cape-technical-deep-dive">
          Cape
        </a>
        .
      </p>
      <p>
        I&apos;ve also{" "}
        <a href="https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code">
          written
        </a>{" "}
        for the Dropbox{" "}
        <a href="https://dropbox.tech/tech/2019/05/athena-our-automated-build-health-management-system">
          tech blog
        </a>{" "}
        and host a{" "}
        <a href="https://www.softwareatscale.dev/">
          technical newsletter and podcast
        </a>
        .
      </p>
      <p>
        <a href="https://twitter.com/utsav_sha">Twitter</a>.{" "}
        <a href="mailto:utsavkunalshah+website@gmail.com">Email</a>.
      </p>
    </article>
  );
}
