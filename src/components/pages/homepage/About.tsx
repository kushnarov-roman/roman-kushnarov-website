const Hero = () => {
  const differenceInMilliseconds: number =
    new Date().getTime() - new Date(2019, 10, 1).getTime();
  const millisecondsInYear: number = 365.25 * 24 * 60 * 60 * 1000;
  const yearsOfExperience: number = Math.floor(
    differenceInMilliseconds / millisecondsInYear
  );

  return (
    <div
      id="about"
      className="scroll-mt-24 flex flex-col gap-6 text-md text-primary-grey [&>p]:leading-normal [&>p>span]:text-primary-bright [&>p>span]:font-bold"
    >
      <h3
        className="
          z-10
          block lg:hidden text-md sm:text-xl mb-6 sm:mb-10 text-primary-bright uppercase font-bold
          sticky top-0 -mx-6 sm:-mx-12 w-screen bg-primary-darkBlue px-6 sm:px-12 py-3 backdrop-blur bg-opacity-60
        "
      >
        About
      </h3>
      <p>
        I&apos;m a <span>software engineer</span> passionate about building
        impactful, user-centered digital products. With over {yearsOfExperience}{" "}
        years of experience across industries such as finance, healthcare, big
        data, and management, I thrive on transforming innovative ideas into
        seamless, high-performance solutions that deliver real value to people.
      </p>
      <p>
        Currently, I work at <span>Publicis Groupe (Kindred)</span> as a Senior
        Front-End Engineer, where I lead the project development team for Pfizer
        and its clients. My role combines{" "}
        <span>technical expertise with strategic thinking</span>, ensuring that
        every project not only meets expectations but often exceeds them.
        I&apos;m known for taking initiative, driving projects forward, and
        making critical decisions that align with both business goals and user
        needs.
      </p>
      <p>
        I aspire to <span>build revolutionary products</span> that make a
        lasting, positive impact on people&apos;s lives. Whether{" "}
        <span>leading a team</span> or{" "}
        <span>engineering robust technical solutions</span>, I&apos;m dedicated
        to innovation, collaboration, and delivering results that drive
        meaningful change.
      </p>
      <p>
        Beyond work, I&apos;m an avid traveler and reader with a keen interest
        in psychology, sociology, and behavioral science. I&apos;m also
        dedicated to staying active through regular sports and fitness. These
        pursuits inspire me to understand human behavior and explore ways to
        create technology that not only solves problems but also makes people
        happier and more fulfilled in their daily lives.
      </p>
    </div>
  );
};

export default Hero;
