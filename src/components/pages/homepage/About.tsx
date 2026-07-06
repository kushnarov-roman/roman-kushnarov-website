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
        I&apos;m a <span>product-minded technical professional</span> passionate
        about building impactful, user-centered digital products.
        With <span>over {yearsOfExperience} years of experience</span> across healthcare,
        fintech, VoIP, retail, analytics and management platforms, I thrive on
        turning complex ideas into clear solutions that deliver real value.
      </p>

      <p>
        Currently, I work at <span>Acrobits</span> as a Senior Front-End Engineer, 
        contributing to tools behind customizable VoIP and white-label softphone products for
        telecom providers. My role combines{" "}
        <span>technical depth with product and delivery thinking</span>, helping
        transform complex platform needs into reliable solutions that{" "}
        <span>
          improve workflows, support business goals, and create better
          experiences
        </span>{" "}
        for teams and users.
      </p>

      <p>
        I&apos;m known for <span>taking initiative, driving projects forward</span>,
        and making decisions that align technical execution with{" "}
        <span>business goals and user needs</span>. I enjoy working at the
        intersection of <span>product, business, and technology</span> — where
        unclear ideas become structured solutions and products become more
        useful.
      </p>

      <p>
        I aspire to <span>build revolutionary products</span> that make a
        lasting, positive impact on people&apos;s lives. Whether shaping product
        direction, improving workflows, or helping teams deliver better
        solutions, I&apos;m dedicated to{" "}
        <span>innovation, collaboration, and meaningful results</span>.
      </p>

      <p>
        Beyond work, I&apos;m an avid traveler and reader with a keen interest
        in psychology, sociology, and behavioral science. I stay active through
        sports and fitness, and these interests shape how I think about{" "}
        <span>people, decisions, technology, and better ways of living</span>.
      </p>
    </div>
  );
};

export default Hero;